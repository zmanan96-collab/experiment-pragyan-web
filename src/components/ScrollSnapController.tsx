'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollSnapController() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const platform = window.navigator?.platform || '';
        const userAgent = window.navigator?.userAgent || '';
        if (platform.indexOf('Mac') !== -1 || userAgent.indexOf('Macintosh') !== -1) {
          document.documentElement.classList.add('is-mac');
        } else {
          document.documentElement.classList.add('is-not-mac');
        }
      } catch (e) {}
    }
  }, []);

  useEffect(() => {
    // Only run on desktop/laptop views (768px and above)
    if (typeof window === 'undefined' || window.innerWidth < 768) return;

    let isAnimating = false;
    let animTimeout: NodeJS.Timeout;

    const getSections = () => {
      // Query all page-level section containers and the footer
      const sections = Array.from(document.querySelectorAll('main section, footer'));
      return sections
        .map((element) => {
          const rect = element.getBoundingClientRect();
          return {
            element,
            top: rect.top + window.scrollY,
            bottom: rect.bottom + window.scrollY,
            height: rect.height,
          };
        })
        .sort((a, b) => a.top - b.top);
    };

    const handleScrollLogic = (e: Event, isDown: boolean, isUp: boolean) => {
      if (window.innerWidth < 768) return;
      if (isAnimating) {
        e.preventDefault();
        return;
      }

      const sections = getSections();
      if (sections.length === 0) return;

      const viewportTop = window.scrollY;
      const viewportBottom = viewportTop + window.innerHeight;
      let targetScroll: number | null = null;
      let shouldPrevent = false;

      // Find current active section
      const currentSection = sections.find(s => 
        (viewportTop >= s.top - 5 && viewportTop < s.bottom - 5) || 
        (viewportTop <= s.top && viewportBottom >= s.bottom - 5)
      );

      if (isDown) {
        if (currentSection && currentSection.height > window.innerHeight) {
          // Allow native scroll if we haven't reached the bottom of the tall section
          if (viewportBottom < currentSection.bottom - 10) {
            return; // Allow native scroll
          }
        }
        
        // Find next section
        const nextSection = sections.find((s) => s.top > viewportTop + 20);
        if (nextSection) {
          targetScroll = nextSection.top;
          shouldPrevent = true;
        }
      } else if (isUp) {
        const activeSectionUp = sections.find(s => viewportBottom > s.top + 10 && viewportBottom <= s.bottom + 10);
        
        if (activeSectionUp && activeSectionUp.height > window.innerHeight) {
          // Allow native scroll if we haven't reached the top of the tall section
          if (viewportTop > activeSectionUp.top + 10) {
            return; // Allow native scroll
          }
        }

        // Find prev section
        const prevSections = sections.filter((s) => s.bottom < viewportBottom - 20);
        if (prevSections.length > 0) {
          const prevSection = prevSections[prevSections.length - 1];
          // If the previous section is taller than viewport, snap to its bottom, otherwise its top
          if (prevSection.height > window.innerHeight) {
            targetScroll = prevSection.bottom - window.innerHeight;
          } else {
            targetScroll = prevSection.top;
          }
          shouldPrevent = true;
        }
      }

      if (shouldPrevent && targetScroll !== null) {
        e.preventDefault();
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

    const handleWheel = (e: WheelEvent) => {
      const deltaY = e.deltaY;
      if (Math.abs(deltaY) < 10) return; // Ignore micro-scrolls
      handleScrollLogic(e, deltaY > 0, deltaY < 0);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key;
      const isDown = key === 'ArrowDown' || key === 'PageDown' || (key === ' ' && !e.shiftKey);
      const isUp = key === 'ArrowUp' || key === 'PageUp' || (key === ' ' && e.shiftKey);
      
      if (!isDown && !isUp) return;
      handleScrollLogic(e, isDown, isUp);
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
