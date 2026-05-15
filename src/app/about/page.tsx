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
      <section className="bg-white text-black pt-[clamp(60px,8vw,100px)] pb-0 md:pb-0 relative overflow-hidden" aria-labelledby="about-h">
        <div className="wrap text-center">
          <Reveal>
            <span className="font-space text-[11px] font-medium tracking-[0.4em] uppercase text-[#777] block mb-2">About Us</span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 id="about-h" className="text-[clamp(48px,6vw,84px)] font-bold leading-[1.05] tracking-[-0.03em] text-black mb-4">
              At Pragyan,<br />
              the human lens is<br />
              <span className="text-[#4E58D2]">
                our sharpest tool.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="max-w-[820px] mx-auto space-y-1 text-[#555] text-[clamp(15px,1.2vw,18px)] leading-[1.6] font-light">
              <p>We&rsquo;re curious by nature, ethical by choice, and practical in action.</p>
              <p>We look for the idea beneath the surface &ndash; then turn it into strategy, identity, content,<br className="hidden md:block" /> and communication that actually moves people.</p>
              <p>Our work spans branding, digital experiences, and marketing &ndash; but it always starts with perspective.<br className="hidden md:block" /> Because when you understand why something exists, the how becomes much clearer.</p>
            </div>
          </Reveal>

          <Reveal delay={0.4} className="mt-2 md:mt-4 relative flex justify-center">
            <div className="w-full max-w-[1200px] aspect-[2/1] md:aspect-[3/1] relative bg-white group border-none outline-none overflow-hidden">
              <img
                src="/assets/img/3.png"
                alt="Pragyan Vision"
                className="w-full h-full object-contain transition-transform duration-700 scale-[1.45] group-hover:scale-[1.55] mix-blend-multiply"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-black text-white section-pad" aria-labelledby="values-h">
        <div className="wrap">
          <Reveal className="max-w-[1000px] mb-[clamp(56px,7vw,88px)]">
            <span className="font-space text-[12px] tracking-[0.3em] uppercase text-muted inline-block mb-8">Our team</span>
            <h2 id="values-h" className="!text-[clamp(32px,4.5vw,64px)] leading-[1.1] font-bold text-white max-w-[920px]">
              We're a group of intellectuals<br className="max-[880px]:hidden" />
              who don't separate<br className="max-[880px]:hidden" />
              <em className="not-italic text-yellow">thinking from execution.</em>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col mt-14 max-w-[820px] mx-auto border border-white/5 overflow-hidden">
              <div className="p-8 bg-[#414896] text-white flex items-center min-h-[80px] border-b border-black/10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#4a52ac] cursor-default relative z-[1]">
                <h4 className="text-[clamp(18px,1.5vw,22px)] tracking-tight font-normal">We ask better questions.</h4>
              </div>
              <div className="p-8 bg-[#2B2F77] text-white flex items-center min-h-[80px] border-b border-black/10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#34398d] cursor-default relative z-[1]">
                <h4 className="text-[clamp(18px,1.5vw,22px)] tracking-tight font-normal">We argue (constructively).</h4>
              </div>
              <div className="p-8 bg-[#222] text-white flex flex-col justify-center min-h-[100px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#2a2a2a] cursor-default relative z-[1]">
                <h4 className="text-[clamp(18px,1.5vw,22px)] tracking-tight font-normal">We refine.</h4>
                <p className="text-[clamp(18px,1.5vw,22px)] tracking-tight opacity-90 font-normal">And we don&rsquo;t settle for anything less than right.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-yellow text-black pt-[clamp(48px,7vw,80px)] pb-[clamp(100px,14vw,180px)] relative overflow-hidden" aria-labelledby="fewer-h">
        <div className="wrap">
          <Reveal>
            <div className="flex flex-col gap-1 text-black text-[clamp(16px,1.4vw,22px)] leading-[1.4] font-medium opacity-80">
              <p>We believe in doing fewer things, better.</p>
              <p>In building brands with intent.</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-black max-w-[680px] text-[clamp(24px,3vw,40px)] leading-[1.3] font-bold" id="fewer-h">
              And in working with people<br />who care about the long game.
            </p>
          </Reveal>
        </div>

        {/* Halftone Pattern at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden h-[180px] opacity-100 pointer-events-none">
          <img
            src="/assets/img/zeros.png"
            alt=""
            className="w-full h-full object-contain object-bottom scale-x-[1.3] mix-blend-multiply"
          />
        </div>
      </section>

      <Marquee />

    </article>
  );
}
