import { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '../../components/Reveal';
import HomeSmoothScroll from '../../components/HomeSmoothScroll';
import ServicesAnimations from './ServicesAnimations';
import ServicesAccordion from './ServicesAccordion';
import FAQAccordion from './FAQAccordion';

export const metadata: Metadata = {
  title: 'Branding & Marketing Services | Pragyan Ahmedabad',
  description: "Brand strategy, visual identity, content, digital marketing, personal branding & OOH advertising. Explore how Pragyan turns founder vision into brand reality.",
  alternates: {
    canonical: 'https://www.mypragyan.com/services',
  },
};

const services = [
  {
    seoTitle: "Brand Strategy — Positioning, Research & Communication",
    title: "Brand Strategy",
    tagline: "The idea everything else builds on.",
    copy: "Every strong brand is built around a clear point of view. Brand strategy is the work of uncovering what makes your business distinct and translating it into direction. It creates the foundation for decisions, communication, and growth.",
    deliverables: ["Positioning", "Research", "Communication Strategy"]
  },
  {
    seoTitle: "Brand Identity & Visual Expression Design",
    title: "Identity & Expression",
    tagline: "How your brand looks, sounds, and feels.",
    copy: "Identity is more than a logo. It's the experience of encountering your brand. We create visual and verbal systems that help businesses show up consistently, confidently, and recognisably across every touchpoint.",
    deliverables: ["Visual Identity", "Verbal Identity", "Brand Guidelines", "Design Systems", "Marketing Collateral"]
  },
  {
    seoTitle: "Content Strategy & Brand Communication",
    title: "Content & Communication",
    tagline: "Your thinking, made clear.",
    copy: "Good communication helps people understand who you are and why your work matters. We develop content that reflects your perspective, speaks to the right audience, and feels human in every format.",
    deliverables: ["Website Copy", "Brand Stories", "Presentations", "Brochures", "Editorial & Long-form Content"]
  },
  {
    seoTitle: "Digital Marketing — SEO, Campaigns & Analytics",
    title: "Digital Marketing",
    tagline: "Helping the right people find you.",
    copy: "Marketing works best when it's built on clarity. We create campaigns and digital systems that connect your work with the people most likely to value it, building visibility that supports long-term growth.",
    deliverables: ["Campaign Strategy", "Performance Marketing", "SEO", "Analytics"]
  },
  {
    seoTitle: "Social Media Management & Community Building",
    title: "Social & Community",
    tagline: "Showing up with consistency and intent.",
    copy: "A meaningful social presence isn't built through volume alone. It's built through relevance, clarity, and a point of view people want to follow. We help brands create content and communities that strengthen relationships over time.",
    deliverables: ["Content Strategy", "Social Media Management", "Community Building", "Reputation Management"]
  },
  {
    seoTitle: "Personal Branding & LinkedIn Strategy for Founders",
    title: "Personal Branding & LinkedIn",
    tagline: "Building trust through people.",
    copy: "People often connect with founders before they connect with companies. We help founders and professionals articulate their expertise, develop a distinctive voice, and build credibility through thoughtful communication.",
    deliverables: ["LinkedIn Strategy", "Personal Brand Positioning", "Profile Development"]
  },
  {
    seoTitle: "OOH & Outdoor Advertising Campaigns",
    title: "OOH Advertising",
    tagline: "Making an idea impossible to miss.",
    copy: "Outdoor advertising demands simplicity and confidence. We develop campaigns that communicate a clear idea quickly and effectively across public spaces, creating memorable brand moments beyond the screen.",
    deliverables: ["Campaign Concepts", "Hoardings", "Media Planning"]
  }
];

const faqs = [
  {
    question: "What is brand strategy?",
    answer: "Brand strategy helps clarify what your business stands for, who it serves, and why people should choose it. It provides the direction that guides identity, communication, and long-term decision-making."
  },
  {
    question: "How long does a branding project take?",
    answer: "Timelines vary depending on scope. Smaller projects may take a few weeks, while larger engagements involving strategy, identity, and communication can take several months. We establish timelines collaboratively at the beginning of every project."
  },
  {
    question: "Do you work with startups?",
    answer: "Yes. We work with businesses at different stages of growth — from emerging ventures finding their footing to established organisations looking to evolve. What matters most is a willingness to think intentionally about the brand being built."
  },
  {
    question: "What does personal branding include?",
    answer: "Personal branding can include positioning, profile optimisation, content strategy, thought leadership development, and ongoing communication support. The goal is to articulate your perspective clearly and consistently."
  }
];

export default function Services() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is brand strategy?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Brand strategy is the foundational blueprint that defines who you are, who you serve, and how you communicate. It includes positioning, research, and communication strategy."
                }
              },
              {
                "@type": "Question",
                "name": "How long does a branding project take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A branding project at Pragyan typically takes 6-12 weeks depending on scope."
                }
              },
              {
                "@type": "Question",
                "name": "Do you work with startups?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Pragyan works with early-stage founders and startups on brand strategy and identity."
                }
              },
              {
                "@type": "Question",
                "name": "What does personal branding include?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Personal branding includes LinkedIn strategy, positioning, profile development, and content development for founders."
                }
              }
            ]
          })
        }}
      />
      <HomeSmoothScroll />
      <ServicesAnimations />
      <div className="noise-effect" />
      <div id="smooth-wrapper" className="smooth-wrapper w-full bg-black">
        <div id="smooth-content" className="smooth-content w-full relative">
          <article aria-label="Services">
            <div id="services-deck-container" className="relative w-full bg-black">
              <section id="services-hero-section" className="bg-white text-black relative overflow-hidden z-10 w-full min-h-[100svh] md:flex md:flex-col" aria-labelledby="services-hero">
                <div className="max-w-[1600px] mx-auto w-full px-[var(--pad)] pt-[140px] md:pt-[180px] lg:pt-[120px] pb-16 md:pb-32 lg:pb-40 flex flex-col justify-center md:flex-1 relative z-20 2xl:-translate-y-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 md:gap-12 lg:gap-16 w-full">
                    <div className="w-full md:w-[60%] lg:w-[65%] xl:w-[65%] flex flex-col justify-center text-left px-8 md:px-[4vw] lg:px-[6vw] xl:px-[8vw]">
                      <Reveal className="mb-4 lg:mb-6 max-w-[700px] lg:max-w-[850px] 2xl:max-w-[1000px] transition-transform duration-700 ease-out">
                        <h1 className="sr-only">Branding &amp; Marketing Services for Founders and Growing Businesses</h1>
                        <span className="text-hero text-black transition-all duration-700 ease-out pb-2 block" aria-hidden="true">
                          <span className="block whitespace-nowrap">Turning ideas</span>
                          <span className="block whitespace-nowrap">into brands,</span>
                          <span className="block whitespace-nowrap">communication,</span>
                          <span className="inline-block bg-gradient-to-r from-[#161245] via-[#4B3FD4] to-[#786CF0] bg-clip-text text-transparent pb-2 whitespace-nowrap">and growth.</span>
                        </span>
                      </Reveal>

                      <Reveal delay={0.1} className="transition-transform duration-700 ease-out">
                        <p className="text-main-desc text-[#6A6A6A] text-left transition-all duration-700 ease-out max-w-[750px] md:max-w-[850px] [@media(display-mode:fullscreen)]:md:max-w-[1000px]">
                          <span className="block">Every business needs different things at different stages.</span>
                          <span className="block">Some need clarity.</span>
                          <span className="block">Some need a stronger identity.</span>
                          <span className="block">Some need better communication.</span>
                          <span className="block">Some need help reaching the right people.</span>
                          <span className="block md:mt-2">Our services span strategy, branding, communication, and marketing &mdash; shaped around what your business needs most.</span>
                        </p>
                      </Reveal>
                    </div>

                    <Reveal delay={0.2} className="w-full md:w-[35%] lg:w-[30%] xl:w-[30%] flex items-center justify-center md:justify-end xl:justify-center md:-translate-x-[5vw] lg:-translate-x-[10vw] xl:-translate-x-[10vw]">
                      <div className="w-full relative group flex justify-end">
                        <video
                          src="/Service Hero.mp4"
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-auto aspect-square max-h-[50vh] md:max-h-[65vh] object-contain select-none pointer-events-none scale-[1.20] md:-translate-y-[20%] md:translate-x-[10%]"
                        />
                      </div>
                    </Reveal>
                  </div>
                </div>

                <div className="services-bottom-black-bar hidden md:block absolute bottom-[-20px] md:bottom-[-30px] lg:bottom-[-40px] xl:bottom-[-50px] 2xl:bottom-[-60px] left-0 w-full h-[40px] lg:h-[55px] xl:h-[90px] [@media(display-mode:fullscreen)]:h-[80px] [@media(display-mode:fullscreen)]:lg:h-[120px] [@media(display-mode:fullscreen)]:xl:h-[180px] transition-all duration-700 ease-out bg-black z-30" />
              </section>

              <section id="services-list-section" className="relative z-20 w-full bg-black pt-[clamp(60px,8vw,100px)] pb-[clamp(100px,12vw,160px)] overflow-hidden border-t border-white/10">
                <div className="section-noise-effect" />

                <div className="absolute inset-0 z-0 select-none pointer-events-none">
                  <img
                    src="/assets/img/services.webp"
                    alt="Services background"
                    className="w-full h-full object-cover opacity-30 filter saturate-50 contrast-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black via-black/75 to-black" />
                </div>

                <div className="wrap relative z-10 text-white">
                  <Reveal className="mb-16 md:mb-20 md:ml-[5vw] lg:ml-[8vw] xl:ml-[10vw]">
                    <h2 className="sr-only">Our Full-Service Branding &amp; Communication Offerings</h2>
                    <span className="text-nav-label tracking-[0.22em] uppercase text-[#d9d9d9] block" aria-hidden="true">Our Services</span>
                  </Reveal>

                  <div className="max-w-[1200px] relative md:ml-[5vw] lg:ml-[8vw] xl:ml-[10vw]">
                    <ServicesAccordion services={services} />
                  </div>

                  <div className="mt-20 md:mt-32 relative">
                    <h2 className="sr-only">Ready to Start Your Branding Journey?</h2>
                    <Reveal className="flex items-center justify-end gap-12 max-[760px]:flex-col max-[760px]:items-center">
                      <p className="text-right max-[760px]:text-center text-[28px] md:text-[40px] italic font-light text-white leading-[1.3] max-w-none xl:max-w-[900px]" aria-hidden="true">
                        Whether you&apos;re starting with a new idea,<br />refining an existing brand,<br />
                        or preparing for the next stage of growth,<br />
                        we&apos;d love to hear you. Let&apos;s Talk.
                      </p>
                      <Link
                        href="/inquiry"
                        className="w-[115px] h-[115px] bg-[#4B3FD4] rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-[0_0_50px_rgba(75,63,212,0.4)] group shrink-0"
                      >
                        <svg width="68" height="68" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:rotate-45">
                          <line x1="3" y1="21" x2="21" y2="3" />
                          <polyline points="8 3 21 3 21 16" />
                        </svg>
                      </Link>
                    </Reveal>
                  </div>

                  {/* FAQ SECTION */}
                  <div className="mt-32 relative md:ml-[5vw] lg:ml-[8vw] xl:ml-[10vw]">
                    <Reveal className="mb-12">
                      <h2 className="text-[32px] md:text-[42px] leading-[1.1] text-white">
                        Frequently Asked Questions About Our Services
                      </h2>
                    </Reveal>
                    <FAQAccordion faqs={faqs} />
                  </div>
                </div>
              </section>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
