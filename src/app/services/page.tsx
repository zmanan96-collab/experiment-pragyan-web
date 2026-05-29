'use client';

import { useState, useEffect, Fragment, useRef } from 'react';
import Reveal from '../../components/Reveal';
import Link from 'next/link';
import Marquee from '@/components/Marquee';

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


  const services = [
    {
      title: "Brand Strategy",
      tagline: "The single idea your entire business stands on.",
      copy: "Every strong brand is built around one clear idea — a perspective sharp enough to guide every decision,\nevery hire, every message. Brand Strategy is the work of finding that idea. We listen closely, ask the harder\nquestions, and dig past the obvious until we reach something real. Something that belongs to you and\nonly you. When that core is clear, the rest follows with uncommon ease. Positioning sharpens.\nCommunication tightens. The brand stops feeling scattered and starts feeling inevitable.",
      deliverables: ["Brand positioning", "Audience definition", "Competitive mapping", "Core messaging pillars", "Brand narrative"]
    },
    {
      title: "Identity & Expression",
      tagline: "How you look and sound when no one is paying attention.",
      copy: "Identity is the entire sensory experience of encountering your brand — the typeface, the palette, the\ntone, the way your email lands in a crowded inbox. We build identities rooted in your strategy, shaped by\nyour perspective, and designed to hold up across formats, contexts, and years. A visual and verbal\nlanguage that feels unmistakably yours. Coherent enough to be consistent. Alive enough to be\ninteresting.",
      deliverables: ["Logo & visual identity", "Brand guidelines", "Typography & colour system", "Verbal identity", "Brand collateral"]
    },
    {
      title: "Content & Communication",
      tagline: "Your thinking, made readable. Your voice, made consistent.",
      copy: "Good content earns its place. It carries a perspective, respects the reader's intelligence, and sounds like\na specific human wrote it — because one did. We write from the inside out. Starting with what you believe,\nwhat your audience actually cares about, and where those two things create genuine tension or\nresonance. Website copy, brand stories, pitch decks, long-form essays — whatever the format, the\nstandard holds. It has to say something. And it has to sound alive.",
      deliverables: ["Website copywriting", "Brand storytelling", "Pitch decks", "Email sequences", "Campaign messaging"]
    },
    {
      title: "Digital Marketing",
      tagline: "Your work, in front of the right people. With intention.",
      copy: "Reach is a result of clarity. When a brand knows exactly what it stands for and who it is speaking to, getting\nseen becomes a strategy — and strategy compounds. We plan digital marketing from the brand outward.\nThe channels, campaigns, and content we build are anchored in something real. The kind of marketing\nthat builds trust gradually, earns attention honestly, and produces results that hold up quarter after\nquarter.",
      deliverables: ["Paid media strategy", "SEO & content marketing", "Performance campaigns", "Analytics & reporting", "Funnel design"]
    },
    {
      title: "Social & Community",
      tagline: "Showing up with intent — because you actually have something to say.",
      copy: "Consistency on social media is easy when you know exactly what you believe. The brands that build real\ncommunities online are the ones willing to have a genuine point of view — and say it out loud, repeatedly,\nwithout flinching. We help you build that kind of presence. Rooted in your values. Tuned to your audience.\nSharp enough to cut through the scroll. Fewer posts. More meaning. The kind of community that grows\nbecause people actually want to be part of it.",
      deliverables: ["Content strategy", "Community building", "Platform-specific content", "Engagement frameworks", "Monthly content planning"]
    },
    {
      title: "Personal Branding & LinkedIn",
      tagline: "The founder is the brand. Time to act like it.",
      copy: "People trust people before they trust companies. A founder with a clear, consistent voice on LinkedIn\nbuilds authority that advertising cannot buy — and a pipeline that compounds over time. We work directly\nwith founders and senior professionals to surface their real perspective, shape it into a personal brand\nwith edges and depth, and show up on LinkedIn in a way that earns genuine respect. Well-crafted\nthinking, in your voice, about things you actually care about. The presence that makes the right people\nreach out first.",
      deliverables: ["LinkedIn profile audit & rewrite", "Personal brand positioning", "Content strategy & voice guide", "Monthly post creation", "Thought leadership content", "LinkedIn page management", "Analytics & growth tracking"]
    },
    {
      title: "OOH Advertising",
      tagline: "Your brand, at the scale of the city.",
      copy: "A billboard is not a social media post made larger. It is a different discipline entirely — one that rewards\nsimplicity, demands confidence, and punishes hesitation. Out-of-home advertising works when the idea\nis strong enough to land in three seconds on a moving highway or a crowded street corner. We plan and\ncreate OOH campaigns from the idea inward — finding the one line, the one image, the one moment of\nclarity that earns a second look. Placed with precision. Designed to be remembered.",
      deliverables: ["Campaign concept & creative", "Copywriting & art direction", "Media planning & placement", "Format adaptation (billboards, transit, retail)", "Production coordination"]
    }
  ];

  return (
    <article aria-label="Services">
      {/* Main Intro Section */}
      <section className="bg-white text-black pt-[clamp(140px,18vw,200px)] max-[768px]:pb-[280px] pb-[clamp(80px,10vw,120px)] md:pt-[80px] md:pb-[140px] md:h-[100svh] md:flex md:flex-col md:justify-center relative overflow-hidden">
        <div className="wrap relative z-20 md:-translate-y-4 lg:-translate-y-6 xl:-translate-y-8 2xl:-translate-y-4 2xl:-translate-x-[14vw]">

          <Reveal className="mb-4 lg:mb-6 max-w-[700px] lg:max-w-[850px] 2xl:max-w-[1000px] md:-translate-x-[7vw] lg:-translate-x-[9vw] xl:-translate-x-[11vw] 2xl:translate-x-0 [@media(display-mode:fullscreen)]:md:-translate-x-[8vw] [@media(display-mode:fullscreen)]:xl:-translate-x-[12vw] transition-transform duration-700 ease-out">
            <span className="text-[clamp(12px,0.85vw,16px)] font-space font-light tracking-[0.22em] uppercase text-[#6a6a6a] block mb-3">Services</span>
            <h2 className="font-sans text-[clamp(32px,5vw,75px)] md:text-[clamp(30px,4vw,55px)] 2xl:text-[68px] [@media(display-mode:fullscreen)]:md:text-[clamp(38px,4.5vw,75px)] transition-all duration-700 ease-out font-bold leading-[1.05] tracking-[-0.03em] text-black">
              <span className="block">What we do &ndash;</span>
              <span className="block">and what</span>
              <span className="inline-block bg-gradient-to-r from-[#161245] via-[#4B3FD4] to-[#786CF0] bg-clip-text text-transparent pb-2">we don&apos;t</span>
            </h2>
          </Reveal>

          {/* Paragraph spans full original width with zero grid constraints */}
          <Reveal delay={0.1} className="md:-translate-x-[7vw] lg:-translate-x-[9vw] xl:-translate-x-[11vw] 2xl:translate-x-0 [@media(display-mode:fullscreen)]:md:-translate-x-[8vw] [@media(display-mode:fullscreen)]:xl:-translate-x-[12vw] transition-transform duration-700 ease-out">

            <p className="font-sans text-[#6A6A6A] text-[clamp(16px,1.3vw,20px)] md:text-[clamp(15px,1.2vw,18px)] 2xl:text-[20px] 2xl:max-w-[750px] 2xl:leading-[1.7] [@media(display-mode:fullscreen)]:md:text-[clamp(18px,1.4vw,24px)] md:leading-[1.6] font-light leading-[1.6] max-w-[750px] md:max-w-[650px] [@media(display-mode:fullscreen)]:md:max-w-[800px] text-left transition-all duration-700 ease-out">
              Pragyan is for founders who are tired of the same old<br className="hidden md:inline" /><span className="md:hidden">&nbsp;</span>
              and want to build something that actually carries weight.<br className="hidden md:inline" /><span className="md:hidden">&nbsp;</span>
              We&apos;re obsessed with the work we do &mdash;<br className="hidden md:inline" /><span className="md:hidden">&nbsp;</span>
              but even more protective of the work we choose not to do.<br className="hidden md:inline" /><span className="md:hidden">&nbsp;</span>
              We only move when there&apos;s a point of view worth fighting for.
            </p>
          </Reveal>

        </div>

        {/* water.svg ("g" watermark) absolutely positioned and slightly lower down (Visible on all devices) */}
        <div className="absolute right-[-8%] max-[768px]:right-auto max-[768px]:left-1/2 max-[768px]:-translate-x-1/2 bottom-[-60px] max-[768px]:bottom-[0px] md:right-[-5%] lg:right-[-5%] xl:right-[-8%] 2xl:right-[0%] md:bottom-[-20px] lg:bottom-[-30px] xl:bottom-[-40px] 2xl:bottom-[-60px] [@media(display-mode:fullscreen)]:md:right-[-10%] [@media(display-mode:fullscreen)]:lg:right-[-10%] [@media(display-mode:fullscreen)]:xl:right-[-12%] md:top-auto md:translate-y-0 pointer-events-none select-none z-10 transition-all duration-700 ease-out">
          <Reveal delay={0.15}>
            <div className="w-[290px] md:w-[320px] lg:w-[380px] xl:w-[480px] 2xl:w-[700px] [@media(display-mode:fullscreen)]:md:w-[450px] [@media(display-mode:fullscreen)]:lg:w-[550px] [@media(display-mode:fullscreen)]:xl:w-[700px] transition-all duration-700 ease-out aspect-square relative">
              <img
                src="/assets/img/water.svg"
                alt="Water ripples vector illustration"
                className="w-full h-full object-contain opacity-80 md:mix-blend-multiply md:drop-shadow-[-12px_16px_24px_rgba(0,0,0,0.38)] max-[768px]:opacity-100 max-[768px]:mix-blend-normal max-[768px]:drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]"
              />
            </div>
          </Reveal>
        </div>

        {/* Bottom Solid Black Transition Bar (Desktop only) */}
        <div className="hidden md:block absolute bottom-0 left-0 w-full h-[40px] lg:h-[60px] xl:h-[120px] [@media(display-mode:fullscreen)]:h-[80px] [@media(display-mode:fullscreen)]:lg:h-[120px] [@media(display-mode:fullscreen)]:xl:h-[180px] transition-all duration-700 ease-out bg-black z-30" />      </section>


      {/* Services List - Vertical Timeline Staggered UI */}
      <section ref={sectionRef} className="bg-black pt-[clamp(60px,8vw,100px)] pb-[clamp(100px,12vw,160px)] relative overflow-hidden">
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
            <span className="text-[clamp(12px,0.85vw,16px)] font-space font-light tracking-[0.22em] uppercase text-[#d9d9d9] block">Our Services</span>
          </Reveal>

          <div className="max-w-[1200px] relative md:ml-[5vw] lg:ml-[8vw] xl:ml-[10vw]">
            <div className="space-y-4">
              {services.map((service, idx) => {
                const isOpen = openIndex === idx;
                const offset = idx * 60;

                return (
                  <Reveal key={idx} delay={idx * 0.08}>
                    <div
                      className="group cursor-pointer relative isolate"
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                    >
                      <div
                        className="absolute w-[2px] bg-gradient-to-b from-[#4B3FD4] via-[#4B3FD4]/70 to-transparent pointer-events-none z-0 hidden md:block top-[30px] md:top-[45px]"
                        style={{ left: `${offset + 8}px`, bottom: `-${(services.length - 1 - idx) * 110 + 420}px` }}
                      />

                      <div
                        className="flex items-start py-3 md:py-4 transition-all duration-300 group-hover:translate-x-1 relative z-10 md:[padding-left:var(--padding-left)]"
                        style={{ '--padding-left': `${offset}px` } as React.CSSProperties}
                      >
                        <div className="relative shrink-0 mr-3 md:mr-4 z-0">
                          <span className="text-[65px] md:text-[85px] leading-none text-[#6a6a6a] font-space font-light transition-colors group-hover:text-[#4B3FD4]/30 select-none">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                        </div>

                        <div className="pt-2 relative z-20">
                          <h3 className="text-[clamp(24px,2.8vw,38px)] font-sans font-semibold mb-2 tracking-[0.02em] group-hover:text-[#4B3FD4] transition-colors duration-300">{service.title}</h3>
                          <p className="text-[clamp(16px,1.2vw,19px)] text-[#d9d9d9] font-sans font-light tracking-wide max-w-none transition-colors">{service.tagline}</p>

                          <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'max-h-[1400px] mt-12 opacity-100 border-t border-white/10 pt-12' : 'max-h-0 opacity-0'}`}>
                            <div className="flex flex-col gap-8 pb-8">
                              <p className="text-grey text-[18.5px] leading-relaxed opacity-75 font-light text-left">
                                {service.copy.replace(/\n/g, ' ')}
                              </p>

                              <div className="pt-6 border-t border-white/5">
                                {service.title === 'Personal Branding & LinkedIn' ? (
                                  <div className="flex flex-col gap-3">
                                    <div className="flex flex-wrap gap-3">
                                      {service.deliverables.slice(0, 5).map(d => (
                                        <div key={d} className="flex items-center gap-3 px-5 py-2.5 bg-white/[0.02] border border-white/10 rounded-none text-[14px] font-sans font-light tracking-wide text-white/70 hover:text-white hover:border-[#4B3FD4]/40 hover:bg-white/[0.04] transition-all duration-300 select-none md:whitespace-nowrap">
                                          {d}
                                        </div>
                                      ))}
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                      {service.deliverables.slice(5).map(d => (
                                        <div key={d} className="flex items-center gap-3 px-5 py-2.5 bg-white/[0.02] border border-white/10 rounded-none text-[14px] font-sans font-light tracking-wide text-white/70 hover:text-white hover:border-[#4B3FD4]/40 hover:bg-white/[0.04] transition-all duration-300 select-none md:whitespace-nowrap">
                                          {d}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                ) : service.title === 'OOH Advertising' ? (
                                  <div className="flex flex-col gap-3">
                                    <div className="flex flex-wrap gap-3">
                                      {service.deliverables.slice(0, 4).map(d => (
                                        <div key={d} className="flex items-center gap-3 px-5 py-2.5 bg-white/[0.02] border border-white/10 rounded-none text-[14px] font-sans font-light tracking-wide text-white/70 hover:text-white hover:border-[#4B3FD4]/40 hover:bg-white/[0.04] transition-all duration-300 select-none md:whitespace-nowrap">
                                          {d}
                                        </div>
                                      ))}
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                      {service.deliverables.slice(4).map(d => (
                                        <div key={d} className="flex items-center gap-3 px-5 py-2.5 bg-white/[0.02] border border-white/10 rounded-none text-[14px] font-sans font-light tracking-wide text-white/70 hover:text-white hover:border-[#4B3FD4]/40 hover:bg-white/[0.04] transition-all duration-300 select-none md:whitespace-nowrap">
                                          {d}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                ) : (
                                  <div className="flex flex-wrap gap-3">
                                    {service.deliverables.map(d => (
                                      <div key={d} className="flex items-center gap-3 px-5 py-2.5 bg-white/[0.02] border border-white/10 rounded-none text-[14px] font-sans font-light tracking-wide text-white/70 hover:text-white hover:border-[#4B3FD4]/40 hover:bg-white/[0.04] transition-all duration-300 select-none md:whitespace-nowrap">
                                        {d}
                                      </div>
                                    ))}
                                  </div>
                                )}
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
              <p className="text-right max-[760px]:text-center text-[clamp(18px,1.5vw,26px)] italic text-white font-sans font-semibold leading-[1.5] max-w-[620px]">
                We don&rsquo;t believe in one-size-fits-all thinking.<br />
                If you&rsquo;re ready to stop being an echo and<br />
                start being original, let&rsquo;s talk.
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

    </article>
  );
}
