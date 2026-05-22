import Reveal from '../components/Reveal';
import Button, { ButtonArrow } from '../components/Button';
import Marquee from '../components/Marquee';

export default function Home() {
  return (


    <article aria-label="Home">
      {/* Hero Section */}

      <section className="md:min-h-[100svh] min-h-0 md:h-[100svh] h-auto relative overflow-hidden bg-black flex flex-col pb-8 md:pb-0" aria-labelledby="hero-h">

        {/* DESKTOP: gradient image, absolutely positioned */}
        <div
          className="absolute z-0 pointer-events-none hidden md:block md:translate-y-[4vh] 2xl:translate-y-0"
          style={{
            left: 'clamp(20px, 3vw, 60px)',
            top: 'clamp(120px, 20vh, 260px)',
            bottom: 'clamp(40px, 7vh, 100px)',
            right: '45%',
            perspective: '1200px',
          }}
        >
          <div
            className="w-full h-full"
            style={{ transform: 'rotateX(18deg) translateY(4%) scaleX(-1)', transformOrigin: 'bottom' }}
          >
            <img
              src="/assets/img/gardient.jpeg"
              alt=""
              className="w-full h-full object-cover object-center"
              style={{
                mixBlendMode: 'screen',
                opacity: 0.95,
                maskImage: 'radial-gradient(ellipse 65% 60% at 40% 45%, black 20%, transparent 68%)',
                WebkitMaskImage: 'radial-gradient(ellipse 65% 60% at 40% 45%, black 20%, transparent 68%)',
              }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-[1] md:flex-1 flex flex-col max-w-[1600px] mx-auto w-full px-[var(--pad)]">

          {/* Heading row */}
          <div className="flex items-start justify-between gap-3 pt-[135px] md:pt-[clamp(140px,18vh,240px)]">
            <Reveal>
              <h1 id="hero-h" className="text-[clamp(32px,3.2vw,68px)] leading-[1.08] font-sans font-bold text-[#fcfcfc] tracking-[-0.03em] max-w-[80%] sm:max-w-[72%] md:max-w-[90%] 2xl:max-w-[75%] md:-translate-x-[2vw] 2xl:translate-x-0">
                Behind every brand is a human <br className="hidden md:inline 2xl:hidden" /> mind. That&apos;s where we start.
              </h1>
            </Reveal>
            {/* Hide on very small screens */}
            <div className="hidden sm:block shrink-0 text-right font-sans font-bold text-[clamp(10px,1.1vw,20px)] tracking-[0.12em] uppercase text-[#fcfcfc] leading-[1.6]" aria-hidden="true">
              BRANDING<br />BUILT<br />FOR<br />FOUNDERS
            </div>
          </div>

          {/* Facts subtext — no indent on mobile */}
          <Reveal delay={0.12}>
            <p className="mt-[clamp(14px,2.2vw,32px)] ml-0 md:ml-[clamp(40px,10vw,220px)] text-[#fcfcfc] text-[clamp(16px,1.25vw,22px)] font-sans italic font-light leading-[1.55]">
              Facts are easy to find.<br />Perspectives are rare.
            </p>
          </Reveal>

          {/* ── MOBILE ONLY: in-flow "We uncover" + image ── */}
          <div className="md:hidden flex flex-col mt-7 pb-4">
            <Reveal delay={0.2}>
              <p className="text-[16px] leading-[1.75] text-[#C9C9CE] font-light">
                We uncover the specific, weird, brilliant idea that made
                {' '}you start your journey &mdash; and{' '}
                <em className="italic">make that your loudest strength.</em>
              </p>
            </Reveal>
            <Reveal delay={0.3} className="mt-5">
              <Button
                href="/services"
                className="!bg-[#FFD111] !text-black !px-6 !py-[12px] !text-[13px] font-bold uppercase tracking-[0.12em] rounded-none hover:!bg-[#FFD111]/90 transition-colors inline-flex justify-center whitespace-nowrap"
              >
                VIEW SERVICES
              </Button>
            </Reveal>
            {/* Mobile image — centered, blended */}
            <div className="h-[180px] mt-6 relative">
              <img
                src="/assets/img/gardient.jpeg"
                alt=""
                className="w-full h-full object-cover object-center"
                style={{
                  mixBlendMode: 'screen',
                  opacity: 0.85,
                  maskImage: 'radial-gradient(ellipse 80% 72% at 50% 50%, black 18%, transparent 68%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 80% 72% at 50% 50%, black 18%, transparent 68%)',
                }}
              />
            </div>
          </div>

          {/* ── DESKTOP ONLY: absolute "We uncover" ── */}
          <div
            className="hidden md:flex absolute right-[var(--pad)] z-[2] flex-col items-end text-right max-w-[clamp(440px,34vw,700px)]"
            style={{ top: 'clamp(380px, 45vh, 720px)' }}
          >
            <Reveal delay={0.2}>
              <p className="text-[clamp(15px,1.1vw,22px)] leading-[1.7] text-[#C9C9CE] font-light">
                We uncover the specific, weird, brilliant idea that made<br />
                you start your journey &mdash; and<br />
                <em className="italic">make that your loudest strength.</em>
              </p>
            </Reveal>
            <Reveal delay={0.3} className="mt-5">
              <Button
                href="/services"
                className="!bg-[#FFD111] !text-black !px-7 !py-[13px] !text-[clamp(12px,0.7vw,14px)] font-bold uppercase tracking-[0.12em] rounded-none hover:!bg-[#FFD111]/90 transition-colors inline-flex justify-center whitespace-nowrap"
              >
                VIEW SERVICES
              </Button>
            </Reveal>
          </div>

        </div>
      </section>


      {/* Manifesto Section */}
      <section className="bg-black section-pad md:py-0 md:h-screen md:min-h-[720px] flex flex-col justify-center relative overflow-hidden" aria-labelledby="man-h">
        <div className="wrap">
          <Reveal className="max-w-[1300px] mx-auto text-center">
            <span className="font-space text-[clamp(12px,0.85vw,16px)] font-light tracking-[0.22em] uppercase text-[#d9d9d9] inline-block mb-[32px]" id="man-h">
              Core Philosophy
            </span>
            <p className="text-[clamp(18px,1.4vw,28px)] leading-[1.65] text-[#E3E3E3] font-sans tracking-[-0.01em]">
              Pragyan is a 360° branding and marketing agency that works as<br />
              <em className="italic">an extension of the founder&apos;s mind.</em>
            </p>

            <p className="text-[clamp(18px,1.4vw,28px)] leading-[1.65] text-[#E3E3E3] font-sans tracking-[-0.01em]">
              We&apos;re a young, sharp team of strategists and creators<br />
              who take your raw, human spark<br />
              and give it the professional gravity it deserves.
            </p>
            <p className="text-[clamp(18px,1.4vw,28px)] leading-[1.65] text-[#FFD111] font-sans font-medium tracking-[-0.01em] mt-[28px]">
              We believe in building long-term partnerships with intellectual honesty.
            </p>
            <p className="text-[clamp(18px,1.4vw,28px)] leading-[1.65] text-[#E3E3E3] font-sans tracking-[-0.01em] mt-[6px]">
              We aren&apos;t for everyone — and we&apos;re okay with that.
            </p>
          </Reveal>

          {/* Methodology Cards Section */}
          <div className="mt-8 md:mt-10 max-w-[1100px] mx-auto">
            <Reveal className="text-center mb-12">
              <span className="font-space text-[clamp(12px,0.85vw,16px)] font-light tracking-[0.22em] uppercase text-[#d9d9d9]">Methodology</span>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  img: "/assets/img/h1.jpeg", // Replace with your image path
                  text: <>We discuss before <br className="hidden md:block" /> we design.</>
                },
                {
                  img: "/assets/img/h2.jpeg", // Replace with your image path
                  text: <>We plan before <br className="hidden md:block" /> we build.</>
                },
                {
                  img: "/assets/img/h3.jpeg", // Replace with your image path
                  text: <>We work with you to turn <br className="hidden md:block" /> curiosity into creativity.</>
                }
              ].map((card, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="bg-surface border border-border-strong rounded-none overflow-hidden transition-all duration-500 hover:border-violet hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] h-full flex flex-col cursor-pointer">
                    <div className="aspect-[4/3] overflow-hidden bg-ink group">
                      <img
                        src={card.img}
                        alt=""
                        className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                      />
                    </div>
                    <div className="p-7 flex-grow text-center md:text-left">
                      <p className="text-[#C9C9CE] text-[clamp(17px,1.2vw,21px)] leading-[1.5] font-medium">
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

      {/* Process Section */}
      <section className="bg-white text-black border-t border-[#E5E5E7] py-[clamp(80px,8vw,140px)] md:py-0 md:h-screen 2xl:min-h-[700px] md:flex md:flex-col md:justify-center relative overflow-hidden" aria-labelledby="process-h">



        <div className="absolute right-0 top-0 w-[50%] h-full pointer-events-none hidden md:block z-[0]">
          <img src="/assets/img/1.png" alt="" className="w-full h-full object-cover object-right" />
        </div>

        <div className="wrap relative z-[1] flex justify-start">
          <div className="w-full md:w-[80%] md:ml-[clamp(40px,4vw,80px)] md:-translate-x-[5vw] lg:-translate-x-[7vw]">
            <div className="mb-[clamp(40px,6vw,64px)] md:mb-5 2xl:mb-[clamp(40px,6vw,64px)] text-left md:ml-[-clamp(40px,4vw,80px)]">
              <Reveal>
                <span className="font-space font-light text-[clamp(12px,0.85vw,16px)] tracking-[0.22em] uppercase text-[#6a6a6a] block mb-2">Process Index</span>
                <h2 id="process-h" className="mt-4 text-[#1b1b1b] tracking-[-0.03em] !text-[clamp(36px,3.5vw,64px)] md:!text-[32px] xl:!text-[40px] 2xl:!text-[clamp(36px,3.5vw,64px)]">
                  <span className="font-bold">How we</span> <em className="italic font-light">work.</em>
                </h2>
              </Reveal>
            </div>

            {/* Top line — before 01 (5 lines total) */}
            <div className="h-px bg-[#d9d9d9] mb-0 w-full md:w-[165%]" />

            <div>
              {[
                { num: '01', title: 'Listen.', desc: <><span className="block md:whitespace-nowrap">Extract the identity that</span><span className="block md:whitespace-nowrap">drives the business.</span></> },
                { num: '02', title: 'Think.', desc: <><span className="block md:whitespace-nowrap">Turn creativity into clear</span><span className="block md:whitespace-nowrap">direction.</span></> },
                { num: '03', title: 'Simplify.', desc: <><span className="block md:whitespace-nowrap">Strip away the noise to</span><span className="block md:whitespace-nowrap">find the voice.</span></> },
                { num: '04', title: 'Magnify.', desc: <><span className="block md:whitespace-nowrap">Take what works and help it</span><span className="block md:whitespace-nowrap">reach the right people.</span></> }
              ].map((step, idx) => (
                <Reveal key={idx} delay={idx * 0.1}>
                  <div className="relative">
                    <div className="grid grid-cols-[44px_1fr] sm:grid-cols-[52px_380px_1fr] xl:grid-cols-[64px_460px_1fr] 2xl:grid-cols-[80px_540px_1fr] gap-x-8 items-center text-left py-[clamp(20px,2.5vw,36px)] md:py-3 xl:py-4 2xl:py-[clamp(20px,2.5vw,36px)] hover:pl-2 transition-all duration-300 md:ml-[-clamp(40px,4vw,80px)]">
                      <div className="font-space text-[clamp(40px,3.5vw,58px)] md:text-[34px] xl:text-[44px] 2xl:text-[clamp(40px,3.5vw,58px)] text-[#E0E0E0] font-normal leading-none self-start pt-1 sm:pt-0 sm:self-auto">{step.num}</div>
                      <div className="flex flex-col gap-3 sm:contents">
                        <div className="font-sans text-[clamp(32px,3.5vw,60px)] md:text-[28px] xl:text-[36px] 2xl:text-[clamp(32px,3.5vw,60px)] font-extrabold tracking-[-0.02em] text-black leading-none">{step.title}</div>
                        <div className="font-sans font-light text-[#6a6a6a] text-[clamp(16px,1.4vw,24px)] md:text-[14px] xl:text-[18px] 2xl:text-[clamp(16px,1.4vw,24px)] leading-[1.6]">{step.desc}</div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 h-px bg-[#d9d9d9] w-full md:w-[165%]" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Breathe Section */}
      <section className="bg-black section-pad md:py-0 md:h-screen 2xl:min-h-[850px] md:flex md:flex-col md:justify-center relative overflow-hidden" aria-labelledby="breathe-h">
        <div className="wrap">
          <Reveal className="mb-6 md:mb-3 2xl:mb-[32px] max-w-[820px] text-center md:text-left mx-auto md:mx-0">
            <span className="font-space text-[clamp(12px,0.85vw,16px)] font-light tracking-[0.22em] uppercase text-[#d9d9d9] mb-3 md:mb-2 2xl:mb-6 block">Our Projects</span>
            <h2 id="breathe-h" className="font-sans font-bold leading-[1.1] tracking-[-0.04em] text-[#FFD111] text-[clamp(28px,2.8vw,48px)] md:text-[26px] xl:text-[36px] 2xl:text-[clamp(28px,2.8vw,48px)]">
              Great ideas<br />
              need room to breathe.
            </h2>
            <p className="text-[#a5a5a5] text-[clamp(18px,1.5vw,26px)] md:text-[14px] xl:text-[18px] 2xl:text-[clamp(18px,1.5vw,26px)] font-light leading-[1.6] mt-3 md:mt-2 2xl:mt-6 italic max-w-[720px] mx-auto md:mx-0">
              We&apos;re fine-tuning this section —<br />
              come back soon to see the work we&apos;re excited to share.
            </p>
          </Reveal>

          {/* Staggered Masonry-like Grid */}
          <div className="grid grid-cols-4 gap-8 md:gap-5 items-start max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1 max-w-[1150px] md:max-w-[780px] xl:max-w-[940px] 2xl:max-w-[1150px] mx-auto w-full">
            <div className="space-y-8 md:space-y-4 2xl:space-y-5">
              <Reveal delay={0.1}>
                <div className="rounded-none overflow-hidden aspect-[4/5] bg-ink border border-border transition-all duration-500 hover:scale-[1.03] hover:border-violet group cursor-pointer max-w-[340px] sm:max-w-none w-full mx-auto">
                  <img src="/assets/img/g1.png" alt="" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
                </div>
              </Reveal>
              <Reveal delay={0.2} className="md:translate-y-2 2xl:translate-y-6 translate-y-0 w-full flex justify-center">
                <div className="rounded-none overflow-hidden aspect-[3/4] bg-ink border border-border transition-all duration-500 hover:scale-[1.03] hover:border-violet group cursor-pointer max-w-[340px] sm:max-w-none w-full">
                  <img src="/assets/img/g2.png" alt="" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
                </div>
              </Reveal>
            </div>

            <div className="space-y-8 md:space-y-4 2xl:space-y-5 pt-0 md:pt-4 2xl:pt-12">
              <Reveal delay={0.3}>
                <div className="rounded-none overflow-hidden aspect-square bg-ink border border-border transition-all duration-500 hover:scale-[1.03] hover:border-violet group cursor-pointer max-w-[340px] sm:max-w-none w-full mx-auto">
                  <img src="/assets/img/g3.png" alt="" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
                </div>
              </Reveal>
              <Reveal delay={0.4} className="md:translate-y-2 2xl:translate-y-6 translate-y-0 w-full flex justify-center">
                <div className="rounded-none overflow-hidden aspect-[4/3] bg-ink border border-border transition-all duration-500 hover:scale-[1.03] hover:border-violet group cursor-pointer max-w-[340px] sm:max-w-none w-full">
                  <img src="/assets/img/g4.png" alt="" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
                </div>
              </Reveal>
            </div>

            <div className="space-y-8 md:space-y-4 2xl:space-y-5 pt-0 md:pt-2 2xl:pt-6">
              <Reveal delay={0.5}>
                <div className="rounded-none overflow-hidden aspect-[3/4] md:aspect-[3/5] bg-ink border border-border transition-all duration-500 hover:scale-[1.03] hover:border-violet group cursor-pointer max-w-[340px] sm:max-w-none w-full mx-auto">
                  <img src="/assets/img/g5.png" alt="" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
                </div>
              </Reveal>
            </div>


            <div className="space-y-8 md:space-y-4 2xl:space-y-5 pt-0 md:pt-6 2xl:pt-16">
              <Reveal delay={0.6}>
                <div className="rounded-none overflow-hidden aspect-[4/5] bg-ink border border-border transition-all duration-500 hover:scale-[1.03] hover:border-violet group cursor-pointer max-w-[340px] sm:max-w-none w-full mx-auto">
                  <img src="/assets/img/g6.png" alt="" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
                </div>
              </Reveal>
            </div>
          </div>





        </div>
      </section>


    </article>
  );
}
