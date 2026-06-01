'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button, { ButtonArrow } from './Button';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/culture', label: 'Culture' },
    { href: '/inquiry', label: 'Inquiry' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#010101c7] backdrop-blur-[14px] backdrop-saturate-[160%] border-b border-border">
      <div className="wrap">
        <nav className="flex items-center justify-between h-[76px]" aria-label="Primary">
          <Link href="/" className="inline-flex items-center" aria-label="Pragyan — home">
            <img src="/assets/img/pglogo.svg" alt="Pragyan — Wisdom. Action. Growth." className="h-[280px] w-auto" />
          </Link>

          <ul className={`
            max-[920px]:absolute max-[920px]:top-[76px] max-[920px]:left-0 max-[920px]:right-0 
            max-[920px]:bg-black max-[920px]:flex-col max-[920px]:p-[28px_var(--pad)] max-[920px]:gap-[22px] 
            max-[920px]:border-b max-[920px]:border-border max-[920px]:text-[16px]
            ${isOpen ? 'max-[920px]:flex' : 'max-[920px]:hidden'}
            flex ml-auto mr-0 gap-[52px] list-none m-0 p-0 text-[clamp(14px,0.95vw,16px)] font-space font-light tracking-[0.16em] uppercase
          `}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`
                      relative py-2 transition-colors duration-150 ease-[cubic-bezier(0.22,1,0.36,1)]
                      ${isActive ? 'text-[#4b3fd4]' : 'text-grey hover:text-white'}
                      after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 
                      after:h-[1.5px] after:bg-[#4b3fd4] after:origin-left after:transition-transform 
                      after:duration-250 after:ease-[cubic-bezier(0.22,1,0.36,1)]
                      ${isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}
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
              className="hidden max-[920px]:block bg-transparent border-0 text-white p-2 cursor-pointer relative z-[70]"
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
