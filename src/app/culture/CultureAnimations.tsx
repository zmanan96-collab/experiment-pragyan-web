'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function CultureAnimations() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    // ── DESKTOP SCROLL STACKED DECK ANIMATION (>= 768px) ──
    mm.add('(min-width: 768px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          id: 'culture-deck-trigger',
          trigger: '#culture-deck-container',
          start: 'top top',
          end: '+=400%', // 4 transitions
          pin: true,
          pinSpacing: true,
          scrub: 1.2,
        }
      });

      // Section 2 slides up over Section 1
      tl.fromTo('#culture-mission-section',
        { yPercent: 100 },
        { yPercent: 0, ease: 'none' },
        0
      );

      // Animate the black bg band symmetrically while Section 2 is active/scrolled
      tl.fromTo('#culture-mission-bg',
        { scaleY: 0 },
        { scaleY: 1.0, ease: 'none' },
        0
      );

      // Section 3 slides up over Section 2
      tl.fromTo('#culture-features-section',
        { yPercent: 100 },
        { yPercent: 0, ease: 'none' },
        1
      );

      // Section 4 slides up over Section 3
      tl.fromTo('#culture-benefits-section',
        { yPercent: 100 },
        { yPercent: 0, ease: 'none' },
        2
      );

      // Section 5 slides up over Section 4
      tl.fromTo('#culture-cta-section',
        { yPercent: 100 },
        { yPercent: 0, ease: 'none' },
        3
      );
    });

    // ── MOBILE ACTIONS (< 768px) ──
    mm.add('(max-width: 767px)', () => {
      // Standard scale scroll animation for black bg on mobile
      gsap.fromTo('#culture-mission-bg',
        { scaleY: 0 },
        {
          scrollTrigger: {
            trigger: '#culture-mission-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
          scaleY: 1.0,
          ease: 'none',
        }
      );
    });

    return () => {
      mm.revert();
    };
  }, []);

  return null;
}
