'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Reveal from '../../components/Reveal';
import Link from 'next/link';
import HomeSmoothScroll from '../../components/HomeSmoothScroll';

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Auto-close accordion when section leaves the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setOpenIndex(null);
        }
      },
      { threshold: 0 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Stacked deck animation logic for Services page
  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    // ── DESKTOP SCROLL STACKED DECK ANIMATION (>= 768px) ──
    mm.add('(min-width: 768px)', () => {
      // Pin the hero section so the list section scrolls up over it naturally
      ScrollTrigger.create({
        trigger: '#services-hero-section',
        start: 'top top',
        end: 'bottom top',
        pin: true,
        pinSpacing: false,
        id: 'services-hero-pin'
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  const services = [
    {
      title: "Brand Strategy",
      tagline: "The idea everything else builds on.",
      copy: "Every strong brand is built around a clear point of view. Brand strategy is the work of uncovering what makes your business distinct and translating it into direction. It creates the foundation for decisions, communication, and growth.",
      deliverables: ["Positioning", "Research", "Communication Strategy"]
    },
    {
      title: "Identity & Expression",
      tagline: "How your brand looks, sounds, and feels.",
      copy: "Identity is more than a logo. It's the complete experience of encountering your brand. We create visual and verbal systems that help businesses show up consistently, confidently, and recognisably across every touchpoint.",
      deliverables: ["Visual Identity", "Verbal Identity", "Brand Guidelines", "Design Systems", "Marketing Collateral"]
    },
    {
      title: "Content & Communication",
      tagline: "Your thinking, made clear.",
      copy: "Good communication helps people understand who you are and why your work matters. We develop content that reflects your perspective, speaks to the right audience, and feels human in every format.",
      deliverables: ["Website Copy", "Brand Stories", "Presentations", "Brochures", "Editorial & Long-form Content"]
    },
    {
      title: "Digital Marketing",
      tagline: "Helping the right people find you.",
      copy: "Marketing works best when it's built on clarity. We create campaigns and digital systems that connect your work with the people most likely to value it, building visibility that supports long-term growth.",
      deliverables: ["Campaign Strategy", "Performance Marketing", "SEO", "Analytics"]
    },
    {
      title: "Social & Community",
      tagline: "Showing up with consistency and intent.",
      copy: "A meaningful social presence isn't built through volume alone. It's built through relevance, clarity, and a point of view people want to follow. We help brands create content and communities that strengthen relationships over time.",
      deliverables: ["Content Strategy", "Social Media Management", "Community Building", "Reputation Management"]
    },
    {
      title: "Personal Branding & LinkedIn",
      tagline: "Building trust through people.",
      copy: "People often connect with founders before they connect with companies. We help founders and professionals articulate their expertise, develop a distinctive voice, and build credibility through thoughtful communication.",
      deliverables: ["LinkedIn Strategy", "Personal Brand Positioning", "Profile Development"]
    },
    {
      title: "OOH Advertising",
      tagline: "Built to be seen. Designed to be remembered.",
      copy: "Outdoor advertising demands simplicity and confidence. We develop campaigns that communicate a clear idea quickly and effectively across public spaces, creating memorable brand moments beyond the screen.",
      deliverables: ["Campaign Concepts", "Hoardings", "Media Planning"]
    }
  ];

  return (
    <>
      <HomeSmoothScroll />
      <div className="noise-effect" />
      <div id="smooth-wrapper" className="smooth-wrapper w-full bg-black">
        <div id="smooth-content" className="smooth-content w-full relative">
          <article aria-label="Services">
            <div id="services-deck-container" className="relative w-full bg-black">
              {/* Main Intro Section */}
              <section id="services-hero-section" className="bg-white text-black relative overflow-hidden z-10 w-full min-h-[100svh] md:flex md:flex-col" aria-labelledby="services-hero">
                <div className="max-w-[1600px] mx-auto w-full px-[var(--pad)] pt-[140px] md:pt-[180px] lg:pt-[120px] pb-16 md:pb-32 lg:pb-40 flex flex-col justify-center md:flex-1 relative z-20 2xl:-translate-y-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 md:gap-12 lg:gap-16 w-full">
                    {/* Left Column: Text Content */}
                    <div className="w-full md:w-[60%] lg:w-[65%] xl:w-[65%] flex flex-col justify-center text-left px-8 md:px-[4vw] lg:px-[6vw] xl:px-[8vw]">
                      <Reveal className="mb-4 lg:mb-6 max-w-[700px] lg:max-w-[850px] 2xl:max-w-[1000px] transition-transform duration-700 ease-out">
                        <h2 className="text-hero text-black transition-all duration-700 ease-out pb-2">
                          <span className="block whitespace-nowrap">Turning ideas</span>
                          <span className="block whitespace-nowrap">into brands,</span>
                          <span className="block whitespace-nowrap">communication,</span>
                          <span className="inline-block bg-gradient-to-r from-[#161245] via-[#4B3FD4] to-[#786CF0] bg-clip-text text-transparent pb-2 whitespace-nowrap">and growth.</span>
                        </h2>
                      </Reveal>

                      <Reveal delay={0.1} className="transition-transform duration-700 ease-out">
                        <p className="text-main-desc text-[#6A6A6A] text-left transition-all duration-700 ease-out max-w-[750px] md:max-w-[850px] [@media(display-mode:fullscreen)]:md:max-w-[1000px]">
                          <span className="block">Every business needs different things at different stages.</span>
                          <span className="block">Some need clarity.</span>
                          <span className="block">Some need a stronger identity.</span>
                          <span className="block">Some need better communication.</span>
                          <span className="block">Some need help reaching the right people.</span>
                          <br className="hidden md:block" />
                          <span className="block md:mt-2">Our services span strategy, branding, communication, and marketing &mdash; tailored to what your business needs most.</span>
                        </p>
                      </Reveal>
                    </div>

                    {/* Right Column: Video */}
                    <Reveal delay={0.2} className="w-full md:w-[35%] lg:w-[30%] xl:w-[30%] flex items-center justify-center md:justify-end xl:justify-center md:-translate-x-[5vw] lg:-translate-x-[10vw] xl:-translate-x-[10vw]">
                      <div className="w-full relative group flex justify-end">
                        <video
                          src="/service-hero.webm"
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-auto aspect-square max-h-[50vh] md:max-h-[65vh] object-contain select-none pointer-events-none scale-[1.20] md:-translate-y-[20%] md:translate-x-[10%]"
                        />
                      </div>
                    </Reveal>
                  </div>
                </div>

                {/* Bottom Solid Black Transition Bar (Desktop only) */}
                <div className="services-bottom-black-bar hidden md:block absolute bottom-[-20px] md:bottom-[-30px] lg:bottom-[-40px] xl:bottom-[-50px] 2xl:bottom-[-60px] left-0 w-full h-[40px] lg:h-[55px] xl:h-[90px] [@media(display-mode:fullscreen)]:h-[80px] [@media(display-mode:fullscreen)]:lg:h-[120px] [@media(display-mode:fullscreen)]:xl:h-[180px] transition-all duration-700 ease-out bg-black z-30" />
              </section>

              {/* Services List - Vertical Timeline Staggered UI */}
              <section id="services-list-section" ref={sectionRef} className="relative z-20 w-full bg-black pt-[clamp(60px,8vw,100px)] pb-[clamp(100px,12vw,160px)] overflow-hidden border-t border-white/10">
                {/* Shimmering film grain noise overlay */}
                <div className="section-noise-effect" />

                {/* Responsive Background Image with Dark Cinematic Overlay */}
                <div className="absolute inset-0 z-0 select-none pointer-events-none">
                  <img
                    src="/assets/img/services.jpeg"
                    alt="Services background"
                    className="w-full h-full object-cover opacity-30 filter saturate-50 contrast-125"
                  />
                  {/* Edge fading gradient for organic integration */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black via-black/75 to-black" />
                </div>

                <div className="wrap relative z-10 text-white">
                  <Reveal className="mb-16 md:mb-20 md:ml-[5vw] lg:ml-[8vw] xl:ml-[10vw]">
                    <span className="text-nav-label tracking-[0.22em] uppercase text-[#d9d9d9] block">Our Services</span>
                  </Reveal>

                  <div className="max-w-[1200px] relative md:ml-[5vw] lg:ml-[8vw] xl:ml-[10vw]">
                    <div className="space-y-4">
                      {services.map((service, idx) => {
                        const isOpen = openIndex === idx;
                        const offset = idx * 55;

                        return (
                          <Reveal key={idx} delay={idx * 0.08}>
                            <div
                              className="group cursor-pointer relative isolate"
                              onClick={() => setOpenIndex(isOpen ? null : idx)}
                            >
                              <div
                                className="absolute w-[2px] bg-gradient-to-b from-[#6a6a6a] via-[#6a6a6a]/70 to-transparent pointer-events-none z-0 hidden md:block top-[30px] md:top-[45px]"
                                style={{ left: `${offset + 8}px`, bottom: `-${(services.length - 1 - idx) * 110 + 420}px` }}
                              />

                              <div
                                className="flex items-start py-3 md:py-4 relative z-10 md:[padding-left:var(--padding-left)]"
                                style={{ '--padding-left': `${offset}px` } as React.CSSProperties}
                              >
                                <div className="relative shrink-0 mr-3 md:mr-4 z-0">
                                  <span className="text-[65px] md:text-[85px] leading-none text-[#6a6a6a] font-space font-light select-none">
                                    {String(idx + 1).padStart(2, '0')}
                                  </span>
                                </div>

                                <div className="pt-2 relative z-20 transition-all duration-300 ease-out max-md:flex-1 max-md:min-w-0">
                                  <h3 className="text-card-title mb-2 pb-0.5 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#161245] group-hover:to-[#4B3FD4] group-hover:bg-clip-text group-hover:text-transparent inline-block">{service.title}</h3>
                                  <p className="text-main-desc text-[#d9d9d9] max-w-none transition-colors">{service.tagline}</p>

                                  <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'max-h-[1400px] mt-12 opacity-100 border-t border-white/10 pt-12' : 'max-h-0 opacity-0'}`}>
                                    <div className="flex flex-col gap-8 pb-8">
                                      <p className="text-main-desc text-[#d9d9d9] text-left max-w-[850px] xl:max-w-[950px] 2xl:max-w-[1050px]">
                                        {service.copy.replace(/\n/g, ' ')}
                                      </p>

                                      <div className="pt-6 border-t border-white/5">
                                        <div className="flex flex-wrap gap-3 pb-1">
                                          {service.deliverables.map(d => (
                                            <div key={d} className="flex items-center gap-3 px-5 py-2.5 bg-white/[0.02] border border-white/10 rounded-none text-nav-label text-white/70 hover:text-white hover:border-white/60 hover:bg-white/[0.04] transition-all duration-300 select-none whitespace-nowrap">
                                              {d}
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Reveal>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-20 md:mt-32 relative">
                    <Reveal className="flex items-center justify-end gap-12 max-[760px]:flex-col max-[760px]:items-center">
                      <p className="text-right max-[760px]:text-center text-card-title italic text-white leading-[1.5] max-w-none xl:max-w-[900px]">
                        Whether you&apos;re starting with a new idea, refining an existing brand,<br />
                        or preparing for the next stage of growth,<br />
                        we&apos;d love to hear you. Let&apos;s Talk.
                      </p>
                      <Link
                        href="/inquiry"
                        className="w-[115px] h-[115px] bg-[#4B3FD4] rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-[0_0_50px_rgba(75,63,212,0.4)] group shrink-0"
                      >
                        <svg width="68" height="68" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:rotate-45">
                          <line x1="3" y1="21" x2="21" y2="3" />
                          <polyline points="8 3 21 3 21 16" />
                        </svg>
                      </Link>
                    </Reveal>
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
