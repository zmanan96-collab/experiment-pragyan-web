import Link from 'next/link';
import Marquee from './Marquee';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black overflow-hidden border-t border-white/5 md:h-screen md:min-h-[820px] md:flex md:flex-col md:justify-between pt-0 pb-12 md:py-8 md:pt-[90px]" role="contentinfo">
      {/* Cinematic Ambient Orb Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Perfectly circular, premium soft blurred glow orb using exact color #4b3fd4 */}
        <div className="absolute right-[-200px] bottom-[-250px] md:right-[-350px] md:bottom-[-350px] w-[800px] h-[800px] md:w-[1300px] md:h-[1300px] rounded-full bg-[#4b3fd4] opacity-[0.52] blur-[120px] md:blur-[190px]"></div>
      </div>

      {/* Marquee integrated directly inside the footer at the very top */}
      <div className="w-full z-10 relative mb-8 md:mb-12 md:-mt-1.5">
        <Marquee />
      </div>

      <div className="max-w-[1600px] mx-auto px-8 relative z-10 w-full flex-grow flex flex-col md:justify-between justify-center">


        {/* PRE-FOOTER CTA */}
        <div className="mb-8 pb-8 md:mb-12 md:pb-12 flex flex-col md:flex-row items-stretch md:items-start justify-between gap-6 md:gap-12 border-b border-white/5">
          <div className="max-w-[850px] text-center md:text-left">
            <p className="text-[clamp(12px,0.85vw,16px)] text-[#FFD111] font-space font-light uppercase tracking-[0.3em] mb-4 md:mb-6">LET&apos;S WORK TOGETHER</p>
            <h3 className="text-[clamp(30px,4.4vw,70px)] leading-[1.15] font-sans font-bold text-white tracking-[-0.01em]">
              <span className="block md:inline md:whitespace-nowrap">Ready to build something</span> <br className="hidden md:inline" />
              that <span className="italic font-light">lasts</span> ?
            </h3>
          </div>
          <div className="w-full md:w-[1200px] md:flex-shrink-0 flex flex-col items-center md:items-end text-center md:text-right md:pt-[225px] md:pr-12 md:-translate-x-[24vw]">
            <p className="text-[18px] md:text-[25px] text-[#D9D9D9] font-sans font-light leading-relaxed mb-6">
              Whether it&apos;s strategy, storytelling, or exploring how we can bring your <br /> brand to life &mdash; reach out, and we&apos;ll figure it out together.
            </p>
            <Link
              href="/inquiry"
              className="inline-flex items-center justify-center bg-[#FFD111] text-[#010101] px-14 py-[20px] font-space font-normal uppercase tracking-[0.2em] text-[clamp(12px,0.85vw,15px)] hover:scale-105 transition-all duration-300 shadow-[0_20px_40px_-10px_rgba(255,209,17,0.25)] rounded-none"
            >
              Start a project
            </Link>
          </div>



        </div>

        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-start gap-10 md:gap-16 lg:gap-24 mb-10 w-full">

          {/* COLUMN 1: CONTACT */}
          <div className="flex-1 md:pr-10 lg:pr-16 py-4 md:border-r border-white/5 h-full text-center md:text-left flex flex-col items-center md:items-start">
            <h4 className="text-[14px] text-[#9D4EDD] font-space font-light uppercase tracking-[0.2em] mb-6">CONTACT</h4>
            <div className="flex flex-col gap-6 items-center md:items-start">
              <a href="tel:+919998081399" className="text-[17px] text-white/70 font-space font-light hover:text-[#FFD111] transition-colors flex items-start gap-3 group">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:stroke-[#FFD111] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                +91 99980 81399
              </a>
              <a href="mailto:CONNECT@MYPRAGYAN.COM" className="text-[17px] text-white/70 font-space font-light hover:text-[#FFD111] transition-colors flex items-start gap-3 group">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:stroke-[#FFD111] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                CONNECT@MYPRAGYAN.COM
              </a>
              <div className="text-[17px] text-white/70 font-space font-light flex items-start gap-3 justify-center md:justify-start text-center md:text-left">
                <svg className="w-4 h-4 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <p className="leading-relaxed uppercase">
                  <span className="block md:whitespace-nowrap">A - 607, MONEY PLANT HIGH STREET, SG</span>
                  <span className="block md:whitespace-nowrap">HIGHWAY, AHMEDABAD &mdash; 382470</span>
                </p>
              </div>
            </div>
          </div>

          {/* COLUMN 2: CONNECT */}
          <div className="flex-1 md:pl-10 md:pr-10 lg:pl-16 lg:pr-16 py-4 md:border-r border-white/5 h-full text-center md:text-left flex flex-col items-center md:items-start">
            <h4 className="text-[14px] text-[#9D4EDD] font-space font-light uppercase tracking-[0.2em] mb-6">CONNECT</h4>
            <div className="flex flex-col gap-5 items-center md:items-start">
              <a href="https://www.instagram.com/my_pragyan/" className="text-[17px] text-white/70 font-space font-light uppercase hover:text-[#FFD111] transition-colors flex items-center gap-3 group">
                <svg className="w-4 h-4 group-hover:stroke-[#FFD111] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                Instagram
              </a>
              <a href="www.linkedin.com/in/dhruti-patel-pragyan" className="text-[17px] text-white/70 font-space font-light uppercase hover:text-[#FFD111] transition-colors flex items-center gap-3 group">
                <svg className="w-4 h-4 group-hover:stroke-[#FFD111] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* COLUMN 3: NAVIGATE */}
          <div className="flex-1 md:pl-10 lg:pl-16 py-4 h-full text-center md:text-left flex flex-col items-center md:items-start">
            <h4 className="text-[14px] text-[#9D4EDD] font-space font-light uppercase tracking-[0.2em] mb-6">NAVIGATE</h4>
            <div className="flex flex-col gap-4 items-center md:items-start">
              {['Home', 'Services', 'About', 'Culture'].map((item) => (
                <Link key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-[17px] text-white/70 font-space font-light uppercase hover:text-[#FFD111] transition-colors duration-200 flex items-center group">
                  <span className="w-0 group-hover:w-3 h-[1px] bg-[#FFD111] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>


        {/* BOTTOM BAR */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[14px] text-white/40 font-space font-light tracking-[0.15em] text-center md:text-left uppercase md:whitespace-nowrap">
            © {currentYear} PRAGYAN BRANDING & MARKETING. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-4 text-[14px] text-white/40 font-space font-light tracking-[0.15em] justify-end uppercase">
            <Link href="/sitemap" className="hover:text-[#FFD111] transition-colors">SITEMAP</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
