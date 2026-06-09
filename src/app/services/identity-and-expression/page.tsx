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
      <div id="smooth-wrapper" className="smooth-wrapper w-full bg-[#f6f5ef]">
        <div id="smooth-content" className="smooth-content w-full relative">
          <main className="min-h-screen bg-[#f6f5ef] text-[#1a1a1a] pt-[120px] md:pt-[160px] pb-24 md:pb-32 px-6 md:px-12 lg:px-[8vw]">
            
            <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
              
              {/* LEFT COLUMN - STICKY */}
              <div className="w-full lg:w-[35%] lg:sticky lg:top-[160px] self-start">
                <Reveal>
                  <h1 className="text-[40px] md:text-[56px] lg:text-[72px] leading-[1.1] font-medium tracking-tight mb-6">
                    Identity &amp; Expression
                  </h1>
                </Reveal>
                
                <Reveal delay={0.1}>
                  <h2 className="text-[20px] md:text-[24px] leading-[1.3] text-[#4a4a4a] mb-8 font-medium">
                    How your brand looks, sounds, and feels.
                  </h2>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="text-[16px] md:text-[18px] leading-[1.5] italic text-[#4a4a4a] space-y-6">
                    <p>
                      Identity is the translation of strategy into form. Once you know what your brand stands for, identity is how that belief becomes visible.
                    </p>
                    <p>
                      The mark on your packaging. The type on your website. The colour on a presentation deck. The tone in a client email. All of it working together, consistently, so that anyone who encounters your brand gets the same feeling — regardless of where they found you.
                    </p>
                    <p>
                      Done well, people don&apos;t notice it. They just trust you faster.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={0.3}>
                  <div className="mt-12 flex flex-col gap-4">
                    <h3 className="text-[24px] md:text-[28px] font-medium leading-[1.2]">What Good Identity Looks Like</h3>
                    <div className="text-[16px] md:text-[18px] text-[#4a4a4a] leading-[1.6] space-y-4 text-justify">
                      <p>It looks the same everywhere. On a business card, a billboard, and an Instagram story. Not three slightly different versions of the same brand.</p>
                      <p>It reflects who the brand actually is. Not the trend of the moment. Not a competitor. Not a generic interpretation of the category. A manufacturing company and a D2C consumer brand should look different from each other, because they are different.</p>
                      <p>And it ages. Good identity systems are rooted in something true enough about the brand that they don&apos;t need to be rebuilt every few years.</p>
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
                      <h3 className="text-[24px] md:text-[28px] font-medium leading-[1.2]">It&apos;s Not Just Visual</h3>
                      <div className="text-[16px] md:text-[18px] text-[#4a4a4a] leading-[1.6] space-y-4">
                        <p>The most common mistake in identity work is treating it as a design problem.</p>
                        <p>Visual identity matters. But so does verbal identity. The words your brand uses, how sentences are constructed, the tone it carries in different contexts. A beautifully designed brand that sounds generic hasn&apos;t actually solved the problem. It&apos;s just made it better looking.</p>
                        <p>We work on both. Because the two need to work together before identity does what it&apos;s supposed to.</p>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delay={0.4}>
                    <div className="flex flex-col gap-4">
                      <h3 className="text-[24px] md:text-[28px] font-medium leading-[1.2]">How We Work</h3>
                      <div className="text-[16px] md:text-[18px] text-[#4a4a4a] leading-[1.6] space-y-4">
                        <p>We plan before we build. Identity without strategy tends to produce things that look good and say nothing specific.</p>
                        <p>Every decision we make has a reason tied to the brand&apos;s positioning and what it needs to communicate. Colour choices, typeface selection, the weight of a mark — nothing is arbitrary. We can explain all of it, because that&apos;s how the decisions get made.</p>
                      </div>
                    </div>
                  </Reveal>
                </div>

                {/* ROW 2: Horizontal */}
                <Reveal delay={0.5}>
                  <div className="w-full border-t border-b border-[#1a1a1a]/10 py-12 md:py-16">
                    <h3 className="text-[28px] md:text-[36px] font-medium leading-[1.2] mb-10 text-center md:text-left">What We Create</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                      <div className="flex flex-col gap-3">
                        <h4 className="text-[20px] font-medium">Visual Identity</h4>
                        <p className="text-[#4a4a4a] text-[16px] leading-[1.5]">
                          Logo system, colour palette, typography, imagery style, and the graphic elements that make the brand recognisable at a glance. Not one logo file. A complete system.
                        </p>
                      </div>
                      
                      <div className="flex flex-col gap-3">
                        <h4 className="text-[20px] font-medium">Verbal Identity</h4>
                        <p className="text-[#4a4a4a] text-[16px] leading-[1.5]">
                          How the brand sounds. Tone of voice guidelines, vocabulary choices, messaging principles. The difference between how you talk to a new client versus how you write a product label.
                        </p>
                      </div>
                      
                      <div className="flex flex-col gap-3">
                        <h4 className="text-[20px] font-medium">Brand Guidelines</h4>
                        <p className="text-[#4a4a4a] text-[16px] leading-[1.5]">
                          The document that holds everything together. A reference for every designer, vendor, or team member who touches your brand — so it stays consistent whether we&apos;re involved or not.
                        </p>
                      </div>

                      <div className="flex flex-col gap-3">
                        <h4 className="text-[20px] font-medium">Design Systems</h4>
                        <p className="text-[#4a4a4a] text-[16px] leading-[1.5]">
                          For brands operating across multiple formats, channels, or team members, we build systems that make consistent execution straightforward.
                        </p>
                      </div>

                      <div className="flex flex-col gap-3 md:col-span-2 lg:col-span-1">
                        <h4 className="text-[20px] font-medium">Marketing Collateral</h4>
                        <p className="text-[#4a4a4a] text-[16px] leading-[1.5]">
                          Business cards, letterheads, brochures, presentation templates, social templates, packaging. The identity applied to the real world.
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
                            <span>Content &amp; Communication</span>
                            <span className="text-[14px] md:text-[16px] opacity-70 ml-1">— expressing the brand in words</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#4a4a4a]"></span>
                            <span>Digital Marketing</span>
                            <span className="text-[14px] md:text-[16px] opacity-70 ml-1">— putting the brand in front of the right people</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#4a4a4a]"></span>
                            <span>Social &amp; Community</span>
                            <span className="text-[14px] md:text-[16px] opacity-70 ml-1">— showing up consistently over time</span>
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
