'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Reveal from '../../components/Reveal';
import Button, { ButtonArrow } from '../../components/Button';
import Marquee from '@/components/Marquee';
import HomeSmoothScroll from '../../components/HomeSmoothScroll';

export default function Culture() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    // ── DESKTOP SCROLL STACKED DECK ANIMATION (>= 768px) ──
    mm.add('(min-width: 768px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          id: 'culture-deck-trigger',
          trigger: '#culture-deck-container',
          start: 'top top',
          end: '+=300%', // 3 transitions
          pin: true,
          pinSpacing: true,
          scrub: 1.2,
        }
      });

      // Section 2 slides up over Section 1
      tl.fromTo('#culture-features-section',
        { yPercent: 100 },
        { yPercent: 0, ease: 'none' },
        0
      );

      // Section 3 slides up over Section 2
      tl.fromTo('#culture-benefits-section',
        { yPercent: 100 },
        { yPercent: 0, ease: 'none' },
        1
      );

      // Section 4 slides up over Section 3
      tl.fromTo('#culture-cta-section',
        { yPercent: 100 },
        { yPercent: 0, ease: 'none' },
        2
      );
    });

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <>
      <HomeSmoothScroll />
      <div className="noise-effect" />
      <div id="smooth-wrapper" className="smooth-wrapper w-full bg-black">
        <div id="smooth-content" className="smooth-content w-full relative">
          <article aria-label="Culture">
            <div id="culture-deck-container" className="relative w-full bg-black">
              {/* Hero Section - matches reference image */}
              <section id="culture-hero-section" className="bg-white text-black pt-[clamp(160px,18vw,220px)] pb-[clamp(80px,12vw,140px)] md:py-0 md:min-h-screen md:h-screen md:flex md:flex-col md:justify-center relative overflow-x-hidden z-10 w-full" aria-labelledby="culture-h">
                <div className="wrap">
                  <div className="max-w-[1000px] max-[880px]:text-center max-[880px]:mx-auto flex flex-col items-start max-[880px]:items-center md:-translate-x-[4vw] lg:-translate-x-[5vw] transition-transform duration-500">
                    <Reveal>
                      <span className="text-nav-label tracking-[0.22em] uppercase text-[#6a6a6a] block mb-6 md:mb-4">Careers</span>
                      <h1 id="culture-h" className="text-hero text-black mb-10 md:mb-6">
                        <span className="block md:inline md:whitespace-nowrap">Good at what you do?</span>
                        <br className="hidden md:block" />
                        <span className="block md:inline md:whitespace-nowrap">Let&apos;s make it <span className="inline-block bg-gradient-to-r from-[#161245] via-[#4B3FD4] to-[#786CF0] bg-clip-text text-transparent pb-2 px-1">better.</span></span>
                      </h1>
                    </Reveal>
                    <Reveal delay={0.1}>
                      <div className="text-main-desc text-[#6a6a6a] mb-10 md:mb-8">
                        <p className="md:whitespace-nowrap">We believe that how we work matters as much as what we create.</p>
                        <p>Curiosity drives us to explore beyond the obvious.</p>
                        <p>Openness keeps us looking for new ideas.</p>
                        <p>Action ensures insights turn into outcomes.</p>
                      </div>
                    </Reveal>
                    <Reveal delay={0.2} className="relative z-10">
                      <Button href="/inquiry" variant="on-white" className="min-w-[245px] md:min-w-[200px] justify-center text-nav-label tracking-[0.2em] !py-[15px] md:!py-[12px] uppercase">
                        JOIN THE TEAM
                      </Button>
                    </Reveal>
                  </div>
                </div>
              </section>

              {/* Culture Features Section - matches staggered image reference */}
              <section id="culture-features-section" className="md:absolute md:top-0 md:left-0 md:h-[100vh] h-auto bg-white text-black pt-[clamp(30px,5vw,60px)] pb-[clamp(80px,10vw,140px)] md:pt-[90px] md:pb-0 md:flex md:flex-col md:justify-center relative overflow-hidden z-20 w-full border-t border-[#E5E5E7]" aria-labelledby="features-h">
                <div className="wrap">
                  <Reveal>
                    <span className="text-nav-label tracking-[0.22em] uppercase text-[#6a6a6a] block mb-12 md:mb-4 text-center sm:text-left md:-translate-y-[15px]">What we&apos;re looking for</span>
                  </Reveal>

                  <div className="grid grid-cols-4 gap-[clamp(24px,4vw,48px)] md:gap-8 lg:gap-10 xl:gap-12 items-start max-[980px]:grid-cols-2 max-[580px]:grid-cols-1">
                    {/* Feature 1: The Human Edge (Top) */}
                    <Reveal delay={0.1}>
                      <div className="flex flex-col items-center sm:items-start gap-6 md:gap-3 lg:gap-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] group cursor-default">
                        <div className="aspect-[1.5/1] w-full max-w-[450px] sm:max-w-none bg-[#f5f5f5] rounded-[20px] overflow-hidden relative">
                          <div className="absolute inset-0 bg-[url('/assets/img/c1.jpeg')] bg-cover bg-center grayscale transition-transform duration-700 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-black/5" />
                        </div>
                        <div className="text-center sm:text-left">
                          <h4 className="text-card-title mb-4 md:mb-2 text-black">The Human Edge</h4>
                          <div className="text-small-desc text-[#6a6a6a]">
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
                      <div className="flex flex-col items-center sm:items-start gap-6 md:gap-3 lg:gap-4 translate-y-[clamp(40px,6vw,100px)] md:translate-y-[20px] lg:translate-y-[40px] xl:translate-y-[60px] max-[980px]:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] group cursor-default">
                        <div className="aspect-[1.5/1] w-full max-w-[450px] sm:max-w-none bg-[#f5f5f5] rounded-[20px] overflow-hidden relative">
                          <div className="absolute -inset-6 bg-[url('/assets/img/c2.jpeg')] bg-cover bg-center grayscale transition-transform duration-700 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-black/5" />
                        </div>
                        <div className="text-center sm:text-left">
                          <h4 className="text-card-title mb-4 md:mb-2 text-black">Intellectual Agility</h4>
                          <div className="text-small-desc text-[#6a6a6a]">
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
                      <div className="flex flex-col items-center sm:items-start gap-6 md:gap-3 lg:gap-4 translate-y-[-20px] md:translate-y-0 max-[980px]:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] group cursor-default">
                        <div className="aspect-[1.5/1] w-full max-w-[450px] sm:max-w-none bg-[#f5f5f5] rounded-[20px] overflow-hidden relative">
                          <div className="absolute inset-0 bg-[url('/assets/img/c3.jpeg')] bg-cover bg-center grayscale transition-transform duration-700 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-black/5" />
                        </div>
                        <div className="text-center sm:text-left">
                          <h4 className="text-card-title mb-4 md:mb-2 text-black">A Bias for Action</h4>
                          <div className="text-small-desc text-[#6a6a6a]">
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
                      <div className="flex flex-col items-center sm:items-start gap-6 md:gap-3 lg:gap-4 translate-y-[-50px] md:translate-y-[-20px] lg:translate-y-[-30px] max-[980px]:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] group cursor-default">
                        <div className="aspect-[1.5/1] w-full max-w-[450px] sm:max-w-none bg-[#f5f5f5] rounded-[20px] overflow-hidden relative">
                          <div className="absolute inset-0 bg-[url('/assets/img/c4.jpeg')] bg-cover bg-center grayscale transition-transform duration-700 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-black/5" />
                        </div>
                        <div className="text-center sm:text-left">
                          <h4 className="text-card-title mb-4 md:mb-2 text-black">Uniqueness</h4>
                          <div className="text-small-desc text-[#6a6a6a]">
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
              <section id="culture-benefits-section" className="md:absolute md:top-0 md:left-0 md:h-[100vh] h-auto bg-black text-white pt-[clamp(60px,10vw,100px)] pb-[clamp(80px,12vw,140px)] md:py-0 md:flex md:flex-col md:justify-center relative overflow-hidden z-30 w-full border-t border-white/10" aria-labelledby="benefits-h">
                <div className="section-noise-effect" />
                <div className="wrap">
                  <div className="text-center mb-16 md:mb-8">
                    <Reveal>
                      <span className="text-nav-label tracking-[0.22em] uppercase text-[#6a6a6a] block">Life at Pragyan</span>
                    </Reveal>
                  </div>

                  <Reveal>
                    <div className="grid grid-cols-2 gap-6 max-w-[1150px] mx-auto max-[768px]:grid-cols-1">
                      {/* Card 1 */}
                      <div className="p-10 md:p-8 lg:p-10 min-h-[240px] md:min-h-[230px] rounded-[12px] border border-white/10 relative group transition-all duration-500 ease-out cursor-default bg-[#121212] hover:bg-white hover:border-white hover:shadow-[0_20px_40px_rgba(255,255,255,0.06)] flex flex-col justify-center">
                        <div className="relative z-10">
                          <h4 className="text-card-title tracking-[0.1em] md:tracking-[0.05em] uppercase mb-5 md:mb-3 text-white group-hover:text-black transition-colors duration-500 md:whitespace-nowrap md:text-[20px] lg:text-[22px]">Market-Aligned Salary</h4>
                          <p className="text-small-desc text-[#A1A1AA] max-w-[380px] group-hover:text-[#27272A] transition-colors duration-500">
                            Compensation built around your role, <br className="hidden md:block" />your responsibilities, and the <br className="hidden md:block" />impact you create. Fair, transparent, <br className="hidden md:block" />and built to grow with you.
                          </p>
                        </div>
                      </div>

                      {/* Card 2 */}
                      <div className="p-10 md:p-8 lg:p-10 min-h-[240px] md:min-h-[230px] rounded-[12px] border border-white/10 relative group transition-all duration-500 ease-out cursor-default bg-[#121212] hover:bg-white hover:border-white hover:shadow-[0_20px_40px_rgba(255,255,255,0.06)] flex flex-col justify-center">
                        <div className="relative z-10">
                          <h4 className="text-card-title tracking-[0.1em] md:tracking-[0.05em] uppercase mb-5 md:mb-3 text-white group-hover:text-black transition-colors duration-500 md:whitespace-nowrap md:text-[20px] lg:text-[22px]">The Festive Reset</h4>
                          <p className="text-small-desc text-[#A1A1AA] max-w-[380px] group-hover:text-[#27272A] transition-colors duration-500">
                            Dedicated days off during the festive <br className="hidden md:block" />season to rest, <br className="hidden md:block" />reconnect, and come back <br className="hidden md:block" />with renewed perspective.
                          </p>
                        </div>
                      </div>

                      {/* Card 3 */}
                      <div className="p-10 md:p-8 lg:p-10 min-h-[240px] md:min-h-[230px] rounded-[12px] border border-white/10 relative group transition-all duration-500 ease-out cursor-default bg-[#121212] hover:bg-white hover:border-white hover:shadow-[0_20px_40px_rgba(255,255,255,0.06)] flex flex-col justify-center">
                        <div className="relative z-10">
                          <h4 className="text-card-title tracking-[0.1em] md:tracking-[0.05em] uppercase mb-5 md:mb-3 text-white group-hover:text-black transition-colors duration-500 md:whitespace-nowrap md:text-[20px] lg:text-[22px]">Time-Back Policy</h4>
                          <p className="text-small-desc text-[#A1A1AA] max-w-[380px] group-hover:text-[#27272A] transition-colors duration-500">
                            Go beyond when the work demands it — <br className="hidden md:block" />and we make sure you&apos;re fairly <br className="hidden md:block" />compensated for it. <br className="hidden md:block" />Your time is yours.
                          </p>
                        </div>
                      </div>

                      {/* Card 4 */}
                      <div className="p-10 md:p-8 lg:p-10 min-h-[240px] md:min-h-[230px] rounded-[12px] border border-white/10 relative group transition-all duration-500 ease-out cursor-default bg-[#121212] hover:bg-white hover:border-white hover:shadow-[0_20px_40px_rgba(255,255,255,0.06)] flex flex-col justify-center">
                        <div className="relative z-10">
                          <h4 className="text-card-title tracking-[0.1em] md:tracking-[0.05em] uppercase mb-5 md:mb-3 text-white group-hover:text-black transition-colors duration-500 md:whitespace-nowrap md:text-[20px] lg:text-[22px]">Paid Vacation</h4>
                          <p className="text-small-desc text-[#A1A1AA] max-w-[380px] group-hover:text-[#27272A] transition-colors duration-500">
                            Fresh thinking comes from real living. <br className="hidden md:block" />Paid time off each year to step <br className="hidden md:block" />away, recharge, and experience <br className="hidden md:block" />life beyond work — whenever you choose.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </section>

              {/* Ecosystem/CTA section */}
              <section id="culture-cta-section" className="md:absolute md:top-0 md:left-0 md:h-[100vh] h-auto bg-black border-t border-white/5 relative overflow-hidden py-[clamp(60px,10vw,120px)] md:py-0 md:flex md:flex-col md:justify-center z-40 w-full border-t border-white/5" aria-labelledby="culture-cta-h">
                <div className="section-noise-effect" />
                <div className="wrap relative z-[1]">
                  <Reveal className="relative z-[1] max-w-[1200px] mx-auto p-[clamp(20px,3vw,35px)_clamp(50px,8vw,120px)] md:p-[25px_80px] bg-[#fcfcfc]/80 border border-white/20 text-center shadow-2xl rounded-[20px]">
                    {/* Small Label */}
                    <span className="text-nav-label block tracking-[0.22em] uppercase text-[#6a6a6a] mb-7 md:mb-4">Our Ecosystem</span>

                    <h2 id="together-h" className="relative z-[1] text-section-heading leading-[1.35] md:leading-[1.25] italic max-w-[950px] mx-auto text-black tracking-[-0.02em]">
                      <span className="block">Pragyan is built on shared progress.</span>
                      <span className="block">We grow as individuals,</span>
                      <span className="block">as a team, and as a company &mdash;</span>
                      <span className="block text-hero !font-extrabold tracking-[-0.03em] mt-4 md:mt-2 leading-[1.05]">together.</span>
                    </h2>

                    <div className="mt-12 md:mt-8 flex justify-center">
                      <Button href="/inquiry" variant="on-white" className="!py-[18px] md:!py-[14px] !px-12 md:!px-8 text-nav-label tracking-[0.15em] uppercase">
                        JOIN THE TEAM
                      </Button>
                    </div>
                  </Reveal>
                </div>
              </section>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
