import { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '../../../components/Reveal';
import HomeSmoothScroll from '../../../components/HomeSmoothScroll';

export const metadata: Metadata = {
  title: 'OOH & Outdoor Advertising Design | Pragyan',
  description: "Outdoor advertising demands simplicity and confidence. Pragyan develops OOH campaigns that communicate a clear idea quickly across public spaces — built to be seen, designed to be remembered.",
};

export default function OOHAdvertisingPage() {
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
                      OOH<br />Advertising
                    </h1>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <h2 className="text-[20px] md:text-[22px] leading-[1.3] text-[#6a6a6a] font-normal">
                      Built to be seen. Designed to be remembered.
                    </h2>
                  </Reveal>
                  <Reveal delay={0.2}>
                    <div className="text-[14px] md:text-[15px] leading-[1.6] text-[#4a4a4a] space-y-5 text-justify">
                      <p>Outdoor advertising asks a different question from most other forms of communication.</p>
                      <p>What can someone understand in a few seconds?</p>
                      <p>People encounter billboards, hoardings, and large-format campaigns while they&apos;re moving through their day. There isn&apos;t time for explanation. The message needs to be clear, immediate, and memorable.</p>
                      <p>That simplicity is what makes good outdoor work effective.</p>
                      <p>It isn&apos;t about saying more.<br />It&apos;s about saying the right thing, in the clearest possible way.</p>
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
                      <h3 className="text-[20px] md:text-[22px] font-medium leading-[1.2]">When OOH Makes Sense</h3>
                      <div className="text-[14px] md:text-[15px] text-[#4a4a4a] leading-[1.6] space-y-5 text-justify">
                        <p>Outdoor advertising can be especially powerful when visibility within a specific geography matters.</p>
                        <p>Admissions campaigns.<br />New store launches.<br />Exhibitions and events.<br />Awareness initiatives aimed at a local audience.</p>
                        <p>In these moments, physical presence can reinforce credibility and create familiarity in ways digital channels alone cannot.</p>
                        <p>The objective isn&apos;t simply to be noticed.<br />It&apos;s to be remembered by the people who matter most.</p>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal delay={0.4}>
                    <div className="flex flex-col gap-4">
                      <h3 className="text-[20px] md:text-[22px] font-medium leading-[1.2]">How We Work</h3>
                      <div className="text-[14px] md:text-[15px] text-[#4a4a4a] leading-[1.6] space-y-5">
                        <p>We begin with the message.</p>
                        <p>What is the one thing people should take away from this campaign?</p>
                        <p>Once that becomes clear, every creative decision supports it.</p>
                        <p>The visual hierarchy.<br />The typography.<br />The imagery.<br />The placement of information.</p>
                        <p>Outdoor communication requires discipline. Every element has to earn its place.</p>
                        <p>And like everything else we create, the work remains connected to the broader brand system.</p>
                        <p>The campaign should feel like an extension of the brand, not a departure from it.</p>
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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </div>
                    <h3 className="text-[20px] md:text-[22px] font-medium leading-[1.2]">Why It Matters</h3>
                    <div className="text-[14px] md:text-[15px] text-[#4a4a4a] leading-[1.6] space-y-4 mt-2 text-justify">
                      <p>In an increasingly digital world, physical visibility still carries weight.</p>
                      <p>A well-executed outdoor campaign places your brand within the everyday environments your audience moves through.</p>
                      <p>It creates familiarity.<br />It reinforces credibility.</p>
                      <p>And it gives people another opportunity to remember who you are and what you stand for.</p>
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
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.829 1.58-2.083a4.5 4.5 0 1 0-7.66 0c.922.254 1.58 1.1 1.58 2.083v.192" />
                          </svg>
                        </div>
                        <div className="flex flex-col gap-3">
                          <h4 className="text-[16px] font-medium text-[#1a1a1a]">Campaign Concepts</h4>
                          <p className="text-[13px] text-[#6a6a6a] leading-[1.6]">Developing the central idea and message that guides the entire outdoor campaign.</p>
                        </div>
                      </div>
                    </Reveal>
                    <Reveal delay={0.4} className="h-full">
                      <div className="bg-[#e3e3e3] rounded-2xl p-8 flex flex-col gap-6 h-full border border-black/5">
                        <div className="w-7 h-7">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-[#1a1a1a]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                          </svg>
                        </div>
                        <div className="flex flex-col gap-3">
                          <h4 className="text-[16px] font-medium text-[#1a1a1a]">Hoardings &amp; Large-Format Design</h4>
                          <p className="text-[13px] text-[#6a6a6a] leading-[1.6]">Creating outdoor assets designed for visibility, clarity, and impact across different formats.</p>
                        </div>
                      </div>
                    </Reveal>
                    <Reveal delay={0.5} className="h-full">
                      <div className="bg-[#e3e3e3] rounded-2xl p-8 flex flex-col gap-6 h-full border border-black/5">
                        <div className="w-7 h-7">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-[#1a1a1a]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                          </svg>
                        </div>
                        <div className="flex flex-col gap-3">
                          <h4 className="text-[16px] font-medium text-[#1a1a1a]">Media Planning Support</h4>
                          <p className="text-[13px] text-[#6a6a6a] leading-[1.6]">Advising on placement, duration, and location considerations to help campaigns reach the intended audience effectively.</p>
                        </div>
                      </div>
                    </Reveal>
                    <Reveal delay={0.6} className="h-full">
                      <div className="bg-[#e3e3e3] rounded-2xl p-8 flex flex-col gap-6 h-full border border-black/5">
                        <div className="w-7 h-7">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-[#1a1a1a]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                          </svg>
                        </div>
                        <div className="flex flex-col gap-3">
                          <h4 className="text-[16px] font-medium text-[#1a1a1a]">Integrated Campaign Extensions</h4>
                          <p className="text-[13px] text-[#6a6a6a] leading-[1.6]">Ensuring outdoor campaigns align with digital, social, and broader communication efforts for a more cohesive brand experience.</p>
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
                    <h3 className="text-[20px] md:text-[22px] font-medium leading-[1.2]">Related Work</h3>
                    <div className="text-[14px] md:text-[15px] text-[#4a4a4a] leading-[1.6] space-y-6 mt-4">
                      <div>
                        <p className="font-medium text-[#1a1a1a]">Global Guardians School</p>
                        <p className="mt-1">Supporting admissions communication through outdoor campaigns designed to build local awareness and reinforce the school&apos;s distinctive educational philosophy.</p>
                        <p className="mt-2">
                          <Link href="/work/global-guardians-school" className="inline-flex items-center text-[#1a1a1a] hover:text-[#4a4a4a] font-medium transition-colors">
                            &rarr; View case study
                          </Link>
                        </p>
                      </div>

                      <div>
                        <p className="font-medium text-[#1a1a1a]">Bhavya Srishti Udyog</p>
                        <p className="mt-1">Developing outdoor communication that introduced a sustainable manufacturing brand to new audiences and expanded visibility beyond industry circles.</p>
                        <p className="mt-2">
                          <Link href="/work/bhavya-srishti-udyog" className="inline-flex items-center text-[#1a1a1a] hover:text-[#4a4a4a] font-medium transition-colors">
                            &rarr; View case study
                          </Link>
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </div>

                {/* Right Column - Text instead of Horizontal Cards */}
                <div className="lg:col-span-8 lg:pl-16 flex flex-col gap-6">
                  <Reveal delay={0.2}>
                    <h3 className="text-[20px] md:text-[22px] font-medium leading-[1.2]">Where It Leads</h3>
                  </Reveal>
                  <Reveal delay={0.3}>
                    <div className="text-[14px] md:text-[15px] text-[#4a4a4a] leading-[1.6] space-y-5 text-justify">
                      <p>Outdoor advertising works best when it forms part of a larger communication system.</p>
                      <p>The message begins with strategy.</p>
                      <p>The visual expression comes from identity.</p>
                      <p>And the experience extends across digital and physical touchpoints alike.</p>
                      <p>Because people don&apos;t encounter brands in one place.<br />They encounter them everywhere.</p>
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
