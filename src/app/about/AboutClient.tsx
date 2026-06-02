'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Reveal from '../../components/Reveal';

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

    // Symmetric scroll scaling: only fully expanded when perfectly centered in the viewport
    const bgTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        scrub: 0.5, // fast, crisp response
      }
    });

    bgTl.fromTo(yellowBg, 
      { scaleY: 0.3 }, 
      { scaleY: 1.0, duration: 0.5, ease: 'power1.out' }
    )
    .to(yellowBg, { scaleY: 0.3, duration: 0.5, ease: 'power1.in' });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <article aria-label="About">
      <section className="bg-white text-black pt-[clamp(140px,18vw,200px)] pb-[80px] md:pt-[130px] md:pb-[20px] md:h-[100svh] md:flex md:flex-col md:justify-center relative overflow-hidden" aria-labelledby="about-h">
        <div className="wrap text-center">
          <Reveal>
            <span className="text-nav-label tracking-[0.22em] uppercase text-[#6a6a6a] block mb-2">About Us</span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 id="about-h" className="text-hero text-black mb-4 md:mb-1">
              At Pragyan,<br />
              the human lens is<br />
              <span className="inline-block bg-gradient-to-r from-[#161245] via-[#4B3FD4] to-[#786CF0] bg-clip-text text-transparent pb-2">
                our sharpest tool.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2} className="w-full flex justify-center text-center">
            <div className="max-w-[1020px] md:max-w-[900px] w-full text-center space-y-2 md:space-y-1 text-main-desc text-[#555]">
              <p>We&rsquo;re curious by nature, ethical by choice, and practical in action.</p>
              <p>We look for the idea beneath the surface &mdash; then turn it into strategy, identity, content,<br className="hidden md:block" /> and communication that actually moves people.</p>
              <p className="md:whitespace-nowrap">Our work spans branding, digital experiences, and marketing &mdash; but it always starts with perspective.</p>
              <p>Because when you understand why something exists, the how becomes much clearer.</p>
            </div>
          </Reveal>

          <Reveal delay={0.4} className="mt-2 md:mt-0 relative flex justify-center">
            <div className="w-full max-w-[1200px] md:max-w-[min(90%,75vh)] lg:max-w-[min(1100px,100vh)] aspect-[3/2] md:aspect-[2.5/1] relative bg-white group border-none outline-none overflow-hidden">
              <img
                src="/assets/img/3.png"
                alt="Pragyan Vision"
                className="w-full h-full object-contain transition-transform duration-700 scale-[1.75] md:scale-[1.8] group-hover:scale-[1.85] md:group-hover:scale-[1.9] mix-blend-multiply"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-black text-white pt-[80px] pb-[60px] md:pt-[120px] md:pb-[40px] md:h-[100svh] md:flex md:flex-col md:justify-center relative overflow-hidden" aria-labelledby="values-h">
        <div className="section-noise-effect" />
        <div className="wrap">
          <Reveal className="max-w-[1000px] mb-[clamp(56px,7vw,88px)] md:mb-4 lg:mb-6 xl:mb-10 2xl:mb-12">
            <div className="md:-ml-48 xl:-ml-64">
              <span className="text-nav-label tracking-[0.22em] uppercase text-[#d9d9d9] inline-block mb-8 md:mb-2">Our team</span>
              <h2 id="values-h" className="text-section-heading text-white max-w-[1200px]">
                <span className="md:whitespace-nowrap">We&apos;re a group of intellectuals</span><br />
                who don&apos;t separate thinking<br />
                from execution.
              </h2>
            </div>
          </Reveal>
        </div>

        {/* Flush-right container that bypasses wrap padding on the right */}
        <div className="w-full flex justify-end">
          <Reveal delay={0.1} className="w-full flex justify-end">
            <div className="flex flex-col max-w-[1380px] w-full md:w-[70%] lg:w-[60%] xl:w-[55%] 2xl:w-[50%] border border-white/10 md:border-r-0 rounded-none overflow-hidden shadow-2xl ml-4 mr-4 md:ml-0 md:mr-0">
              <div className="py-[clamp(30px,3vw,45px)] md:py-[clamp(10px,1.5vw,15px)] px-12 md:pl-8 lg:pl-10 xl:pl-12 md:pr-6 bg-[#414896] flex items-center min-h-[110px] md:min-h-[60px] border-b border-white/5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#4a52ac] cursor-default relative z-[1]">
                <p className="text-card-title !font-light text-[#f5f5f5]">We ask better questions.</p>
              </div>
              <div className="py-[clamp(30px,3vw,45px)] md:py-[clamp(10px,1.5vw,15px)] px-12 md:pl-8 lg:pl-10 xl:pl-12 md:pr-6 bg-[#2B2F77] flex items-center min-h-[110px] md:min-h-[60px] border-b border-white/5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#34398d] cursor-default relative z-[1]">
                <p className="text-card-title !font-light text-[#f5f5f5]">We argue (constructively).</p>
              </div>
              <div className="py-[clamp(30px,3vw,45px)] md:py-[clamp(12px,1.5vw,20px)] px-12 md:pl-8 lg:pl-10 xl:pl-12 md:pr-6 bg-[#222] flex flex-col justify-center min-h-[140px] md:min-h-[75px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#2a2a2a] cursor-default relative z-[1]">
                <p className="text-card-title !font-light text-[#f5f5f5]">We refine.</p>
                <p className="text-card-title !font-light text-[#f5f5f5] mt-2 md:mt-0">And we don&rsquo;t settle for anything less than right.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Animated Yellow Background Section */}
      <section 
        ref={sectionRef} 
        className="bg-black text-black md:py-0 md:h-[100svh] md:flex md:flex-col md:justify-center relative overflow-hidden" 
        aria-labelledby="fewer-h"
      >
        <div className="w-full relative h-[70vh] md:h-[60vh] md:min-h-[400px] md:flex md:flex-col md:justify-center overflow-hidden">
          {/* Animated Background Band */}
          <div 
            ref={yellowBgRef} 
            className="absolute inset-0 bg-yellow z-0" 
            style={{ transformOrigin: 'center center' }} 
          />

          {/* Foreground Text Content */}
          <div 
            ref={textRef} 
            className="wrap text-black md:-translate-x-[14vw] md:-translate-y-12 relative z-10"
          >
            <div className="flex flex-col gap-1 text-card-title !font-light text-[#1b1b1b]">
              <p>We believe in doing fewer things, better.</p>
              <p>In building brands with intent.</p>
            </div>

            <p className="mt-8 text-section-heading text-[#1b1b1b] max-w-[850px]" id="fewer-h">
              And in working with people<br />who care about the long game.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
