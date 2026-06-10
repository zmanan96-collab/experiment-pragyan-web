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

            <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 relative">

              {/* LEFT COLUMN - STICKY */}
              <div className="w-full lg:w-[35%] lg:sticky lg:top-[160px] self-start">
                <Reveal>
                  <h1 className="text-[40px] md:text-[56px] lg:text-[72px] leading-[1.1] font-medium tracking-tight mb-6">
                    Digital Marketing
                  </h1>
                </Reveal>

                <Reveal delay={0.1}>
                  <h2 className="text-[20px] md:text-[24px] leading-[1.3] text-[#4a4a4a] mb-8 font-medium">
                    Helping the right people find you.
                  </h2>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="text-[16px] md:text-[18px] leading-[1.5] text-[#4a4a4a] space-y-6">
                    <p>
                      The problem with most digital marketing isn&apos;t the execution. It&apos;s that it comes before the thinking.
                    </p>
                    <p>
                      Campaigns get built before the audience is understood. Ads go live before the message is clear. Money gets spent on visibility before there&apos;s anything worth being visible about. The result is activity that doesn&apos;t build anything — impressions that don&apos;t convert, clicks that don&apos;t continue.
                    </p>
                    <p>
                      We work differently. Strategy first, then the channels and campaigns that carry it.
                    </p>
                  </div>
                </Reveal>


              </div>

              {/* RIGHT COLUMN - CONTENT */}
              <div className="w-full lg:w-[65%] flex flex-col gap-12 md:gap-16 lg:pt-4">

                {/* ROW 1: 2 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                  <Reveal delay={0.3}>
                    <div className="flex flex-col gap-4">
                      <h3 className="text-[24px] md:text-[28px] font-medium leading-[1.2]">What It Should Actually Do</h3>
                      <div className="text-[16px] md:text-[18px] text-[#4a4a4a] leading-[1.6] space-y-4">
                        <p>Good digital marketing puts the right message in front of the right person. Not everyone. Not everywhere.</p>
                        <p>The right people — the ones most likely to value what you do and act on what you say. That requires knowing your audience more specifically than a demographic range. It requires a message built from your brand&apos;s actual point of view, not a claim about quality or service that every competitor makes too.</p>
                        <p>We work with businesses that want marketing to compound over time. Visibility that builds, not spikes and fades.</p>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delay={0.4}>
                    <div className="flex flex-col gap-4">
                      <h3 className="text-[24px] md:text-[28px] font-medium leading-[1.2]">How We Work</h3>
                      <div className="text-[16px] md:text-[18px] text-[#4a4a4a] leading-[1.6] space-y-4">
                        <p>Marketing is part of the brand, not something that runs next to it. The campaigns we build carry the same voice, perspective, and visual identity as everything else. A business that&apos;s consistent across organic content, paid campaigns, and its website builds trust faster than one that isn&apos;t.</p>
                        <p>We start from the brand strategy. We understand who the audience is and what they care about before we decide how to reach them.</p>
                      </div>
                    </div>
                  </Reveal>

                </div>
                <Reveal delay={0.3}>
                  <div className="mt-12 flex flex-col gap-4">
                    <h3 className="text-[24px] md:text-[28px] font-medium leading-[1.2]">What We Won&apos;t Do</h3>
                    <div className="text-[16px] md:text-[18px] text-[#4a4a4a] leading-[1.6] space-y-4 text-justify">
                      <p>We won&apos;t run digital marketing in isolation from brand thinking. If a business comes to us for performance marketing before the positioning and message are clear, we&apos;ll say so. Ad spend behind an unclear message is a fast way to spend money without building anything.</p>
                      <p>We&apos;re a good fit for businesses that have something clear to say and want help getting it in front of the people who need to hear it.</p>
                    </div>
                  </div>
                </Reveal>
                {/* ROW 2: Horizontal */}
                <Reveal delay={0.5}>
                  <div className="w-full border-t border-b border-[#1a1a1a]/10 py-12 md:py-16">
                    <h3 className="text-[28px] md:text-[36px] font-medium leading-[1.2] mb-10 text-center md:text-left">What We Work On</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                      <div className="flex flex-col gap-3">
                        <h4 className="text-[20px] font-medium">Campaign Strategy</h4>
                        <p className="text-[#4a4a4a] text-[16px] leading-[1.5]">
                          Before any ad is placed or content is created, we define the objective, the audience, the message, and the channels. A campaign without this is just spending.
                        </p>
                      </div>

                      <div className="flex flex-col gap-3">
                        <h4 className="text-[20px] font-medium">Performance Marketing</h4>
                        <p className="text-[#4a4a4a] text-[16px] leading-[1.5]">
                          Paid campaigns across search and social, built and optimised around clear goals. We report on metrics that connect to business outcomes, not the ones that just look good in a deck.
                        </p>
                      </div>

                      <div className="flex flex-col gap-3">
                        <h4 className="text-[20px] font-medium">SEO</h4>
                        <p className="text-[#4a4a4a] text-[16px] leading-[1.5]">
                          Helping your brand get found by people already looking for what you offer. Content, site structure, and technical foundations that build search visibility over time.
                        </p>
                      </div>

                      <div className="flex flex-col gap-3">
                        <h4 className="text-[20px] font-medium">Analytics</h4>
                        <p className="text-[#4a4a4a] text-[16px] leading-[1.5]">
                          Tracking what&apos;s working, what isn&apos;t, and why. Setting up the systems that turn data into decisions so spend is guided by evidence rather than gut feel.
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* ROW 3: 1 Column */}
                <div className="grid grid-cols-1 gap-12 md:gap-16">
                  <Reveal delay={0.6}>
                    <div className="flex flex-col gap-4">
                      <h3 className="text-[24px] md:text-[28px] font-medium leading-[1.2]">Where It Connects</h3>
                      <div className="text-[16px] md:text-[18px] text-[#4a4a4a] leading-[1.6] space-y-4">
                        <ul className="flex flex-col gap-3 mt-4">
                          <li className="relative pl-4">
                            <span className="absolute left-0 top-[11px] w-1.5 h-1.5 rounded-full bg-[#4a4a4a]"></span>
                            <span>Brand Strategy</span>
                            <span className="text-[14px] md:text-[16px] opacity-70 ml-1">— the thinking behind the message</span>
                          </li>
                          <li className="relative pl-4">
                            <span className="absolute left-0 top-[11px] w-1.5 h-1.5 rounded-full bg-[#4a4a4a]"></span>
                            <span>Content &amp; Communication</span>
                            <span className="text-[14px] md:text-[16px] opacity-70 ml-1">— the words that carry it</span>
                          </li>
                          <li className="relative pl-4">
                            <span className="absolute left-0 top-[11px] w-1.5 h-1.5 rounded-full bg-[#4a4a4a]"></span>
                            <span>Social &amp; Community</span>
                            <span className="text-[14px] md:text-[16px] opacity-70 ml-1">— the ongoing presence that supports it</span>
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
