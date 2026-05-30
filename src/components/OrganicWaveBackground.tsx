'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform vec2 uResolution;
  uniform float uTime;
  uniform float uScrollPos;
  uniform float uScrollSpeed;
  uniform vec2 uMouse;
  varying vec2 vUv;

  // Permutation polynomial for Simplex 3D noise
  vec4 permute(vec4 x) {
    return mod(((x * 34.0) + 1.0) * x, 289.0);
  }

  vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
  }

  // 3D Simplex Noise by Ian McEwan
  float snoise(vec3 v) {
    const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    // First corner
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);

    // Other corners
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);

    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - D.yyy;

    // Permutations
    i = mod(i, 289.0);
    vec4 p = permute(permute(permute(
               i.z + vec4(0.0, i1.z, i2.z, 1.0))
             + i.y + vec4(0.0, i1.y, i2.y, 1.0))
             + i.x + vec4(0.0, i1.x, i2.x, 1.0));

    // Gradients
    float n_ = 1.0 / 7.0;
    vec3 ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);

    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);

    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);

    // Normalise gradients
    vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    // Mix final noise value
    vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
  }

  // Fractional Brownian Motion to combine octaves of noise
  float fbm(vec3 p) {
    float val = 0.0;
    float amp = 0.5;
    float freq = 1.0;
    for (int i = 0; i < 3; i++) {
      val += amp * snoise(p * freq);
      freq *= 2.0;
      amp *= 0.5;
    }
    return val;
  }

  void main() {
    // Normalise coordinates
    vec2 uv = gl_FragCoord.xy / uResolution.xy;
    
    // Scale coordinates (wider on horizontal to resemble flowing landscape)
    vec2 st = uv * vec2(3.2, 1.8);
    
    // Incorporate mouse offset (very subtle warping)
    st += uMouse * 0.04;

    // Time-based wave movement (very slow, continuous)
    float timeScale = uTime * 0.06;

    // Scroll offset integrated into the noise coordinates for parallax flow
    float scrollOffset = uScrollPos * 0.0003;
    
    // Dynamic noise warping based on scroll speed (creates organic ripples when scrolling)
    float speedDistortion = uScrollSpeed * 0.016;

    // ── LAYERED PARALLAX DEPTH SCENE ──
    // We calculate 3 layers of contour lines moving at different scroll-linked speeds
    // to establish a mathematical 3D parallax space within a single shader quad.

    // 1. Foreground Layer (Closer, moves fastest, thicker lines)
    vec2 st1 = st + snoise(vec3(st * 1.0, uTime * 0.08)) * (speedDistortion * 1.2);
    vec3 p1 = vec3(st1 * 1.3, timeScale * 1.3 - scrollOffset * 1.6);
    float n1 = fbm(p1);
    float val1 = sin(n1 * 10.0);
    float df1 = fwidth(val1);
    float lineThickness1 = 0.12 + (speedDistortion * 0.08); // lines widen slightly on fast scroll
    float contour1 = smoothstep(lineThickness1 + df1, lineThickness1 - df1, abs(val1)) * 0.85;

    // 2. Midground Layer (Middle distance, moves moderately, medium lines)
    vec2 st2 = st + snoise(vec3(st * 2.0 + 3.0, uTime * 0.04)) * (speedDistortion * 0.7);
    vec3 p2 = vec3(st2 * 2.2, timeScale * 0.75 - scrollOffset * 0.95);
    float n2 = fbm(p2);
    float val2 = sin(n2 * 16.0);
    float df2 = fwidth(val2);
    float lineThickness2 = 0.08 + (speedDistortion * 0.04);
    float contour2 = smoothstep(lineThickness2 + df2, lineThickness2 - df2, abs(val2)) * 0.48;

    // 3. Background Layer (Deep distance, moves slowest, fine dense lines)
    vec2 st3 = st + snoise(vec3(st * 3.8 - 4.0, uTime * 0.02)) * (speedDistortion * 0.3);
    vec3 p3 = vec3(st3 * 3.6, timeScale * 0.38 - scrollOffset * 0.45);
    float n3 = fbm(p3);
    float val3 = sin(n3 * 26.0);
    float df3 = fwidth(val3);
    float lineThickness3 = 0.05 + (speedDistortion * 0.02);
    float contour3 = smoothstep(lineThickness3 + df3, lineThickness3 - df3, abs(val3)) * 0.22;

    // Merge all three depth parallax layers beautifully
    float finalLines = max(contour1, max(contour2, contour3));
    
    // Add ultra-fine, premium cinematic grain overlay
    float grain = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
    finalLines += grain * 0.016;

    // Premium luxury dark monochrome palette
    vec3 baseColor = vec3(0.005, 0.005, 0.007); // pure cinematic off-black
    vec3 lineColor = vec3(0.065, 0.065, 0.075);  // dark luxurious metallic charcoal

    vec3 finalColor = mix(baseColor, lineColor, finalLines);
    
    // Add a soft, extremely dark radial vignette to frame the website content
    float vignette = uv.x * (1.0 - uv.x) * uv.y * (1.0 - uv.y);
    vignette = clamp(pow(vignette * 16.0, 0.25), 0.0, 1.0);
    finalColor *= mix(0.4, 1.0, vignette);

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

export default function OrganicWaveBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // Setup Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: false,
      alpha: false,
      powerPreference: 'high-performance',
      stencil: false,
      depth: false,
    });
    
    // Set appropriate pixel ratio with a maximum of 2.0 to prevent performance lag on retina/4K displays
    const pixelRatio = Math.min(window.devicePixelRatio, 2.0);
    renderer.setPixelRatio(pixelRatio);

    // Initial resize
    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      uniforms.uResolution.value.set(width * pixelRatio, height * pixelRatio);
    };

    // Uniforms initialization
    const uniforms = {
      uResolution: { value: new THREE.Vector2() },
      uTime: { value: 0 },
      uScrollPos: { value: 0 },
      uScrollSpeed: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    };

    // Quad geometry covering full screen
    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      depthWrite: false,
      depthTest: false,
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    resize();
    window.addEventListener('resize', resize);

    // Mouse movement interactive tracking
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      
      // Interpolate gently
      uniforms.uMouse.value.x += (x - uniforms.uMouse.value.x) * 0.05;
      uniforms.uMouse.value.y += (y - uniforms.uMouse.value.y) * 0.05;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Scroll tracking and speed interpolation
    let lastScrollY = window.scrollY;
    let targetScrollPos = window.scrollY;
    let currentScrollPos = window.scrollY;
    let scrollSpeed = 0;
    let lerpedScrollSpeed = 0;

    const handleScroll = () => {
      targetScrollPos = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Render loop variables
    let animationFrameId: number;
    const startTime = performance.now();
    let isVisible = true;

    // IntersectionObserver to pause rendering when background is not visible/active
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.0 }
    );
    observer.observe(container);

    // Main animation loop
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      if (!isVisible) return;

      const currentTime = performance.now();
      uniforms.uTime.value = (currentTime - startTime) * 0.001;

      // Smooth scroll interpolation (lerp)
      currentScrollPos += (targetScrollPos - currentScrollPos) * 0.08;
      uniforms.uScrollPos.value = currentScrollPos;

      // Scroll speed calculation & smooth interpolation
      const instantaneousSpeed = Math.abs(targetScrollPos - lastScrollY);
      lastScrollY = targetScrollPos;
      
      scrollSpeed += (instantaneousSpeed - scrollSpeed) * 0.1;
      lerpedScrollSpeed += (scrollSpeed - lerpedScrollSpeed) * 0.08;
      
      // Send speed to uniforms (capped to avoid massive distortions on sudden jumps)
      uniforms.uScrollSpeed.value = Math.min(lerpedScrollSpeed, 40.0);

      renderer.render(scene, camera);
    };

    // Start loop
    animate();

    return () => {
      // Clear resources completely
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 w-full h-full -z-10 bg-black pointer-events-none"
      style={{ mixBlendMode: 'normal' }}
    >
      <canvas 
        ref={canvasRef} 
        className="w-full h-full block" 
      />
    </div>
  );
}
