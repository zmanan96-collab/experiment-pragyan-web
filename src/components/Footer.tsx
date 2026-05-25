import Link from 'next/link';
import Marquee from './Marquee';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-[60] bg-black overflow-hidden border-t border-white/5 md:h-screen md:max-h-[100svh] md:flex md:flex-col md:justify-center pt-[120px] pb-8 md:py-2 md:pt-[130px] [@media(max-height:850px)]:md:pt-[100px]" role="contentinfo">
      {/* Cinematic Ambient Orb Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Perfectly circular, premium soft blurred glow orb using radial-gradient to prevent GPU blur tiling lines */}
        <div
          className="absolute right-[-200px] bottom-[-250px] md:right-[-350px] md:bottom-[-350px] w-[800px] h-[800px] md:w-[1300px] md:h-[1300px] opacity-[0.45]"
          style={{ background: 'radial-gradient(circle, rgba(75,63,212,1) 0%, rgba(75,63,212,0) 65%)' }}
        ></div>
      </div>

      {/* Marquee integrated directly inside the footer at the very top */}
      <div className="w-full z-20 absolute top-0 left-0">
        <Marquee />
      </div>

      <div className="max-w-[1600px] mx-auto px-8 md:px-[4vw] lg:px-[6vw] xl:px-[8vw] relative z-10 w-full flex flex-col justify-start gap-4 md:gap-6 lg:gap-8">


        {/* PRE-FOOTER CTA */}
        <div className="mb-4 pb-4 md:mb-2 md:pb-2 flex flex-col w-full">
          <div className="w-full text-center md:text-left relative z-10">
            <p className="text-[clamp(12px,0.85vw,16px)] text-[#FFD111] font-space font-light uppercase tracking-[0.3em] mb-3 md:mb-4">LET&apos;S WORK TOGETHER</p>
            <h3 className="text-[clamp(30px,4.4vw,70px)] leading-[1.15] font-sans font-bold text-white tracking-[-0.01em]">
              <span className="block md:inline md:whitespace-nowrap">Ready to build something</span> <br className="hidden md:inline" />
              that <span className="italic font-light">lasts</span> ?
            </h3>
          </div>
          <div className="w-full flex flex-col items-center md:items-end text-center md:text-right mt-8 md:-mt-[10px] lg:-mt-[20px] xl:-mt-[30px] relative z-20">
            <div className="flex flex-col items-center md:items-end">
              <p className="text-[17px] md:text-[clamp(14px,1.2vw,20px)] text-[#D9D9D9] font-sans font-light leading-relaxed mb-4 md:mb-8 md:whitespace-nowrap">
                Whether it&apos;s strategy, storytelling, or exploring how we can bring your <br className="hidden md:block" /> brand to life &mdash; reach out, and we&apos;ll figure it out together.
              </p>
              <Link
                href="/inquiry"
                className="inline-flex items-center justify-center bg-[#FFD111] text-[#010101] px-10 py-[15px] font-space font-normal uppercase tracking-[0.2em] text-[clamp(11px,0.75vw,14px)] hover:scale-105 transition-all duration-300 shadow-[0_15px_30px_-8px_rgba(255,209,17,0.25)] rounded-none"
              >
                Start a project
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-start gap-4 md:gap-6 lg:gap-10 mb-4 md:mb-2 w-full max-w-[1000px] md:-mt-2 xl:-mt-4 relative z-30">

          {/* COLUMN 1: CONTACT */}
          <div className="flex-1 md:pr-6 lg:pr-10 py-2 md:border-r border-white/5 h-full text-center md:text-left flex flex-col items-center md:items-start">
            <h4 className="text-[13px] text-[#434b9f] font-space font-light uppercase tracking-[0.2em] mb-4 md:mb-2.5">CONTACT</h4>
            <div className="flex flex-col gap-4 items-center md:items-start">
              <a href="tel:+919998081399" className="text-[16px] text-white/70 font-space font-light hover:text-[#FFD111] transition-colors flex items-start gap-2.5 group">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:stroke-[#FFD111] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                +91 99980 81399
              </a>
              <a href="mailto:CONNECT@MYPRAGYAN.COM" className="text-[16px] text-white/70 font-space font-light hover:text-[#FFD111] transition-colors flex items-start gap-2.5 group">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:stroke-[#FFD111] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                CONNECT@MYPRAGYAN.COM
              </a>
              <div className="text-[16px] text-white/70 font-space font-light flex items-start gap-2.5 justify-center md:justify-start text-center md:text-left">
                <svg className="w-4 h-4 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <p className="leading-relaxed uppercase">
                  <span className="block md:whitespace-nowrap">A - 607, MONEY PLANT HIGH STREET, SG</span>
                  <span className="block md:whitespace-nowrap">HIGHWAY, AHMEDABAD &mdash; 382470</span>
                </p>
              </div>
            </div>
          </div>

          {/* COLUMN 2: CONNECT */}
          <div className="flex-1 md:pl-6 md:pr-6 lg:pl-10 lg:pr-10 py-2 md:border-r border-white/5 h-full text-center md:text-left flex flex-col items-center md:items-start">
            <h4 className="text-[13px] text-[#434b9f] font-space font-light uppercase tracking-[0.2em] mb-4 md:mb-2.5">CONNECT</h4>
            <div className="flex flex-col gap-4 items-center md:items-start">
              <a href="https://www.instagram.com/my_pragyan/" className="text-[16px] text-white/70 font-space font-light uppercase hover:text-[#FFD111] transition-colors flex items-center gap-2.5 group">
                <svg className="w-4 h-4 group-hover:stroke-[#FFD111] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                Instagram
              </a>
              <a href="www.linkedin.com/in/dhruti-patel-pragyan" className="text-[16px] text-white/70 font-space font-light uppercase hover:text-[#FFD111] transition-colors flex items-center gap-2.5 group">
                <svg className="w-4 h-4 group-hover:stroke-[#FFD111] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* COLUMN 3: NAVIGATE */}
          <div className="flex-1 md:pl-6 lg:pl-10 py-2 h-full text-center md:text-left flex flex-col items-center md:items-start">
            <h4 className="text-[13px] text-[#434b9f] font-space font-light uppercase tracking-[0.2em] mb-4 md:mb-2.5">NAVIGATE</h4>
            <div className="flex flex-col gap-3 items-center md:items-start">
              {['Home', 'Services', 'About', 'Culture'].map((item) => (
                <Link key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-[16px] text-white/70 font-space font-light uppercase hover:text-[#FFD111] transition-colors duration-200 flex items-center group">
                  <span className="w-0 group-hover:w-3 h-[1px] bg-[#FFD111] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>


        {/* BOTTOM BAR */}
        <div className="pt-6 md:pt-3 md:pb-1 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-white/40 font-space font-light tracking-[0.15em] text-center md:text-left uppercase md:whitespace-nowrap">
            © {currentYear} PRAGYAN BRANDING & MARKETING. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-4 text-[13px] text-white/40 font-space font-light tracking-[0.15em] justify-end uppercase">
            <Link href="/sitemap" className="hover:text-[#FFD111] transition-colors">SITEMAP</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
