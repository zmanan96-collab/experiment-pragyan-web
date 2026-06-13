import { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '../../../components/Reveal';
import HomeSmoothScroll from '../../../components/HomeSmoothScroll';

export const metadata: Metadata = {
  title: 'Personal Branding & LinkedIn Strategy | Pragyan',
  description: "People connect with founders before they connect with companies. Pragyan helps founders and professionals articulate their expertise and build credibility through thoughtful communication.",
};

export default function PersonalBrandingLinkedInPage() {
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
                      Personal<br />Branding &amp;<br />LinkedIn
                    </h1>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <h2 className="text-[20px] md:text-[22px] leading-[1.3] text-[#6a6a6a] font-normal">
                      Building trust through people.
                    </h2>
                  </Reveal>
                  <Reveal delay={0.2}>
                    <div className="text-[14px] md:text-[15px] leading-[1.6] text-[#4a4a4a] space-y-5">
                      <p>People often connect with founders before they connect with companies.</p>
                      <p>The way you think, communicate, and show up publicly shapes how others perceive the business behind you. Potential clients begin to understand your approach. Partners gain confidence in who they&apos;re working with. Opportunities emerge through familiarity long before formal conversations begin.</p>
                      <p>A personal brand isn&apos;t about becoming someone else.</p>
                      <p>It&apos;s about making your experience, perspective, and expertise more visible to the people who would benefit from hearing it.</p>
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
                        <p>Trust rarely begins at the first meeting anymore.</p>
                        <p>People look you up. They read your profile, explore your work, and pay attention to how you think before deciding whether to reach out.</p>
                        <p>A thoughtful personal brand helps reduce uncertainty. It gives people context. It demonstrates expertise. And it creates familiarity before a formal relationship ever begins.</p>
                        <p>The effects are rarely immediate. But over time, consistency compounds. Conversations become warmer. Opportunities become more aligned. And the people finding you tend to already understand what you stand for.</p>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal delay={0.4}>
                    <div className="flex flex-col gap-4">
                      <h3 className="text-[20px] md:text-[22px] font-medium leading-[1.2]">How We Work</h3>
                      <div className="text-[14px] md:text-[15px] text-[#4a4a4a] leading-[1.6] space-y-5">
                        <p>We begin by listening. To your experiences, your goals, the way you naturally communicate, and the ideas you return to repeatedly in your work.</p>
                        <p>The aim isn&apos;t to manufacture a public persona. It&apos;s to uncover the perspective that&apos;s already there and help you express it more consistently.</p>
                        <p>We support the strategic and creative process so you can build a meaningful presence without having to start from a blank page every week.</p>
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
                      <p>Founders, business leaders, and professionals who have built meaningful experience but haven&apos;t yet translated it into a consistent public presence.</p>
                      <p>People who want to contribute to conversations within their industry, build credibility over time, and create opportunities that extend beyond traditional networking.</p>
                      <p>If people regularly tell you, &quot;You should share this more often,&quot; this work is probably relevant.</p>
                    </div>
                  </Reveal>
                  <Reveal delay={0.2}>
                    <div className="mt-12 flex flex-col gap-2">
                      <h3 className="text-[20px] md:text-[22px] font-medium leading-[1.2]">Why LinkedIn</h3>
                      <div className="text-[14px] md:text-[15px] text-[#4a4a4a] leading-[1.6] mt-2 space-y-4">
                        <p>For many founders and professionals, LinkedIn offers a unique opportunity to share expertise in a professional context.</p>
                        <p>People come to the platform looking for ideas, perspectives, and individuals they can learn from or collaborate with.</p>
                        <p>Showing up consistently doesn&apos;t require becoming a content creator. It requires having something valuable to contribute — and the willingness to share it.</p>
                      </div>
                    </div>
                  </Reveal>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-8 lg:pl-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Reveal delay={0.2} className="h-full">
                    <div className="bg-[#e3e3e3] rounded-2xl p-8 flex flex-col gap-6 h-full border border-black/5">
                      <div className="w-7 h-7">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-[#1a1a1a]">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                      </div>
                      <div className="flex flex-col gap-3">
                        <h4 className="text-[16px] font-medium text-[#1a1a1a]">Personal Brand Positioning</h4>
                        <p className="text-[13px] text-[#6a6a6a] leading-[1.6]">Defining the expertise, experiences, and perspectives that shape how you want to be known professionally.</p>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal delay={0.3} className="h-full">
                    <div className="bg-[#e3e3e3] rounded-2xl p-8 flex flex-col gap-6 h-full border border-black/5">
                      <div className="w-7 h-7">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-[#1a1a1a]">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect x="2" y="9" width="4" height="12" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </div>
                      <div className="flex flex-col gap-3">
                        <h4 className="text-[16px] font-medium text-[#1a1a1a]">LinkedIn Strategy</h4>
                        <p className="text-[13px] text-[#6a6a6a] leading-[1.6]">Developing a sustainable approach to content, audience-building, and visibility aligned with your goals.</p>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal delay={0.4} className="h-full">
                    <div className="bg-[#e3e3e3] rounded-2xl p-8 flex flex-col gap-6 h-full border border-black/5">
                      <div className="w-7 h-7">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-[#1a1a1a]">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                        </svg>
                      </div>
                      <div className="flex flex-col gap-3">
                        <h4 className="text-[16px] font-medium text-[#1a1a1a]">Profile Development</h4>
                        <p className="text-[13px] text-[#6a6a6a] leading-[1.6]">Refining your LinkedIn profile so it communicates credibility, clarity, and relevance to the people you want to reach.</p>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal delay={0.5} className="h-full">
                    <div className="bg-[#e3e3e3] rounded-2xl p-8 flex flex-col gap-6 h-full border border-black/5">
                      <div className="w-7 h-7">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-[#1a1a1a]">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                      </div>
                      <div className="flex flex-col gap-3">
                        <h4 className="text-[16px] font-medium text-[#1a1a1a]">Content Development</h4>
                        <p className="text-[13px] text-[#6a6a6a] leading-[1.6]">Creating thoughtful content rooted in your real experiences, observations, and professional insights.</p>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal delay={0.6} className="h-full md:col-span-2 lg:col-span-1">
                    <div className="bg-[#e3e3e3] rounded-2xl p-8 flex flex-col gap-6 h-full border border-black/5">
                      <div className="w-7 h-7">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-[#1a1a1a]">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                        </svg>
                      </div>
                      <div className="flex flex-col gap-3">
                        <h4 className="text-[16px] font-medium text-[#1a1a1a]">Engagement &amp; Community Building</h4>
                        <p className="text-[13px] text-[#6a6a6a] leading-[1.6]">Supporting meaningful interactions that strengthen relationships and expand your professional network over time.</p>
                      </div>
                    </div>
                  </Reveal>
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
                      <p>A founder&apos;s personal brand and a company&apos;s brand inevitably influence one another.</p>
                      <p>When both communicate with clarity and consistency, trust grows faster. The business gains visibility. The founder gains credibility. And the opportunities that emerge tend to be more aligned with the work both are trying to create.</p>
                    </div>
                  </Reveal>
                  <Reveal delay={0.2}>
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
                    <h3 className="text-[18px] font-medium leading-[1.2] text-[#1a1a1a]">Where It Connects:</h3>
                  </Reveal>
                  <div className="flex flex-wrap items-center gap-4">
                    <Reveal delay={0.2} className="w-full md:w-auto">
                      <div className="bg-[#e3e3e3] rounded-2xl p-5 flex flex-col justify-center gap-4 w-full md:w-[150px] lg:w-[170px] h-[150px] border border-black/5">
                        <div className="w-6 h-6">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-[#1a1a1a]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                          </svg>
                        </div>
                        <div className="flex flex-col gap-1">
                          <h4 className="text-[12px] font-medium text-[#1a1a1a] leading-[1.3]">Brand Strategy</h4>
                          <p className="text-[10px] text-[#6a6a6a] leading-[1.3]">the company&apos;s perspective</p>
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
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                          </svg>
                        </div>
                        <div className="flex flex-col gap-1">
                          <h4 className="text-[12px] font-medium text-[#1a1a1a] leading-[1.3]">Content &amp; Comm.</h4>
                          <p className="text-[10px] text-[#6a6a6a] leading-[1.3]">the broader voice</p>
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
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-[#1a1a1a]">
                            <circle cx="12" cy="12" r="4" />
                            <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
                          </svg>
                        </div>
                        <div className="flex flex-col gap-1">
                          <h4 className="text-[12px] font-medium text-[#1a1a1a] leading-[1.3]">Social &amp; Community</h4>
                          <p className="text-[10px] text-[#6a6a6a] leading-[1.3]">the company&apos;s presence</p>
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
