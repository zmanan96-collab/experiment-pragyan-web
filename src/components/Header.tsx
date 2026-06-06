'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [headerTheme, setHeaderTheme] = useState<'light' | 'dark'>('dark');
  const pathname = usePathname();

  const navLinks = [
    { href: '/work', label: 'Work' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/culture', label: 'Culture' },
    { href: '/inquiry', label: 'Inquiry' },
  ];

  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const detectTheme = () => {
      // Find the active section at the header level (y = 38px)
      const headerEl = document.querySelector('header');
      if (headerEl) {
        headerEl.style.pointerEvents = 'none';
      }
      
      const el = document.elementFromPoint(window.innerWidth / 2, 38);
      
      if (headerEl) {
        headerEl.style.pointerEvents = 'auto';
      }
      
      if (el) {
        // Walk up to find data-header-theme
        const themedParent = el.closest('[data-header-theme]');
        if (themedParent) {
          const theme = themedParent.getAttribute('data-header-theme');
          setHeaderTheme(theme === 'light' ? 'light' : 'dark');
          return;
        }
        
        // Fallback to computed background color of the element
        let current: HTMLElement | null = el as HTMLElement;
        let bg = window.getComputedStyle(current).backgroundColor;
        while (current && (bg === 'transparent' || bg === 'rgba(0, 0, 0, 0)' || bg === '')) {
          current = current.parentElement;
          if (current) {
            bg = window.getComputedStyle(current).backgroundColor;
          }
        }
        
        if (bg && (bg.startsWith('rgb(') || bg.startsWith('rgba('))) {
          const matches = bg.match(/\d+/g);
          if (matches && matches.length >= 3) {
            const r = parseInt(matches[0], 10);
            const g = parseInt(matches[1], 10);
            const b = parseInt(matches[2], 10);
            const brightness = Math.sqrt(0.299 * r * r + 0.587 * g * g + 0.114 * b * b);
            setHeaderTheme(brightness > 127.5 ? 'light' : 'dark');
            return;
          }
        }
      }
      
      // Default fallback based on page type
      if (
        pathname === '/' ||
        pathname.startsWith('/culture')
      ) {
        setHeaderTheme('dark');
      } else {
        setHeaderTheme('light');
      }
    };

    // Throttle scroll handler via requestAnimationFrame to avoid 60+/sec calls
    const handleScroll = () => {
      if (rafId.current !== null) return;
      rafId.current = requestAnimationFrame(() => {
        detectTheme();
        rafId.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Check initial state after DOM renders
    const timer = setTimeout(detectTheme, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="wrap">
        <nav className="flex items-center justify-between h-[76px]" aria-label="Primary">
          <Link href="/" className="inline-flex items-center" aria-label="Pragyan — home">
            <img 
              src="/assets/img/prg.svg" 
              alt="Pragyan" 
              className="h-[34px] sm:h-[40px] md:h-[44px] w-auto object-contain transition-all duration-300"
              style={headerTheme === 'light' ? { filter: 'brightness(0)' } : undefined}
            />
          </Link>

          <ul className={`
            max-[920px]:absolute max-[920px]:top-[76px] max-[920px]:left-0 max-[920px]:right-0 
            max-[920px]:bg-black max-[920px]:flex-col max-[920px]:p-[28px_var(--pad)] max-[920px]:gap-[22px] 
            max-[920px]:border-b max-[920px]:border-border
            ${isOpen ? 'max-[920px]:flex' : 'max-[920px]:hidden'}
            flex ml-auto mr-0 gap-[52px] list-none m-0 p-0 text-nav-label uppercase
          `}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`
                      relative py-2 max-[920px]:py-4 max-[920px]:block transition-colors duration-150 ease-[cubic-bezier(0.22,1,0.36,1)]
                      after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 
                      after:h-[1.5px] after:bg-[#4b3fd4] after:origin-left after:transition-transform 
                      after:duration-250 after:ease-[cubic-bezier(0.22,1,0.36,1)]
                      ${isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}
                      ${
                        headerTheme === 'light'
                          ? 'text-black/80 hover:text-black max-[920px]:text-grey max-[920px]:hover:text-white'
                          : 'text-grey hover:text-white'
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-3 relative z-[60]">
            <button
              className={`hidden max-[920px]:block bg-transparent border-0 p-2 cursor-pointer relative z-[70] transition-colors duration-300 ${
                isOpen ? 'text-white' : (headerTheme === 'light' ? 'text-black' : 'text-white')
              }`}
              aria-expanded={isOpen}
              aria-label="Open menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {isOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="4" y1="17" x2="20" y2="17" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
