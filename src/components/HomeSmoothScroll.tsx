'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function HomeSmoothScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis with optimized settings for buttery smooth Windows scrolling
    const lenis = new Lenis({
      duration: 1.4, // Slightly slower for relaxed, premium feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth exponential deceleration
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.85, // Prevent overscrolling on high-resolution precision mouse wheels
      touchMultiplier: 1.4,
    });

    // Add Locomotive / smooth classes to the html tag
    document.documentElement.classList.add('has-scroll-init', 'has-scroll-smooth');

    // Sync ScrollTrigger with Lenis scroll events
    const handleScroll = () => {
      ScrollTrigger.update();
    };
    lenis.on('scroll', handleScroll);

    // High-performance requestAnimationFrame loop directly bound to browser refresh rate
    // This is incredibly stable on Windows browsers and high-refresh-rate monitors (144Hz+)
    let rafId: number;
    const render = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(render);
    };
    rafId = requestAnimationFrame(render);

    // Safe auto-refresh of ScrollTrigger positions once images/fonts are hydrated
    // This absolutely prevents scroll freezing, stuck sections, and layout math miscalculations
    const refreshTimer1 = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    const refreshTimer2 = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 600);

    // Bind window resize to refresh positions
    const handleResize = () => {
      lenis.resize();
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    // Keep scroll restoration clean
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    }

    return () => {
      // Clean up resources on unmount
      lenis.destroy();
      cancelAnimationFrame(rafId);
      clearTimeout(refreshTimer1);
      clearTimeout(refreshTimer2);
      window.removeEventListener('resize', handleResize);
      document.documentElement.classList.remove('has-scroll-init', 'has-scroll-smooth');
    };
  }, []);

  return null;
}
