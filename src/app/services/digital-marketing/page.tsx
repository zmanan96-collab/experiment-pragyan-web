import { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '../../../components/Reveal';
import HomeSmoothScroll from '../../../components/HomeSmoothScroll';

export const metadata: Metadata = {
  title: 'Digital Marketing Services | Pragyan',
  description: "Marketing works best when it's built on clarity. Pragyan creates campaigns and digital systems that connect your work with the people most likely to value it.",
};

export default function DigitalMarketingPage() {
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
                      Digital<br />Marketing
                    </h1>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <h2 className="text-[20px] md:text-[22px] leading-[1.3] text-[#6a6a6a] font-normal">
                      Helping the right people find you.
                    </h2>
                  </Reveal>
                  <Reveal delay={0.2}>
                    <div className="text-[14px] md:text-[15px] leading-[1.6] text-[#4a4a4a] space-y-5">
                      <p>Digital marketing works best when it&apos;s built on clarity.</p>
                      <p>The challenge isn&apos;t usually a lack of channels or tactics. It&apos;s that businesses often start with execution before they&apos;ve defined what they&apos;re trying to say, who they&apos;re trying to reach, and why someone should choose them in the first place.</p>
                      <p>Campaigns go live before the message is clear. Budgets get allocated before the audience is properly understood. Visibility becomes the goal, rather than the outcome of doing the right things well.</p>
                      <p>We believe marketing should amplify a strong foundation, not compensate for the absence of one.</p>
                    </div>
                  </Reveal>
                  <Reveal delay={0.3}>
                    <Link
                      href="/inquiry"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1a1a1a] text-white rounded-full text-[14px] hover:bg-white hover:text-[#1a1a1a] hover:outline hover:outline-2 hover:outline-[#1a1a1a] transition-all duration-300 group w-fit mt-4"
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
                        <p>Being visible isn&apos;t enough. What matters is being visible to the right people, with a message that resonates.</p>
                        <p>Effective digital marketing helps businesses attract attention, generate enquiries, strengthen relationships, and create momentum over time.</p>
                        <p>When strategy, communication, and execution work together, marketing becomes more than a series of campaigns. It becomes a system for sustainable growth.</p>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal delay={0.4}>
                    <div className="flex flex-col gap-4">
                      <h3 className="text-[20px] md:text-[22px] font-medium leading-[1.2]">How We Work</h3>
                      <div className="text-[14px] md:text-[15px] text-[#4a4a4a] leading-[1.6] space-y-5">
                        <p>We begin with understanding. Who are we trying to reach? What do they care about? What questions are they asking before they make a decision?</p>
                        <p>Only then do we determine the channels, tactics, and opportunities most likely to create results.</p>
                        <p>The campaigns we build are designed to feel like an extension of the brand itself. The same clarity, voice, and perspective should exist across a website, an advertisement, a search result, or a social campaign.</p>
                        <p>Because consistency builds trust. And trust influences action.</p>
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
                      <p>Businesses that have something valuable to offer but need help connecting with the people most likely to benefit from it.</p>
                      <p>Founders who are ready to move beyond sporadic marketing efforts and build a more intentional approach to growth.</p>
                      <p>Teams looking for marketing that supports long-term business objectives rather than short-term spikes in attention.</p>
                    </div>
                  </Reveal>
                  <Reveal delay={0.2}>
                    <div className="mt-8 flex flex-col gap-2">
                      <h3 className="text-[20px] md:text-[22px] font-medium leading-[1.2]">What We Believe</h3>
                      <div className="text-[14px] md:text-[15px] text-[#4a4a4a] leading-[1.6] space-y-4 mt-2">
                        <p>Digital marketing shouldn&apos;t exist separately from the brand. The strongest campaigns are built on clear positioning, thoughtful communication, and a genuine understanding of the audience they serve.</p>
                        <p>We don&apos;t chase visibility for its own sake.<br />We help businesses create visibility that means something.</p>
                      </div>
                    </div>
                  </Reveal>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-8 lg:pl-16 flex flex-col gap-8">
                  <Reveal delay={0.2}>
                    <h3 className="text-[20px] md:text-[22px] font-medium leading-[1.2]">What We Work On</h3>
                  </Reveal>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Reveal delay={0.3} className="h-full">
                      <div className="bg-[#e3e3e3] rounded-2xl p-8 flex flex-col gap-6 h-full border border-black/5">
                        <div className="w-7 h-7">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-[#1a1a1a]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                          </svg>
                        </div>
                        <div className="flex flex-col gap-3">
                          <h4 className="text-[16px] font-medium text-[#1a1a1a]">Campaign Strategy</h4>
                          <p className="text-[13px] text-[#6a6a6a] leading-[1.6]">Defining objectives, audiences, messaging, and channel approaches before execution begins.</p>
                        </div>
                      </div>
                    </Reveal>
                    <Reveal delay={0.4} className="h-full">
                      <div className="bg-[#e3e3e3] rounded-2xl p-8 flex flex-col gap-6 h-full border border-black/5">
                        <div className="w-7 h-7">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-[#1a1a1a]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                          </svg>
                        </div>
                        <div className="flex flex-col gap-3">
                          <h4 className="text-[16px] font-medium text-[#1a1a1a]">Performance Marketing</h4>
                          <p className="text-[13px] text-[#6a6a6a] leading-[1.6]">Paid campaigns across search and social platforms designed around measurable business outcomes.</p>
                        </div>
                      </div>
                    </Reveal>
                    <Reveal delay={0.5} className="h-full">
                      <div className="bg-[#e3e3e3] rounded-2xl p-8 flex flex-col gap-6 h-full border border-black/5">
                        <div className="w-7 h-7">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-[#1a1a1a]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                          </svg>
                        </div>
                        <div className="flex flex-col gap-3">
                          <h4 className="text-[16px] font-medium text-[#1a1a1a]">Search Engine Optimisation</h4>
                          <p className="text-[13px] text-[#6a6a6a] leading-[1.6]">Improving discoverability through content strategy, technical foundations, and ongoing optimisation.</p>
                        </div>
                      </div>
                    </Reveal>
                    <Reveal delay={0.6} className="h-full">
                      <div className="bg-[#e3e3e3] rounded-2xl p-8 flex flex-col gap-6 h-full border border-black/5">
                        <div className="w-7 h-7">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-[#1a1a1a]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                          </svg>
                        </div>
                        <div className="flex flex-col gap-3">
                          <h4 className="text-[16px] font-medium text-[#1a1a1a]">Analytics &amp; Reporting</h4>
                          <p className="text-[13px] text-[#6a6a6a] leading-[1.6]">Setting up systems that help businesses understand what&apos;s working, identify opportunities, and make informed decisions.</p>
                        </div>
                      </div>
                    </Reveal>
                    <Reveal delay={0.7} className="h-full md:col-span-2 lg:col-span-1">
                      <div className="bg-[#e3e3e3] rounded-2xl p-8 flex flex-col gap-6 h-full border border-black/5">
                        <div className="w-7 h-7">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-[#1a1a1a]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                          </svg>
                        </div>
                        <div className="flex flex-col gap-3">
                          <h4 className="text-[16px] font-medium text-[#1a1a1a]">Marketing Consultation</h4>
                          <p className="text-[13px] text-[#6a6a6a] leading-[1.6]">Providing strategic guidance on how marketing efforts align with broader business and brand objectives.</p>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-[#1a1a1a]/10" />

              {/* ROW 3 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
                {/* Left Column */}
                <div className="lg:col-span-4 flex flex-col gap-4">
                  <Reveal>
                    <h3 className="text-[20px] md:text-[22px] font-medium leading-[1.2]">Where It Leads</h3>
                    <div className="text-[14px] md:text-[15px] text-[#4a4a4a] leading-[1.6] mt-2 space-y-4">
                      <p>When the right people consistently encounter the right message, growth becomes more intentional.</p>
                      <p>Marketing supports awareness. Awareness creates opportunity.</p>
                      <p>And opportunity, when paired with a strong brand experience, turns into long-term relationships.</p>
                    </div>
                    <Link
                      href="/work"
                      className="inline-flex items-center gap-2 text-[#1a1a1a] hover:text-[#4a4a4a] font-medium text-[16px] md:text-[18px] transition-colors duration-300 group mt-6"
                    >
                      View our work
                      <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </Link>
                  </Reveal>
                </div>

                {/* Right Column - Horizontal Cards */}
                <div className="lg:col-span-8 lg:pl-16 flex flex-col gap-6">
                  <Reveal delay={0.2}>
                    <h3 className="text-[18px] font-medium leading-[1.2] text-[#1a1a1a]">Services commonly connected to this work:</h3>
                  </Reveal>
                  <div className="flex flex-wrap items-center gap-4">
                    <Reveal delay={0.2} className="w-full md:w-auto">
                      <div className="bg-[#e3e3e3] rounded-2xl p-5 flex flex-col justify-center gap-4 w-full md:w-[150px] lg:w-[170px] h-[150px] border border-black/5">
                        <div className="w-6 h-6">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-[#1a1a1a]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                          </svg>
                        </div>
                        <div className="flex flex-col gap-1">
                          <h4 className="text-[12px] font-medium text-[#1a1a1a] leading-[1.3]">Brand Strategy</h4>
                          <p className="text-[10px] text-[#6a6a6a] leading-[1.3]">the foundation it all builds on</p>
                        </div>
                      </div>
                    </Reveal>

                    <Reveal delay={0.3} className="hidden md:flex items-center justify-center w-4 h-4">
                      <div className="text-[#1a1a1a]/40">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </div>
                    </Reveal>

                    <Reveal delay={0.4} className="w-full md:w-auto">
                      <div className="bg-[#e3e3e3] rounded-2xl p-5 flex flex-col justify-center gap-4 w-full md:w-[150px] lg:w-[170px] h-[150px] border border-black/5">
                        <div className="w-6 h-6">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-[#1a1a1a]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                          </svg>
                        </div>
                        <div className="flex flex-col gap-1">
                          <h4 className="text-[12px] font-medium text-[#1a1a1a] leading-[1.3]">Content &amp; Communication</h4>
                          <p className="text-[10px] text-[#6a6a6a] leading-[1.3]">the words that carry it</p>
                        </div>
                      </div>
                    </Reveal>

                    <Reveal delay={0.5} className="hidden md:flex items-center justify-center w-4 h-4">
                      <div className="text-[#1a1a1a]/40">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </div>
                    </Reveal>

                    <Reveal delay={0.6} className="w-full md:w-auto">
                      <div className="bg-[#e3e3e3] rounded-2xl p-5 flex flex-col justify-center gap-4 w-full md:w-[150px] lg:w-[170px] h-[150px] border border-black/5">
                        <div className="w-6 h-6">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-[#1a1a1a]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                          </svg>
                        </div>
                        <div className="flex flex-col gap-1">
                          <h4 className="text-[12px] font-medium text-[#1a1a1a] leading-[1.3]">Social &amp; Community</h4>
                          <p className="text-[10px] text-[#6a6a6a] leading-[1.3]">the ongoing presence that supports it</p>
                        </div>
                      </div>
                    </Reveal>

                    <Reveal delay={0.7} className="hidden md:flex items-center justify-center w-4 h-4">
                      <div className="text-[#1a1a1a]/40">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </div>
                    </Reveal>

                    <Reveal delay={0.8} className="w-full md:w-auto">
                      <div className="bg-[#e3e3e3] rounded-2xl p-5 flex flex-col justify-center gap-4 w-full md:w-[150px] lg:w-[170px] h-[150px] border border-black/5">
                        <div className="w-6 h-6">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-[#1a1a1a]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                          </svg>
                        </div>
                        <div className="flex flex-col gap-1">
                          <h4 className="text-[12px] font-medium text-[#1a1a1a] leading-[1.3]">Personal Branding</h4>
                          <p className="text-[10px] text-[#6a6a6a] leading-[1.3]">the founder&apos;s presence alongside the brand&apos;s</p>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-[#1a1a1a]/10 mt-8 lg:mt-0" />

              {/* QUOTE-STYLE TEXT */}
              <Reveal>
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start py-4">
                  <div className="text-[64px] leading-none font-serif text-[#1a1a1a]">“</div>
                  <div className="flex flex-col gap-4 mt-2">
                    <p className="text-[18px] md:text-[20px] font-medium text-[#1a1a1a]">
                      Pragyan is a brand strategy and<br className="hidden md:block" />
                      communications agency based in<br className="hidden md:block" />
                      Ahmedabad, India.
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
