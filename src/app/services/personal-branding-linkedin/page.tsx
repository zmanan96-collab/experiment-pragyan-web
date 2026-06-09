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
      <div id="smooth-wrapper" className="smooth-wrapper w-full bg-[#f6f5ef]">
        <div id="smooth-content" className="smooth-content w-full relative">
          <main className="min-h-screen bg-[#f6f5ef] text-[#1a1a1a] pt-[120px] md:pt-[160px] pb-24 md:pb-32 px-6 md:px-12 lg:px-[8vw]">
            
            <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
              
              {/* LEFT COLUMN - STICKY */}
              <div className="w-full lg:w-[35%] lg:sticky lg:top-[160px] self-start">
                <Reveal>
                  <h1 className="text-[40px] md:text-[56px] lg:text-[72px] leading-[1.1] font-medium tracking-tight mb-6">
                    Personal Branding &amp; LinkedIn
                  </h1>
                </Reveal>
                
                <Reveal delay={0.1}>
                  <h2 className="text-[20px] md:text-[24px] leading-[1.3] text-[#4a4a4a] mb-8 font-medium">
                    Building trust through people.
                  </h2>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="text-[16px] md:text-[18px] leading-[1.5] italic text-[#4a4a4a] space-y-6">
                    <p>
                      People connect with founders before they connect with companies. That&apos;s just how trust works.
                    </p>
                    <p>
                      When a founder has a visible, consistent presence — when their thinking is out there and their credibility is clear — it changes how the business gets perceived. Potential clients arrive already warmed up. Investors have already formed a view. Partners know what they&apos;re walking into before the first meeting.
                    </p>
                    <p>
                      A personal brand isn&apos;t a performance. It&apos;s just a clearer version of how you already think, expressed in a way other people can find and understand.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={0.3}>
                  <div className="mt-12 flex flex-col gap-4">
                    <h3 className="text-[24px] md:text-[28px] font-medium leading-[1.2]">What Good Personal Branding Looks Like</h3>
                    <div className="text-[16px] md:text-[18px] text-[#4a4a4a] leading-[1.6] space-y-4 text-justify">
                      <p>It doesn&apos;t look like personal branding.</p>
                      <p>The founders who do it well aren&apos;t performing visibility. They&apos;re sharing things they actually think about and problems they&apos;re actually working on. The consistency comes from the strategy. The trust comes from the perspective being real.</p>
                      <p>People follow them because it gives them something. Not because it&apos;s selling to them.</p>
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
                      <h3 className="text-[24px] md:text-[28px] font-medium leading-[1.2]">Why It Compounds</h3>
                      <div className="text-[16px] md:text-[18px] text-[#4a4a4a] leading-[1.6] space-y-4">
                        <p>The founders who do this well tend to be surprised by how much comes from it over time.</p>
                        <p>Not immediately. Personal branding doesn&apos;t work in thirty days, despite what some agencies will tell you. But over six months, twelve months, two years — the visibility builds. The credibility accrues. And the opportunities that come in start to look different.</p>
                        <p>People reach out already knowing what you do. Deals move faster. Hiring gets easier. Speaking invitations arrive. Not because you sold harder, but because you showed up consistently and said something real.</p>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delay={0.4}>
                    <div className="flex flex-col gap-4">
                      <h3 className="text-[24px] md:text-[28px] font-medium leading-[1.2]">How We Work</h3>
                      <div className="text-[16px] md:text-[18px] text-[#4a4a4a] leading-[1.6] space-y-4">
                        <p>We start by listening. To your background, your expertise, your goals, and how you actually think and communicate.</p>
                        <p>The voice we help you build is yours. Not a polished version of it. Not a corporate approximation. The real perspective you bring to your work, in a form that lands with a professional audience.</p>
                        <p>We handle the strategy and creative so you can show up consistently without spending three hours a week trying to figure out what to say.</p>
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
                        <h4 className="text-[20px] font-medium">LinkedIn Strategy</h4>
                        <p className="text-[#4a4a4a] text-[16px] leading-[1.5]">
                          A strategy that defines who you&apos;re building a presence for, what you&apos;ll say, and how often. Built around your actual positioning, not a generic content calendar. Something that reflects where you are and where you&apos;re going.
                        </p>
                      </div>
                      
                      <div className="flex flex-col gap-3">
                        <h4 className="text-[20px] font-medium">Personal Brand Positioning</h4>
                        <p className="text-[#4a4a4a] text-[16px] leading-[1.5]">
                          Before any content is created, we establish what space you occupy and what perspective makes you worth following. Positioning is what makes a personal brand coherent instead of just active.
                        </p>
                      </div>
                      
                      <div className="flex flex-col gap-3">
                        <h4 className="text-[20px] font-medium">Profile Development</h4>
                        <p className="text-[#4a4a4a] text-[16px] leading-[1.5]">
                          Your LinkedIn profile is a landing page, not a resume. We rebuild every section — headline, about, featured — to communicate your value and credibility to the people you&apos;re trying to reach.
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* ROW 3: 1 Column (On LinkedIn Specifically) */}
                <div className="grid grid-cols-1 gap-12 md:gap-16">
                  <Reveal delay={0.6}>
                    <div className="flex flex-col gap-4">
                      <h3 className="text-[24px] md:text-[28px] font-medium leading-[1.2]">On LinkedIn Specifically</h3>
                      <div className="text-[16px] md:text-[18px] text-[#4a4a4a] leading-[1.6] space-y-4">
                        <p>For most Indian founders and senior professionals, LinkedIn is the best platform to build on right now. The audience is professional. Organic reach is still real. And the bar for genuinely good content — content that has a point of view and something honest to say — is low enough that showing up thoughtfully stands out.</p>
                        <p>We&apos;ve built personal brand strategies and LinkedIn presences for founders across manufacturing, sustainability, consumer goods, and education.</p>
                        <p className="pt-2">
                          <Link href="/work/ganesh-verma" className="inline-flex items-center text-[#4B3FD4] hover:text-[#786CF0] font-medium transition-colors">
                            &rarr; See the Ganesh Verma case study
                          </Link>
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </div>

                {/* ROW 4: 1 Column (Where It Connects) */}
                <div className="grid grid-cols-1 gap-12 md:gap-16">
                  <Reveal delay={0.7}>
                    <div className="flex flex-col gap-4">
                      <h3 className="text-[24px] md:text-[28px] font-medium leading-[1.2]">Where It Connects</h3>
                      <div className="text-[16px] md:text-[18px] text-[#4a4a4a] leading-[1.6] space-y-4">
                        <ul className="flex flex-col gap-3 mt-4">
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#4a4a4a]"></span>
                            <span>Brand Strategy</span>
                            <span className="text-[14px] md:text-[16px] opacity-70 ml-1">— the company&apos;s perspective and positioning</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#4a4a4a]"></span>
                            <span>Content &amp; Communication</span>
                            <span className="text-[14px] md:text-[16px] opacity-70 ml-1">— the broader voice the brand carries</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#4a4a4a]"></span>
                            <span>Social &amp; Community</span>
                            <span className="text-[14px] md:text-[16px] opacity-70 ml-1">— the company&apos;s social presence alongside yours</span>
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
