'use client';

import { useState, useEffect, useRef } from 'react';
import Reveal from '../../components/Reveal';

interface ServiceData {
  title: string;
  tagline: string;
  copy: string;
  deliverables: string[];
}

export default function ServicesAccordion({ services }: { services: ServiceData[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <div ref={sectionRef} className="space-y-4">
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
                  <h3 className="sr-only">{(service as any).seoTitle}</h3>
                  <span className="block text-card-title mb-2 pb-0.5 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#161245] group-hover:to-[#4B3FD4] group-hover:bg-clip-text group-hover:text-transparent inline-block" aria-hidden="true">{service.title}</span>
                  <p className="text-main-desc text-[#d9d9d9] max-w-none transition-colors">{service.tagline}</p>

                  <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'max-h-[1400px] mt-12 opacity-100 border-t border-white/10 pt-12' : 'max-h-0 opacity-0'}`}>
                    <div className="flex flex-col gap-8 pb-8">
                      <p className="text-main-desc text-[#d9d9d9] text-left max-w-[850px] xl:max-w-[950px] 2xl:max-w-[1050px]">
                        {service.copy.replace(/\\n/g, ' ')}
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
  );
}
