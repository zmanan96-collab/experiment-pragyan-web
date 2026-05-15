import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 bg-[linear-gradient(180deg,#0A0C10_0%,#1E2778_100%)] overflow-hidden border-t border-white/5" role="contentinfo">
      {/* Cinematic Gradient Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#434B9F_0%,transparent_60%)] opacity-30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#434B9F_0%,transparent_60%)] opacity-20"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-8 relative z-10">

        {/* PRE-FOOTER CTA */}
        <div className="mb-10 pb-10 flex flex-col md:flex-row items-center justify-between gap-12 border-b border-white/5">
          <div className="max-w-[600px] text-center md:text-left">
            <p className="text-[12px] text-[#FFD111] font-space font-bold uppercase tracking-[0.3em] mb-6">LET&apos;S BUILD SOMETHING TOGETHER</p>
            <h3 className="text-[clamp(32px,5vw,64px)] leading-[1.1] font-bold text-white">
              Ready to build something <span className="text-[#FFD111]">that lasts?</span>
            </h3>
          </div>
          <div className="max-w-[450px] flex flex-col items-center md:items-end text-center md:text-right">
            <p className="text-[16px] text-white/60 leading-relaxed mb-10">
              Whether it&apos;s strategy, storytelling, or exploring how we can bring your brand to life &mdash; reach out, and we&apos;ll figure it out together.
            </p>
            <Link
              href="/inquiry"
              className="inline-flex items-center gap-4 bg-[#FFD111] text-black px-10 py-5 font-space font-bold uppercase tracking-widest text-[13px] hover:scale-105 transition-all duration-300 shadow-[0_20px_40px_-10px_rgba(255,209,17,0.3)] group"
            >
              Start a project
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 mb-10">

          {/* COLUMN 1: BRAND */}
          <div className="py-2 h-full flex items-center justify-center md:justify-start md:pr-12 min-h-[150px] md:min-h-[250px]">
            <Link href="/" className="inline-block">
              <img src="/assets/img/pglogo.svg" alt="Pragyan" className="h-[220px] sm:h-[150px] md:h-[380px] w-auto object-contain" />
            </Link>
          </div>

          {/* COLUMN 2: NAVIGATE */}
          <div className="px-12 py-4 border-r border-white/5 h-full">
            <h4 className="text-[12px] text-[#9D4EDD] font-space font-bold uppercase tracking-[0.2em] mb-6">NAVIGATE</h4>
            <div className="flex flex-col gap-4">
              {['Home', 'Services', 'About', 'Culture'].map((item) => (
                <Link key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-[14px] text-white/70 font-space uppercase hover:text-[#FFD111] transition-colors duration-200 flex items-center group">
                  <span className="w-0 group-hover:w-3 h-[1px] bg-[#FFD111] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* COLUMN 3: CONNECT */}
          <div className="px-12 py-4 border-r border-white/5 h-full">
            <h4 className="text-[12px] text-[#9D4EDD] font-space font-bold uppercase tracking-[0.2em] mb-6">CONNECT</h4>
            <div className="flex flex-col gap-5">
              <a href="#" className="text-[14px] text-white/70 font-space uppercase hover:text-[#FFD111] transition-colors flex items-center gap-3 group">
                <svg className="w-4 h-4 group-hover:stroke-[#FFD111] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                Instagram
              </a>
              <a href="#" className="text-[14px] text-white/70 font-space uppercase hover:text-[#FFD111] transition-colors flex items-center gap-3 group">
                <svg className="w-4 h-4 group-hover:stroke-[#FFD111] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* COLUMN 4: CONTACT */}
          <div className="pl-12 py-4 h-full">
            <h4 className="text-[12px] text-[#9D4EDD] font-space font-bold uppercase tracking-[0.2em] mb-6">CONTACT</h4>
            <div className="flex flex-col gap-6">
              <a href="tel:+919998081399" className="text-[14px] text-white/70 font-space hover:text-[#FFD111] transition-colors flex items-start gap-3 group">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:stroke-[#FFD111] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                +91 99980 81399
              </a>
              <a href="mailto:CONNECT@MYPRAGYAN.COM" className="text-[14px] text-white/70 font-space hover:text-[#FFD111] transition-colors flex items-start gap-3 group">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:stroke-[#FFD111] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                CONNECT@MYPRAGYAN.COM
              </a>
              <div className="text-[14px] text-white/70 font-space flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <p className="max-w-[280px] leading-relaxed uppercase">A - 607, MONEY PLANT HIGH STREET, SG HIGHWAY, AHMEDABAD &mdash; 382470</p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1"></div>
          <p className="text-[11px] text-white/40 font-space tracking-[0.1em] font-medium text-center flex-1 uppercase">
            © {currentYear} PRAGYAN BRANDING & MARKETING. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-4 text-[11px] text-[#4A5568] font-bold tracking-widest flex-1 justify-end uppercase">
            <Link href="/sitemap" className="font-space hover:text-[#FFD111] transition-colors">SITEMAP</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
