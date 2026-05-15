import Reveal from '../components/Reveal';
import Button, { ButtonArrow } from '../components/Button';
import Marquee from '../components/Marquee';
import PragyanGradient from '../components/PragyanGradient';

export default function Home() {
  return (
    <article aria-label="Home">
      {/* Hero Section */}
      <section className="min-h-[60vh] md:min-h-[65vh] pt-[90px] md:pt-[clamp(100px,12vw,160px)] pb-12 md:pb-[clamp(60px,8vw,120px)] relative overflow-hidden bg-black flex flex-col justify-start" aria-labelledby="hero-h">

        {/* Previous Arc logic remains... */}
        <div className="absolute bottom-0 left-0 w-full h-[45%] md:h-[60%] z-0 pointer-events-none overflow-hidden" style={{ perspective: '1200px' }}>
          <div className="w-full h-full origin-bottom" style={{ transform: 'rotateX(20deg) translateY(5%) scale(1.0) scaleX(-1)' }}>
            <PragyanGradient
              className="w-full h-full block"
              centerX={0.6}
              centerY={1.2}
              arcR={0.95}
              speed={0.6}
            />
          </div>
        </div>
        {/* Top Right Text */}
        <div className="absolute top-[clamp(100px,14vw,120px)] md:top-[clamp(40px,6vw,80px)] right-[var(--pad)] text-right font-sans font-bold text-[9px] md:text-[13px] tracking-[0.02em] uppercase text-white leading-[1.2] z-[2]" aria-hidden="true">
          BRANDING<br />BUILT<br />FOR<br />FOUNDERS
        </div>

        <div className="relative z-[1] w-full max-w-[1200px] mx-auto px-[var(--pad)] mt-0">
          <div className="flex flex-col md:flex-row md:justify-start items-start gap-6 md:gap-[clamp(80px,8vw,140px)]">

            {/* Left Column */}
            <div className="w-full lg:w-auto shrink-0 z-10">
              <Reveal>
                <h1 id="hero-h" className="text-[clamp(40px,8vw,90px)] xl:text-[90px] leading-[1.05] font-bold text-white tracking-[-0.03em]">
                  It starts with a<br />
                  point of view.
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 lg:mt-6 md:ml-[clamp(120px,18vw,350px)] text-[#C9C9CE] text-[clamp(16px,1.5vw,20px)] italic font-light leading-[1.4] max-w-max">
                  Facts are easy to find.<br />
                  Perspectives are rare.
                </p>
              </Reveal>
            </div>

            {/* Right Column (Moved much lower to sit next to the arc) */}
            <div className="w-full lg:w-auto max-w-[600px] flex flex-col items-center md:items-end text-center md:text-right z-10 mt-12 md:mt-64 lg:mt-130">
              <Reveal delay={0.2}>
                <p className="text-[clamp(15px,1.3vw,18px)] leading-[1.6] text-[#C9C9CE] font-light">
                  <span className="md:whitespace-nowrap">We uncover the specific, weird, brilliant idea that made</span><br className="hidden md:block" />
                  <span className="md:whitespace-nowrap">you start your journey &mdash; and</span><br className="hidden md:block" />
                  <em className="italic text-[#C9C9CE] md:whitespace-nowrap">make that your loudest strength.</em>
                </p>
              </Reveal>
              <Reveal delay={0.3} className="mt-10">
                <Button
                  href="/services"
                  className="!bg-[#FFD111] !text-black !px-10 !py-[16px] !text-[12px] font-bold uppercase tracking-[0.1em] rounded-none hover:!bg-[#FFD111]/90 transition-colors inline-flex justify-center whitespace-nowrap"
                >
                  VIEW SERVICES
                </Button>
              </Reveal>
            </div>

          </div>


        </div>
      </section>

      {/* Manifesto Section */}
      <section className="bg-black border-y border-border section-pad" aria-labelledby="man-h">
        <div className="wrap">
          <Reveal className="max-w-[920px] mx-auto text-center">
            <span className="font-space text-[12px] font-medium tracking-[0.18em] uppercase text-muted inline-block mb-[32px]" id="man-h">
              Core Philosophy
            </span>
            <p className="text-[clamp(20px,1.9vw,26px)] leading-[1.55] text-grey tracking-[-0.01em]">
              Pragyan is a 360° branding and marketing agency that works as an <span className="text-yellow font-semibold">extension of the founder's mind.</span>
            </p>
            <div className="w-[60px] h-[2px] bg-yellow mx-auto my-[40px]" aria-hidden="true" />
            <p className="text-[clamp(20px,1.9vw,26px)] leading-[1.55] text-grey tracking-[-0.01em] mt-[28px]">
              We're a young, sharp team of strategists and creators who take your raw human spark and give it the professional gravity it deserves.
            </p>
            <p className="text-[clamp(20px,1.9vw,26px)] leading-[1.55] text-grey tracking-[-0.01em] mt-[28px]">
              We believe in <strong className="text-white font-semibold">building long-term partnerships</strong> and <strong className="text-white font-semibold">intellectual honesty</strong>. We aren't for everyone — and we're okay with that.
            </p>
          </Reveal>

          {/* Methodology Cards Section */}
          <div className="mt-[clamp(64px,10vw,100px)] max-w-[1100px] mx-auto">
            <Reveal className="text-center mb-12">
              <span className="font-space text-[11px] tracking-[0.2em] uppercase text-dim">Methodology</span>
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
                  <div className="bg-surface border border-border-strong rounded-none overflow-hidden transition-all duration-500 hover:border-violet hover:scale-[1.03] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] group h-full flex flex-col cursor-pointer">
                    <div className="aspect-[4/3] overflow-hidden bg-ink">
                      <img
                        src={card.img}
                        alt=""
                        className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                      />
                    </div>
                    <div className="p-7 flex-grow text-center md:text-left">
                      <p className="text-[#C9C9CE] text-[clamp(17px,1.2vw,21px)] leading-[1.5] font-medium transition-colors duration-300 group-hover:text-white">
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
      <section className="bg-white text-black border-t border-[#E5E5E7] py-[clamp(40px,6vw,80px)] relative overflow-hidden" aria-labelledby="process-h">
        
        <div className="absolute right-[20%] top-0 w-full md:w-[85%] h-full pointer-events-none hidden md:block z-[0]">
          <img src="/assets/img/1.png" alt="" className="w-full h-full object-cover object-left" />
        </div>

        <div className="wrap relative z-[1] flex justify-start">
          <div className="w-full md:w-[65%]">
            <div className="mb-[clamp(40px,6vw,64px)] text-left">
              <Reveal>
                <span className="sub-heading font-space text-[#A0A0A5]">Process Index</span>
                <h2 id="process-h" className="mt-4 text-black tracking-[-0.03em] !text-[clamp(40px,5vw,64px)]">
                  <span className="font-bold">How we</span> <em className="italic font-light">work.</em>
                </h2>
              </Reveal>
            </div>

            <div className="border-t border-[#E5E5E7]">
              {[
                { num: '01', title: 'Listen.', desc: <>Extract the identity that<br />drives the business.</> },
                { num: '02', title: 'Think.', desc: <>Turn creativity into clear<br />direction.</> },
                { num: '03', title: 'Simplify.', desc: <>Strip away the noise to<br />find the voice.</> },
                { num: '04', title: 'Magnify.', desc: <>Take what works and help it<br />reach the right people.</> }
              ].map((step, idx) => (
                <Reveal key={idx} delay={idx * 0.1}>
                  <div className="grid grid-cols-[40px_120px_1fr] sm:grid-cols-[60px_160px_1fr] gap-4 items-center text-left py-[clamp(24px,3.5vw,36px)] border-b border-[#E5E5E7] transition-all duration-300 hover:pl-2">
                    <div className="font-space text-[clamp(18px,2vw,24px)] text-[#E5E5E7] font-light">{step.num}</div>
                    <div className="text-[clamp(24px,3vw,32px)] font-bold tracking-[-0.02em] text-black">{step.title}</div>
                    <div className="text-[#888] text-[clamp(13px,1vw,14px)] leading-[1.6] font-medium max-w-[200px]">{step.desc}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Breathe Section */}
      <section className="bg-black section-pad overflow-hidden" aria-labelledby="breathe-h">
        <div className="wrap">
          <Reveal className="mb-[80px] max-w-[820px] text-center md:text-left mx-auto md:mx-0">
            <span className="font-space text-[10px] font-bold tracking-[0.2em] uppercase text-violet mb-6 block">Our Projects</span>
            <h2 id="breathe-h" className="leading-[1.1] tracking-[-0.04em]">
              <span className="text-yellow">Great ideas</span><br />
              <span className="text-white">need room to </span>
              <em className="text-yellow italic not-italic">breathe.</em>
            </h2>
            <p className="text-dim text-[16px] leading-[1.6] mt-6 italic max-w-[480px] mx-auto md:mx-0">
              We&apos;re fine-tuning this section —<br />
              come back soon to see the work we&apos;re excited to share.
            </p>
          </Reveal>

          {/* Staggered Masonry-like Grid */}
          <div className="grid grid-cols-4 gap-6 items-start max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1">
            <div className="space-y-6">
              <Reveal delay={0.1}>
                <div className="rounded-none overflow-hidden aspect-[4/5] bg-ink border border-border transition-all duration-500 hover:scale-[1.03] hover:border-violet group cursor-pointer">
                  <img src="/assets/img/g1.png" alt="" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
                </div>
              </Reveal>
              <Reveal delay={0.2} className="translate-y-12">
                <div className="rounded-none overflow-hidden aspect-[3/4] bg-ink border border-border transition-all duration-500 hover:scale-[1.03] hover:border-violet group cursor-pointer">
                  <img src="/assets/img/g2.png" alt="" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
                </div>
              </Reveal>
            </div>

            <div className="space-y-6 pt-0 md:pt-24">
              <Reveal delay={0.3}>
                <div className="rounded-none overflow-hidden aspect-square bg-ink border border-border transition-all duration-500 hover:scale-[1.03] hover:border-violet group cursor-pointer">
                  <img src="/assets/img/g3.png" alt="" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
                </div>
              </Reveal>
              <Reveal delay={0.4} className="translate-y-12">
                <div className="rounded-none overflow-hidden aspect-[4/3] bg-ink border border-border transition-all duration-500 hover:scale-[1.03] hover:border-violet group cursor-pointer">
                  <img src="/assets/img/g4.png" alt="" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
                </div>
              </Reveal>
            </div>

            <div className="space-y-6 pt-12">
              <Reveal delay={0.5}>
                <div className="rounded-none overflow-hidden aspect-[3/5] bg-ink border border-border transition-all duration-500 hover:scale-[1.03] hover:border-violet group cursor-pointer">
                  <img src="/assets/img/g5.png" alt="" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
                </div>
              </Reveal>
            </div>

            <div className="space-y-6 pt-0 md:pt-32">
              <Reveal delay={0.6}>
                <div className="rounded-none overflow-hidden aspect-[4/5] bg-ink border border-border transition-all duration-500 hover:scale-[1.03] hover:border-violet group cursor-pointer">
                  <img src="/assets/img/g6.png" alt="" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Marquee />

    </article>
  );
}
