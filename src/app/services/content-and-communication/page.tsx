import { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '../../../components/Reveal';
import HomeSmoothScroll from '../../../components/HomeSmoothScroll';

export const metadata: Metadata = {
  title: 'Content & Communication Services | Pragyan',
  description: "Good communication helps people understand who you are and why your work matters. Pragyan develops content that reflects your perspective and speaks to the right audience.",
};

export default function ContentAndCommunicationPage() {
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
                    Content &amp; Communication
                  </h1>
                </Reveal>
                
                <Reveal delay={0.1}>
                  <h2 className="text-[20px] md:text-[24px] leading-[1.3] text-[#4a4a4a] mb-8 font-medium">
                    Your thinking, made clear.
                  </h2>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="text-[16px] md:text-[18px] leading-[1.5] italic text-[#4a4a4a] space-y-6">
                    <p>
                      Most founders have more to say than they realise. The ideas are there. The experience is there. The perspective is there.
                    </p>
                    <p>
                      Getting it onto a page in a way that someone else can read and immediately understand — that&apos;s the hard part. Taking what a founder knows deeply and turning it into something a stranger can grasp in thirty seconds is a specific skill. That&apos;s what this work is.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={0.3}>
                  <div className="mt-12 flex flex-col gap-4">
                    <h3 className="text-[24px] md:text-[28px] font-medium leading-[1.2]">Who It&apos;s For</h3>
                    <div className="text-[16px] md:text-[18px] text-[#4a4a4a] leading-[1.6] space-y-4 text-justify">
                      <p>Businesses that have outgrown their current copy. Where the words on the website or in the brochure no longer reflect how good the business has become.</p>
                      <p>Or founders who know what they want to say but can&apos;t get it to land on paper the way it lands in a conversation.</p>
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
                      <h3 className="text-[24px] md:text-[28px] font-medium leading-[1.2]">What Communication Does</h3>
                      <div className="text-[16px] md:text-[18px] text-[#4a4a4a] leading-[1.6] space-y-4">
                        <p>Your strategy says what you believe. Your identity shows how you look. Communication is how both of those things actually reach people.</p>
                        <p>It&apos;s the homepage copy that makes someone decide to keep reading. The brand story that makes a client feel like they already know you before the first call. The presentation that wins the room. The brochure someone keeps because it said something worth remembering.</p>
                        <p>When it&apos;s working, it doesn&apos;t feel like marketing. It feels like talking to someone who gets it.</p>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delay={0.4}>
                    <div className="flex flex-col gap-4">
                      <h3 className="text-[24px] md:text-[28px] font-medium leading-[1.2]">How We Work</h3>
                      <div className="text-[16px] md:text-[18px] text-[#4a4a4a] leading-[1.6] space-y-4">
                        <p>Every piece starts with understanding the audience, the context, and what the reader needs to think or do by the end of it.</p>
                        <p>We work from the brand strategy. Communication that isn&apos;t grounded in positioning and voice ends up sounding like everyone else. The strategic foundation is the brief.</p>
                        <p>And we write for people. SEO matters and we understand it. But copy written for search engines tends to push away the human reading it. We get the person right first, then structure for discoverability.</p>
                      </div>
                    </div>
                  </Reveal>
                </div>

                {/* ROW 2: Horizontal */}
                <Reveal delay={0.5}>
                  <div className="w-full border-t border-b border-[#1a1a1a]/10 py-12 md:py-16">
                    <h3 className="text-[28px] md:text-[36px] font-medium leading-[1.2] mb-10 text-center md:text-left">What We Work On</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                      <div className="flex flex-col gap-3">
                        <h4 className="text-[20px] font-medium">Website Copy</h4>
                        <p className="text-[#4a4a4a] text-[16px] leading-[1.5]">
                          The words on your site are usually the first complete experience of your brand. We write copy that&apos;s clear and has a voice — not copy that could belong to any business in your category.
                        </p>
                      </div>
                      
                      <div className="flex flex-col gap-3">
                        <h4 className="text-[20px] font-medium">Brand Stories</h4>
                        <p className="text-[#4a4a4a] text-[16px] leading-[1.5]">
                          Every brand has a founding perspective worth saying out loud. We find the belief, the frustration, the conviction that sits behind the business and give it a form other people can connect with.
                        </p>
                      </div>
                      
                      <div className="flex flex-col gap-3">
                        <h4 className="text-[20px] font-medium">Presentations</h4>
                        <p className="text-[#4a4a4a] text-[16px] leading-[1.5]">
                          Pitch decks, capability presentations, new business proposals. The best ones have a clear argument and sound like a human wrote them. We structure the thinking and write the content.
                        </p>
                      </div>

                      <div className="flex flex-col gap-3">
                        <h4 className="text-[20px] font-medium">Brochures</h4>
                        <p className="text-[#4a4a4a] text-[16px] leading-[1.5]">
                          Print that people actually read. That means a point of view, not a list of services. We write brochures that earn the time it takes to go through them.
                        </p>
                      </div>

                      <div className="flex flex-col gap-3 md:col-span-2 lg:col-span-1">
                        <h4 className="text-[20px] font-medium">Editorial and Long-form Content</h4>
                        <p className="text-[#4a4a4a] text-[16px] leading-[1.5]">
                          Articles, blog posts, case studies, guides. Content that builds expertise over time, earns trust, and gets found by the right people.
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
                        <ul className="flex flex-col gap-3 mt-4">
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#4a4a4a]"></span>
                            <span>Social &amp; Community</span>
                            <span className="text-[14px] md:text-[16px] opacity-70 ml-1">— carrying that voice across channels</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#4a4a4a]"></span>
                            <span>Personal Branding &amp; LinkedIn</span>
                            <span className="text-[14px] md:text-[16px] opacity-70 ml-1">— bringing the founder&apos;s voice forward</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#4a4a4a]"></span>
                            <span>Digital Marketing</span>
                            <span className="text-[14px] md:text-[16px] opacity-70 ml-1">— putting it in front of the right people</span>
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
