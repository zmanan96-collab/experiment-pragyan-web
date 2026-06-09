import { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import HomeSmoothScroll from '../components/HomeSmoothScroll';
import HomeInteractive from './HomeInteractive';

export const metadata: Metadata = {
  title: 'Pragyan | Meaningful Brand Perspective',
  description: "At Pragyan, we transform conviction into strategy, identity, communication, and growth.",
  alternates: {
    canonical: 'https://www.mypragyan.com',
  },
};

const projects = [
  {
    title: "ATC CHAINS INDIA",
    tags: ["MANUFACTURING", "CONVEYOR COMPONENTS", "FOOD & BEVERAGE"],
    image: "/ATC-card.webp"
  },
  {
    title: "GLOBAL GUARDIANS SCHOOL",
    tags: ["Industry: Education"],
    image: "/ggs-card.webp"
  },
  {
    title: "BHAVYA SRISHTI UDYOG",
    tags: ["Industry: Sustainable Manufacturing", "Bamboo"],
    image: "/bsu-card.webp"
  },
  {
    title: "SHREEJI ENTERPRISE",
    tags: ["Industry: Engineered Roofing Solutions"],
    image: "/card shree ji.webp"
  },
  {
    title: "YASH ENGINEERS (INDIA) PVT. LTD.",
    tags: ["Industry: Industrial Machinery"],
    image: "/yash-card.webp"
  },
  {
    title: "BHAKTINANDAN",
    tags: ["Industry: Consumer Goods / Cold-Pressed Oils"],
    image: "/Bhaktinandan-card.webp"
  },
  {
    title: "GANESH VERMA",
    tags: ["Personal Branding & LinkedIn"],
    image: "/ganesh-card.webp"
  },
  {
    title: "Apartamento",
    tags: ["PHOTOGRAPHY", "CREATIVE"],
    image: "https://images.unsplash.com/photo-1542241647-9cbb2225278b?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Home() {
  return (
    <>
      <HomeSmoothScroll />
      <div className="noise-effect" />

      <div id="smooth-wrapper" className="smooth-wrapper w-full bg-black">
        <div id="smooth-content" className="smooth-content w-full relative">

          <article aria-label="Home" className="relative bg-black overflow-hidden">
            <div id="deck-container" className="relative w-full bg-black">

              {/* SECTION 1: HERO */}
              <section
                id="hero-section"
                className="md:min-h-[100svh] min-h-0 md:h-[100svh] h-auto relative overflow-hidden bg-black flex flex-col pb-8 md:pb-0 z-10 w-full"
                aria-labelledby="hero-h"
              >
                <div id="mouse-light" className="mouse-light hidden md:block" />

                <div className="hero-content-fade relative z-[1] md:flex-1 flex flex-col justify-center max-w-[1600px] mx-auto w-full px-[var(--pad)] pt-[140px] md:pt-[100px] lg:pt-[120px] pb-12 md:pb-16 hero-title-scroll">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16 w-full">
                    <div className="flex flex-col items-start gap-6 md:gap-7 lg:gap-8 w-full md:w-[60%] max-w-[1000px] px-8 md:px-[4vw] lg:px-[6vw] xl:px-[8vw]">
                      <Reveal>
                        <h1 id="hero-h" className="text-hero text-[#fcfcfc]">
                          <span className="whitespace-normal md:whitespace-nowrap block">Behind every</span>
                          <span className="whitespace-normal md:whitespace-nowrap block">meaningful brand</span>
                          <span className="whitespace-normal md:whitespace-nowrap block">
                            is a <span className="bg-gradient-to-r from-[#1E1F65] via-[#4E54D4] to-[#7678ED] bg-clip-text text-transparent inline-block animate-gradient-flow">perspective.</span>
                          </span>
                        </h1>
                      </Reveal>

                      <Reveal delay={0.1} className="w-full flex md:hidden justify-center relative z-10 select-none pointer-events-none mt-[5%] mb-2">
                        <video
                          src="/home-hero.webm"
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full aspect-square max-w-[400px] object-contain pointer-events-none mix-blend-screen scale-[1.20] translate-y-[5%]"
                        />
                      </Reveal>

                      <Reveal delay={0.12}>
                        <div className="flex flex-col gap-0.5 md:gap-1 max-md:mt-[2vh]">
                          <p className="text-main-desc text-[#C9C9CE] whitespace-normal md:whitespace-nowrap">
                            A founder&apos;s conviction.
                          </p>
                          <p className="text-main-desc text-[#C9C9CE] whitespace-normal md:whitespace-nowrap">
                            A point of view worth building around.
                          </p>
                        </div>
                      </Reveal>

                      <Reveal delay={0.24}>
                        <div className="flex flex-col gap-4 max-w-[800px]">
                          <p className="text-main-desc text-[#C9C9CE]">
                            <span className="sm:whitespace-nowrap">At Pragyan, we transform that conviction into strategy, identity,</span><br className="hidden sm:inline" /> communication, and growth.
                          </p>
                          <p className="text-main-desc text-[#C9C9CE]">
                            <span className="sm:whitespace-nowrap">We partner with founders and teams to shape ideas into brands,</span><br className="hidden sm:inline" /> stories, and experiences that build connection, trust, and lasting impact.
                          </p>
                        </div>
                      </Reveal>

                      <Reveal delay={0.36} className="mt-2">
                        <Button
                          href="/services"
                          className="uppercase w-fit inline-flex items-center justify-center whitespace-nowrap"
                        >
                          VIEW SERVICES
                        </Button>
                      </Reveal>
                    </div>

                    <div className="hidden md:flex w-full md:w-[40%] px-8 md:px-0 justify-center md:justify-end xl:justify-center relative z-10 select-none pointer-events-none">
                      <Reveal delay={0.4} className="w-full flex justify-end">
                        <video
                          src="/home-hero.webm"
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full aspect-square max-w-[500px] object-contain pointer-events-none mix-blend-screen scale-[1.20]"
                        />
                      </Reveal>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 2: CORE PHILOSOPHY */}
              <section
                id="manifesto-section"
                className="md:absolute md:top-0 md:left-0 md:h-[100vh] h-auto bg-night border-t border-border shadow-[0_-30px_60px_rgba(0,0,0,0.85)] px-[var(--pad)] py-20 md:py-0 flex flex-col justify-center relative overflow-hidden z-20 w-full"
                aria-labelledby="man-h"
              >
                <div className="wrap w-full manifesto-wrap">
                  <Reveal className="max-w-[1300px] mx-auto text-center">
                    <span className="text-nav-label tracking-[0.22em] !text-[#a6a6a6] inline-block mb-4 md:mb-[clamp(10px,2vh,20px)]" id="man-h">
                      Why Pragyan
                    </span>
                    <div className="relative max-w-[1300px] mx-auto text-center flex flex-col items-center gap-1.5 md:gap-2">
                      <div className="relative block w-full max-w-[90vw] md:w-fit select-none pointer-events-none">
                        <span className="block text-philosophy-desc text-[#4A4A4D] whitespace-normal md:whitespace-nowrap text-center">
                          From emerging ventures to growing businesses, we help meaningful
                        </span>
                        <span
                          className="text-sweep-line-1 absolute top-0 left-0 right-0 block text-philosophy-desc text-[#E3E3E3] w-full h-full pointer-events-none select-none whitespace-normal md:whitespace-nowrap overflow-hidden text-center"
                          style={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                        >
                          From emerging ventures to growing businesses, we help meaningful
                        </span>
                      </div>
                      <div className="relative block w-full max-w-[90vw] md:w-fit select-none pointer-events-none">
                        <span className="block text-philosophy-desc text-[#4A4A4D] whitespace-normal md:whitespace-nowrap text-center">
                          ideas find their voice, earn attention, and create lasting impact.
                        </span>
                        <span
                          className="text-sweep-line-2 absolute top-0 left-0 right-0 block text-philosophy-desc text-[#E3E3E3] w-full h-full pointer-events-none select-none whitespace-normal md:whitespace-nowrap overflow-hidden text-center"
                          style={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                        >
                          ideas find their voice, earn attention, and create lasting impact.
                        </span>
                      </div>
                    </div>

                    <div className="relative max-w-[1300px] mx-auto text-center flex flex-col items-center gap-1.5 md:gap-2 mt-6 md:mt-[clamp(12px,2vh,24px)]">
                      <div className="relative block w-full max-w-[90vw] md:w-fit select-none pointer-events-none">
                        <span className="block text-philosophy-desc text-[#4A4A4D] whitespace-normal md:whitespace-nowrap text-center">
                          We&apos;re a young team of strategists and creators who believe the
                        </span>
                        <span
                          className="text-sweep-line-3 absolute top-0 left-0 right-0 block text-philosophy-desc text-[#E3E3E3] w-full h-full pointer-events-none select-none whitespace-normal md:whitespace-nowrap overflow-hidden text-center"
                          style={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                        >
                          We&apos;re a young team of strategists and creators who believe the
                        </span>
                      </div>
                      <div className="relative block w-full max-w-[90vw] md:w-fit select-none pointer-events-none">
                        <span className="block text-philosophy-desc text-[#4A4A4D] whitespace-normal md:whitespace-nowrap text-center">
                          best brands are built from human insight.
                        </span>
                        <span
                          className="text-sweep-line-4 absolute top-0 left-0 right-0 block text-philosophy-desc text-[#E3E3E3] w-full h-full pointer-events-none select-none whitespace-normal md:whitespace-nowrap overflow-hidden text-center"
                          style={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                        >
                          best brands are built from human insight.
                        </span>
                      </div>
                    </div>

                    <div className="relative max-w-[1300px] mx-auto text-center flex flex-col items-center gap-1.5 md:gap-2 mt-6 md:mt-[clamp(12px,2vh,24px)]">
                      <div className="relative block w-full max-w-[90vw] md:w-fit select-none pointer-events-none">
                        <span className="block text-philosophy-desc text-[#4A4A4D] whitespace-normal md:whitespace-nowrap text-center">
                          We value curiosity, intellectual honesty, and long-term thinking.
                        </span>
                        <span
                          className="text-sweep-line-5 absolute top-0 left-0 right-0 block text-philosophy-desc font-medium bg-gradient-to-r from-[#1E1F65] via-[#4B3FD4] to-[#7678ED] bg-clip-text text-transparent animate-gradient-flow w-full h-full pointer-events-none select-none whitespace-normal md:whitespace-nowrap overflow-hidden text-center"
                          style={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                        >
                          We value curiosity, intellectual honesty, and long-term thinking.
                        </span>
                      </div>
                      <div className="relative block w-full max-w-[90vw] md:w-fit select-none pointer-events-none">
                        <span className="block text-philosophy-desc text-[#4A4A4D] whitespace-normal md:whitespace-nowrap text-center">
                          We aren&apos;t for everyone &mdash; and we&apos;re okay with that.
                        </span>
                        <span
                          className="text-sweep-line-6 absolute top-0 left-0 right-0 block text-philosophy-desc text-[#E3E3E3] w-full h-full pointer-events-none select-none whitespace-normal md:whitespace-nowrap overflow-hidden text-center"
                          style={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                        >
                          We aren&apos;t for everyone &mdash; and we&apos;re okay with that.
                        </span>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </section>

              {/* SECTION 3: METHODOLOGY */}
              <section
                id="methodology-section"
                className="md:absolute md:top-0 md:left-0 md:h-[100vh] h-auto bg-night border-t border-border shadow-[0_-30px_60px_rgba(0,0,0,0.85)] px-[var(--pad)] py-20 md:py-0 flex flex-col justify-center relative overflow-hidden z-25 w-full"
                aria-labelledby="methodology-h"
              >
                <div className="wrap w-full methodology-wrap">
                  <div className="methodology-section max-w-[1100px] md:max-w-[760px] xl:max-w-[920px] 2xl:max-w-[1100px] mx-auto">
                    <Reveal className="text-center mb-6 md:mb-4 lg:mb-5 xl:mb-6 2xl:mb-8">
                      <span id="methodology-h" className="text-nav-label tracking-[0.22em] !text-[#a6a6a6]" style={{ color: '#a6a6a6' }}>Methodology</span>
                    </Reveal>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-3 xl:gap-4 2xl:gap-6">
                      {[
                        {
                          title: "We discuss",
                          desc: "before we design.",
                          illustration: (
                            <video
                              src="/Home%20We%20Discuss.webm"
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full h-full object-cover mix-blend-screen"
                              style={{ transform: 'scale(1.30)', transformOrigin: 'center' }}
                            />
                          )
                        },
                        {
                          title: "We plan",
                          desc: "before we build.",
                          illustration: (
                            <video
                              src="/home-we-plan.webm"
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full h-full object-cover mix-blend-screen"
                              style={{ transform: 'scale(1.30)', transformOrigin: 'center' }}
                            />
                          )
                        },
                        {
                          title: "We work with you",
                          desc: "to turn curiosity into creativity.",
                          illustration: (
                            <video
                              src="/home-we-work-with-you.webm"
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full h-full object-cover mix-blend-screen"
                              style={{ transform: 'scale(1.20)', transformOrigin: 'center' }}
                            />
                          )
                        }
                      ].map((card, i) => (
                        <Reveal key={i} delay={i * 0.1} className="methodology-card-scroll">
                          <div className="flex flex-col h-full cursor-pointer group text-left">
                            <div className="bg-[#0b0b0f] rounded-[12px] overflow-hidden transition-all duration-500 group-hover:shadow-[0_20px_40px_rgba(255,255,255,0.07)] w-full aspect-[4/4.5] relative mb-4 flex items-center justify-center pointer-events-none">
                              {card.illustration}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none z-10"></div>
                            </div>
                            <div className="px-1 flex flex-col">
                              <h3 className="text-card-title text-white mb-1 transition-colors duration-300 group-hover:text-white">
                                {card.title}
                              </h3>
                              <p className="text-small-desc text-[#A1A1AA] font-light leading-relaxed">
                                {card.desc}
                              </p>
                            </div>
                          </div>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 4: PROCESS */}
              <section
                id="process-section"
                className="md:absolute md:top-0 md:left-0 md:h-[100vh] h-auto bg-white text-black border-t border-[#E5E5E7] shadow-[0_-30px_60px_rgba(0,0,0,0.2)] py-20 md:py-0 flex flex-col justify-center relative overflow-hidden z-30 w-full"
                aria-labelledby="process-h"
              >
                <div className="absolute right-0 top-0 w-[50%] h-full pointer-events-none hidden md:block z-[0]">
                  <img src="/assets/img/Home-process.webp" alt="" role="presentation" className="w-full h-full object-cover object-right" />
                </div>

                <div className="wrap relative z-[1] flex justify-start w-full px-[var(--pad)]">
                  <div className="w-full md:w-[90%] lg:w-[85%] md:pl-[4vw] lg:pl-[6vw]">
                    <div className="mb-[clamp(30px,5vh,64px)] md:mb-[clamp(16px,2.5vh,32px)] lg:mb-[clamp(20px,3.5vh,40px)] xl:mb-[clamp(24px,4.5vh,48px)] 2xl:mb-[clamp(32px,5.5vh,64px)] text-left">
                      <Reveal>
                        <span className="text-nav-label tracking-[0.22em] uppercase text-[#a6a6a6] block mb-2 md:mb-0.5">Process Index</span>
                        <h2 id="process-h" className="mt-4 md:mt-1 text-section-heading text-[#1b1b1b]">
                          <span>How we</span> <em className="italic font-light">work.</em>
                        </h2>
                      </Reveal>
                    </div>

                    <div className="h-px bg-[#d9d9d9] mb-0 w-full md:w-[100%] process-divider-line" />

                    <div>
                      {[
                        { num: '01', title: 'Listen.', lineWidth: 'w-full md:w-[110%]', desc: <><span className="block md:whitespace-nowrap">Extract the identity that</span><span className="block md:whitespace-nowrap">drives the business.</span></> },
                        { num: '02', title: 'Think.', lineWidth: 'w-full md:w-[105%]', desc: <><span className="block md:whitespace-nowrap">Turn creativity into clear</span><span className="block md:whitespace-nowrap">direction.</span></> },
                        { num: '03', title: 'Simplify.', lineWidth: 'w-full md:w-[95%]', desc: <><span className="block md:whitespace-nowrap">Strip away the noise to</span><span className="block md:whitespace-nowrap">find the voice.</span></> },
                        { num: '04', title: 'Magnify.', lineWidth: 'w-full md:w-[100%]', desc: <><span className="block md:whitespace-nowrap">Take what works and help it</span><span className="block md:whitespace-nowrap">reach the right people.</span></> }
                      ].map((step, idx) => (
                        <Reveal key={idx} delay={idx * 0.1} className="process-item">
                          <div className="relative">
                            <div className="grid grid-cols-[44px_1fr] sm:grid-cols-[52px_300px_1fr] lg:grid-cols-[52px_200px_1fr] xl:grid-cols-[64px_300px_1fr] 2xl:grid-cols-[80px_460px_1fr] gap-x-8 md:gap-x-4 2xl:gap-x-8 items-center text-left py-[clamp(20px,2.5vw,36px)] md:py-[clamp(12px,2vh,24px)] lg:py-[clamp(16px,2.5vh,28px)] xl:py-[clamp(20px,3vh,32px)] 2xl:py-[clamp(24px,3.5vh,36px)] hover:pl-2 transition-all duration-300">
                              <div className="font-space text-[clamp(36px,3.5vw,52px)] md:text-[28px] lg:text-[36px] xl:text-[42px] 2xl:text-[clamp(36px,3.5vw,52px)] text-[#E0E0E0] font-normal leading-none self-start pt-1 sm:pt-0 sm:self-auto">{step.num}</div>
                              <div className="flex flex-col gap-3 sm:contents">
                                <div className="text-card-title text-black leading-none">{step.title}</div>
                                <div className="text-small-desc text-[#6a6a6a]">{step.desc}</div>
                              </div>
                            </div>
                            <div className={`absolute bottom-0 left-0 h-px bg-[#d9d9d9] w-full ${step.lineWidth} process-divider-line`} />
                          </div>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 5: BREATHE / PROJECTS */}
              <section
                id="breathe-section"
                className="md:absolute md:top-0 md:left-0 md:h-[100vh] h-auto bg-black border-t border-border py-20 md:py-0 flex flex-col justify-center relative overflow-hidden z-40 w-full"
                aria-labelledby="breathe-h"
              >
                <div className="wrap w-full px-[var(--pad)]">
                  <Reveal className="mb-[clamp(20px,3vh,48px)] max-w-[820px] text-center md:text-left mx-auto md:mx-0 lg:-translate-y-[15px] xl:-translate-y-[25px] 2xl:translate-y-0">
                    <span className="text-nav-label tracking-[0.22em] uppercase text-[#6A6A6A] mb-3 md:mb-[clamp(8px,1.5vh,16px)] block">Our Projects</span>
                    <h2 id="breathe-h" className="text-section-heading text-white">
                      Work that started with<br />
                      <em className="italic font-light">a point of view.</em>
                    </h2>
                  </Reveal>
                </div>

                <HomeInteractive projects={projects} />
              </section>

            </div>
          </article>

        </div>
      </div>
    </>
  );
}
