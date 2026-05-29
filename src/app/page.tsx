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
          className="absolute z-0 pointer-events-none hidden md:block md:translate-y-[12vh] 2xl:translate-y-[10vh]"
          style={{
            left: 'clamp(20px, 3vw, 60px)',
            top: 'clamp(320px, 38vh, 440px)',
            bottom: 'clamp(20px, 4vh, 60px)',
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
          <div className="flex items-start justify-between gap-3 pt-[175px] md:pt-[clamp(200px,25vh,300px)] lg:pt-[160px] xl:pt-[180px] 2xl:pt-[clamp(200px,25vh,300px)] md:px-[4vw] lg:px-[6vw] xl:px-[8vw]">
            <Reveal className="md:translate-x-[4vw] lg:translate-x-[6vw]">
              <h1 id="hero-h" className="text-[clamp(36px,4.2vw,92px)] lg:text-[62px] xl:text-[74px] 2xl:text-[clamp(36px,4.2vw,92px)] leading-[1.08] font-sans font-bold text-[#fcfcfc] tracking-[-0.03em] 2xl:translate-x-0">
                <span className="whitespace-nowrap">It starts with a</span> <br />
                <span className="whitespace-nowrap">Point of view.</span>
              </h1>
            </Reveal>
            {/* Hide on very small screens */}
            <div className="hidden sm:block shrink-0 text-right font-sans font-bold text-[clamp(10px,1.1vw,20px)] tracking-[0.12em] uppercase text-[#fcfcfc] leading-[1.6] -mt-2" aria-hidden="true">
              BRANDING<br />BUILT<br />FOR<br />FOUNDERS
            </div>
          </div>

          {/* Facts subtext */}
          <Reveal delay={0.12} className="md:translate-x-[4vw] lg:translate-x-[6vw]">
            <p className="mt-0 md:mt-[4px] xl:mt-[8px] ml-0 md:ml-[clamp(140px,22vw,320px)] text-[#fcfcfc] text-[clamp(16px,1.25vw,22px)] font-sans italic font-light leading-[1.55]">
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
            className="hidden md:flex absolute right-[calc(var(--pad)+4vw)] lg:right-[calc(var(--pad)+6vw)] xl:right-[calc(var(--pad)+8vw)] z-[2] flex-col items-end text-right max-w-[clamp(440px,34vw,700px)]"
            style={{ top: 'clamp(440px, 50vh, 760px)' }}
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
      <section className="bg-black px-[var(--pad)] pt-[100px] pb-[60px] md:pt-[120px] md:pb-[40px] md:h-[100svh] flex flex-col justify-center relative overflow-hidden" aria-labelledby="man-h">
        <div className="wrap w-full lg:-translate-y-[70px] xl:-translate-y-[85px] 2xl:-translate-y-[70px]">
          <Reveal className="max-w-[1300px] mx-auto text-center">
            <span className="font-space text-[clamp(12px,0.85vw,16px)] font-light tracking-[0.22em] uppercase text-[#d9d9d9] inline-block mb-4 md:mb-[clamp(10px,2vh,20px)]" id="man-h">
              Core Philosophy
            </span>
            <p className="text-[clamp(18px,1.4vw,28px)] md:text-[14px] xl:text-[17px] 2xl:text-[clamp(18px,1.2vw,24px)] leading-[1.5] md:leading-[1.4] text-[#E3E3E3] font-sans tracking-[-0.01em]">
              Pragyan is a 360° branding and marketing agency that works as<br />
              <em className="italic">an extension of the founder&apos;s mind.</em>
            </p>

            <p className="text-[clamp(18px,1.4vw,28px)] md:text-[14px] xl:text-[17px] 2xl:text-[clamp(18px,1.2vw,24px)] leading-[1.5] md:leading-[1.4] text-[#E3E3E3] font-sans tracking-[-0.01em] mt-3 md:mt-[clamp(8px,1.5vh,16px)]">
              We&apos;re a young, sharp team of strategists and creators<br />
              who take your raw, human spark<br />
              and give it the professional gravity it deserves.
            </p>
            <p className="text-[clamp(18px,1.4vw,28px)] md:text-[14px] xl:text-[17px] 2xl:text-[clamp(18px,1.2vw,24px)] leading-[1.5] md:leading-[1.4] text-[#FFD111] font-sans font-medium tracking-[-0.01em] mt-6 md:mt-[clamp(12px,2vh,24px)]">
              We believe in building long-term partnerships with intellectual honesty.
            </p>
            <p className="text-[clamp(18px,1.4vw,28px)] md:text-[14px] xl:text-[17px] 2xl:text-[clamp(18px,1.2vw,24px)] leading-[1.5] md:leading-[1.4] text-[#E3E3E3] font-sans tracking-[-0.01em] mt-3 md:mt-[clamp(8px,1.5vh,16px)]">
              We aren&apos;t for everyone — and we&apos;re okay with that.
            </p>
          </Reveal>

          {/* Methodology Cards Section */}
          <div className="mt-10 md:mt-[clamp(10px,2vh,50px)] max-w-[1100px] md:max-w-[760px] xl:max-w-[920px] 2xl:max-w-[1100px] mx-auto">
            <Reveal className="text-center mb-6 md:mb-4 lg:mb-5 xl:mb-6 2xl:mb-8">
              <span className="font-space text-[clamp(12px,0.85vw,16px)] font-light tracking-[0.22em] uppercase text-[#d9d9d9]">Methodology</span>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-3 xl:gap-4 2xl:gap-6">
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
                    <div className="aspect-[4/3] md:aspect-[1.9/1] lg:aspect-[2.1/1] xl:aspect-[2.1/1] 2xl:aspect-[2/1] overflow-hidden bg-ink group">
                      <img
                        src={card.img}
                        alt=""
                        className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                      />
                    </div>
                    <div className="p-7 md:p-3 xl:p-4 2xl:p-5 flex-grow text-center md:text-left">
                      <p className="text-[#C9C9CE] text-[clamp(17px,1.2vw,21px)] md:text-[13px] xl:text-[15px] 2xl:text-[17px] leading-[1.4] font-medium">
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
      <section className="bg-white text-black border-t border-[#E5E5E7] pt-[80px] pb-[60px] md:pt-[130px] md:pb-[40px] md:h-[100svh] flex flex-col justify-center relative overflow-hidden" aria-labelledby="process-h">



        <div className="absolute right-0 top-0 w-[50%] h-full pointer-events-none hidden md:block z-[0]">
          <img src="/assets/img/1.png" alt="" className="w-full h-full object-cover object-right" />
        </div>

        <div className="wrap relative z-[1] flex justify-start w-full">
          <div className="w-full md:w-[90%] lg:w-[85%] md:pl-[4vw] lg:pl-[6vw]">
            <div className="mb-[clamp(30px,5vh,64px)] md:mb-[clamp(16px,2.5vh,32px)] lg:mb-[clamp(20px,3.5vh,40px)] xl:mb-[clamp(24px,4.5vh,48px)] 2xl:mb-[clamp(32px,5.5vh,64px)] text-left">
              <Reveal>
                <span className="font-space font-light text-[clamp(12px,0.85vw,16px)] tracking-[0.22em] uppercase text-[#6a6a6a] block mb-2 md:mb-0.5">Process Index</span>
                <h2 id="process-h" className="mt-4 md:mt-1 text-[#1b1b1b] tracking-[-0.03em] !text-[clamp(32px,3.5vw,56px)] md:!text-[28px] lg:!text-[34px] xl:!text-[42px] 2xl:!text-[clamp(34px,3.5vw,56px)]">
                  <span className="font-bold">How we</span> <em className="italic font-light">work.</em>
                </h2>
              </Reveal>
            </div>

            {/* Top line — before 01 (5 lines total) */}
            <div className="h-px bg-[#d9d9d9] mb-0 w-full md:w-[100%]" />

            <div>
              {[
                { num: '01', title: 'Listen.', lineWidth: 'w-full md:w-[110%]', desc: <><span className="block md:whitespace-nowrap">Extract the identity that</span><span className="block md:whitespace-nowrap">drives the business.</span></> },
                { num: '02', title: 'Think.', lineWidth: 'w-full md:w-[105%]', desc: <><span className="block md:whitespace-nowrap">Turn creativity into clear</span><span className="block md:whitespace-nowrap">direction.</span></> },
                { num: '03', title: 'Simplify.', lineWidth: 'w-full md:w-[95%]', desc: <><span className="block md:whitespace-nowrap">Strip away the noise to</span><span className="block md:whitespace-nowrap">find the voice.</span></> },
                { num: '04', title: 'Magnify.', lineWidth: 'w-full md:w-[100%]', desc: <><span className="block md:whitespace-nowrap">Take what works and help it</span><span className="block md:whitespace-nowrap">reach the right people.</span></> }
              ].map((step, idx) => (
                <Reveal key={idx} delay={idx * 0.1}>
                  <div className="relative">
                    <div className="grid grid-cols-[44px_1fr] sm:grid-cols-[52px_300px_1fr] lg:grid-cols-[52px_200px_1fr] xl:grid-cols-[64px_300px_1fr] 2xl:grid-cols-[80px_460px_1fr] gap-x-8 md:gap-x-4 2xl:gap-x-8 items-center text-left py-[clamp(20px,2.5vw,36px)] md:py-[clamp(12px,2vh,24px)] lg:py-[clamp(16px,2.5vh,28px)] xl:py-[clamp(20px,3vh,32px)] 2xl:py-[clamp(24px,3.5vh,36px)] hover:pl-2 transition-all duration-300">
                      <div className="font-space text-[clamp(36px,3.5vw,52px)] md:text-[28px] lg:text-[36px] xl:text-[42px] 2xl:text-[clamp(36px,3.5vw,52px)] text-[#E0E0E0] font-normal leading-none self-start pt-1 sm:pt-0 sm:self-auto">{step.num}</div>
                      <div className="flex flex-col gap-3 sm:contents">
                        <div className="font-sans text-[clamp(28px,3.5vw,52px)] md:text-[22px] lg:text-[28px] xl:text-[34px] 2xl:text-[clamp(30px,3.5vw,52px)] font-extrabold tracking-[-0.02em] text-black leading-none">{step.title}</div>
                        <div className="font-sans font-light text-[#6a6a6a] text-[clamp(15px,1.4vw,22px)] md:text-[13px] lg:text-[14px] xl:text-[16px] 2xl:text-[clamp(16px,1.4vw,24px)] leading-[1.6]">{step.desc}</div>
                      </div>
                    </div>
                    <div className={`absolute bottom-0 left-0 h-px bg-[#d9d9d9] w-full ${step.lineWidth}`} />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Breathe Section */}
      <section className="bg-black pt-[80px] pb-[60px] md:pt-[120px] md:pb-[40px] md:h-[100svh] flex flex-col justify-center relative overflow-hidden" aria-labelledby="breathe-h">
        <div className="wrap w-full">
          <Reveal className="mb-[clamp(20px,3vh,48px)] max-w-[820px] text-center md:text-left mx-auto md:mx-0 lg:-translate-y-[15px] xl:-translate-y-[25px] 2xl:translate-y-0">
            <span className="font-space text-[clamp(12px,0.85vw,16px)] font-light tracking-[0.22em] uppercase text-[#d9d9d9] mb-3 md:mb-[clamp(8px,1.5vh,16px)] block">Our Projects</span>
            <h2 id="breathe-h" className="font-sans font-bold leading-[1.1] tracking-[-0.04em] text-[#FFD111] text-[clamp(28px,2.8vw,48px)] md:text-[clamp(26px,3vw,38px)] xl:text-[clamp(32px,3vw,48px)]">
              Great ideas<br />
              need room to breathe.
            </h2>
            <p className="text-[#a5a5a5] text-[clamp(16px,1.5vw,26px)] md:text-[clamp(13px,1.2vw,16px)] xl:text-[clamp(15px,1.2vw,20px)] font-light leading-[1.6] mt-3 md:mt-[clamp(10px,2vh,24px)] italic max-w-[720px] mx-auto md:mx-0">
              We&apos;re fine-tuning this section —<br />
              come back soon to see the work we&apos;re excited to share.
            </p>
          </Reveal>

          {/* Staggered Grid — 6 Columns in a Single Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-3 xl:gap-4 items-start max-w-[1200px] md:max-w-[min(90%,140vh)] lg:max-w-[min(95%,150vh)] xl:max-w-[min(95%,160vh)] 2xl:max-w-[1200px] mx-auto w-full">
            {/* 1. Project 1 */}
            <div className="space-y-0 pt-0">
              <Reveal delay={0.1}>
                <div className="rounded-none overflow-hidden aspect-[4/5] bg-ink border border-border transition-all duration-500 hover:scale-[1.03] hover:border-violet group cursor-pointer w-full">
                  <img src="/assets/img/g1.png" alt="" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
                </div>
              </Reveal>
            </div>

            {/* 2. Project 2 */}
            <div className="space-y-0 pt-0 md:pt-4 2xl:pt-8">
              <Reveal delay={0.2}>
                <div className="rounded-none overflow-hidden aspect-[3/4] bg-ink border border-border transition-all duration-500 hover:scale-[1.03] hover:border-violet group cursor-pointer w-full">
                  <img src="/assets/img/g2.png" alt="" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
                </div>
              </Reveal>
            </div>

            {/* 3. Project 3 */}
            <div className="space-y-0 pt-0 md:pt-2 2xl:pt-4">
              <Reveal delay={0.3}>
                <div className="rounded-none overflow-hidden aspect-square bg-ink border border-border transition-all duration-500 hover:scale-[1.03] hover:border-violet group cursor-pointer w-full">
                  <img src="/assets/img/g3.png" alt="" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
                </div>
              </Reveal>
            </div>

            {/* 4. Project 4 */}
            <div className="space-y-0 pt-0 md:pt-6 2xl:pt-12">
              <Reveal delay={0.4}>
                <div className="rounded-none overflow-hidden aspect-[4/3] bg-ink border border-border transition-all duration-500 hover:scale-[1.03] hover:border-violet group cursor-pointer w-full">
                  <img src="/assets/img/g4.png" alt="" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
                </div>
              </Reveal>
            </div>

            {/* 5. Project 5 */}
            <div className="space-y-0 pt-0 md:pt-1 2xl:pt-3">
              <Reveal delay={0.5}>
                <div className="rounded-none overflow-hidden aspect-[3/4] md:aspect-[3/4.2] 2xl:aspect-[3/5] bg-ink border border-border transition-all duration-500 hover:scale-[1.03] hover:border-violet group cursor-pointer w-full">
                  <img src="/assets/img/g5.png" alt="" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
                </div>
              </Reveal>
            </div>

            {/* 6. Project 6 */}
            <div className="space-y-0 pt-0 md:pt-5 2xl:pt-10">
              <Reveal delay={0.6}>
                <div className="rounded-none overflow-hidden aspect-[4/5] bg-ink border border-border transition-all duration-500 hover:scale-[1.03] hover:border-violet group cursor-pointer w-full">
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
