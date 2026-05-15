'use client';

import Reveal from '../../components/Reveal';
import Button, { ButtonArrow } from '../../components/Button';
import Marquee from '@/components/Marquee';

export default function Culture() {
  return (
    <article aria-label="Culture">
      {/* Hero Section - matches reference image */}
      <section className="bg-white text-black py-[clamp(80px,12vw,140px)] relative overflow-hidden" aria-labelledby="culture-h">
        <div className="wrap">
          <div className="grid grid-cols-[1.3fr_0.7fr] gap-[clamp(40px,8vw,100px)] items-start max-[880px]:grid-cols-1">

            {/* Left: Text */}
            <div className="max-w-[900px] max-[880px]:text-center max-[880px]:mx-auto">
              <Reveal>
                <span className="font-space text-[10px] font-medium tracking-[0.4em] uppercase text-[#999] block mb-6">Careers</span>
                <h1 id="culture-h" className="text-black text-[clamp(42px,5.5vw,72px)] leading-[1.05] font-bold tracking-[-0.02em] mb-10">
                  Good at what you do? Let&apos;s make it <em className="not-italic text-violet">better.</em>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="text-[clamp(18px,1.4vw,22px)] leading-[1.8] text-[#555] font-normal">
                  <p>We believe that how we work matters as much as what we create.</p>
                  <p>Curiosity drives us to explore beyond the obvious.</p>
                  <p>Openness keeps us looking for new ideas.</p>
                  <p>Action ensures insights turn into outcomes.</p>
                </div>
              </Reveal>
            </div>

            {/* Right: Halftone quarter-circle + CTA */}
            <div className="flex flex-col items-end gap-10 max-[880px]:items-center">
              <Reveal delay={0.15}>
                <div className="w-[340px] aspect-square ml-auto max-[880px]:mx-auto relative group border-none outline-none">
                  {/* REPLACE THE SRC BELOW WITH YOUR IMAGE PATH */}
                  <img
                    src="/assets/img/round.png"
                    alt="Pragyan Culture"
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 mix-blend-multiply border-none outline-none"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800';
                    }}
                  />
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <Button href="/inquiry" className="!bg-violet !text-white min-w-[220px] justify-center text-[11px] tracking-[0.15em] !py-[12px] font-normal uppercase">
                  JOIN THE TEAM
                </Button>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* Culture Features Section - matches staggered image reference */}
      <section className="bg-white text-black pt-[clamp(30px,5vw,60px)] pb-[clamp(80px,10vw,140px)]" aria-labelledby="features-h">
        <div className="wrap">
          <Reveal>
            <span className="font-space text-[clamp(12px,1.2vw,14px)] font-medium tracking-[0.5em] uppercase text-[#999] block mb-12 text-center sm:text-left">What we&apos;re looking for</span>
          </Reveal>

          <div className="grid grid-cols-4 gap-[clamp(20px,3vw,40px)] items-start max-[980px]:grid-cols-2 max-[580px]:grid-cols-1">

            {/* Feature 1: The Human Edge (Top) */}
            <Reveal delay={0.1}>
              <div className="flex flex-col items-center sm:items-start gap-6 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] group cursor-default">
                <div className="aspect-[1.5/1] w-full max-w-[450px] sm:max-w-none bg-[#f5f5f5] overflow-hidden relative">
                  <div className="absolute inset-0 bg-[url('/assets/img/c1.jpeg')] bg-cover bg-center grayscale transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/5" />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-[clamp(18px,1.6vw,22px)] font-bold tracking-[-0.01em] mb-4">The Human Edge</h4>
                  <p className="text-[clamp(15px,1.2vw,17px)] leading-[1.65] text-[#555]">
                    You trust lived experience and curiosity over any playbook.
                    <br /><br />
                    Real insight comes from being in the room, paying attention, and asking the right questions.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Feature 2: Intellectual Agility (Bottom Staggered) */}
            <Reveal delay={0.2}>
              <div className="flex flex-col items-center sm:items-start gap-6 translate-y-[clamp(40px,6vw,100px)] max-[980px]:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] group cursor-default">
                <div className="aspect-[1.5/1] w-full max-w-[450px] sm:max-w-none bg-[#f5f5f5] overflow-hidden relative">
                  <div className="absolute inset-0 bg-[url('/assets/img/c2.jpeg')] bg-cover bg-center grayscale transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/5" />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-[clamp(18px,1.6vw,22px)] font-bold tracking-[-0.01em] mb-4">Intellectual Agility</h4>
                  <p className="text-[clamp(15px,1.2vw,17px)] leading-[1.65] text-[#555]">
                    You&apos;re smart — and you know you don&apos;t know everything.
                    <br /><br />
                    You&apos;re ready to learn, unlearn, and stay hungry for the next insight.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Feature 3: A Bias for Action (Middle-Top Staggered) */}
            <Reveal delay={0.3}>
              <div className="flex flex-col items-center sm:items-start gap-6 translate-y-[-20px] max-[980px]:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] group cursor-default">
                <div className="aspect-[1.5/1] w-full max-w-[450px] sm:max-w-none bg-[#f5f5f5] overflow-hidden relative">
                  <div className="absolute inset-0 bg-[url('/assets/img/c3.jpeg')] bg-cover bg-center grayscale transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/5" />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-[clamp(18px,1.6vw,22px)] font-bold tracking-[-0.01em] mb-4">A Bias for Action</h4>
                  <p className="text-[clamp(15px,1.2vw,17px)] leading-[1.65] text-[#555]">
                    You&apos;d rather show a rough draft than wait for perfection.
                    <br /><br />
                    Problems don&apos;t need invites — you jump in and fix them.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Feature 4: Uniqueness (Top-Most Staggered) */}
            <Reveal delay={0.4}>
              <div className="flex flex-col items-center sm:items-start gap-6 translate-y-[-50px] max-[980px]:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] group cursor-default">
                <div className="aspect-[1.5/1] w-full max-w-[450px] sm:max-w-none bg-[#f5f5f5] overflow-hidden relative">
                  <div className="absolute inset-0 bg-[url('/assets/img/c4.jpeg')] bg-cover bg-center grayscale transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/5" />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-[clamp(18px,1.6vw,22px)] font-bold tracking-[-0.01em] mb-4">Uniqueness</h4>
                  <p className="text-[clamp(15px,1.2vw,17px)] leading-[1.65] text-[#555]">
                    Perspective is built from living, not just working.
                    <br /><br />
                    You carry something into every room that no one else does — and you know how to use it.
                  </p>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Benefits Section - matches black/blue grid reference */}
      <section className="bg-black text-white py-[clamp(100px,12vw,160px)]" aria-labelledby="benefits-h">
        <div className="wrap">
          <div className="text-center mb-16">
            <Reveal>
              <span className="font-space text-[clamp(12px,1.2vw,14px)] font-bold tracking-[0.6em] uppercase text-[#FFD111] block">Life at Pragyan</span>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 max-w-[1000px] mx-auto border border-white/10 overflow-hidden max-[768px]:grid-cols-1">

            <Reveal delay={0.1}>
              <div className="p-10 min-h-[240px] relative group overflow-hidden border-r border-b border-white/5 transition-all duration-500 ease-out hover:z-[2] hover:scale-[1.02] hover:border-[#FFD111]/40 cursor-default bg-black">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src="/assets/img/a.jpeg"
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1454165833767-027ff33027ef?auto=format&fit=crop&q=80&w=800';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors duration-500" />
                </div>
                {/* Scanline pattern overlay */}
                <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.3)_2px,rgba(255,255,255,0.3)_3px)] group-hover:opacity-[0.35] transition-opacity duration-500 z-[1]" />
                <div className="relative z-[2]">
                  <h4 className="text-[clamp(18px,1.5vw,22px)] font-bold tracking-[0.1em] uppercase mb-5 text-white group-hover:!text-[#FFD111] transition-colors duration-500">Market-Aligned Salary</h4>
                  <p className="text-[clamp(15px,1.2vw,17px)] leading-[1.7] text-white/70 max-w-[380px] group-hover:text-white transition-colors duration-500">
                    Compensation built around your role, your responsibilities, and the impact you create. Fair, transparent, and built to grow with you.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="p-10 min-h-[240px] relative group overflow-hidden border-b border-white/5 transition-all duration-500 ease-out hover:z-[2] hover:scale-[1.02] hover:border-[#FFD111]/40 cursor-default bg-black">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src="/assets/img/b.jpeg"
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors duration-500" />
                </div>
                {/* Scanline pattern overlay */}
                <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.3)_2px,rgba(255,255,255,0.3)_3px)] group-hover:opacity-[0.35] transition-opacity duration-500 z-[1]" />
                <div className="relative z-[2]">
                  <h4 className="text-[clamp(18px,1.5vw,22px)] font-bold tracking-[0.1em] uppercase mb-5 text-white group-hover:!text-[#FFD111] transition-colors duration-500">The Festive Reset</h4>
                  <p className="text-[clamp(15px,1.2vw,17px)] leading-[1.7] text-white/70 max-w-[380px] group-hover:text-white transition-colors duration-500">
                    Dedicated days off during the festive season to rest, reconnect, and come back with renewed perspective.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="p-10 min-h-[240px] relative group overflow-hidden border-r border-white/5 transition-all duration-500 ease-out hover:z-[2] hover:scale-[1.02] hover:border-[#FFD111]/40 cursor-default bg-black">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src="/assets/img/c.jpeg"
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=800';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors duration-500" />
                </div>
                {/* Scanline pattern overlay */}
                <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.3)_2px,rgba(255,255,255,0.3)_3px)] group-hover:opacity-[0.35] transition-opacity duration-500 z-[1]" />
                <div className="relative z-[2]">
                  <h4 className="text-[clamp(18px,1.5vw,22px)] font-bold tracking-[0.1em] uppercase mb-5 text-white group-hover:!text-[#FFD111] transition-colors duration-500">Time-Back Policy</h4>
                  <p className="text-[clamp(15px,1.2vw,17px)] leading-[1.7] text-white/70 max-w-[380px] group-hover:text-white transition-colors duration-500">
                    Go beyond when the work demands it — and we make sure you&apos;re fairly compensated for it. Your time is yours.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="p-10 min-h-[240px] relative group overflow-hidden transition-all duration-500 ease-out hover:z-[2] hover:scale-[1.02] hover:border-[#FFD111]/40 cursor-default bg-black">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src="/assets/img/d.jpeg"
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors duration-500" />
                </div>
                {/* Scanline pattern overlay */}
                <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.3)_2px,rgba(255,255,255,0.3)_3px)] group-hover:opacity-[0.35] transition-opacity duration-500 z-[1]" />
                <div className="relative z-[2]">
                  <h4 className="text-[clamp(18px,1.5vw,22px)] font-bold tracking-[0.1em] uppercase mb-5 text-white group-hover:!text-[#FFD111] transition-colors duration-500">Paid Vacation</h4>
                  <p className="text-[clamp(15px,1.2vw,17px)] leading-[1.7] text-white/70 max-w-[380px] group-hover:text-white transition-colors duration-500">
                    Fresh thinking comes from real living. Paid time off each year to step away, recharge, and experience life beyond work — whenever you choose.
                  </p>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>



      <section className="bg-black border-t border-white/5 relative overflow-hidden py-[clamp(60px,10vw,120px)]" aria-labelledby="culture-cta-h">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/img/culture.jpeg"
            alt=""
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600';
            }}
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>

        <div className="wrap relative z-[1]">
          <Reveal className="relative z-[1] max-w-[1000px] mx-auto p-[clamp(30px,5vw,60px)_clamp(40px,7vw,80px)] bg-white border border-white/10 text-center">
            {/* Small Label */}
            <span className="font-space block text-[clamp(11px,1.2vw,13px)] tracking-[0.5em] uppercase text-black/40 mb-7">Our Ecosystem</span>

            <h2 id="together-h" className="relative z-[1] !text-[clamp(24px,3.8vw,44px)] leading-[1.2] font-bold italic max-w-[820px] mx-auto text-black">
              &ldquo;Pragyan is built on shared progress.<br />
              We grow as individuals,<br />
              as a team, and as a company<br />
              &mdash; together.&rdquo;
            </h2>

            <div className="mt-10 flex justify-center">
              <Button href="/inquiry" className="!bg-[#FFD111] !text-black !py-[16px] !px-10 !text-[14px] font-bold tracking-[0.1em] rounded-none hover:brightness-110">
                JOIN THE TEAM
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <Marquee />

    </article>
  );
}
