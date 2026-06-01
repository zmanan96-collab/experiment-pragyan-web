import Reveal from '../../components/Reveal';
import Button, { ButtonArrow } from '../../components/Button';
import { Metadata } from 'next';
import Marquee from '@/components/Marquee';

export const metadata: Metadata = {
  title: 'About — Pragyan',
};

export default function About() {
  return (
    <article aria-label="About">
      <section className="bg-white text-black pt-[clamp(140px,18vw,200px)] pb-[80px] md:pt-[130px] md:pb-[20px] md:h-[100svh] md:flex md:flex-col md:justify-center relative overflow-hidden" aria-labelledby="about-h">
        <div className="wrap text-center">
          <Reveal>
            <span className="font-space text-[clamp(12px,0.85vw,16px)] font-light tracking-[0.22em] uppercase text-[#6a6a6a] block mb-2">About Us</span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 id="about-h" className="font-sans text-[clamp(28px,7.5vw,42px)] md:text-[clamp(36px,4.2vw,58px)] font-bold leading-[1.05] tracking-[-0.03em] text-black mb-4 md:mb-1">
              At Pragyan,<br />
              the human lens is<br />
              <span className="inline-block bg-gradient-to-r from-[#161245] via-[#4B3FD4] to-[#786CF0] bg-clip-text text-transparent pb-2">
                our sharpest tool.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2} className="w-full flex justify-center text-center">
            <div className="max-w-[1020px] md:max-w-[900px] w-full text-center space-y-2 md:space-y-1 text-[#555] text-[clamp(20px,1.6vw,24px)] md:text-[clamp(16px,1.4vw,19px)] leading-[1.6] font-sans font-light">
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
              <span className="font-space text-[clamp(12px,0.85vw,16px)] font-light tracking-[0.22em] uppercase text-[#d9d9d9] inline-block mb-8 md:mb-2">Our team</span>
              <h2 id="values-h" className="font-sans !text-[clamp(36px,5.2vw,76px)] md:!text-[clamp(28px,3.5vw,46px)] leading-[1.1] font-bold text-white max-w-[1200px]">
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
                <p className="font-sans !font-light text-[#f5f5f5] !text-[clamp(26px,2.2vw,36px)] md:!text-[clamp(16px,1.5vw,22px)] tracking-tight">We ask better questions.</p>
              </div>
              <div className="py-[clamp(30px,3vw,45px)] md:py-[clamp(10px,1.5vw,15px)] px-12 md:pl-8 lg:pl-10 xl:pl-12 md:pr-6 bg-[#2B2F77] flex items-center min-h-[110px] md:min-h-[60px] border-b border-white/5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#34398d] cursor-default relative z-[1]">
                <p className="font-sans !font-light text-[#f5f5f5] !text-[clamp(26px,2.2vw,36px)] md:!text-[clamp(16px,1.5vw,22px)] tracking-tight">We argue (constructively).</p>
              </div>
              <div className="py-[clamp(30px,3vw,45px)] md:py-[clamp(12px,1.5vw,20px)] px-12 md:pl-8 lg:pl-10 xl:pl-12 md:pr-6 bg-[#222] flex flex-col justify-center min-h-[140px] md:min-h-[75px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#2a2a2a] cursor-default relative z-[1]">
                <p className="font-sans !font-light text-[#f5f5f5] !text-[clamp(26px,2.2vw,36px)] md:!text-[clamp(16px,1.5vw,22px)] tracking-tight">We refine.</p>
                <p className="font-sans !font-light text-[#f5f5f5] !text-[clamp(26px,2.2vw,36px)] md:!text-[clamp(16px,1.5vw,22px)] tracking-tight mt-2 md:mt-0">And we don&rsquo;t settle for anything less than right.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-black text-black md:py-0 md:h-[100svh] md:flex md:flex-col md:justify-center relative overflow-hidden" aria-labelledby="fewer-h">

        {/* Centered Yellow Band (Vertically smaller: h-[60vh] on desktop, pure black space at top and bottom) */}
        <div className="w-full bg-yellow py-[clamp(110px,16vw,200px)] pb-[clamp(180px,22vw,300px)] md:py-0 md:h-[60vh] md:min-h-[400px] md:flex md:flex-col md:justify-center relative overflow-hidden">
          
          <div className="wrap text-black md:-translate-x-[14vw] md:-translate-y-12">
            <Reveal>
              <div className="flex flex-col gap-1 text-[#1b1b1b] text-[clamp(32px,3.2vw,46px)] md:text-[clamp(24px,3vw,40px)] leading-[1.4] font-sans font-light">
                <p>We believe in doing fewer things, better.</p>
                <p>In building brands with intent.</p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 text-[#1b1b1b] max-w-[850px] text-[clamp(32px,3.8vw,56px)] md:text-[clamp(18px,2.2vw,30px)] leading-[1.25] font-sans font-bold" id="fewer-h">
                And in working with people<br />who care about the long game.
              </p>
            </Reveal>
          </div>

          {/* Halftone Pattern at bottom of the yellow band */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden h-[210px] opacity-100 pointer-events-none">
            <img
              src="/assets/img/zeros.png"
              alt=""
              className="w-full h-full object-contain object-bottom scale-x-[1.3] mix-blend-multiply"
            />
          </div>

        </div>

      </section>

    </article>
  );
}
