'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Reveal from '../../components/Reveal';
import HomeSmoothScroll from '../../components/HomeSmoothScroll';

export default function AboutClient() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const yellowBgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const yellowBg = yellowBgRef.current;
    const text = textRef.current;

    if (!section || !yellowBg || !text) return;

    const mm = gsap.matchMedia();

    // ── DESKTOP SCROLL STACKED DECK ANIMATION (>= 768px) ──
    mm.add('(min-width: 768px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          id: 'about-deck-trigger',
          trigger: '#about-deck-container',
          start: 'top top',
          end: '+=200%', // Scroll for 2 full screen heights to stack 3 sections
          pin: true,
          pinSpacing: true,
          scrub: 1.2,
        }
      });

      // Section 2 slides up over Section 1
      tl.fromTo('#about-values-section',
        { yPercent: 100 },
        { yPercent: 0, ease: 'none' },
        0
      );

      // Section 3 slides up over Section 2
      tl.fromTo('#about-yellow-section',
        { yPercent: 100 },
        { yPercent: 0, ease: 'none' },
        1
      );

      // Animate yellow bg band height symmetrically while Section 3 is active/scrolled
      tl.fromTo(yellowBg,
        { scaleY: 0.3 },
        { scaleY: 1.0, ease: 'none' },
        1
      );
    });

    // ── MOBILE ACTIONS (< 768px) ──
    mm.add('(max-width: 767px)', () => {
      // Standard scale scroll animation for yellow bg on mobile
      gsap.fromTo(yellowBg,
        { scaleY: 0.55 },
        {
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
          scaleY: 1.0,
          ease: 'none',
        }
      );
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <>
      <HomeSmoothScroll />
      <div className="noise-effect" />
      <div id="smooth-wrapper" className="smooth-wrapper w-full bg-black">
        <div id="smooth-content" className="smooth-content w-full relative">
          <article aria-label="About">
            <div id="about-deck-container" className="relative w-full bg-black">
              <section id="about-hero-section" className="bg-white text-black pt-[clamp(140px,18vw,200px)] pb-[80px] md:pt-[130px] md:pb-[20px] md:min-h-[100svh] md:h-[100svh] md:flex md:flex-col md:justify-center relative overflow-hidden z-10 w-full" aria-labelledby="about-h">
                <div className="wrap text-center md:translate-y-[45px] lg:translate-y-[55px] transition-transform duration-500">
                  <Reveal>
                    <span className="text-nav-label tracking-[0.22em] uppercase text-[#6a6a6a] block mb-2">About Us</span>
                  </Reveal>

                  <Reveal delay={0.1}>
                    <h1 className="sr-only">Pragyan — A Brand Strategy &amp; Communications Agency in Ahmedabad</h1>
                    <h2 className="sr-only">We Don't Separate Thinking From Execution</h2>
                    <span id="about-h" className="text-hero text-black mb-4 md:mb-1 leading-[1.1em] block" aria-hidden="true">
                      <span className="block whitespace-nowrap">At Pragyan,</span>
                      <span className="block whitespace-nowrap">the human lens is</span>
                      <span className="block whitespace-nowrap bg-gradient-to-r from-[#161245] via-[#4B3FD4] to-[#786CF0] bg-clip-text text-transparent pb-2">
                        our sharpest tool.
                      </span>
                    </span>
                  </Reveal>

                  <Reveal delay={0.2} className="w-full flex justify-center text-center">
                    <div className="max-w-[1020px] md:max-w-[900px] w-full text-center space-y-2 md:space-y-1 text-main-desc text-[#555]">
                      <p>We&rsquo;re curious by nature, ethical by choice, and practical in action.</p>
                      <p>We believe brands are ultimately built by people &mdash; shaped by their experiences, values, ambitions,<br className="hidden md:block" /> and ways of seeing the world.</p>
                      <p className="md:whitespace-nowrap">That's why we take the time to understand what drives the work before deciding how the work should move forward.</p>
                      <p>Because when you understand the people behind a business, better decisions tend to follow.</p>
                    </div>
                  </Reveal>

                  <Reveal delay={0.4} className="mt-2 md:mt-0 relative flex justify-center">
                    <div className="w-full max-w-[1200px] md:max-w-[min(90%,75vh)] lg:max-w-[min(1100px,100vh)] aspect-[3/2] md:aspect-[2.5/1] relative bg-white group border-none outline-none overflow-hidden">
                      <img
                        src="/assets/img/About-us.webp"
                        alt="Pragyan branding agency team — Ahmedabad"
                        className="w-full h-full object-contain transition-transform duration-700 scale-[1.75] md:scale-[1.8] group-hover:scale-[1.85] md:group-hover:scale-[1.9] mix-blend-multiply"
                      />
                    </div>
                  </Reveal>
                </div>
              </section>

              <section id="about-values-section" className="md:absolute md:top-0 md:left-0 md:h-[100vh] h-auto bg-black text-white pt-[80px] pb-[60px] md:pt-[120px] md:pb-[40px] md:flex md:flex-col md:justify-center relative overflow-hidden z-20 w-full border-t border-white/10" aria-labelledby="values-h">
                <div className="section-noise-effect" />
                <div className="wrap">
                  <Reveal className="max-w-[1000px] mb-[clamp(56px,7vw,88px)] md:mb-4 lg:mb-6 xl:mb-10 2xl:mb-12">
                    <div className="md:-ml-48 xl:-ml-64">
                      <h2 className="sr-only">Meet the Team Behind Your Brand</h2>
                      <span className="text-nav-label tracking-[0.22em] uppercase text-[#d9d9d9] inline-block mb-8 md:mb-2" aria-hidden="true">Our team</span>
                      <span id="values-h" className="text-section-heading text-white max-w-[1200px] block" aria-hidden="true">
                        <span className="md:whitespace-nowrap">We&apos;re a team of strategists and creators</span><br />
                        who care deeply about the craft of<br />
                        what we do.
                      </span>
                    </div>
                  </Reveal>
                </div>

                {/* Flush-right container that bypasses wrap padding on the right */}
                <div className="w-full flex justify-end">
                  <Reveal delay={0.1} className="w-full flex justify-end">
                    <div className="flex flex-col max-w-[1380px] w-full md:w-[70%] lg:w-[60%] xl:w-[55%] 2xl:w-[50%] border-[1.5px] border-white/20 md:border-r-0 rounded-2xl md:rounded-l-2xl md:rounded-r-none overflow-hidden shadow-2xl ml-4 mr-4 md:ml-0 md:mr-0">
                      <div className="py-[clamp(35px,4vw,50px)] md:py-[clamp(18px,2vw,24px)] px-12 md:pl-10 lg:pl-12 xl:pl-14 md:pr-8 bg-[#414896] flex items-center min-h-[120px] md:min-h-[85px] border-b-[1.5px] border-white/10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#4a52ac] cursor-default relative z-[1]">
                        <h3 className="sr-only">Strategy-First</h3>
                        <p className="text-card-title !font-light text-[#f5f5f5]" aria-hidden="true">We ask better questions.</p>
                      </div>
                      <div className="py-[clamp(35px,4vw,50px)] md:py-[clamp(18px,2vw,24px)] px-12 md:pl-10 lg:pl-12 xl:pl-14 md:pr-8 bg-[#2B2F77] flex items-center min-h-[120px] md:min-h-[85px] border-b-[1.5px] border-white/10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#34398d] cursor-default relative z-[1]">
                        <h3 className="sr-only">Human-Centered</h3>
                        <p className="text-card-title !font-light text-[#f5f5f5]" aria-hidden="true">We challenge assumptions.</p>
                      </div>
                      <div className="py-[clamp(35px,4vw,50px)] md:py-[clamp(20px,2vw,26px)] px-12 md:pl-10 lg:pl-12 xl:pl-14 md:pr-8 bg-[#222] flex flex-col justify-center min-h-[150px] md:min-h-[100px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#2a2a2a] cursor-default relative z-[1]">
                        <h3 className="sr-only">Built to Scale</h3>
                        <p className="text-card-title !font-light text-[#f5f5f5]" aria-hidden="true">We refine relentlessly.</p>
                        <p className="text-card-title !font-light text-[#f5f5f5] mt-1" aria-hidden="true">And we don&rsquo;t settle for anything less than right.</p>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </section>

              {/* Animated Yellow Background Section */}
              <section
                id="about-yellow-section"
                ref={sectionRef}
                className="md:absolute md:top-0 md:left-0 md:h-[100vh] h-auto bg-black text-black md:py-0 md:h-[100svh] md:flex md:flex-col md:justify-center relative overflow-hidden z-30 w-full border-t border-[#333]"
                aria-labelledby="fewer-h"
              >
                <div className="w-full relative h-[70vh] md:h-[60vh] md:min-h-[400px] flex flex-col justify-center overflow-hidden">
                  {/* Animated Background Band */}
                  <div
                    ref={yellowBgRef}
                    className="absolute inset-0 bg-[#d9d9d9] z-0"
                    style={{ transformOrigin: 'center center' }}
                  />

                  {/* Foreground Text Content */}
                  <div
                    ref={textRef}
                    className="wrap text-black md:-translate-x-[14vw] md:-translate-y-12 relative z-10"
                  >
                    <h2 className="sr-only">Based in Ahmedabad. Built for Founders Everywhere.</h2>
                    <div className="flex flex-col gap-1 text-card-title !font-light text-[#1b1b1b]" aria-hidden="true">
                      <p>We believe in doing fewer things, better.</p>
                      <p>In building brands with intent.</p>
                    </div>

                    <p className="mt-8 text-section-heading text-[#1b1b1b] max-w-[850px]" id="fewer-h">
                      And in working with people<br />who care about the long game.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
