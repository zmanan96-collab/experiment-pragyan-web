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

            <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 relative">

              {/* LEFT COLUMN - STICKY */}
              <div className="w-full lg:w-[35%] lg:sticky lg:top-[160px] self-start">
                <Reveal>
                  <h1 className="text-[40px] md:text-[56px] lg:text-[72px] leading-[1.1] font-medium tracking-tight mb-6">
                    OOH Advertising
                  </h1>
                </Reveal>

                <Reveal delay={0.1}>
                  <h2 className="text-[20px] md:text-[24px] leading-[1.3] text-[#4a4a4a] mb-8 font-medium">
                    Built to be seen. Designed to be remembered.
                  </h2>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="text-[16px] md:text-[18px] leading-[1.5] text-[#4a4a4a] space-y-6 text-justify">
                    <p>
                      A hoarding has no skip button. No scroll. No notification competing for the same moment of attention.
                    </p>
                    <p>
                      It exists in the physical world, in front of people who are moving. And it has roughly three seconds to do its job.
                    </p>
                    <p>
                      That constraint is what makes outdoor hard — and what makes good outdoor work genuinely impressive when it lands. Because most of it doesn&apos;t. Most outdoor advertising says too much, uses type that&apos;s too small, and has no single clear idea. People drive past it and nothing sticks.
                    </p>
                    <p>
                      Getting it right requires being very clear about what you&apos;re actually trying to say, and then trusting the design to say only that.
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
                      <h3 className="text-[24px] md:text-[28px] font-medium leading-[1.2]">When OOH Makes Sense</h3>
                      <div className="text-[16px] md:text-[18px] text-[#4a4a4a] leading-[1.6] space-y-4 text-justify">
                        <p>Not every brand needs outdoor. But for the right objectives it does something digital can&apos;t — it puts your brand in the physical world at scale, in spaces your audience actually moves through.</p>
                        <p>School admissions season. A product launch in a specific locality. A new retail opening. A campaign you want people to encounter, not scroll past. These are the situations where a well-placed, well-designed hoarding earns its cost within weeks.</p>
                        <p>A single strong outdoor campaign can shift how an entire locality perceives a brand. Not because it&apos;s clever. Because it&apos;s clear and it&apos;s everywhere.</p>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delay={0.4}>
                    <div className="flex flex-col gap-4">
                      <h3 className="text-[24px] md:text-[28px] font-medium leading-[1.2]">How We Work</h3>
                      <div className="text-[16px] md:text-[18px] text-[#4a4a4a] leading-[1.6] space-y-4">
                        <p>Three seconds. That&apos;s the constraint.</p>
                        <p>Three seconds to land something clear enough that it sticks, without context, without explanation, without a second chance. That discipline pushes every unnecessary element out. One idea. Said simply. Designed to work at distance.</p>
                        <p>We start with the idea. Once that&apos;s clear, design follows. Colour, type, imagery — all of it serving the message, not decorating around it.</p>
                        <p>And the campaign looks like the brand. Not like something made separately for outdoor. Consistent with the visual identity, carrying the brand&apos;s voice, reinforcing rather than replacing everything else the brand does.</p>
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
                        <h4 className="text-[20px] font-medium">Campaign Concepts</h4>
                        <p className="text-[#4a4a4a] text-[16px] leading-[1.5]">
                          The idea that holds the campaign together. The single message, the creative angle, the reason someone who drives past it once still remembers it an hour later. Good outdoor starts with an idea, not a visual.
                        </p>
                      </div>

                      <div className="flex flex-col gap-3">
                        <h4 className="text-[20px] font-medium">Hoardings</h4>
                        <p className="text-[#4a4a4a] text-[16px] leading-[1.5]">
                          Design for outdoor formats — billboards, hoardings, large-format installations — built for legibility and impact. Every format has its own logic. We design for the medium, not just the message.
                        </p>
                      </div>

                      <div className="flex flex-col gap-3">
                        <h4 className="text-[20px] font-medium">Media Planning</h4>
                        <p className="text-[#4a4a4a] text-[16px] leading-[1.5]">
                          Which locations, which formats, how long. So the investment reaches the people it&apos;s meant to reach, in the places they actually are.
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* ROW 3: 1 Column (What Strong Outdoor Work Looks Like & Work We've Done) */}
                <div className="grid grid-cols-1 gap-12 md:gap-16">
                  <Reveal delay={0.55}>
                    <div className="flex flex-col gap-4">
                      <h3 className="text-[24px] md:text-[28px] font-medium leading-[1.2]">What Strong Outdoor Work Looks Like</h3>
                      <div className="text-[16px] md:text-[18px] text-[#4a4a4a] leading-[1.6] space-y-4 text-justify">
                        <p>One clear idea. Not five features, not a tagline and a list and a phone number and a website.</p>
                        <p>Type that works at thirty metres. High contrast. A visual hierarchy obvious from a moving vehicle, not just a screen mockup.</p>
                        <p>Something honest. Ahmedabad has seen every trick. What earns attention is a brand that says something direct and true. That&apos;s rarer than it should be, which is why it still works.</p>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delay={0.6}>
                    <div className="flex flex-col gap-4">
                      <h3 className="text-[24px] md:text-[28px] font-medium leading-[1.2]">Work We&apos;ve Done</h3>
                      <div className="text-[16px] md:text-[18px] text-[#4a4a4a] leading-[1.6] space-y-6 mt-2">
                        <div>
                          <p className="font-medium text-[#1a1a1a]">Global Guardians School</p>
                          <p className="mt-1">An admissions campaign built around what parents actually care about when choosing a school. Not the facilities list. Designed for the localities that mattered most.</p>
                          <p className="mt-2">
                            <Link href="/work/global-guardians-school" className="inline-flex items-center text-[#4B3FD4] hover:text-[#786CF0] font-medium transition-colors">
                              &rarr; View case study
                            </Link>
                          </p>
                        </div>

                        <div>
                          <p className="font-medium text-[#1a1a1a]">Bhavya Srishti Udyog</p>
                          <p className="mt-1">Outdoor for a sustainable manufacturing brand entering a category most buyers had never considered. The goal was to create curiosity before it created conversion.</p>
                          <p className="mt-2">
                            <Link href="/work/bhavya-srishti-udyog" className="inline-flex items-center text-[#4B3FD4] hover:text-[#786CF0] font-medium transition-colors">
                              &rarr; View case study
                            </Link>
                          </p>
                        </div>
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
                          <li className="relative pl-4">
                            <span className="absolute left-0 top-[11px] w-1.5 h-1.5 rounded-full bg-[#4a4a4a]"></span>
                            <span>Brand Strategy</span>
                            <span className="text-[14px] md:text-[16px] opacity-70 ml-1">— the message outdoor carries</span>
                          </li>
                          <li className="relative pl-4">
                            <span className="absolute left-0 top-[11px] w-1.5 h-1.5 rounded-full bg-[#4a4a4a]"></span>
                            <span>Identity &amp; Expression</span>
                            <span className="text-[14px] md:text-[16px] opacity-70 ml-1">— the visual language it expresses</span>
                          </li>
                          <li className="relative pl-4">
                            <span className="absolute left-0 top-[11px] w-1.5 h-1.5 rounded-full bg-[#4a4a4a]"></span>
                            <span>Digital Marketing</span>
                            <span className="text-[14px] md:text-[16px] opacity-70 ml-1">— the channels that extend the campaign online</span>
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
