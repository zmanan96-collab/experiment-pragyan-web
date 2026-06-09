'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type Project = { title: string; tags: string[]; image: string };

export default function HomeInteractive({ projects }: { projects: Project[] }) {
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

    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          id: 'deck-trigger',
          trigger: '#deck-container',
          start: 'top top',
          end: '+=550%',
          pin: true,
          pinSpacing: true,
          scrub: 1.2,
          onUpdate: (self) => {
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

      tl.fromTo('#manifesto-section', { yPercent: 100 }, { yPercent: 0, ease: 'none' }, 0);
      tl.to('.text-sweep-line-1', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', ease: 'none' }, 0.15);
      tl.to('.text-sweep-line-2', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', ease: 'none' }, 0.24);
      tl.to('.text-sweep-line-3', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', ease: 'none' }, 0.33);
      tl.to('.text-sweep-line-4', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', ease: 'none' }, 0.42);
      tl.to('.text-sweep-line-5', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', ease: 'none' }, 0.51);
      tl.to('.text-sweep-line-6', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', ease: 'none' }, 0.60);
      tl.to('.hero-title-scroll', { y: 80, ease: 'none' }, 0);

      tl.fromTo('#methodology-section', { yPercent: 100 }, { yPercent: 0, ease: 'none' }, 1);
      tl.fromTo('#process-section', { yPercent: 100 }, { yPercent: 0, ease: 'none' }, 2);
      tl.fromTo('#breathe-section', { yPercent: 100 }, { yPercent: 0, ease: 'none' }, 3);

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

    mm.add('(max-width: 767px)', () => {
      const mobileTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.manifesto-wrap',
          start: 'top 80%',
          end: 'bottom 25%',
          scrub: true,
        }
      });
      for(let i=1; i<=6; i++) {
        mobileTl.to(`.text-sweep-line-${i}`, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', ease: 'none' });
      }

      const reveals = ['.manifesto-wrap', '.methodology-wrap', '#process-section', '#breathe-section'];
      reveals.forEach((sel) => {
        gsap.fromTo(sel,
          { opacity: 0.3, y: 30 },
          {
            scrollTrigger: { trigger: sel, start: 'top 85%', end: 'top 60%', scrub: true },
            opacity: 1, y: 0,
          }
        );
      });
    });

    const cards = document.querySelectorAll('.methodology-card-scroll');
    cards.forEach((card) => {
      gsap.fromTo(card,
        { opacity: 0.4, y: 30 },
        { scrollTrigger: { trigger: card, start: 'top 92%', end: 'top 74%', scrub: 1.0 }, opacity: 1, y: 0, ease: 'power2.out' }
      );
    });

    const dividers = document.querySelectorAll('.process-divider-line');
    dividers.forEach((divider) => {
      gsap.fromTo(divider,
        { scaleX: 0, transformOrigin: 'left center' },
        { scrollTrigger: { trigger: divider, start: 'top 95%', end: 'top 82%', scrub: 0.8 }, scaleX: 1, ease: 'power1.out' }
      );
    });

    const steps = document.querySelectorAll('.process-item');
    steps.forEach((step) => {
      gsap.fromTo(step,
        { opacity: 0, y: 30 },
        { scrollTrigger: { trigger: step, start: 'top 92%', end: 'top 78%', scrub: 1.0 }, opacity: 1, y: 0, ease: 'power2.out' }
      );
    });

    const cols = document.querySelectorAll('.breathe-grid-col');
    cols.forEach((col, idx) => {
      const offsets = [20, 50, 25, 60, 30, 55];
      const offset = offsets[idx % 6];
      gsap.fromTo(col,
        { y: 30 },
        { scrollTrigger: { trigger: col, start: 'top bottom', end: 'bottom top', scrub: 1.5 }, y: -offset, ease: 'power1.out' }
      );
    });

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
      mm.revert();
      if (hero && handleMouseMove) {
        hero.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [projects]);

  return (
    <>
      <div className="w-full mt-6 md:mt-8 overflow-hidden select-none">
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
    </>
  );
}
