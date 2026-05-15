'use client';

import { useState } from 'react';
import Reveal from '../../components/Reveal';
import Link from 'next/link';
import Marquee from '@/components/Marquee';

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Brand Strategy",
      tagline: "The single idea your entire business stands on.",
      copy: "Every strong brand is built around one clear idea — a perspective sharp enough to guide every decision, every hire, every message. Brand Strategy is the work of finding that idea.",
      deliverables: ["Brand positioning", "Audience definition", "Core messaging"]
    },
    {
      title: "Identity & Expression",
      tagline: "How you look and sound when no one is paying attention.",
      copy: "Identity is the entire sensory experience of encountering your brand — the typeface, the palette, the tone. We build identities rooted in your strategy.",
      deliverables: ["Logo & visual identity", "Brand guidelines", "Typography system"]
    },
    {
      title: "Content & Communication",
      tagline: "Your thinking, made readable. Your voice, made consistent.",
      copy: "Good content earns its place. It carries a perspective, respects the reader's intelligence, and sounds like a human wrote it.",
      deliverables: ["Website copywriting", "Brand storytelling", "Campaign messaging"]
    },
    {
      title: "Digital Marketing",
      tagline: "Your work, in front of the right people. With intention.",
      copy: "Reach is a result of clarity. We plan digital marketing from the brand outward, ensuring every campaign is anchored in something real.",
      deliverables: ["Paid media strategy", "SEO marketing", "Funnel design"]
    },
    {
      title: "Social & Community",
      tagline: "Showing up with intent — because you actually have something to say.",
      copy: "The brands that build real communities online are the ones willing to have a genuine point of view and say it out loud.",
      deliverables: ["Content strategy", "Community building", "Platform content"]
    },
    {
      title: "Personal Branding & LinkedIn",
      tagline: "The founder is the brand. Time to act like it.",
      copy: "People trust people before they trust companies. We help founders surface their real perspective and shape it into a personal brand.",
      deliverables: ["LinkedIn audit", "Content strategy", "Thought leadership"]
    },
    {
      title: "OOH Advertising",
      tagline: "Your brand, at the scale of the city.",
      copy: "A billboard is not a social media post made larger. Out-of-home advertising works when the idea is strong enough to land in three seconds.",
      deliverables: ["Campaign concept", "Copywriting", "Media planning"]
    }
  ];

  return (
    <article aria-label="Services">
      {/* Main Intro Section */}
      <section className="bg-white text-black pt-[clamp(140px,18vw,200px)] pb-[clamp(80px,10vw,120px)] relative overflow-hidden">
        <div className="absolute right-[0%] top-[0%] select-none pointer-events-none opacity-[0.1] md:opacity-[0.18] drop-shadow-[0_10px_40px_rgba(0,0,0,0.08)] z-0">
          <span className="text-[300px] md:text-[720px] font-bold leading-none text-[#dcdcdc] select-none" style={{ fontFamily: 'var(--font-nexa), sans-serif' }}>g</span>
        </div>
        <div className="wrap relative z-10">
          <Reveal className="mb-10">
            <span className="text-[12px] font-space font-medium tracking-[0.3em] uppercase text-muted block mb-10">Services</span>
            <h2 className="text-[clamp(48px,6vw,84px)] font-bold leading-[1.05] tracking-[-0.03em] text-black">
              What we do &ndash;<br />
              and what <span className="text-yellow">we don&rsquo;t</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[#333] text-[clamp(18px,1.4vw,22px)] font-light leading-[1.6] max-w-[700px]">
              Pragyan is for founders who are tired of the same old<br />
              and want to build something that actually carries weight.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services List - Vertical Timeline Staggered UI */}
      <section className="bg-black py-[clamp(100px,12vw,160px)] relative overflow-hidden">
        {/* Topographic Background Pattern */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none select-none">
          <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,100 Q250,50 500,100 T1000,100" fill="none" stroke="white" strokeWidth="0.5" />
            <path d="M0,300 Q250,250 500,300 T1000,300" fill="none" stroke="white" strokeWidth="0.5" />
            <path d="M0,500 Q250,450 500,500 T1000,500" fill="none" stroke="white" strokeWidth="0.5" />
            <path d="M0,700 Q250,650 500,700 T1000,700" fill="none" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="wrap relative z-10 text-white">
          <Reveal className="mb-24">
            <span className="text-[12px] font-space font-medium tracking-[0.3em] uppercase text-muted block">Our Services</span>
          </Reveal>

          <div className="max-w-[1200px] mx-auto relative">
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
                        className={`absolute bottom-[50%] w-[1.5px] bg-gradient-to-b from-transparent via-violet/30 to-violet/70 pointer-events-none z-0 hidden md:block ${idx === 0 ? 'top-[-80px]' : 'top-[-180px]'}`}
                        style={{ left: `${30 + offset}px` }}
                      >
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[9px] h-[9px] bg-violet rounded-full shadow-[0_0_15px_#8b5cf6,0_0_35px_#8b5cf6,0_0_60px_rgba(139,92,246,0.3)] transition-transform duration-500 group-hover:scale-125" />
                      </div>

                      <div className="flex items-start py-3 md:py-4 transition-all duration-300 group-hover:translate-x-1 relative z-10" style={{ paddingLeft: typeof window !== 'undefined' && window.innerWidth < 768 ? '0px' : `${offset}px` }}>
                        <div className="relative shrink-0 mr-3 md:mr-4 z-0">
                          <span className="text-[50px] md:text-[80px] leading-none text-white/[0.025] font-bold transition-colors group-hover:text-violet/10 select-none">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                        </div>

                        <div className="pt-2 relative z-20">
                          <h3 className="text-[clamp(26px,3.2vw,44px)] font-bold mb-2 tracking-tight group-hover:text-violet transition-colors duration-300">{service.title}</h3>
                          <p className="text-[clamp(14px,1.1vw,17px)] text-white/35 font-medium tracking-wide max-w-[700px] group-hover:text-white/60 transition-colors">{service.tagline}</p>

                          <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'max-h-[800px] mt-12 opacity-100 border-t border-white/10 pt-12' : 'max-h-0 opacity-0'}`}>
                            <div className="grid grid-cols-[1fr_340px] gap-24 max-[1100px]:grid-cols-1">
                              <p className="text-grey text-[18.5px] leading-relaxed opacity-75 font-light">
                                {service.copy}
                              </p>
                              <div className="border-l border-violet/20 pl-6 md:pl-10">
                                <span className="block text-[11px] font-space uppercase tracking-widest text-violet/60 mb-7">Deliverables</span>
                                <ul className="list-none space-y-5">
                                  {service.deliverables.map(d => (
                                    <li key={d} className="text-[15px] text-white/50 flex items-center gap-5 hover:text-white transition-colors">
                                      <span className="w-2.5 h-2.5 bg-violet/30 rounded-full shrink-0 group-hover:bg-violet transition-colors" /> {d}
                                    </li>
                                  ))}
                                </ul>
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
              <p className="text-right max-[760px]:text-center text-[16px] italic text-white/70 max-w-[500px] leading-[1.6] font-space font-light uppercase tracking-widest">
                We don&rsquo;t believe in one-size-fits-all thinking.<br />
                If you&rsquo;re ready to stop being an echo and<br />
                start being original, let&rsquo;s talk.
              </p>
              <Link
                href="/inquiry"
                className="w-[95px] h-[95px] bg-violet rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-[0_0_50px_rgba(139,92,246,0.4)] group shrink-0"
              >
                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:rotate-45">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <Marquee />

    </article>
  );
}
