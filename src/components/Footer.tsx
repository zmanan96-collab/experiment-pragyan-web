'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  const pathname = usePathname();

  // Set outer footer background color based on the page theme to prevent transparent body background showing as black
  let footerBg = 'bg-black';
  if (pathname === '/work') {
    footerBg = 'bg-[#fcfcfc]';
  } else if (pathname?.startsWith('/work/')) {
    footerBg = 'bg-[#f9f9f9]';
  } else if (pathname === '/about') {
    footerBg = 'bg-[#d9d9d9]';
  } else if (pathname === '/inquiry') {
    return null;
  }

  return (
    <footer className={`relative z-[60] ${footerBg} overflow-hidden md:h-screen md:max-h-[100svh] md:flex md:flex-col`} role="contentinfo">
      <div className="w-full flex-1 bg-black flex flex-col justify-center pt-[60px] md:pt-[80px] [@media(max-height:850px)]:md:pt-[60px] pb-8 md:py-2">
        <div className="max-w-[1600px] mx-auto px-8 md:px-[4vw] lg:px-[6vw] xl:px-[8vw] relative z-10 w-full flex flex-col justify-start gap-4 md:gap-6 lg:gap-8">


          {/* PRE-FOOTER CTA */}
          <div className="mb-4 pb-4 md:mb-2 md:pb-2 flex flex-col w-full">
            <div className="w-full text-center md:text-left relative z-10 md:-mt-8 lg:-mt-12">
              <h2 className="sr-only">
                {pathname === '/work' 
                  ? "Let's Build Your Brand Story Together" 
                  : pathname === '/about'
                  ? "Let's Build Something That Lasts"
                  : pathname === '/culture'
                  ? "Think You're a Fit? Let's Talk."
                  : "Ready to Build a Brand That Lasts?"}
              </h2>
              {pathname !== '/work' && pathname !== '/about' && pathname !== '/culture' && (
                <h3 className="sr-only">Step 4: We Build Brands That Scale</h3>
              )}
              <p className="text-nav-label text-[#a6a6a6] uppercase tracking-[0.3em] mb-3 md:mb-4" aria-hidden="true">LET&apos;S WORK TOGETHER</p>
              <span className="text-section-heading text-white block" aria-hidden="true">
                <span className="block md:inline md:whitespace-nowrap">Ready to build something</span> <br className="hidden md:inline" />
                that <span className="italic font-light">lasts</span> ?
              </span>
            </div>
            <div className="w-full flex flex-col items-center md:items-start text-center md:text-left mt-6 md:mt-8 relative z-20">
              <div className="flex flex-col items-center md:items-start">
                <p className="text-main-desc text-[#D9D9D9] mb-4 md:mb-6 md:whitespace-nowrap text-center md:text-left">
                  Whether it&apos;s strategy, storytelling, or exploring how we can bring your <br className="hidden md:block" /> brand to life &mdash; reach out, and we&apos;ll figure it out together.
                </p>
                <Link
                  href="/inquiry"
                  className="inline-flex items-center justify-center btn-gradient text-white px-10 py-[15px] text-nav-label uppercase tracking-[0.2em] transition-all duration-300 rounded-full"
                >
                  Start a project
                </Link>
              </div>
            </div>
          </div>

          {/* Horizontal Divider Line */}
          <div className="w-full h-[1px] bg-white/10 relative z-30 my-4 md:my-6" />

          <div className="flex flex-col md:flex-row justify-between items-stretch md:items-start gap-4 md:gap-6 lg:gap-10 mb-4 md:mb-2 w-full max-w-[1000px] pt-4 md:pt-6 relative z-30">

            {/* COLUMN 1: CONTACT */}
            <div className="flex-1 md:pr-6 lg:pr-10 py-2 md:border-r border-white/5 h-full text-center md:text-left flex flex-col items-center md:items-start">
              <h4 className="text-nav-label text-[#434b9f] mb-4 md:mb-2.5">Contact</h4>
              <div className="flex flex-col gap-4 items-center md:items-start">
                <a href="tel:+919998081399" className="text-small-desc text-white/70 hover:text-[#4b3fd4] transition-colors flex items-start gap-2.5 group">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:stroke-[#4b3fd4] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  +91 99980 81399
                </a>
                <a href="mailto:CONNECT@MYPRAGYAN.COM" className="text-small-desc text-white/70 hover:text-[#4b3fd4] transition-colors flex items-start gap-2.5 group">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:stroke-[#4b3fd4] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  connect@mypragyan.com
                </a>
                <div className="text-small-desc text-white/70 flex items-start gap-2.5 justify-center md:justify-start text-center md:text-left">
                  <svg className="w-4 h-4 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  <p className="leading-relaxed">
                    <span className="block md:whitespace-nowrap">A - 607, Money Plant High Street, SG</span>
                    <span className="block md:whitespace-nowrap">Highway, Ahmedabad &mdash; 382470</span>
                  </p>
                </div>
              </div>
            </div>

            {/* COLUMN 2: CONNECT */}
            <div className="flex-1 md:pl-6 md:pr-6 lg:pl-10 lg:pr-10 py-2 md:border-r border-white/5 h-full text-center md:text-left flex flex-col items-center md:items-start">
              <h4 className="text-nav-label text-[#434b9f] mb-4 md:mb-2.5">Connect</h4>
              <div className="flex flex-col gap-4 items-center md:items-start">
                {/* <a href="#" className="text-small-desc text-white/70 hover:text-[#4b3fd4] transition-colors flex items-center gap-2.5 group">
                  <svg className="w-4 h-4 group-hover:stroke-[#4b3fd4] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  Instagram
                </a> */}
                <a href="https://www.linkedin.com/in/dhruti-patel-pragyan/" className="text-small-desc text-white/70 hover:text-[#4b3fd4] transition-colors flex items-center gap-2.5 group">
                  <svg className="w-4 h-4 group-hover:stroke-[#4b3fd4] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  LinkedIn
                </a>
              </div>
            </div>

            {/* COLUMN 3: NAVIGATE */}
            <div className="flex-1 md:pl-6 lg:pl-10 py-2 h-full text-center md:text-left flex flex-col items-center md:items-start">
              <h4 className="text-nav-label text-[#434b9f] mb-4 md:mb-2.5">Navigate</h4>
              <div className="flex flex-col gap-3 items-center md:items-start">
                {['Home', 'Work', 'Services', 'About', 'Culture'].map((item) => (
                  <Link key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-small-desc text-white/70 hover:text-[#4b3fd4] transition-colors duration-200 flex items-center group">
                    <span className="w-0 group-hover:w-3 h-[1px] bg-[#4b3fd4] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>


          {/* BOTTOM BAR */}
          <div className="pt-6 md:pt-3 md:pb-1 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-small-desc text-white/40 text-center md:text-left md:whitespace-nowrap">
              © {currentYear} Pragyan Branding & Marketing. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
