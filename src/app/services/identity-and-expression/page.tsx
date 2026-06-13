import { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '../../../components/Reveal';
import HomeSmoothScroll from '../../../components/HomeSmoothScroll';

export const metadata: Metadata = {
  title: 'Brand Identity & Expression Design | Pragyan',
  description: "Identity is more than a logo. Pragyan builds complete visual and verbal systems that help businesses show up consistently, confidently, and recognisably across every touchpoint.",
};

export default function IdentityAndExpressionPage() {
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
                      Identity &amp;<br />Expression
                    </h1>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <h2 className="text-[20px] md:text-[22px] leading-[1.3] text-[#6a6a6a] font-normal">
                      How your brand looks, sounds, and feels.
                    </h2>
                  </Reveal>
                  <Reveal delay={0.2}>
                    <div className="text-[14px] md:text-[15px] leading-[1.6] text-[#4a4a4a] space-y-5">
                      <p>Identity is where strategy becomes tangible. Once you&apos;ve defined what your brand stands for, identity is how that thinking takes shape in the world. It&apos;s how people recognise you, remember you, and begin to trust you.</p>
                      <p>The logo on your packaging. The typography on your website. The tone of a client email. The design of a proposal. The colours people come to associate with your business. Each interaction contributes to the same impression.</p>
                      <p>Done well, identity doesn&apos;t just make a brand look better. It makes it feel more coherent.</p>
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
                        <p>People form opinions quickly. Long before they experience your product or service, they&apos;re responding to the signals your brand sends — whether consciously or not.</p>
                        <p>A strong identity creates consistency across those moments. It helps a business feel established, trustworthy, and intentional. It gives teams a shared language to work with and customers a clearer sense of who they&apos;re engaging with.</p>
                        <p>Most importantly, it helps your brand become recognisable for the right reasons. Not because it follows trends. Because it reflects something true about the business behind it.</p>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal delay={0.4}>
                    <div className="flex flex-col gap-4">
                      <h3 className="text-[20px] md:text-[22px] font-medium leading-[1.2]">How We Work</h3>
                      <div className="text-[14px] md:text-[15px] text-[#4a4a4a] leading-[1.6] space-y-5">
                        <p>We don&apos;t start with colours or logos. We start with understanding. What does the business stand for? How should it be perceived? What expectations already exist within the category — and which ones should be challenged?</p>
                        <p>Every creative decision is guided by these conversations. Why this typeface? Why this visual style? Why should the brand feel refined, playful, authoritative, or understated? The answers aren&apos;t arbitrary. They&apos;re rooted in the role the identity needs to play.</p>
                        <p>Because identity isn&apos;t decoration. It&apos;s communication.</p>
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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.318 1.026 0 2.25-1.002 2.25H3.039c-1.002 0-1.32-1.224-1.003-2.25Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                    </div>
                    <h3 className="text-[20px] md:text-[22px] font-medium leading-[1.2]">What Good Identity Looks Like</h3>
                    <div className="text-[14px] md:text-[15px] text-[#4a4a4a] leading-[1.6] space-y-4 mt-2">
                      <p>It looks the same everywhere. On a business card, a billboard, and an Instagram story. Not three slightly different versions of the same brand.</p>
                      <p>It reflects who the brand actually is. Not the trend of the moment. Not a competitor. Not a generic interpretation of the category. A manufacturing company and a D2C consumer brand should look different from each other, because they are different.</p>
                      <p>And it ages. Good identity systems are rooted in something true enough about the brand that they don&apos;t need to be rebuilt every few years.</p>
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
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                          </svg>
                        </div>
                        <div className="flex flex-col gap-3">
                          <h4 className="text-[16px] font-medium text-[#1a1a1a]">Visual Identity</h4>
                          <p className="text-[13px] text-[#6a6a6a] leading-[1.6]">Logo systems, colour palettes, typography, imagery direction, iconography, and graphic elements designed to create a distinctive and cohesive brand experience.</p>
                        </div>
                      </div>
                    </Reveal>
                    <Reveal delay={0.4} className="h-full">
                      <div className="bg-[#e3e3e3] rounded-2xl p-8 flex flex-col gap-6 h-full border border-black/5">
                        <div className="w-7 h-7">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-[#1a1a1a]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                          </svg>
                        </div>
                        <div className="flex flex-col gap-3">
                          <h4 className="text-[16px] font-medium text-[#1a1a1a]">Verbal Identity</h4>
                          <p className="text-[13px] text-[#6a6a6a] leading-[1.6]">Tone of voice principles, messaging guidelines, vocabulary choices, and communication frameworks that shape how the brand sounds across different contexts.</p>
                        </div>
                      </div>
                    </Reveal>
                    <Reveal delay={0.5} className="h-full">
                      <div className="bg-[#e3e3e3] rounded-2xl p-8 flex flex-col gap-6 h-full border border-black/5">
                        <div className="w-7 h-7">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-[#1a1a1a]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                          </svg>
                        </div>
                        <div className="flex flex-col gap-3">
                          <h4 className="text-[16px] font-medium text-[#1a1a1a]">Brand Guidelines</h4>
                          <p className="text-[13px] text-[#6a6a6a] leading-[1.6]">Clear documentation that helps teams, partners, and vendors apply the identity consistently over time.</p>
                        </div>
                      </div>
                    </Reveal>
                    <Reveal delay={0.6} className="h-full">
                      <div className="bg-[#e3e3e3] rounded-2xl p-8 flex flex-col gap-6 h-full border border-black/5">
                        <div className="w-7 h-7">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-[#1a1a1a]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                          </svg>
                        </div>
                        <div className="flex flex-col gap-3">
                          <h4 className="text-[16px] font-medium text-[#1a1a1a]">Design Systems</h4>
                          <p className="text-[13px] text-[#6a6a6a] leading-[1.6]">Scalable frameworks that support brands operating across multiple channels, teams, and touchpoints.</p>
                        </div>
                      </div>
                    </Reveal>
                    <Reveal delay={0.7} className="h-full">
                      <div className="bg-[#e3e3e3] rounded-2xl p-8 flex flex-col gap-6 h-full border border-black/5">
                        <div className="w-7 h-7">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-[#1a1a1a]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                          </svg>
                        </div>
                        <div className="flex flex-col gap-3">
                          <h4 className="text-[16px] font-medium text-[#1a1a1a]">Brand Applications</h4>
                          <p className="text-[13px] text-[#6a6a6a] leading-[1.6]">Packaging, stationery, brochures, presentations, social templates, signage, and other materials that bring the identity into everyday use.</p>
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
                      <p>Identity gives people something to recognise. Communication gives them something to connect with.</p>
                      <p>Once a brand knows how it should look and sound, it becomes easier to create content, build experiences, and show up consistently wherever people encounter it.</p>
                      <p>Because trust isn&apos;t built through a single interaction. It&apos;s built through repetition, clarity, and coherence over time.</p>
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
                <div className="lg:col-span-8 lg:pl-16 flex flex-col md:flex-row items-center gap-4">
                  <Reveal delay={0.2} className="w-full">
                    <div className="bg-[#e3e3e3] rounded-2xl p-5 flex flex-col justify-center gap-4 w-full md:w-[150px] lg:w-[170px] h-[150px] border border-black/5">
                      <div className="w-6 h-6">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-[#1a1a1a]">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="text-[12px] font-medium text-[#1a1a1a] leading-[1.3]">Content &amp; Communication</h4>
                        <p className="text-[10px] text-[#6a6a6a] leading-[1.3]">expressing the brand in words</p>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delay={0.3} className="hidden md:flex items-center justify-center w-4 h-4">
                    <div className="text-[#1a1a1a]/40">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </div>
                  </Reveal>

                  <Reveal delay={0.4} className="w-full">
                    <div className="bg-[#e3e3e3] rounded-2xl p-5 flex flex-col justify-center gap-4 w-full md:w-[150px] lg:w-[170px] h-[150px] border border-black/5">
                      <div className="w-6 h-6">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-[#1a1a1a]">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                        </svg>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="text-[12px] font-medium text-[#1a1a1a] leading-[1.3]">Digital Marketing</h4>
                        <p className="text-[10px] text-[#6a6a6a] leading-[1.3]">putting the brand in front of the right people</p>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delay={0.5} className="hidden md:flex items-center justify-center w-4 h-4">
                    <div className="text-[#1a1a1a]/40">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </div>
                  </Reveal>

                  <Reveal delay={0.6} className="w-full">
                    <div className="bg-[#e3e3e3] rounded-2xl p-5 flex flex-col justify-center gap-4 w-full md:w-[150px] lg:w-[170px] h-[150px] border border-black/5">
                      <div className="w-6 h-6">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-[#1a1a1a]">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="text-[12px] font-medium text-[#1a1a1a] leading-[1.3]">Social &amp; Community</h4>
                        <p className="text-[10px] text-[#6a6a6a] leading-[1.3]">showing up consistently over time</p>
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
