'use client';

import Reveal from '../../components/Reveal';
import Button, { ButtonArrow } from '../../components/Button';
import Marquee from '@/components/Marquee';

export default function Culture() {
  return (
    <article aria-label="Culture">
      {/* Hero Section - matches reference image */}
      <section className="bg-white text-black pt-[clamp(160px,18vw,220px)] pb-[clamp(80px,12vw,140px)] md:py-0 md:h-screen md:min-h-[750px] md:flex md:flex-col md:justify-center relative overflow-hidden" aria-labelledby="culture-h">
        <div className="wrap">
          <div className="grid grid-cols-[1.1fr_0.9fr] gap-[clamp(30px,5vw,70px)] items-center max-[880px]:grid-cols-1">

            {/* Left: Text */}
            <div className="max-w-[900px] max-[880px]:text-center max-[880px]:mx-auto flex flex-col items-start max-[880px]:items-center md:-translate-x-[3vw]">
              <Reveal>
                <span className="font-space text-[clamp(12px,0.85vw,16px)] font-light tracking-[0.22em] uppercase text-[#6a6a6a] block mb-6">Careers</span>
                <h1 id="culture-h" className="text-black font-sans text-[clamp(48px,6.2vw,84px)] leading-[1.05] font-extrabold tracking-[-0.025em] mb-10">
                  <span className="block md:inline md:whitespace-nowrap">Good at what you do?</span>
                  <br className="hidden md:block" />
                  <span className="block md:inline md:whitespace-nowrap">Let&apos;s make it <span className="inline-block bg-gradient-to-r from-[#161245] via-[#4B3FD4] to-[#786CF0] bg-clip-text text-transparent font-extrabold pb-2 px-1">better.</span></span>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="font-sans font-light text-[clamp(20px,1.6vw,26px)] leading-[1.7] text-[#6a6a6a]">
                  <p>We believe that how we work matters as much as what we create.</p>
                  <p>Curiosity drives us to explore beyond the obvious.</p>
                  <p>Openness keeps us looking for new ideas.</p>
                  <p>Action ensures insights turn into outcomes.</p>
                </div>
              </Reveal>
            </div>

            {/* Right: Halftone quarter-circle + CTA */}
            <div className="flex flex-col items-center justify-center w-full overflow-visible gap-4 relative">
              <Reveal delay={0.15} className="w-full overflow-visible">
                <div className="w-[400px] md:w-[550px] aspect-square ml-auto max-[880px]:mx-auto relative overflow-visible">
                  {/* REPLACE THE SRC BELOW WITH YOUR IMAGE PATH */}
                  <img
                    src="/assets/img/5.png"
                    alt="Pragyan Culture"
                    className="w-full h-full object-contain scale-[2.05] md:scale-[1.75] md:translate-x-[85px] origin-center mix-blend-multiply border-none outline-none transition-transform duration-700 hover:scale-[2.15] md:hover:scale-[1.85] hover:md:translate-x-[85px]"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800';
                    }}
                  />
                </div>
              </Reveal>
              <Reveal delay={0.2} className="relative z-10 mt-6 max-[880px]:mt-2">
                <Button href="/inquiry" className="!bg-violet !text-white min-w-[245px] justify-center text-[15px] tracking-[0.2em] !py-[15px] font-space font-light uppercase md:translate-x-[-40px]">
                  JOIN THE TEAM
                </Button>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* Culture Features Section - matches staggered image reference */}
      <section className="bg-white text-black pt-[clamp(30px,5vw,60px)] pb-[clamp(80px,10vw,140px)] md:py-0 md:h-screen md:min-h-[820px] md:flex md:flex-col md:justify-center relative overflow-hidden" aria-labelledby="features-h">

        <div className="wrap">
          <Reveal>
            <span className="font-space text-[clamp(12px,0.85vw,16px)] font-light tracking-[0.22em] uppercase text-[#6a6a6a] block mb-12 text-center sm:text-left">What we&apos;re looking for</span>
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
                  <h4 className="font-sans text-[clamp(22px,2vw,26px)] font-bold tracking-[-0.015em] mb-4 text-black">The Human Edge</h4>
                  <div className="font-sans font-light text-[clamp(18px,1.5vw,22px)] leading-[1.7] text-[#6a6a6a]">
                    <p style={{ display: 'block' }}>
                      You trust lived experience<br className="hidden md:block" />
                      and curiosity over any<br className="hidden md:block" />
                      playbook.<br className="hidden md:block" />
                      Real insight comes from<br className="hidden md:block" />
                      being in the room, paying<br className="hidden md:block" />
                      attention, and asking the<br className="hidden md:block" />
                      right questions.
                    </p>
                  </div>
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
                  <h4 className="font-sans text-[clamp(22px,2vw,26px)] font-bold tracking-[-0.015em] mb-4 text-black">Intellectual Agility</h4>
                  <div className="font-sans font-light text-[clamp(18px,1.5vw,22px)] leading-[1.7] text-[#6a6a6a]">
                    <p style={{ display: 'block' }}>
                      You&apos;re smart — and you<br className="hidden md:block" />
                      know you don&apos;t know<br className="hidden md:block" />
                      everything.<br className="hidden md:block" />
                      You&apos;re ready to learn,<br className="hidden md:block" />
                      unlearn, and stay hungry for<br className="hidden md:block" />
                      the next insight.
                    </p>
                  </div>
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
                  <h4 className="font-sans text-[clamp(22px,2vw,26px)] font-bold tracking-[-0.015em] mb-4 text-black">A Bias for Action</h4>
                  <div className="font-sans font-light text-[clamp(18px,1.5vw,22px)] leading-[1.7] text-[#6a6a6a]">
                    <p style={{ display: 'block' }}>
                      You&apos;d rather show a rough<br className="hidden md:block" />
                      draft than wait for<br className="hidden md:block" />
                      perfection.<br className="hidden md:block" />
                      Problems don&apos;t need<br className="hidden md:block" />
                      invites — you jump in and<br className="hidden md:block" />
                      fix them.
                    </p>
                  </div>
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
                  <h4 className="font-sans text-[clamp(22px,2vw,26px)] font-bold tracking-[-0.015em] mb-4 text-black">Uniqueness</h4>
                  <div className="font-sans font-light text-[clamp(18px,1.5vw,22px)] leading-[1.7] text-[#6a6a6a]">
                    <p style={{ display: 'block' }}>
                      Perspective is built from<br className="hidden md:block" />
                      living, not just working.<br className="hidden md:block" />
                      You carry something into<br className="hidden md:block" />
                      every room that no one<br className="hidden md:block" />
                      else does — and you know<br className="hidden md:block" />
                      how to use it.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Benefits Section - matches black/blue grid reference */}
      <section className="bg-black text-white py-[clamp(100px,12vw,160px)] md:py-0 md:h-screen md:min-h-[820px] md:flex md:flex-col md:justify-center relative overflow-hidden" aria-labelledby="benefits-h">
        <div className="wrap">
          <div className="text-center mb-16">
            <Reveal>
              <span className="font-space text-[clamp(12px,0.85vw,16px)] font-light tracking-[0.22em] uppercase text-[#FFD111] block">Life at Pragyan</span>
            </Reveal>
          </div>

          <Reveal>
            <div className="grid grid-cols-2 max-w-[1000px] mx-auto overflow-hidden max-[768px]:grid-cols-1">

              <div className="p-10 min-h-[240px] relative group overflow-hidden transition-all duration-500 ease-out cursor-default bg-black">
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
                  <div className="absolute inset-0 bg-[#261e7d]/65 group-hover:bg-[#261e7d]/45 transition-colors duration-500" />
                </div>
                {/* Scanline pattern overlay */}
                <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.3)_2px,rgba(255,255,255,0.3)_3px)] group-hover:opacity-[0.35] transition-opacity duration-500 z-[1]" />
                <div className="relative z-[2]">
                  <h4 className="font-sans text-[clamp(22px,1.8vw,26px)] font-bold tracking-[0.1em] uppercase mb-5 text-white group-hover:!text-[#FFD111] transition-colors duration-500">Market-Aligned Salary</h4>
                  <p className="font-sans font-light text-[clamp(17px,1.35vw,20px)] leading-[1.7] text-[#fefefe] max-w-[380px] transition-colors duration-500">
                    Compensation built around your role, your responsibilities, and the impact you create. Fair, transparent, and built to grow with you.
                  </p>
                </div>
              </div>

              <div className="p-10 min-h-[240px] relative group overflow-hidden transition-all duration-500 ease-out cursor-default bg-black">
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
                  <div className="absolute inset-0 bg-[#261e7d]/65 group-hover:bg-[#261e7d]/45 transition-colors duration-500" />
                </div>
                {/* Scanline pattern overlay */}
                <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.3)_2px,rgba(255,255,255,0.3)_3px)] group-hover:opacity-[0.35] transition-opacity duration-500 z-[1]" />
                <div className="relative z-[2]">
                  <h4 className="font-sans text-[clamp(22px,1.8vw,26px)] font-bold tracking-[0.1em] uppercase mb-5 text-white group-hover:!text-[#FFD111] transition-colors duration-500">The Festive Reset</h4>
                  <p className="font-sans font-light text-[clamp(17px,1.35vw,20px)] leading-[1.7] text-[#fefefe] max-w-[380px] transition-colors duration-500">
                    Dedicated days off during the festive season to rest, reconnect, and come back with renewed perspective.
                  </p>
                </div>
              </div>

              <div className="p-10 min-h-[240px] relative group overflow-hidden transition-all duration-500 ease-out cursor-default bg-black">
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
                  <div className="absolute inset-0 bg-[#261e7d]/65 group-hover:bg-[#261e7d]/45 transition-colors duration-500" />
                </div>
                {/* Scanline pattern overlay */}
                <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.3)_2px,rgba(255,255,255,0.3)_3px)] group-hover:opacity-[0.35] transition-opacity duration-500 z-[1]" />
                <div className="relative z-[2]">
                  <h4 className="font-sans text-[clamp(22px,1.8vw,26px)] font-bold tracking-[0.1em] uppercase mb-5 text-white group-hover:!text-[#FFD111] transition-colors duration-500">Time-Back Policy</h4>
                  <p className="font-sans font-light text-[clamp(17px,1.35vw,20px)] leading-[1.7] text-[#fefefe] max-w-[380px] transition-colors duration-500">
                    Go beyond when the work demands it — and we make sure you&apos;re fairly compensated for it. Your time is yours.
                  </p>
                </div>
              </div>

              <div className="p-10 min-h-[240px] relative group overflow-hidden transition-all duration-500 ease-out cursor-default bg-black">
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
                  <div className="absolute inset-0 bg-[#261e7d]/65 group-hover:bg-[#261e7d]/45 transition-colors duration-500" />
                </div>
                {/* Scanline pattern overlay */}
                <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.3)_2px,rgba(255,255,255,0.3)_3px)] group-hover:opacity-[0.35] transition-opacity duration-500 z-[1]" />
                <div className="relative z-[2]">
                  <h4 className="font-sans text-[clamp(22px,1.8vw,26px)] font-bold tracking-[0.1em] uppercase mb-5 text-white group-hover:!text-[#FFD111] transition-colors duration-500">Paid Vacation</h4>
                  <p className="font-sans font-light text-[clamp(17px,1.35vw,20px)] leading-[1.7] text-[#fefefe] max-w-[380px] transition-colors duration-500">
                    Fresh thinking comes from real living. Paid time off each year to step away, recharge, and experience life beyond work — whenever you choose.
                  </p>
                </div>
              </div>

            </div>
          </Reveal>

        </div>
      </section>



      <section className="bg-black border-t border-white/5 relative overflow-hidden py-[clamp(60px,10vw,120px)] md:py-0 md:h-screen md:min-h-[700px] md:flex md:flex-col md:justify-center" aria-labelledby="culture-cta-h">

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
          <Reveal className="relative z-[1] max-w-[1200px] mx-auto p-[clamp(30px,5vw,60px)_clamp(40px,7vw,80px)] bg-[#fcfcfc]/80 border border-white/20 text-center shadow-2xl">
            {/* Small Label */}
            <span className="font-space block text-[clamp(12px,0.85vw,16px)] font-light tracking-[0.22em] uppercase text-[#6a6a6a] mb-7">Our Ecosystem</span>

            <h2 id="together-h" className="relative z-[1] font-sans !text-[clamp(32px,3.8vw,48px)] leading-[1.35] font-bold italic max-w-[950px] mx-auto text-black tracking-[-0.02em]">
              <span className="block">Pragyan is built on shared progress.</span>
              <span className="block">We grow as individuals,</span>
              <span className="block">as a team, and as a company &mdash;</span>
              <span className="block !text-[clamp(58px,7.5vw,110px)] font-extrabold tracking-[-0.03em] mt-4 leading-[1.05]">together.</span>
            </h2>

            <div className="mt-10 flex justify-center">
              <Button href="/inquiry" className="!bg-[#FFD111] !text-black !py-[18px] !px-12 !text-[clamp(16px,1.1vw,19px)] font-space font-light tracking-[0.15em] rounded-none hover:brightness-110 transition-all duration-300">
                JOIN THE TEAM
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

    </article>
  );
}
