'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import HomeSmoothScroll from '../components/HomeSmoothScroll';

export default function Home() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Register ScrollTrigger safely on the client side
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    // ── DESKTOP SCROLL STACKED DECK ANIMATION (>= 768px) ──
    // Replicating the exact section transitions of interractlabs.com
    // Sections slide up and stack over each other.
    // Mimicking the vertical stretching/compression physics:
    // As a section enters, it expands vertically (scaleY: 0.75 -> 1.0).
    // As a section exits, it compresses vertically (scaleY: 1.0 -> 0.75).
    // Keeps backgrounds 100% solid and opaque (no transparency or text bleed).
    mm.add('(min-width: 768px)', () => {
      // Create a master pinned timeline for the deck container
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#deck-container',
          start: 'top top',
          end: '+=300%', // Scroll for 3 full screen heights to stack all sections
          pin: true,
          pinSpacing: true,
          scrub: 1.2, // Beautiful smooth inertia lag/delay matching Interract
        }
      });

      // ── TRANSITION 1: Hero -> Manifesto ──
      // Manifesto slides up cleanly from the bottom and stacks over Hero
      tl.fromTo('#manifesto-section',
        { yPercent: 100 },
        { yPercent: 0, ease: 'none' },
        0
      );

      // Original-font-retaining text gradient sliding reveal
      // Gradually slides white/yellow colors through the grey text as Manifesto slides up and pins!
      // Each line reveals in sequence one-by-one as the reader scrolls!
      tl.to('.text-sweep-line-1', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', ease: 'none' }, 0.15);
      tl.to('.text-sweep-line-2', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', ease: 'none' }, 0.24);
      tl.to('.text-sweep-line-3', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', ease: 'none' }, 0.33);
      tl.to('.text-sweep-line-4', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', ease: 'none' }, 0.42);
      tl.to('.text-sweep-line-5', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', ease: 'none' }, 0.51);
      tl.to('.text-sweep-line-6', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', ease: 'none' }, 0.60);

      // Delicate vertical translate3d parallax for the hero text elements
      tl.to('.hero-title-scroll', {
        y: 80,
        ease: 'none',
      }, 0);

      // ── TRANSITION 2: Manifesto -> Process ──
      // Process slides up cleanly from the bottom and stacks over Manifesto
      tl.fromTo('#process-section',
        { yPercent: 100 },
        { yPercent: 0, ease: 'none' },
        1
      );

      // ── TRANSITION 3: Process -> Breathe ──
      // Breathe slides up cleanly from the bottom and stacks over Process
      tl.fromTo('#breathe-section',
        { yPercent: 100 },
        { yPercent: 0, ease: 'none' },
        2
      );
    });

    // ── MOBILE TRANSITIONS (< 768px) ──
    mm.add('(max-width: 767px)', () => {
      // Smooth viewport clipPath reveal for mobile (sequential line-by-line)
      const mobileTl = gsap.timeline({
        scrollTrigger: {
          trigger: '#manifesto-section',
          start: 'top 82%',
          end: 'bottom 45%',
          scrub: true,
        }
      });
      mobileTl.to('.text-sweep-line-1', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', ease: 'none' });
      mobileTl.to('.text-sweep-line-2', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', ease: 'none' });
      mobileTl.to('.text-sweep-line-3', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', ease: 'none' });
      mobileTl.to('.text-sweep-line-4', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', ease: 'none' });
      mobileTl.to('.text-sweep-line-5', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', ease: 'none' });
      mobileTl.to('.text-sweep-line-6', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', ease: 'none' });
      // Simple viewport scroll-driven reveals for mobile
      const reveals = ['.manifesto-wrap', '#process-section', '#breathe-section'];
      reveals.forEach((sel) => {
        gsap.fromTo(sel,
          { opacity: 0.3, y: 30 },
          {
            scrollTrigger: {
              trigger: sel,
              start: 'top 85%',
              end: 'top 60%',
              scrub: true,
            },
            opacity: 1,
            y: 0,
          }
        );
      });
    });

    // ── OTHER DECORATIONS ──

    // Methodology cards fade up reveal
    const cards = document.querySelectorAll('.methodology-card-scroll');
    cards.forEach((card) => {
      gsap.fromTo(card,
        { opacity: 0.4, y: 30 },
        {
          scrollTrigger: {
            trigger: card,
            start: 'top 92%',
            end: 'top 74%',
            scrub: 1.0,
          },
          opacity: 1,
          y: 0,
          ease: 'power2.out',
        }
      );
    });

    // Process dividers scroll-linked line drawing (origin left scaleX animation)
    const dividers = document.querySelectorAll('.process-divider-line');
    dividers.forEach((divider) => {
      gsap.fromTo(divider,
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scrollTrigger: {
            trigger: divider,
            start: 'top 95%',
            end: 'top 82%',
            scrub: 0.8,
          },
          scaleX: 1,
          ease: 'power1.out',
        }
      );
    });

    // Process items scroll-linked fade in and slide up transitions
    const steps = document.querySelectorAll('.process-item');
    steps.forEach((step) => {
      gsap.fromTo(step,
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: step,
            start: 'top 92%',
            end: 'top 78%',
            scrub: 1.0,
          },
          opacity: 1,
          y: 0,
          ease: 'power2.out',
        }
      );
    });

    // Staggered grid project columns true parallax (varying speeds)
    const cols = document.querySelectorAll('.breathe-grid-col');
    cols.forEach((col, idx) => {
      const offsets = [20, 50, 25, 60, 30, 55];
      const offset = offsets[idx % 6];

      gsap.fromTo(col,
        { y: 30 },
        {
          scrollTrigger: {
            trigger: col,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
          y: -offset,
          ease: 'power1.out',
        }
      );
    });

    // ── INTERRACT-STYLE MOUSE SPOTLIGHT EFFECT (mouse-light) ──
    const hero = document.getElementById('hero-section');
    const mouseLight = document.getElementById('mouse-light');
    let handleMouseMove: ((e: MouseEvent) => void) | null = null;

    if (hero && mouseLight) {
      handleMouseMove = (e: MouseEvent) => {
        const rect = hero.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        mouseLight.style.background = `radial-gradient(circle at ${x}px ${y}px, transparent 0%, rgba(0, 0, 0, 1.0) 40%)`;
      };
      hero.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      // Clean up all matchMedia and ScrollTrigger instances on unmount
      mm.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      if (hero && handleMouseMove) {
        hero.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <>
      {/* Premium smooth scroll scroller integration */}
      <HomeSmoothScroll />

      {/* Animated Sparkling Shimmering Film Grain Noise Overlay ("jhhilmilata hua background") */}
      <div className="noise-effect" />

      {/* ── Interract-style Smooth Scroll DOM Wrapper Setup ── */}
      <div id="smooth-wrapper" className="smooth-wrapper w-full bg-black">
        <div id="smooth-content" className="smooth-content w-full relative">

          <article aria-label="Home" className="relative bg-black overflow-hidden">

            {/* Pinned Deck Container (Desktop: groups all absolute sections in a single viewport container) */}
            <div id="deck-container" className="relative w-full bg-black">

              {/* SECTION 1: HERO */}
              <section
                id="hero-section"
                className="md:min-h-[100svh] min-h-0 md:h-[100svh] h-auto relative overflow-hidden bg-black flex flex-col pb-8 md:pb-0 z-10 w-full"
                aria-labelledby="hero-h"
              >
                {/* Interactive Mouse Spotlight (Flashlight reveal overlay) */}
                <div id="mouse-light" className="mouse-light hidden md:block" />

                {/* Content Wrapper (Aligned perfectly left for an ultra-premium, high-end agency presentation) */}
                <div className="hero-content-fade relative z-[1] md:flex-1 flex flex-col justify-center max-w-[1600px] mx-auto w-full px-[var(--pad)] pt-[140px] md:pt-[clamp(160px,18vh,220px)] pb-12 md:pb-16 hero-title-scroll">
                  <div className="flex flex-col items-start gap-6 md:gap-7 lg:gap-8 max-w-[1000px] md:px-[4vw] lg:px-[6vw] xl:px-[8vw] w-full">

                    <Reveal>
                      <h1 id="hero-h" className="text-[clamp(32px,6.8vw,96px)] md:text-[clamp(42px,4.5vw,90px)] lg:text-[62px] xl:text-[76px] 2xl:text-[clamp(42px,4.5vw,90px)] leading-[1.08] font-sans !font-light text-[#fcfcfc] tracking-[-0.03em]">
                        <span className="whitespace-nowrap block">Behind every meaningful</span>
                        <span className="whitespace-nowrap block">
                          brand is a <span className="bg-gradient-to-r from-[#1E1F65] via-[#4E54D4] to-[#7678ED] bg-clip-text text-transparent inline-block animate-gradient-flow">perspective.</span>
                        </span>
                      </h1>
                    </Reveal>

                    <Reveal delay={0.12}>
                      <div className="flex flex-col gap-0.5 md:gap-1">
                        <p className="text-[clamp(17px,1.3vw,25px)] md:text-[clamp(19px,1.1vw,23px)] xl:text-[22px] 2xl:text-[clamp(20px,1.15vw,24px)] leading-[1.65] font-sans font-light text-[#C9C9CE] tracking-[-0.01em] whitespace-nowrap">
                          A founder&apos;s conviction.
                        </p>
                        <p className="text-[clamp(17px,1.3vw,25px)] md:text-[clamp(19px,1.1vw,23px)] xl:text-[22px] 2xl:text-[clamp(20px,1.15vw,24px)] leading-[1.65] font-sans font-light text-[#C9C9CE] tracking-[-0.01em] whitespace-nowrap">
                          A point of view worth building around.
                        </p>
                      </div>
                    </Reveal>

                    <Reveal delay={0.24}>
                      <div className="flex flex-col gap-4 max-w-[800px]">
                        <p className="text-[clamp(17px,1.3vw,25px)] md:text-[clamp(19px,1.1vw,23px)] xl:text-[22px] 2xl:text-[clamp(20px,1.15vw,24px)] leading-[1.65] text-[#C9C9CE] font-sans font-light">
                          <span className="sm:whitespace-nowrap">At Pragyan, we transform that conviction into strategy, identity,</span><br className="hidden sm:inline" /> communication, and growth.
                        </p>
                        <p className="text-[clamp(17px,1.3vw,25px)] md:text-[clamp(19px,1.1vw,23px)] xl:text-[22px] 2xl:text-[clamp(20px,1.15vw,24px)] leading-[1.65] text-[#C9C9CE] font-sans font-light">
                          <span className="sm:whitespace-nowrap">We partner with founders and teams to shape ideas into brands,</span><br className="hidden sm:inline" /> stories, and experiences that build connection, trust, and lasting impact.
                        </p>
                      </div>
                    </Reveal>

                    <Reveal delay={0.36} className="mt-2">
                      <Button
                        href="/services"
                        className="!bg-transparent !border !border-white/10 hover:!border-white !text-white/40 hover:!text-white font-space text-[17px] md:text-[18px] px-8 py-4 tracking-[0.15em] !font-light uppercase rounded-none transition-all duration-300 w-fit inline-flex items-center justify-center whitespace-nowrap"
                      >
                        VIEW SERVICES
                      </Button>
                    </Reveal>

                  </div>
                </div>
              </section>

              {/* SECTION 2: MANIFESTO & CAPABILITIES */}
              <section
                id="manifesto-section"
                className="md:absolute md:top-0 md:left-0 md:h-[100vh] h-auto bg-night border-t border-border shadow-[0_-30px_60px_rgba(0,0,0,0.85)] px-[var(--pad)] py-20 md:py-0 flex flex-col justify-center relative overflow-hidden z-20 w-full"
                aria-labelledby="man-h"
              >
                <div className="wrap w-full manifesto-wrap">
                  <Reveal className="max-w-[1300px] mx-auto text-center">
                    <span className="font-space text-[clamp(12px,0.85vw,16px)] font-light tracking-[0.22em] uppercase !text-[#a6a6a6] inline-block mb-4 md:mb-[clamp(10px,2vh,20px)]" id="man-h">
                      Core Philosophy
                    </span>
                    <div className="relative max-w-[1300px] mx-auto text-center flex flex-col items-center gap-1.5 md:gap-2">

                      {/* Line 1 */}
                      <div className="relative block w-full max-w-[90vw] md:w-fit select-none pointer-events-none">
                        <span className="block text-[clamp(17px,1.6vw,28px)] md:text-[18px] xl:text-[21px] 2xl:text-[clamp(22px,1.4vw,28px)] leading-[1.5] md:leading-[1.4] text-[#4A4A4D] font-sans tracking-[-0.01em] whitespace-normal md:whitespace-nowrap text-center">
                          From emerging ventures to growing businesses, we help meaningful
                        </span>
                        <span
                          className="text-sweep-line-1 absolute top-0 left-0 right-0 block text-[clamp(17px,1.6vw,28px)] md:text-[18px] xl:text-[21px] 2xl:text-[clamp(22px,1.4vw,28px)] leading-[1.5] md:leading-[1.4] text-[#E3E3E3] font-sans tracking-[-0.01em] w-full h-full pointer-events-none select-none whitespace-normal md:whitespace-nowrap overflow-hidden text-center"
                          style={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                        >
                          From emerging ventures to growing businesses, we help meaningful
                        </span>
                      </div>

                      {/* Line 2 */}
                      <div className="relative block w-full max-w-[90vw] md:w-fit select-none pointer-events-none">
                        <span className="block text-[clamp(17px,1.6vw,28px)] md:text-[18px] xl:text-[21px] 2xl:text-[clamp(22px,1.4vw,28px)] leading-[1.5] md:leading-[1.4] text-[#4A4A4D] font-sans tracking-[-0.01em] whitespace-normal md:whitespace-nowrap text-center">
                          ideas find their voice, earn attention, and create lasting impact.
                        </span>
                        <span
                          className="text-sweep-line-2 absolute top-0 left-0 right-0 block text-[clamp(17px,1.6vw,28px)] md:text-[18px] xl:text-[21px] 2xl:text-[clamp(22px,1.4vw,28px)] leading-[1.5] md:leading-[1.4] text-[#E3E3E3] font-sans tracking-[-0.01em] w-full h-full pointer-events-none select-none whitespace-normal md:whitespace-nowrap overflow-hidden text-center"
                          style={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                        >
                          ideas find their voice, earn attention, and create lasting impact.
                        </span>
                      </div>
                    </div>

                    <div className="relative max-w-[1300px] mx-auto text-center flex flex-col items-center gap-1.5 md:gap-2 mt-6 md:mt-[clamp(12px,2vh,24px)]">

                      {/* Line 3 */}
                      <div className="relative block w-full max-w-[90vw] md:w-fit select-none pointer-events-none">
                        <span className="block text-[clamp(17px,1.6vw,28px)] md:text-[18px] xl:text-[21px] 2xl:text-[clamp(22px,1.4vw,28px)] leading-[1.5] md:leading-[1.4] text-[#4A4A4D] font-sans tracking-[-0.01em] whitespace-normal md:whitespace-nowrap text-center">
                          We&apos;re a young team of strategists and creators who believe the
                        </span>
                        <span
                          className="text-sweep-line-3 absolute top-0 left-0 right-0 block text-[clamp(17px,1.6vw,28px)] md:text-[18px] xl:text-[21px] 2xl:text-[clamp(22px,1.4vw,28px)] leading-[1.5] md:leading-[1.4] text-[#E3E3E3] font-sans tracking-[-0.01em] w-full h-full pointer-events-none select-none whitespace-normal md:whitespace-nowrap overflow-hidden text-center"
                          style={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                        >
                          We&apos;re a young team of strategists and creators who believe the
                        </span>
                      </div>

                      {/* Line 4 */}
                      <div className="relative block w-full max-w-[90vw] md:w-fit select-none pointer-events-none">
                        <span className="block text-[clamp(17px,1.6vw,28px)] md:text-[18px] xl:text-[21px] 2xl:text-[clamp(22px,1.4vw,28px)] leading-[1.5] md:leading-[1.4] text-[#4A4A4D] font-sans tracking-[-0.01em] whitespace-normal md:whitespace-nowrap text-center">
                          best brands are built from human insight.
                        </span>
                        <span
                          className="text-sweep-line-4 absolute top-0 left-0 right-0 block text-[clamp(17px,1.6vw,28px)] md:text-[18px] xl:text-[21px] 2xl:text-[clamp(22px,1.4vw,28px)] leading-[1.5] md:leading-[1.4] text-[#E3E3E3] font-sans tracking-[-0.01em] w-full h-full pointer-events-none select-none whitespace-normal md:whitespace-nowrap overflow-hidden text-center"
                          style={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                        >
                          best brands are built from human insight.
                        </span>
                      </div>
                    </div>

                    <div className="relative max-w-[1300px] mx-auto text-center flex flex-col items-center gap-1.5 md:gap-2 mt-6 md:mt-[clamp(12px,2vh,24px)]">

                      {/* Line 5 */}
                      <div className="relative block w-full max-w-[90vw] md:w-fit select-none pointer-events-none">
                        <span className="block text-[clamp(17px,1.6vw,28px)] md:text-[18px] xl:text-[21px] 2xl:text-[clamp(22px,1.4vw,28px)] leading-[1.5] md:leading-[1.4] text-[#4A4A4D] font-sans tracking-[-0.01em] font-medium whitespace-normal md:whitespace-nowrap text-center">
                          We value curiosity, intellectual honesty, and long-term thinking.
                        </span>
                        <span
                          className="text-sweep-line-5 absolute top-0 left-0 right-0 block text-[clamp(17px,1.6vw,28px)] md:text-[18px] xl:text-[21px] 2xl:text-[clamp(22px,1.4vw,28px)] leading-[1.5] md:leading-[1.4] bg-gradient-to-r from-[#1E1F65] via-[#4B3FD4] to-[#7678ED] bg-clip-text text-transparent animate-gradient-flow font-sans tracking-[-0.01em] font-medium w-full h-full pointer-events-none select-none whitespace-normal md:whitespace-nowrap overflow-hidden text-center"
                          style={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                        >
                          We value curiosity, intellectual honesty, and long-term thinking.
                        </span>
                      </div>

                      {/* Line 6 */}
                      <div className="relative block w-full max-w-[90vw] md:w-fit select-none pointer-events-none">
                        <span className="block text-[clamp(17px,1.6vw,28px)] md:text-[18px] xl:text-[21px] 2xl:text-[clamp(22px,1.4vw,28px)] leading-[1.5] md:leading-[1.4] text-[#4A4A4D] font-sans tracking-[-0.01em] whitespace-normal md:whitespace-nowrap text-center">
                          We aren&apos;t for everyone &mdash; and we&apos;re okay with that.
                        </span>
                        <span
                          className="text-sweep-line-6 absolute top-0 left-0 right-0 block text-[clamp(17px,1.6vw,28px)] md:text-[18px] xl:text-[21px] 2xl:text-[clamp(22px,1.4vw,28px)] leading-[1.5] md:leading-[1.4] text-[#E3E3E3] font-sans tracking-[-0.01em] w-full h-full pointer-events-none select-none whitespace-normal md:whitespace-nowrap overflow-hidden text-center"
                          style={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                        >
                          We aren&apos;t for everyone &mdash; and we&apos;re okay with that.
                        </span>
                      </div>
                    </div>

                  </Reveal>

                  {/* Methodology Cards Section */}
                  <div className="methodology-section mt-10 md:mt-[clamp(10px,2vh,50px)] max-w-[1100px] md:max-w-[760px] xl:max-w-[920px] 2xl:max-w-[1100px] mx-auto">
                    <Reveal className="text-center mb-6 md:mb-4 lg:mb-5 xl:mb-6 2xl:mb-8">
                      <span className="font-space text-[clamp(12px,0.85vw,16px)] font-light tracking-[0.22em] uppercase !text-[#a6a6a6]" style={{ color: '#a6a6a6' }}>Methodology</span>
                    </Reveal>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-3 xl:gap-4 2xl:gap-6">
                      {[
                        {
                          text: <>We discuss before <br className="hidden md:block" /> we design.</>
                        },
                        {
                          text: <>We plan before <br className="hidden md:block" /> we build.</>
                        },
                        {
                          text: <>We work with you to turn <br className="hidden md:block" /> curiosity into creativity.</>
                        }
                      ].map((card, i) => (
                        <Reveal key={i} delay={i * 0.1} className="methodology-card-scroll">
                          <div className="card-gradient-flow border border-border-strong rounded-none overflow-hidden transition-all duration-500 hover:border-violet hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] h-full flex flex-col cursor-pointer">
                            <div className="p-8 md:p-6 xl:p-8 2xl:p-10 min-h-[140px] md:min-h-[120px] lg:min-h-[130px] xl:min-h-[140px] 2xl:min-h-[160px] flex items-center justify-center text-center flex-grow">
                              <p className="text-[#C9C9CE] text-[clamp(21px,1.5vw,26px)] md:text-[17px] xl:text-[20px] 2xl:text-[22px] leading-[1.45] font-light">
                                {card.text}
                              </p>
                            </div>
                          </div>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 3: PROCESS */}
              <section
                id="process-section"
                className="md:absolute md:top-0 md:left-0 md:h-[100vh] h-auto bg-white text-black border-t border-[#E5E5E7] shadow-[0_-30px_60px_rgba(0,0,0,0.2)] py-20 md:py-0 flex flex-col justify-center relative overflow-hidden z-30 w-full"
                aria-labelledby="process-h"
              >
                <div className="absolute right-0 top-0 w-[50%] h-full pointer-events-none hidden md:block z-[0]">
                  <img src="/assets/img/1.png" alt="" className="w-full h-full object-cover object-right" />
                </div>

                <div className="wrap relative z-[1] flex justify-start w-full px-[var(--pad)]">
                  <div className="w-full md:w-[90%] lg:w-[85%] md:pl-[4vw] lg:pl-[6vw]">
                    <div className="mb-[clamp(30px,5vh,64px)] md:mb-[clamp(16px,2.5vh,32px)] lg:mb-[clamp(20px,3.5vh,40px)] xl:mb-[clamp(24px,4.5vh,48px)] 2xl:mb-[clamp(32px,5.5vh,64px)] text-left">
                      <Reveal>
                        <span className="font-space font-light text-[clamp(12px,0.85vw,16px)] tracking-[0.22em] uppercase text-[#a6a6a6] block mb-2 md:mb-0.5">Process Index</span>
                        <h2 id="process-h" className="mt-4 md:mt-1 text-[#1b1b1b] tracking-[-0.03em] !text-[clamp(32px,3.5vw,56px)] md:!text-[28px] lg:!text-[34px] xl:!text-[42px] 2xl:!text-[clamp(34px,3.5vw,56px)]">
                          <span className="font-bold">How we</span> <em className="italic font-light">work.</em>
                        </h2>
                      </Reveal>
                    </div>

                    {/* Top line — before 01 */}
                    <div className="h-px bg-[#d9d9d9] mb-0 w-full md:w-[100%] process-divider-line" />

                    <div>
                      {[
                        { num: '01', title: 'Listen.', lineWidth: 'w-full md:w-[110%]', desc: <><span className="block md:whitespace-nowrap">Extract the identity that</span><span className="block md:whitespace-nowrap">drives the business.</span></> },
                        { num: '02', title: 'Think.', lineWidth: 'w-full md:w-[105%]', desc: <><span className="block md:whitespace-nowrap">Turn creativity into clear</span><span className="block md:whitespace-nowrap">direction.</span></> },
                        { num: '03', title: 'Simplify.', lineWidth: 'w-full md:w-[95%]', desc: <><span className="block md:whitespace-nowrap">Strip away the noise to</span><span className="block md:whitespace-nowrap">find the voice.</span></> },
                        { num: '04', title: 'Magnify.', lineWidth: 'w-full md:w-[100%]', desc: <><span className="block md:whitespace-nowrap">Take what works and help it</span><span className="block md:whitespace-nowrap">reach the right people.</span></> }
                      ].map((step, idx) => (
                        <Reveal key={idx} delay={idx * 0.1} className="process-item">
                          <div className="relative">
                            <div className="grid grid-cols-[44px_1fr] sm:grid-cols-[52px_300px_1fr] lg:grid-cols-[52px_200px_1fr] xl:grid-cols-[64px_300px_1fr] 2xl:grid-cols-[80px_460px_1fr] gap-x-8 md:gap-x-4 2xl:gap-x-8 items-center text-left py-[clamp(20px,2.5vw,36px)] md:py-[clamp(12px,2vh,24px)] lg:py-[clamp(16px,2.5vh,28px)] xl:py-[clamp(20px,3vh,32px)] 2xl:py-[clamp(24px,3.5vh,36px)] hover:pl-2 transition-all duration-300">
                              <div className="font-space text-[clamp(36px,3.5vw,52px)] md:text-[28px] lg:text-[36px] xl:text-[42px] 2xl:text-[clamp(36px,3.5vw,52px)] text-[#E0E0E0] font-normal leading-none self-start pt-1 sm:pt-0 sm:self-auto">{step.num}</div>
                              <div className="flex flex-col gap-3 sm:contents">
                                <div className="font-sans text-[clamp(28px,3.5vw,52px)] md:text-[22px] lg:text-[28px] xl:text-[34px] 2xl:text-[clamp(30px,3.5vw,52px)] font-extrabold tracking-[-0.02em] text-black leading-none">{step.title}</div>
                                <div className="font-sans font-light text-[#6a6a6a] text-[clamp(15px,1.4vw,22px)] md:text-[13px] lg:text-[14px] xl:text-[16px] 2xl:text-[clamp(16px,1.4vw,24px)] leading-[1.6]">{step.desc}</div>
                              </div>
                            </div>
                            <div className={`absolute bottom-0 left-0 h-px bg-[#d9d9d9] w-full ${step.lineWidth} process-divider-line`} />
                          </div>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 4: BREATHE / PROJECTS */}
              <section
                id="breathe-section"
                className="md:absolute md:top-0 md:left-0 md:h-[100vh] h-auto bg-black border-t border-border shadow-[0_-30px_60px_rgba(0,0,0,0.95)] py-20 md:py-0 flex flex-col justify-center relative overflow-hidden z-40 w-full"
                aria-labelledby="breathe-h"
              >
                <div className="wrap w-full px-[var(--pad)]">
                  <Reveal className="mb-[clamp(20px,3vh,48px)] max-w-[820px] text-center md:text-left mx-auto md:mx-0 lg:-translate-y-[15px] xl:-translate-y-[25px] 2xl:translate-y-0">
                    <span className="font-space text-[clamp(12px,0.85vw,16px)] font-light tracking-[0.22em] uppercase text-[#6A6A6A] mb-3 md:mb-[clamp(8px,1.5vh,16px)] block">Our Projects</span>
                    <h2 id="breathe-h" className="font-sans font-bold leading-[1.1] tracking-[-0.04em] text-white text-[clamp(28px,2.8vw,48px)] md:text-[clamp(26px,3vw,38px)] xl:text-[clamp(32px,3vw,48px)]">
                      Great ideas<br />
                      need room to <em className="italic font-light">breathe.</em>
                    </h2>
                    <p className="text-[#a5a5a5] text-[clamp(16px,1.5vw,26px)] md:text-[clamp(13px,1.2vw,16px)] xl:text-[clamp(15px,1.2vw,20px)] font-light leading-[1.6] mt-3 md:mt-[clamp(10px,2vh,24px)] italic max-w-[720px] mx-auto md:mx-0">
                      We&apos;re fine-tuning this section &mdash;<br />
                      come back soon to see the work we&apos;re excited to share.
                    </p>
                  </Reveal>

                  {/* Staggered Grid — 6 Columns with premium varying parallax speeds */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-3 xl:gap-4 items-start max-w-[1200px] md:max-w-[min(90%,140vh)] lg:max-w-[min(95%,150vh)] xl:max-w-[min(95%,160vh)] 2xl:max-w-[1200px] mx-auto w-full mt-[100px] md:mt-[150px] lg:mt-[180px]">
                    {/* 1. Project 1 */}
                    <div className="space-y-0 pt-0 breathe-grid-col">
                      <Reveal delay={0.1}>
                        <div className="rounded-none overflow-hidden aspect-[4/5] bg-ink border border-border transition-all duration-500 hover:scale-[1.03] hover:border-violet group cursor-pointer w-full">
                          <img src="/assets/img/g1.png" alt="" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
                        </div>
                      </Reveal>
                    </div>

                    {/* 2. Project 2 */}
                    <div className="space-y-0 pt-0 md:pt-4 2xl:pt-8 breathe-grid-col">
                      <Reveal delay={0.2}>
                        <div className="rounded-none overflow-hidden aspect-[3/4] bg-ink border border-border transition-all duration-500 hover:scale-[1.03] hover:border-violet group cursor-pointer w-full">
                          <img src="/assets/img/g2.png" alt="" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
                        </div>
                      </Reveal>
                    </div>

                    {/* 3. Project 3 */}
                    <div className="space-y-0 pt-0 md:pt-2 2xl:pt-4 breathe-grid-col">
                      <Reveal delay={0.3}>
                        <div className="rounded-none overflow-hidden aspect-square bg-ink border border-border transition-all duration-500 hover:scale-[1.03] hover:border-violet group cursor-pointer w-full">
                          <img src="/assets/img/g3.png" alt="" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
                        </div>
                      </Reveal>
                    </div>

                    {/* 4. Project 4 */}
                    <div className="space-y-0 pt-0 md:pt-6 2xl:pt-12 breathe-grid-col">
                      <Reveal delay={0.4}>
                        <div className="rounded-none overflow-hidden aspect-[4/3] bg-ink border border-border transition-all duration-500 hover:scale-[1.03] hover:border-violet group cursor-pointer w-full">
                          <img src="/assets/img/g4.png" alt="" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
                        </div>
                      </Reveal>
                    </div>

                    {/* 5. Project 5 */}
                    <div className="space-y-0 pt-0 md:pt-1 2xl:pt-3 breathe-grid-col">
                      <Reveal delay={0.5}>
                        <div className="rounded-none overflow-hidden aspect-[3/4] md:aspect-[3/4.2] 2xl:aspect-[3/5] bg-ink border border-border transition-all duration-500 hover:scale-[1.03] hover:border-violet group cursor-pointer w-full">
                          <img src="/assets/img/g5.png" alt="" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
                        </div>
                      </Reveal>
                    </div>

                    {/* 6. Project 6 */}
                    <div className="space-y-0 pt-0 md:pt-5 2xl:pt-10 breathe-grid-col">
                      <Reveal delay={0.6}>
                        <div className="rounded-none overflow-hidden aspect-[4/5] bg-ink border border-border transition-all duration-500 hover:scale-[1.03] hover:border-violet group cursor-pointer w-full">
                          <img src="/assets/img/g6.png" alt="" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
                        </div>
                      </Reveal>
                    </div>
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
