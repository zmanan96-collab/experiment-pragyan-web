import { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '../../../components/Reveal';
import HomeSmoothScroll from '../../../components/HomeSmoothScroll';

export const metadata: Metadata = {
  title: 'Social Media Management & Community Building | Pragyan',
  description: "A meaningful social presence is built through relevance, clarity, and a point of view people want to follow. Pragyan helps brands create content and communities that last.",
};

export default function SocialAndCommunityPage() {
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
                    Social &amp; Community
                  </h1>
                </Reveal>

                <Reveal delay={0.1}>
                  <h2 className="text-[20px] md:text-[24px] leading-[1.3] text-[#4a4a4a] mb-8 font-medium">
                    Showing up with consistency and intent.
                  </h2>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="text-[16px] md:text-[18px] leading-[1.5] text-[#4a4a4a] space-y-6">
                    <p>
                      Posting is easy. Anyone can post.
                    </p>
                    <p>
                      What&apos;s hard is showing up with something worth saying, in a voice people recognise, often enough that it builds something. That&apos;s where most brands lose the plot. They either post without thinking or think without posting. Neither works.
                    </p>
                    <p>
                      A social presence worth having takes a clear point of view and the patience to communicate it consistently. That&apos;s the work.
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
                      <h3 className="text-[24px] md:text-[28px] font-medium leading-[1.2]">What Most Brands Get Wrong</h3>
                      <div className="text-[16px] md:text-[18px] text-[#4a4a4a] leading-[1.6] space-y-4">
                        <p>Two things, usually.</p>
                        <p>The first is posting without any strategy. Sharing whatever feels relevant that day, with no clear sense of who it&apos;s for or what it&apos;s building toward. The content exists. It just doesn&apos;t add up to anything.</p>
                        <p>The second is chasing formats. Reels because everyone&apos;s doing Reels. Carousels because the numbers looked good once. Trends that have nothing to do with the brand, followed because someone saw a high-performing post in a different category.</p>
                        <p>Both feel like progress. Neither builds a community.</p>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delay={0.4}>
                    <div className="flex flex-col gap-4">
                      <h3 className="text-[24px] md:text-[28px] font-medium leading-[1.2]">How We Work</h3>
                      <div className="text-[16px] md:text-[18px] text-[#4a4a4a] leading-[1.6] space-y-4">
                        <p>Social content comes from the brand strategy. The same voice, the same perspective, the same visual language as everything else. Because consistency across every touchpoint — including social — is what turns visibility into recognition, and recognition into trust.</p>
                        <p>We know what the brand stands for before we write a caption. That&apos;s what makes the content feel like it belongs to something.</p>
                      </div>
                    </div>
                  </Reveal>
                </div>
                <Reveal delay={0.3}>
                  <div className="mt-12 flex flex-col gap-4">
                    <h3 className="text-[24px] md:text-[28px] font-medium leading-[1.2]">On Consistency</h3>
                    <div className="text-[16px] md:text-[18px] text-[#4a4a4a] leading-[1.6] space-y-4 text-justify">
                      <p>Consistency doesn&apos;t mean posting every day. It means showing up on a rhythm your audience can rely on, with a quality they recognise.</p>
                      <p>Three times a week with a clear perspective and a consistent look builds more than posting daily for a month and then going silent. We&apos;ve seen both. One works. The other doesn&apos;t.</p>
                      <p>We help brands find a rhythm that&apos;s sustainable and then hold it.</p>
                    </div>
                  </div>
                </Reveal>
                {/* ROW 2: Horizontal */}
                <Reveal delay={0.5}>
                  <div className="w-full border-t border-b border-[#1a1a1a]/10 py-12 md:py-16">
                    <h3 className="text-[28px] md:text-[36px] font-medium leading-[1.2] mb-10 text-center md:text-left">What We Work On</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                      <div className="flex flex-col gap-3">
                        <h4 className="text-[20px] font-medium">Content Strategy</h4>
                        <p className="text-[#4a4a4a] text-[16px] leading-[1.5]">
                          Before a single post is written, we define what the brand will talk about and who it&apos;s talking to. The themes, the formats, the tone. Strategy is what makes execution consistent instead of random.
                        </p>
                      </div>

                      <div className="flex flex-col gap-3">
                        <h4 className="text-[20px] font-medium">Social Media Management</h4>
                        <p className="text-[#4a4a4a] text-[16px] leading-[1.5]">
                          The actual day-to-day work. Creating content, managing schedules, monitoring engagement, keeping the brand voice consistent across every post. So the brand shows up without the founder having to be the one running it.
                        </p>
                      </div>

                      <div className="flex flex-col gap-3">
                        <h4 className="text-[20px] font-medium">Community Building</h4>
                        <p className="text-[#4a4a4a] text-[16px] leading-[1.5]">
                          An audience follows you. A community cares about what you stand for. Moving from one to the other means creating content that invites participation, not just observation — and engaging with people like a person, not a brand.
                        </p>
                      </div>

                      <div className="flex flex-col gap-3">
                        <h4 className="text-[20px] font-medium">Reputation Management</h4>
                        <p className="text-[#4a4a4a] text-[16px] leading-[1.5]">
                          How a brand responds to comments, questions, and criticism says as much about it as anything it publishes. We help brands handle public conversation in a way that builds trust rather than quietly eroding it.
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
                            <span className="text-[14px] md:text-[16px] opacity-70 ml-1">— the point of view that social expresses</span>
                          </li>
                          <li className="relative pl-4">
                            <span className="absolute left-0 top-[11px] w-1.5 h-1.5 rounded-full bg-[#4a4a4a]"></span>
                            <span>Content &amp; Communication</span>
                            <span className="text-[14px] md:text-[16px] opacity-70 ml-1">— the voice that social carries</span>
                          </li>
                          <li className="relative pl-4">
                            <span className="absolute left-0 top-[11px] w-1.5 h-1.5 rounded-full bg-[#4a4a4a]"></span>
                            <span>Personal Branding &amp; LinkedIn</span>
                            <span className="text-[14px] md:text-[16px] opacity-70 ml-1">— the founder&apos;s presence alongside the brand&apos;s</span>
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
