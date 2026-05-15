'use client';

import { useEffect, useRef } from 'react';

// Radial colour stops MEASURED from the source image.
// n = distance / (H * arcR). Peak lavender is at n ≈ 0.905.
const STOPS = [
  [0.000, 2, 1, 7],
  [0.680, 3, 2, 10],
  [0.710, 4, 3, 15],
  [0.740, 7, 5, 25],
  [0.770, 12, 9, 46],
  [0.800, 22, 17, 82],
  [0.825, 38, 30, 138],
  [0.845, 57, 46, 191],
  [0.865, 85, 74, 227],
  [0.885, 110, 101, 228],
  [0.905, 119, 111, 225],   // PEAK
  [0.925, 111, 105, 207],
  [0.945, 90, 86, 166],
  [0.965, 53, 52, 97],
  [0.980, 28, 28, 53],
  [0.990, 15, 14, 31],
  [0.998, 7, 6, 17],
  [1.000, 3, 2, 10]
];

const LUT_SIZE = 1024;
let lutCache: Record<string, Uint8ClampedArray> = Object.create(null);

function buildLUT(shift: number) {
  const key = shift.toFixed(4);
  if (lutCache[key]) return lutCache[key];
  const lut = new Uint8ClampedArray(LUT_SIZE * 3);
  const stops = STOPS.map((s, i) => {
    // first and last stops are anchors — don't shift them
    let p = (i === 0 || i === STOPS.length - 1) ? s[0] : s[0] + shift;
    if (p < 0) p = 0; if (p > 1) p = 1;
    return [p, s[1], s[2], s[3]];
  });
  
  for (let i = 0; i < LUT_SIZE; i++) {
    const n = i / (LUT_SIZE - 1);
    let r = 0, g = 0, b = 0;
    
    if (n <= stops[0][0]) { 
      r = stops[0][1]; g = stops[0][2]; b = stops[0][3]; 
    }
    else if (n >= stops[stops.length - 1][0]) {
      const last = stops[stops.length - 1];
      r = last[1]; g = last[2]; b = last[3];
    } else {
      for (let k = 0; k < stops.length - 1; k++) {
        const a = stops[k], c = stops[k + 1];
        if (n >= a[0] && n <= c[0]) {
          const t = c[0] === a[0] ? 0 : (n - a[0]) / (c[0] - a[0]);
          r = a[1] + (c[1] - a[1]) * t;
          g = a[2] + (c[2] - a[2]) * t;
          b = a[3] + (c[3] - a[3]) * t;
          break;
        }
      }
    }
    const off = i * 3;
    lut[off] = r;
    lut[off + 1] = g;
    lut[off + 2] = b;
  }
  
  // limit cache size to avoid unbounded growth
  if (Object.keys(lutCache).length > 32) lutCache = Object.create(null);
  lutCache[key] = lut;
  return lut;
}

// roundRect polyfill for older Safari etc.
function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  if (ctx.roundRect) { 
    ctx.beginPath(); 
    ctx.roundRect(x, y, w, h, r); 
    return; 
  }
  if (r > w * 0.5) r = w * 0.5;
  if (r > h * 0.5) r = h * 0.5;
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

export interface PragyanGradientProps {
  cell?: number;
  gap?: number;
  corner?: number;
  centerY?: number;
  centerX?: number;
  arcR?: number;
  speed?: number;
  bg?: string;
  pauseOffscreen?: boolean;
  respectReducedMotion?: boolean;
  className?: string;
}

export default function PragyanGradient({
  cell = 14,
  gap = 0.16,
  corner = 0.22,
  centerY = 1.273,
  centerX = 0.5,
  arcR = 1.030,
  speed = 1,
  bg = '#020107',
  pauseOffscreen = true,
  respectReducedMotion = true,
  className = ''
}: PragyanGradientProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let t0 = performance.now();
    let running = false;
    let raf: number;
    let io: IntersectionObserver | null = null;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = Math.max(1, Math.round(rect.width));
      h = Math.max(1, Math.round(rect.height));
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onResize = () => {
      const rect = canvas.getBoundingClientRect();
      if (Math.round(rect.width) === w && Math.round(rect.height) === h) return;
      resize();
    };

    const frame = () => {
      const t = (performance.now() - t0) * 0.00012 * speed;

      // Subtle drift of arc centre + tiny radius breath.
      const dx = Math.sin(t * 0.9) * 0.012 + Math.sin(t * 0.45) * 0.005;
      const dy = Math.sin(t * 0.7 + 1.1) * 0.008;
      const dR = 1 + Math.sin(t * 0.55) * 0.014;
      
      // Quantise shift to LUT cache buckets so we reuse the same LUT for many frames.
      const rawShift = Math.sin(t * 0.6) * 0.004;
      const bandShift = Math.round(rawShift * 1000) / 1000;

      const cx = w * (centerX + dx);
      const cy = h * (centerY + dy);
      const Rmax = h * arcR * dR;
      const invR = 1 / Rmax;
      const lut = buildLUT(bandShift);
      const lutMax = LUT_SIZE - 1;

      // 1. Background
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      // 2. Pixel tiles
      const actualGap = cell * gap;
      const tile = cell - actualGap;
      const actualCorner = tile * corner;
      
      // Centre the grid so cells straddle the canvas symmetrically.
      const ox = -cell * 0.5;
      const oy = -cell * 0.5;
      const cols = Math.floor((w - ox) / cell) + 2;
      const rows = Math.floor((h - oy) / cell) + 2;
      const halfTile = tile * 0.5;

      for (let r = 0; r < rows; r++) {
        const yC = oy + r * cell + cell * 0.5;
        const dyC = yC - cy;
        const dyC2 = dyC * dyC;
        for (let c = 0; c < cols; c++) {
          const xC = ox + c * cell + cell * 0.5;
          const dxC = xC - cx;
          const n = Math.sqrt(dxC * dxC + dyC2) * invR;
          if (n >= 1) continue;
          
          const idx = (n * lutMax) | 0;
          const off = idx * 3;
          const R = lut[off], G = lut[off + 1], B = lut[off + 2];
          
          if (R < 4 && G < 4 && B < 12) continue;  // skip near-black inner cells
          
          ctx.fillStyle = `rgb(${R},${G},${B})`;
          roundRect(ctx, xC - halfTile, yC - halfTile, tile, tile, actualCorner);
          ctx.fill();
        }
      }
    };

    const loop = () => {
      if (!running) return;
      frame();
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running) return;
      if (respectReducedMotion && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        frame();
        return;
      }
      running = true;
      raf = requestAnimationFrame(loop);
    };

    const stop = () => {
      running = false;
      if (raf) cancelAnimationFrame(raf);
    };

    window.addEventListener('resize', onResize);
    resize();

    if (pauseOffscreen && 'IntersectionObserver' in window) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) start();
          else stop();
        });
      }, { threshold: 0.01 });
      io.observe(canvas);
    } else {
      start();
    }

    return () => {
      stop();
      window.removeEventListener('resize', onResize);
      if (io) io.disconnect();
    };
  }, [cell, gap, corner, centerX, centerY, arcR, speed, bg, pauseOffscreen, respectReducedMotion]);

  return (
    <canvas 
      ref={canvasRef} 
      className={`block w-full h-full ${className}`}
      aria-hidden="true" 
    />
  );
}
