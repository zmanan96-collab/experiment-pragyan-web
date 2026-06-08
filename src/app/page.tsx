'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import HomeSmoothScroll from '../components/HomeSmoothScroll';

const projects = [
  {
    title: "ATC CHAINS INDIA",
    tags: ["MANUFACTURING", "CONVEYOR COMPONENTS", "FOOD & BEVERAGE"],
    image: "/ATC-card.webp"
  },
  {
    title: "GLOBAL GUARDIANS SCHOOL",
    tags: ["Industry: Education"],
    image: "/ggs-card.webp"
  },
  {
    title: "BHAVYA SRISHTI UDYOG",
    tags: ["Industry: Sustainable Manufacturing", "Bamboo"],
    image: "/bsu-card.webp"
  },
  {
    title: "SHREEJI ENTERPRISE",
    tags: ["Industry: Engineered Roofing Solutions"],
    image: "/card shree ji.webp"
  },
  {
    title: "YASH ENGINEERS (INDIA) PVT. LTD.",
    tags: ["Industry: Industrial Machinery"],
    image: "/yash-card.webp"
  },
  {
    title: "BHAKTINANDAN",
    tags: ["Industry: Consumer Goods / Cold-Pressed Oils"],
    image: "/Bhaktinandan-card.webp"
  },
  {
    title: "GANESH VERMA",
    tags: ["Personal Branding & LinkedIn"],
    image: "/ganesh-card.webp"
  },
  {
    title: "Apartamento",
    tags: ["PHOTOGRAPHY", "CREATIVE"],
    image: "https://images.unsplash.com/photo-1542241647-9cbb2225278b?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const children = container.children;
    if (children.length === 0) return;

    let closestIndex = 0;
    let closestDistance = Infinity;
    const containerCenter = container.getBoundingClientRect().left + container.clientWidth / 2;

    for (let i = 0; i < children.length; i++) {
      const child = children[i] as HTMLElement;
      const rect = child.getBoundingClientRect();
      const childCenter = rect.left + rect.width / 2;
      const distance = Math.abs(childCenter - containerCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = i;
      }
    }
    setActiveSlide(closestIndex);
  };

  const scrollToSlide = (index: number) => {
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      const trigger = ScrollTrigger.getById('deck-trigger');
      if (trigger) {
        const start = trigger.start;
        const end = trigger.end;
        const totalHeight = end - start;
        const horizontalProgress = index / (projects.length - 1);
        const timelineProgress = (4.0 + horizontalProgress * 1.5) / 5.5;
        const targetScroll = start + timelineProgress * totalHeight;
        window.scrollTo({
          top: targetScroll,
          behavior: 'smooth'
        });
      }
    } else {
      if (!sliderRef.current) return;
      const container = sliderRef.current;
      const children = container.children;
      if (children[index]) {
        children[index].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
        setActiveSlide(index);
      }
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

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
          id: 'deck-trigger',
          trigger: '#deck-container',
          start: 'top top',
          end: '+=550%', // Scroll for 5.5 full screen heights to stack sections and horizontal scroll projects
          pin: true,
          pinSpacing: true,
          scrub: 1.2, // Beautiful smooth inertia lag/delay matching Interract
          onUpdate: (self) => {
            // Mapping timeline progress to active slide index during horizontal scroll portion (time 4.0 to 5.5)
            const time = self.progress * 5.5;
            if (time < 4.0) {
              setActiveSlide(0);
            } else if (time >= 4.0 && time <= 5.5) {
              const horizontalProgress = (time - 4.0) / 1.5;
              const index = Math.min(
                projects.length - 1,
                Math.max(0, Math.round(horizontalProgress * (projects.length - 1)))
              );
              setActiveSlide(index);
            }
          }
        }
      });

      // ── TRANSITION 1: Hero -> Core Philosophy ──
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

      // ── TRANSITION 2: Core Philosophy -> Methodology ──
      // Methodology slides up cleanly from the bottom and stacks over Core Philosophy
      tl.fromTo('#methodology-section',
        { yPercent: 100 },
        { yPercent: 0, ease: 'none' },
        1
      );

      // ── TRANSITION 3: Methodology -> Process ──
      // Process slides up cleanly from the bottom and stacks over Methodology
      tl.fromTo('#process-section',
        { yPercent: 100 },
        { yPercent: 0, ease: 'none' },
        2
      );

      // ── TRANSITION 4: Process -> Breathe ──
      // Breathe slides up cleanly from the bottom and stacks over Process
      tl.fromTo('#breathe-section',
        { yPercent: 100 },
        { yPercent: 0, ease: 'none' },
        3
      );

      // ── TRANSITION 5: Horizontal scroll of projects-track ──
      // Driven by vertical scroll from time 4 to 5.5
      tl.to('#projects-track', {
        x: () => {
          const track = document.getElementById('projects-track');
          if (!track) return 0;
          const trackWidth = track.offsetWidth || track.scrollWidth;
          return -(trackWidth - window.innerWidth);
        },
        ease: 'none'
      }, 4);
    });

    // ── MOBILE TRANSITIONS (< 768px) ──
    mm.add('(max-width: 767px)', () => {
      // Smooth viewport clipPath reveal for mobile (sequential line-by-line)
      const mobileTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.manifesto-wrap',
          start: 'top 80%',
          end: 'bottom 25%',
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
      const reveals = ['.manifesto-wrap', '.methodology-wrap', '#process-section', '#breathe-section'];
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
                <div className="hero-content-fade relative z-[1] md:flex-1 flex flex-col justify-center max-w-[1600px] mx-auto w-full px-[var(--pad)] pt-[140px] md:pt-[100px] lg:pt-[120px] pb-12 md:pb-16 hero-title-scroll">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16 w-full">

                    {/* Left Column: Heading & Content */}
                    <div className="flex flex-col items-start gap-6 md:gap-7 lg:gap-8 w-full md:w-[60%] max-w-[1000px] px-8 md:px-[4vw] lg:px-[6vw] xl:px-[8vw]">
                      <Reveal>
                        <h1 id="hero-h" className="text-hero text-[#fcfcfc]">
                          <span className="whitespace-normal md:whitespace-nowrap block">Behind every</span>
                          <span className="whitespace-normal md:whitespace-nowrap block">meaningful brand</span>
                          <span className="whitespace-normal md:whitespace-nowrap block">
                            is a <span className="bg-gradient-to-r from-[#1E1F65] via-[#4E54D4] to-[#7678ED] bg-clip-text text-transparent inline-block animate-gradient-flow">perspective.</span>
                          </span>
                        </h1>
                      </Reveal>

                      {/* Mobile Video (Placed exactly after H1) */}
                      <Reveal delay={0.1} className="w-full flex md:hidden justify-center relative z-10 select-none pointer-events-none mt-[5%] mb-2">
                        <video
                          src="/home-hero.webm"
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full aspect-square max-w-[400px] object-contain pointer-events-none mix-blend-screen scale-[1.20] translate-y-[5%]"
                        />
                      </Reveal>

                      <Reveal delay={0.12}>
                        <div className="flex flex-col gap-0.5 md:gap-1 max-md:mt-[2vh]">
                          <p className="text-main-desc text-[#C9C9CE] whitespace-normal md:whitespace-nowrap">
                            A founder&apos;s conviction.
                          </p>
                          <p className="text-main-desc text-[#C9C9CE] whitespace-normal md:whitespace-nowrap">
                            A point of view worth building around.
                          </p>
                        </div>
                      </Reveal>

                      <Reveal delay={0.24}>
                        <div className="flex flex-col gap-4 max-w-[800px]">
                          <p className="text-main-desc text-[#C9C9CE]">
                            <span className="sm:whitespace-nowrap">At Pragyan, we transform that conviction into strategy, identity,</span><br className="hidden sm:inline" /> communication, and growth.
                          </p>
                          <p className="text-main-desc text-[#C9C9CE]">
                            <span className="sm:whitespace-nowrap">We partner with founders and teams to shape ideas into brands,</span><br className="hidden sm:inline" /> stories, and experiences that build connection, trust, and lasting impact.
                          </p>
                        </div>
                      </Reveal>

                      <Reveal delay={0.36} className="mt-2">
                        <Button
                          href="/services"
                          className="uppercase w-fit inline-flex items-center justify-center whitespace-nowrap"
                        >
                          VIEW SERVICES
                        </Button>
                      </Reveal>
                    </div>

                    {/* Right Column: Video (Desktop) */}
                    <div className="hidden md:flex w-full md:w-[40%] px-8 md:px-0 justify-center md:justify-end xl:justify-center relative z-10 select-none pointer-events-none">
                      <Reveal delay={0.4} className="w-full flex justify-end">
                        <video
                          src="/home-hero.webm"
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full aspect-square max-w-[500px] object-contain pointer-events-none mix-blend-screen scale-[1.20]"
                        />
                      </Reveal>
                    </div>

                  </div>
                </div>
              </section>

              {/* SECTION 2: CORE PHILOSOPHY */}
              <section
                id="manifesto-section"
                className="md:absolute md:top-0 md:left-0 md:h-[100vh] h-auto bg-night border-t border-border shadow-[0_-30px_60px_rgba(0,0,0,0.85)] px-[var(--pad)] py-20 md:py-0 flex flex-col justify-center relative overflow-hidden z-20 w-full"
                aria-labelledby="man-h"
              >
                <div className="wrap w-full manifesto-wrap">
                  <Reveal className="max-w-[1300px] mx-auto text-center">
                    <span className="text-nav-label tracking-[0.22em] !text-[#a6a6a6] inline-block mb-4 md:mb-[clamp(10px,2vh,20px)]" id="man-h">
                      Why Pragyan
                    </span>
                    <div className="relative max-w-[1300px] mx-auto text-center flex flex-col items-center gap-1.5 md:gap-2">

                      {/* Line 1 */}
                      <div className="relative block w-full max-w-[90vw] md:w-fit select-none pointer-events-none">
                        <span className="block text-philosophy-desc text-[#4A4A4D] whitespace-normal md:whitespace-nowrap text-center">
                          From emerging ventures to growing businesses, we help meaningful
                        </span>
                        <span
                          className="text-sweep-line-1 absolute top-0 left-0 right-0 block text-philosophy-desc text-[#E3E3E3] w-full h-full pointer-events-none select-none whitespace-normal md:whitespace-nowrap overflow-hidden text-center"
                          style={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                        >
                          From emerging ventures to growing businesses, we help meaningful
                        </span>
                      </div>

                      {/* Line 2 */}
                      <div className="relative block w-full max-w-[90vw] md:w-fit select-none pointer-events-none">
                        <span className="block text-philosophy-desc text-[#4A4A4D] whitespace-normal md:whitespace-nowrap text-center">
                          ideas find their voice, earn attention, and create lasting impact.
                        </span>
                        <span
                          className="text-sweep-line-2 absolute top-0 left-0 right-0 block text-philosophy-desc text-[#E3E3E3] w-full h-full pointer-events-none select-none whitespace-normal md:whitespace-nowrap overflow-hidden text-center"
                          style={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                        >
                          ideas find their voice, earn attention, and create lasting impact.
                        </span>
                      </div>
                    </div>

                    <div className="relative max-w-[1300px] mx-auto text-center flex flex-col items-center gap-1.5 md:gap-2 mt-6 md:mt-[clamp(12px,2vh,24px)]">

                      {/* Line 3 */}
                      <div className="relative block w-full max-w-[90vw] md:w-fit select-none pointer-events-none">
                        <span className="block text-philosophy-desc text-[#4A4A4D] whitespace-normal md:whitespace-nowrap text-center">
                          We&apos;re a young team of strategists and creators who believe the
                        </span>
                        <span
                          className="text-sweep-line-3 absolute top-0 left-0 right-0 block text-philosophy-desc text-[#E3E3E3] w-full h-full pointer-events-none select-none whitespace-normal md:whitespace-nowrap overflow-hidden text-center"
                          style={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                        >
                          We&apos;re a young team of strategists and creators who believe the
                        </span>
                      </div>

                      {/* Line 4 */}
                      <div className="relative block w-full max-w-[90vw] md:w-fit select-none pointer-events-none">
                        <span className="block text-philosophy-desc text-[#4A4A4D] whitespace-normal md:whitespace-nowrap text-center">
                          best brands are built from human insight.
                        </span>
                        <span
                          className="text-sweep-line-4 absolute top-0 left-0 right-0 block text-philosophy-desc text-[#E3E3E3] w-full h-full pointer-events-none select-none whitespace-normal md:whitespace-nowrap overflow-hidden text-center"
                          style={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                        >
                          best brands are built from human insight.
                        </span>
                      </div>
                    </div>

                    <div className="relative max-w-[1300px] mx-auto text-center flex flex-col items-center gap-1.5 md:gap-2 mt-6 md:mt-[clamp(12px,2vh,24px)]">

                      {/* Line 5 */}
                      <div className="relative block w-full max-w-[90vw] md:w-fit select-none pointer-events-none">
                        <span className="block text-philosophy-desc text-[#4A4A4D] whitespace-normal md:whitespace-nowrap text-center">
                          We value curiosity, intellectual honesty, and long-term thinking.
                        </span>
                        <span
                          className="text-sweep-line-5 absolute top-0 left-0 right-0 block text-philosophy-desc font-medium bg-gradient-to-r from-[#1E1F65] via-[#4B3FD4] to-[#7678ED] bg-clip-text text-transparent animate-gradient-flow w-full h-full pointer-events-none select-none whitespace-normal md:whitespace-nowrap overflow-hidden text-center"
                          style={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                        >
                          We value curiosity, intellectual honesty, and long-term thinking.
                        </span>
                      </div>

                      {/* Line 6 */}
                      <div className="relative block w-full max-w-[90vw] md:w-fit select-none pointer-events-none">
                        <span className="block text-philosophy-desc text-[#4A4A4D] whitespace-normal md:whitespace-nowrap text-center">
                          We aren&apos;t for everyone &mdash; and we&apos;re okay with that.
                        </span>
                        <span
                          className="text-sweep-line-6 absolute top-0 left-0 right-0 block text-philosophy-desc text-[#E3E3E3] w-full h-full pointer-events-none select-none whitespace-normal md:whitespace-nowrap overflow-hidden text-center"
                          style={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                        >
                          We aren&apos;t for everyone &mdash; and we&apos;re okay with that.
                        </span>
                      </div>
                    </div>

                  </Reveal>
                </div>
              </section>

              {/* SECTION 3: METHODOLOGY */}
              <section
                id="methodology-section"
                className="md:absolute md:top-0 md:left-0 md:h-[100vh] h-auto bg-night border-t border-border shadow-[0_-30px_60px_rgba(0,0,0,0.85)] px-[var(--pad)] py-20 md:py-0 flex flex-col justify-center relative overflow-hidden z-25 w-full"
                aria-labelledby="methodology-h"
              >
                <div className="wrap w-full methodology-wrap">
                  {/* Methodology Cards Section */}
                  <div className="methodology-section max-w-[1100px] md:max-w-[760px] xl:max-w-[920px] 2xl:max-w-[1100px] mx-auto">
                    <Reveal className="text-center mb-6 md:mb-4 lg:mb-5 xl:mb-6 2xl:mb-8">
                      <span id="methodology-h" className="text-nav-label tracking-[0.22em] !text-[#a6a6a6]" style={{ color: '#a6a6a6' }}>Methodology</span>
                    </Reveal>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-3 xl:gap-4 2xl:gap-6">
                      {[
                        {
                          title: "We discuss",
                          desc: "before we design.",
                          illustration: (
                            <video
                              src="/Home%20We%20Discuss.webm"
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full h-full object-cover mix-blend-screen"
                              style={{ transform: 'scale(1.30)', transformOrigin: 'center' }}
                            />
                          )
                        },
                        {
                          title: "We plan",
                          desc: "before we build.",
                          illustration: (
                            <video
                              src="/home-we-plan.webm"
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full h-full object-cover mix-blend-screen"
                              style={{ transform: 'scale(1.30)', transformOrigin: 'center' }}
                            />
                          )
                        },
                        {
                          title: "We work with you",
                          desc: "to turn curiosity into creativity.",
                          illustration: (
                            <video
                              src="/home-we-work-with-you.webm"
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full h-full object-cover mix-blend-screen"
                              style={{ transform: 'scale(1.20)', transformOrigin: 'center' }}
                            />
                          )
                        }
                      ].map((card, i) => (
                        <Reveal key={i} delay={i * 0.1} className="methodology-card-scroll">
                          <div className="flex flex-col h-full cursor-pointer group text-left">

                            {/* Card Wrapper (contains ONLY the video/illustration, full width, no gaps) */}
                            <div className="bg-[#0b0b0f] rounded-[12px] overflow-hidden transition-all duration-500 group-hover:shadow-[0_20px_40px_rgba(255,255,255,0.07)] w-full aspect-[4/4.5] relative mb-4 flex items-center justify-center pointer-events-none">
                              {mounted ? card.illustration : <div className="absolute inset-0 bg-[#050505]" />}

                              {/* Overlay Gradient for depth */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none z-10"></div>
                            </div>

                            {/* Bottom Text Area (rendered OUTSIDE the card container) */}
                            <div className="px-1 flex flex-col">
                              <h3 className="text-card-title text-white mb-1 transition-colors duration-300 group-hover:text-white">
                                {card.title}
                              </h3>
                              <p className="text-small-desc text-[#A1A1AA] font-light leading-relaxed">
                                {card.desc}
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
                  <img src="/assets/img/Home-process.webp" alt="" role="presentation" className="w-full h-full object-cover object-right" />
                </div>

                <div className="wrap relative z-[1] flex justify-start w-full px-[var(--pad)]">
                  <div className="w-full md:w-[90%] lg:w-[85%] md:pl-[4vw] lg:pl-[6vw]">
                    <div className="mb-[clamp(30px,5vh,64px)] md:mb-[clamp(16px,2.5vh,32px)] lg:mb-[clamp(20px,3.5vh,40px)] xl:mb-[clamp(24px,4.5vh,48px)] 2xl:mb-[clamp(32px,5.5vh,64px)] text-left">
                      <Reveal>
                        <span className="text-nav-label tracking-[0.22em] uppercase text-[#a6a6a6] block mb-2 md:mb-0.5">Process Index</span>
                        <h2 id="process-h" className="mt-4 md:mt-1 text-section-heading text-[#1b1b1b]">
                          <span>How we</span> <em className="italic font-light">work.</em>
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
                                <div className="text-card-title text-black leading-none">{step.title}</div>
                                <div className="text-small-desc text-[#6a6a6a]">{step.desc}</div>
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
                className="md:absolute md:top-0 md:left-0 md:h-[100vh] h-auto bg-black border-t border-border py-20 md:py-0 flex flex-col justify-center relative overflow-hidden z-40 w-full"
                aria-labelledby="breathe-h"
              >
                <div className="wrap w-full px-[var(--pad)]">
                  <Reveal className="mb-[clamp(20px,3vh,48px)] max-w-[820px] text-center md:text-left mx-auto md:mx-0 lg:-translate-y-[15px] xl:-translate-y-[25px] 2xl:translate-y-0">
                    <span className="text-nav-label tracking-[0.22em] uppercase text-[#6A6A6A] mb-3 md:mb-[clamp(8px,1.5vh,16px)] block">Our Projects</span>
                    <h2 id="breathe-h" className="text-section-heading text-white">
                      Work that started with<br />
                      <em className="italic font-light">a point of view.</em>
                    </h2>

                  </Reveal>
                </div>

                {/* Draggable portfolio carousel section (Full bleed, padded internally) */}
                <div className="w-full mt-6 md:mt-8 overflow-hidden select-none">
                  {/* Draggable/scrollable container */}
                  <div
                    ref={sliderRef}
                    id="projects-track"
                    onScroll={handleScroll}
                    className="flex w-full md:w-max shrink-0 overflow-x-auto md:overflow-visible scrollbar-hide py-4 gap-6 px-6 md:px-[var(--pad)]"
                  >
                    {projects.map((project, idx) => {
                      const isLast = idx === projects.length - 1;
                      if (isLast) {
                        return (
                          <Link
                            key={idx}
                            href="/work"
                            className="w-[80vw] md:w-[32vw] lg:w-[28vw] shrink-0 snap-center md:snap-align-none rounded-[20px] overflow-hidden aspect-[4/3] md:aspect-[16/11] relative bg-[#121212] hover:bg-white hover:border-white transition-all duration-[1200ms] flex flex-col items-center justify-center border border-white/5 group cursor-pointer"
                          >
                            <span className="text-[16px] md:text-[20px] text-white font-bold tracking-[0.2em] uppercase transition-all duration-[1200ms] group-hover:scale-105 flex items-center gap-3 group-hover:text-black">
                              View All Projects
                              <svg className="w-5 h-5 transition-transform duration-[1200ms] group-hover:translate-x-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                              </svg>
                            </span>
                          </Link>
                        );
                      }
                      return (
                        <Link
                          key={idx}
                          href={`/work/${project.title.toLowerCase().replace(/ /g, '-')}`}
                          className="w-[80vw] md:w-[32vw] lg:w-[28vw] shrink-0 snap-center md:snap-align-none rounded-[20px] overflow-hidden aspect-[4/3] md:aspect-[16/11] relative bg-[#121212] group border border-white/5 block cursor-pointer"
                        >
                          {/* Nested Image Container */}
                          <div className="absolute inset-0 rounded-[20px] overflow-hidden transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
                            <img
                              src={project.image}
                              alt={project.title}
                              loading="lazy"
                              className="w-full h-full object-cover object-top md:group-hover:scale-105 select-none pointer-events-none grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-[filter,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                            />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Pagination Dots (Inside a container with same padding to align cleanly) */}
                <div className="flex justify-center items-center gap-3 mt-6 relative z-30 w-full px-[var(--pad)]">
                  {projects.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => scrollToSlide(idx)}
                      className="p-2 -m-2 group outline-none"
                      aria-label={`Go to slide ${idx + 1}`}
                    >
                      <div className={`h-2.5 rounded-full transition-all duration-300 ${activeSlide === idx ? 'w-8 bg-white' : 'w-2.5 bg-white/30 group-hover:bg-white/50'}`} />
                    </button>
                  ))}
                </div>
              </section>

            </div>

          </article>
        </div>
      </div>
    </>
  );
}
