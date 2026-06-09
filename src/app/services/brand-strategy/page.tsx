import { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '../../../components/Reveal';
import HomeSmoothScroll from '../../../components/HomeSmoothScroll';

export const metadata: Metadata = {
  title: 'Brand Strategy Services | Pragyan',
  description: "Brand strategy is the idea everything else builds on. Pragyan helps founders uncover what makes their business distinct and translate it into clear direction, communication, and growth.",
};

export default function BrandStrategyPage() {
  return (
    <>
      <HomeSmoothScroll />
      <div className="noise-effect" />
      <div id="smooth-wrapper" className="smooth-wrapper w-full bg-[#f6f5ef]">
        <div id="smooth-content" className="smooth-content w-full relative">
          <main className="min-h-screen bg-[#f6f5ef] text-[#1a1a1a] pt-[120px] md:pt-[160px] pb-24 md:pb-32 px-6 md:px-12 lg:px-[8vw]">

            <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 relative">

              {/* LEFT COLUMN - STICKY */}
              <div className="w-full lg:w-[35%] lg:sticky lg:top-[160px] self-start">
                <Reveal>
                  <h1 className="text-[40px] md:text-[56px] lg:text-[72px] leading-[1.1] font-medium tracking-tight mb-6">
                    Brand Strategy
                  </h1>
                </Reveal>

                <Reveal delay={0.1}>
                  <h2 className="text-[20px] md:text-[24px] leading-[1.3] text-[#4a4a4a] mb-8 font-medium">
                    The idea everything else builds on.
                  </h2>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="text-[16px] md:text-[18px] leading-[1.5] italic text-[#4a4a4a] space-y-6">
                    <p>
                      Every strong brand starts with a clear point of view. Not a tagline. Not a mission statement written by committee. An actual perspective on what the business does, who it&apos;s for, and why it exists in the way it does.
                    </p>
                    <p>
                      Strategy is the work of finding that. And then making it usable.
                    </p>
                    <p>
                      Most founders have it. They just haven&apos;t put it into words yet. It comes out when they explain what they do to someone who gets it. It shows up in the clients they love working with. It&apos;s in the decisions they make without having to think too hard.
                    </p>
                    <p>
                      Brand strategy takes that and gives it a form the rest of the brand can build from.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={0.3}>
                  <div className="mt-12 flex flex-col gap-4">
                    <h3 className="text-[24px] md:text-[28px] font-medium leading-[1.2]">Who It&apos;s For</h3>
                    <div className="text-[16px] md:text-[18px] text-[#4a4a4a] leading-[1.6] space-y-4 text-justify">
                      <p>Founders who are building something real and know their brand isn&apos;t reflecting it yet. People at a point of transition — launching, scaling, rebranding — where the old way of talking about the business no longer fits.</p>
                      <p>If you&apos;ve found yourself saying &quot;it&apos;s hard to explain&quot; about your own company, that&apos;s usually a sign this work is needed.</p>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* RIGHT COLUMN - CONTENT */}
              <div className="w-full lg:w-[65%] flex flex-col gap-16 md:gap-24 lg:pt-4">

                {/* ROW 1: 2 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                  <Reveal delay={0.3}>
                    <div className="flex flex-col gap-4">
                      <h3 className="text-[24px] md:text-[28px] font-medium leading-[1.2]">What It Actually Does</h3>
                      <div className="text-[16px] md:text-[18px] text-[#4a4a4a] leading-[1.6] space-y-4">
                        <p>Most businesses can describe what they do. Fewer can explain why it matters. And very few can explain why someone should choose them over the obvious alternatives.</p>
                        <p>That gap costs money. Every time a prospect doesn&apos;t quite get it, or picks a competitor because they sounded clearer, or asks &quot;so what exactly do you do?&quot; for the third time — that&apos;s the gap showing up.</p>
                        <p>Strategy closes it. Not by inventing something that isn&apos;t there. By making visible what already is.</p>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delay={0.4}>
                    <div className="flex flex-col gap-4">
                      <h3 className="text-[24px] md:text-[28px] font-medium leading-[1.2]">How We Do It</h3>
                      <div className="text-[16px] md:text-[18px] text-[#4a4a4a] leading-[1.6] space-y-4">
                        <p>We talk first. A lot. About your business, your customers, what you&apos;ve tried, what&apos;s worked, what hasn&apos;t. The questions we ask tend to feel obvious — but they rarely get answered clearly.</p>
                        <p>What do you believe about your category that most people in it don&apos;t? Who is this actually for? What does your best client say about you that you&apos;d never say about yourself?</p>
                        <p>The answers are usually already there. We help you find them and then figure out what to do with them.</p>
                      </div>
                    </div>
                  </Reveal>
                </div>

                {/* ROW 2: Horizontal */}
                <Reveal delay={0.5}>
                  <div className="w-full border-t border-b border-[#1a1a1a]/10 py-12 md:py-16">
                    <h3 className="text-[28px] md:text-[36px] font-medium leading-[1.2] mb-10 text-center md:text-left">What We Work On</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                      <div className="flex flex-col gap-3">
                        <h4 className="text-[20px] font-medium">Positioning</h4>
                        <p className="text-[#4a4a4a] text-[16px] leading-[1.5]">
                          Where your brand sits in the market, who it&apos;s for, and what makes it the right choice. This isn&apos;t a claim you make. It&apos;s a decision about what your business is and isn&apos;t.
                        </p>
                      </div>

                      <div className="flex flex-col gap-3">
                        <h4 className="text-[20px] font-medium">Research</h4>
                        <p className="text-[#4a4a4a] text-[16px] leading-[1.5]">
                          Understanding your audience, your category, and the competitive context you&apos;re operating in. Strategy built on assumptions tends to break when it meets reality.
                        </p>
                      </div>

                      <div className="flex flex-col gap-3">
                        <h4 className="text-[20px] font-medium">Communication Strategy</h4>
                        <p className="text-[#4a4a4a] text-[16px] leading-[1.5]">
                          How the positioning translates into what you actually say. What the message is. How it changes depending on who you&apos;re talking to. Where it needs to go.
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* ROW 3: 1 Column */}
                <div className="grid grid-cols-1 gap-12 md:gap-16">
                  <Reveal delay={0.6}>
                    <div className="flex flex-col gap-4">
                      <h3 className="text-[24px] md:text-[28px] font-medium leading-[1.2]">Where It Goes Next</h3>
                      <div className="text-[16px] md:text-[18px] text-[#4a4a4a] leading-[1.6] space-y-4">
                        <p>Strategy doesn&apos;t end with a document. Everything else in the brand comes from it.</p>
                        <ul className="flex flex-col gap-3 mt-4">
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#4a4a4a]"></span>
                            <span>Identity & Expression</span>
                            <span className="text-[14px] md:text-[16px] opacity-70 ml-1">— how the brand looks and feels</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#4a4a4a]"></span>
                            <span>Content & Communication</span>
                            <span className="text-[14px] md:text-[16px] opacity-70 ml-1">— how it speaks</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#4a4a4a]"></span>
                            <span>Personal Branding & LinkedIn</span>
                            <span className="text-[14px] md:text-[16px] opacity-70 ml-1">— how the founder&apos;s voice connects to it</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Reveal>
                </div>

                {/* CALL TO ACTION */}
                <Reveal delay={0.8}>
                  <div className="mt-8 pt-12 border-t border-[#1a1a1a]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    <Link
                      href="/inquiry"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1a1a1a] text-white rounded-full text-lg hover:bg-[#4B3FD4] transition-colors duration-300 group"
                    >
                      Start a project
                      <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </Link>

                    <p className="text-[14px] text-[#6a6a6a] italic max-w-[300px] text-left md:text-right">
                      Pragyan is a brand strategy and communications agency based in Ahmedabad, India.
                    </p>
                  </div>
                </Reveal>

              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
