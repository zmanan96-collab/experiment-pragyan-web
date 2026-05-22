'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollSnapController() {
  const pathname = usePathname();

  useEffect(() => {
    // Only run on desktop/laptop views (768px and above)
    if (typeof window === 'undefined' || window.innerWidth < 768) return;

    let isAnimating = false;
    let animTimeout: NodeJS.Timeout;

    const getSections = () => {
      // Query all page-level section containers and the footer
      const sections = Array.from(document.querySelectorAll('main section, footer'));
      // Sort them by their vertical document offsets to guarantee correct order
      return sections
        .map((element) => ({
          element,
          top: element.getBoundingClientRect().top + window.scrollY,
        }))
        .sort((a, b) => a.top - b.top);
    };

    const handleWheel = (e: WheelEvent) => {
      // Check screen width again in case of resize
      if (window.innerWidth < 768) return;

      const deltaY = e.deltaY;
      if (Math.abs(deltaY) < 10) return; // Ignore micro-scrolls

      e.preventDefault();

      if (isAnimating) return;

      const sections = getSections();
      if (sections.length === 0) return;

      const currentScroll = window.scrollY;
      let targetScroll: number | null = null;

      if (deltaY > 0) {
        // Scrolling Down: Find the first section whose top is greater than current scroll
        const nextSection = sections.find((s) => s.top > currentScroll + 20);
        if (nextSection) {
          targetScroll = nextSection.top;
        }
      } else {
        // Scrolling Up: Find the last section whose top is less than current scroll
        const prevSections = sections.filter((s) => s.top < currentScroll - 20);
        if (prevSections.length > 0) {
          targetScroll = prevSections[prevSections.length - 1].top;
        }
      }

      if (targetScroll !== null) {
        isAnimating = true;
        window.scrollTo({
          top: targetScroll,
          behavior: 'smooth',
        });

        // Safe cooldown of 850ms to allow smooth sliding to finish completely
        animTimeout = setTimeout(() => {
          isAnimating = false;
        }, 850);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (window.innerWidth < 768) return;

      const key = e.key;
      const isNextKey = key === 'ArrowDown' || key === 'PageDown' || (key === ' ' && !e.shiftKey);
      const isPrevKey = key === 'ArrowUp' || key === 'PageUp' || (key === ' ' && e.shiftKey);

      if (!isNextKey && !isPrevKey) return;

      e.preventDefault();

      if (isAnimating) return;

      const sections = getSections();
      if (sections.length === 0) return;

      const currentScroll = window.scrollY;
      let targetScroll: number | null = null;

      if (isNextKey) {
        const nextSection = sections.find((s) => s.top > currentScroll + 20);
        if (nextSection) {
          targetScroll = nextSection.top;
        }
      } else {
        const prevSections = sections.filter((s) => s.top < currentScroll - 20);
        if (prevSections.length > 0) {
          targetScroll = prevSections[prevSections.length - 1].top;
        }
      }

      if (targetScroll !== null) {
        isAnimating = true;
        window.scrollTo({
          top: targetScroll,
          behavior: 'smooth',
        });

        animTimeout = setTimeout(() => {
          isAnimating = false;
        }, 850);
      }
    };

    // Register active event listeners for mousewheel and keyboard with passive: false to enable preventDefault()
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(animTimeout);
    };
  }, [pathname]); // Re-initialize controller when path changes to capture fresh page sections

  return null;
}
