'use client';

import { useEffect, useRef } from 'react';

const getSeedRandom = (r: number, c: number) => {
  const val = Math.sin(r * 12.9898 + c * 78.233) * 43758.5453123;
  return val - Math.floor(val);
};

export default function SpiralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let rotation = 0;
    const speed = 0.005; // smooth rotation speed

    const render = () => {
      // Clear canvas with base background color
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, 404, 303);

      const cx = 202;
      const cy = 151.5;

      const cols = 101;
      const rows = 76;

      ctx.beginPath();
      ctx.fillStyle = '#8f85ff'; // Theme purple

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * 4.0 + 2.0;
          const y = r * 4.0 + 2.0;
          const dx = x - cx;
          const dy = y - cy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > 250) continue;
          if (dist < 38) continue; // Empty center void matching screenshot

          // Subtract rotation to rotate clockwise
          const angle = Math.atan2(dy, dx) - rotation;
          const val = Math.sin(2 * angle - dist * 0.023);
          
          // Dynamic arm widening: bias increases with distance
          const bias = -0.15 + (dist / 250) * 0.55;
          let prob = (val + 0.3 + bias) / 0.8;
          if (prob < 0.05) continue;
          if (prob > 0.95) prob = 1.0;

          if (getSeedRandom(r, c) >= prob) continue;

          // Add circle to path
          ctx.moveTo(x + 1.4, y);
          ctx.arc(x, y, 1.4, 0, 2 * Math.PI);
        }
      }
      ctx.fill();

      rotation += speed;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div data-paper-shader style={{ width: '100%', height: '100%' }}>
      <canvas
        ref={canvasRef}
        width="404"
        height="303"
        style={{ width: '100%', height: '100%', display: 'block' }}
      />
    </div>
  );
}
