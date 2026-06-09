'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ServicesAnimations() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      ScrollTrigger.create({
        trigger: '#services-hero-section',
        start: 'top top',
        end: 'bottom top',
        pin: true,
        pinSpacing: false,
        id: 'services-hero-pin'
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return null;
}
