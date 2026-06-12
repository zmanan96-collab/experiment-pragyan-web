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
      <div id="smooth-wrapper" className="smooth-wrapper w-full bg-white">
        <div id="smooth-content" className="smooth-content w-full relative">
          <main className="min-h-screen bg-white text-[#1a1a1a] pt-[120px] md:pt-[160px] pb-24 md:pb-32 px-6 md:px-12 lg:px-[8vw]">
            <div className="max-w-[1400px] mx-auto flex flex-col gap-16 md:gap-20 relative">

              {/* ROW 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
                {/* Left Column */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                  <Reveal>
                    <h1 className="text-[48px] md:text-[56px] lg:text-[64px] leading-[1.1] font-medium tracking-tight">
                      Brand<br />Strategy
                    </h1>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <h2 className="text-[20px] md:text-[22px] leading-[1.3] text-[#6a6a6a] font-normal">
                      The idea everything else builds on.
                    </h2>
                  </Reveal>
                  <Reveal delay={0.2}>
                    <div className="text-[14px] md:text-[15px] leading-[1.6] text-[#4a4a4a] space-y-5">
                      <p>
                        Every strong brand starts with a clear point of view. Not a tagline. Not a mission statement written by committee. An actual perspective on what the business does, who it&apos;s for, and why it exists in the way it does.
                      </p>
                      <p>
                        Brand strategy is the work of uncovering that perspective — and making it useful.
                      </p>
                      <p>
                        Most founders already have it. It shows up in the decisions they make instinctively, the clients they do their best work with, and the beliefs they hold about their industry. They just haven&apos;t had the time or distance to articulate it clearly.
                      </p>
                      <p>
                        When that clarity exists, everything else becomes easier. Communication sharpens. Decisions become more consistent. Growth becomes more intentional.
                      </p>
                    </div>
                  </Reveal>
                  <Reveal delay={0.3}>
                    <Link
                      href="/inquiry"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1a1a1a] text-white rounded-full text-[14px] hover:bg-[#4B3FD4] transition-colors duration-300 group w-fit mt-4"
                    >
                      Start a Conversation
                      <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </Link>
                  </Reveal>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12 lg:pl-16">
                  <Reveal delay={0.3}>
                    <div className="flex flex-col gap-4">
                      <h3 className="text-[20px] md:text-[22px] font-medium leading-[1.2]">Why It Matters</h3>
                      <div className="text-[14px] md:text-[15px] text-[#4a4a4a] leading-[1.6] space-y-5">
                        <p>Most businesses can explain what they do. Far fewer can explain why it matters. And even fewer can clearly answer why someone should choose them over the alternatives.</p>
                        <p>That gap shows up in everyday moments: Prospects who almost understand but don&apos;t quite connect. Sales conversations that take longer than they should. Opportunities lost to competitors who simply sound clearer.</p>
                        <p>Strategy closes that gap. Not by inventing something that isn&apos;t there, but by making visible what already is.</p>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal delay={0.4}>
                    <div className="flex flex-col gap-4">
                      <h3 className="text-[20px] md:text-[22px] font-medium leading-[1.2]">How We Work</h3>
                      <div className="text-[14px] md:text-[15px] text-[#4a4a4a] leading-[1.6] space-y-5">
                        <p>We start with conversations. About the business, the people behind it, the customers you serve, and the decisions that have shaped where you are today.</p>
                        <p>The questions are often simple: What do you believe about your category that others don&apos;t? Who benefits most from what you do? What do your best clients consistently value about working with you? What kind of work do you want more of?</p>
                        <p>The answers are usually already present. Our role is to uncover them, organise them, and translate them into a strategic foundation the brand can grow from.</p>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>

              <div className="w-full h-px bg-[#1a1a1a]/10" />

              {/* ROW 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
                {/* Left Column */}
                <div className="lg:col-span-4 flex flex-col gap-5">
                  <Reveal>
                    <div className="w-8 h-8 mb-2">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-[#1a1a1a]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                      </svg>
                    </div>
                    <h3 className="text-[20px] md:text-[22px] font-medium leading-[1.2]">Who It&apos;s For</h3>
                    <div className="text-[14px] md:text-[15px] text-[#4a4a4a] leading-[1.6] space-y-4 mt-2">
                      <p>Founders building something meaningful but struggling to express it. Businesses entering a new stage — launching, scaling, repositioning, or rebranding — where the old way of talking about the business no longer fits.</p>
                      <p>If you&apos;ve ever found yourself saying, &quot;It&apos;s harder to explain than it should be,&quot; this work is probably relevant.</p>
                    </div>
                  </Reveal>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-8 lg:pl-16 flex flex-col gap-8">
                  <Reveal delay={0.2}>
                    <h3 className="text-[20px] md:text-[22px] font-medium leading-[1.2]">What We Work On</h3>
                  </Reveal>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Reveal delay={0.3} className="h-full">
                      <div className="bg-[#FAF9F6] rounded-2xl p-8 flex flex-col gap-6 h-full border border-black/5">
                        <div className="w-7 h-7">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-[#1a1a1a]">
                            <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
                          </svg>
                        </div>
                        <div className="flex flex-col gap-3">
                          <h4 className="text-[16px] font-medium text-[#1a1a1a]">Positioning</h4>
                          <p className="text-[13px] text-[#6a6a6a] leading-[1.6]">Defining where your brand sits in the market, who it&apos;s for, and what makes it the right choice.</p>
                        </div>
                      </div>
                    </Reveal>
                    <Reveal delay={0.4} className="h-full">
                      <div className="bg-[#FAF9F6] rounded-2xl p-8 flex flex-col gap-6 h-full border border-black/5">
                        <div className="w-7 h-7">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-[#1a1a1a]">
                            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                          </svg>
                        </div>
                        <div className="flex flex-col gap-3">
                          <h4 className="text-[16px] font-medium text-[#1a1a1a]">Research</h4>
                          <p className="text-[13px] text-[#6a6a6a] leading-[1.6]">Understanding your audience, category, and competitive landscape to ensure decisions are grounded in reality rather than assumptions.</p>
                        </div>
                      </div>
                    </Reveal>
                    <Reveal delay={0.5} className="h-full">
                      <div className="bg-[#FAF9F6] rounded-2xl p-8 flex flex-col gap-6 h-full border border-black/5">
                        <div className="w-7 h-7">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-[#1a1a1a]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                            <line x1="9" y1="9" x2="15" y2="9" /><line x1="9" y1="13" x2="15" y2="13" />
                          </svg>
                        </div>
                        <div className="flex flex-col gap-3">
                          <h4 className="text-[16px] font-medium text-[#1a1a1a]">Communication Strategy</h4>
                          <p className="text-[13px] text-[#6a6a6a] leading-[1.6]">Developing the messages, narratives, and frameworks that shape how your brand speaks across different audiences and contexts.</p>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-[#1a1a1a]/10" />


              {/* ROW 4 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
                {/* Left Column */}
                <div className="lg:col-span-4 flex flex-col gap-4">
                  <Reveal>
                    <h3 className="text-[20px] md:text-[22px] font-medium leading-[1.2]">Where It Leads</h3>
                    <div className="text-[14px] md:text-[15px] text-[#4a4a4a] leading-[1.6] mt-2 space-y-4">
                      <p>Strategy isn&apos;t the final deliverable. It&apos;s the starting point.</p>
                      <p>It informs how the brand looks, how it sounds, and how it shows up in the world. Because when the thinking is clear, everything built on top of it becomes stronger.</p>
                    </div>
                    <Link
                      href="/work"
                      className="inline-flex items-center gap-2 text-[#4B3FD4] hover:text-[#786CF0] font-medium text-[16px] md:text-[18px] transition-colors duration-300 group mt-6"
                    >
                      View our Project
                      <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </Link>
                  </Reveal>
                </div>

                {/* Right Column - Horizontal Cards */}
                <div className="lg:col-span-8 lg:pl-16 flex flex-col md:flex-row items-center justify-between gap-4">
                  <Reveal delay={0.2} className="w-full">
                    <div className="bg-[#FAF9F6] rounded-2xl p-5 flex flex-col justify-center gap-4 w-full md:w-[150px] lg:w-[170px] h-[150px] border border-black/5">
                      <div className="w-6 h-6">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-[#1a1a1a]">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                        </svg>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="text-[12px] font-medium text-[#1a1a1a] leading-[1.3]">Identity & Expression</h4>
                        <p className="text-[10px] text-[#6a6a6a] leading-[1.3]">how the brand looks and feels</p>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delay={0.3} className="hidden md:flex items-center justify-center">
                    <div className="text-[#1a1a1a]/40">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </div>
                  </Reveal>

                  <Reveal delay={0.4} className="w-full">
                    <div className="bg-[#FAF9F6] rounded-2xl p-5 flex flex-col justify-center gap-4 w-full md:w-[150px] lg:w-[170px] h-[150px] border border-black/5">
                      <div className="w-6 h-6">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-[#1a1a1a]">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="text-[12px] font-medium text-[#1a1a1a] leading-[1.3]">Content & Communication</h4>
                        <p className="text-[10px] text-[#6a6a6a] leading-[1.3]">how it speaks</p>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delay={0.5} className="hidden md:flex items-center justify-center">
                    <div className="text-[#1a1a1a]/40">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </div>
                  </Reveal>

                  <Reveal delay={0.6} className="w-full">
                    <div className="bg-[#FAF9F6] rounded-2xl p-5 flex flex-col justify-center gap-4 w-full md:w-[150px] lg:w-[170px] h-[150px] border border-black/5">
                      <div className="w-6 h-6">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-[#1a1a1a]">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                        </svg>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="text-[12px] font-medium text-[#1a1a1a] leading-[1.3]">Digital Marketing</h4>
                        <p className="text-[10px] text-[#6a6a6a] leading-[1.3]">how it reaches the right people</p>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delay={0.7} className="hidden md:flex items-center justify-center">
                    <div className="text-[#1a1a1a]/40">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </div>
                  </Reveal>

                  <Reveal delay={0.8} className="w-full">
                    <div className="bg-[#FAF9F6] rounded-2xl p-5 flex flex-col justify-center gap-4 w-full md:w-[150px] lg:w-[170px] h-[150px] border border-black/5">
                      <div className="w-6 h-6">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-[#1a1a1a]">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="text-[12px] font-medium text-[#1a1a1a] leading-[1.3]">Personal Branding & LinkedIn</h4>
                        <p className="text-[10px] text-[#6a6a6a] leading-[1.3]">how the founder&apos;s voice connects to it</p>
                      </div>
                    </div>
                  </Reveal>

                </div>
              </div>

              <div className="w-full h-px bg-[#1a1a1a]/10" />

              {/* QUOTE SECTION */}
              <Reveal>
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start py-4">
                  <div className="text-[64px] leading-none font-serif text-[#1a1a1a]">“</div>
                  <div className="flex flex-col gap-4 mt-2">
                    <p className="text-[18px] md:text-[20px] font-medium text-[#1a1a1a]">
                      Great brands rarely begin with answers.<br className="hidden md:block" />
                      They begin with better questions.
                    </p>
                    <p className="text-[14px] text-[#6a6a6a]">— Pragyan</p>
                  </div>
                </div>
              </Reveal>

            </div>
          </main>
        </div>
      </div>
    </>
  );
}
