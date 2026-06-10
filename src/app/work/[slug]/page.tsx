import { notFound } from 'next/navigation';
import Link from 'next/link';
import StatsCounter, { AnimatedNumber } from '../../../components/StatsCounter';
import InteractiveStatsDashboard from '../../../components/InteractiveStatsDashboard';
import { getAtcChainsAnalyticsData } from '../../../lib/analyticsParser';

function formatParagraphText(text: string | undefined): string {
  if (!text) return '';
  const lines = text.split('\n');
  const formattedLines: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const currentLine = lines[i].trim();
    if (currentLine === '') {
      formattedLines.push('');
      continue;
    }

    const startsWithBullet = currentLine.startsWith('•') || currentLine.startsWith('-') || currentLine.startsWith('*');

    if (formattedLines.length > 0) {
      const lastLineIndex = formattedLines.length - 1;
      const lastLine = formattedLines[lastLineIndex];

      if (
        lastLine !== '' &&
        !startsWithBullet &&
        !lastLine.startsWith('•') &&
        !lastLine.startsWith('-') &&
        !lastLine.startsWith('*')
      ) {
        formattedLines[lastLineIndex] = lastLine + ' ' + currentLine;
      } else {
        formattedLines.push(currentLine);
      }
    } else {
      formattedLines.push(currentLine);
    }
  }

  return formattedLines.join('\n');
}

import { CaseStudyData, caseStudies } from '../../../lib/caseStudiesData';


type PageProps = {
  params: Promise<{ slug: string }>;
};


export async function generateMetadata({ params }: PageProps): Promise<import('next').Metadata> {
  const { slug } = await params;
  const project = caseStudies[slug];

  if (!project) {
    return {
      title: 'Work — Pragyan',
    };
  }

  return {
    title: project.seoTitle || `${project.title} — Pragyan`,
    description: project.seoDescription || `Case study for ${project.title}.`,
    alternates: {
      canonical: `https://www.mypragyan.com/work/${slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = caseStudies[slug];
  const analyticsData = getAtcChainsAnalyticsData();

  if (!project) {
    notFound();
  }

  return (
    <article
      data-header-theme="light"
      className="antialiased min-h-screen flex flex-col bg-[#f9f9f9] text-[#1a1c1c] pt-0 select-text"
    >
      <main className="flex-grow">

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.mypragyan.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Work",
                  "item": "https://www.mypragyan.com/work"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": project.title,
                  "item": `https://www.mypragyan.com/work/${slug}`
                }
              ]
            })
          }}
        />

        <h1 className="sr-only">{project.h1 || project.title}</h1>
        {/* Full-Screen Hero Image Section */}
        <section data-header-theme={project.heroHeaderTheme || "dark"} className="w-full aspect-[16/9] md:aspect-auto md:h-screen relative overflow-hidden bg-[#eeeeee]">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent z-10 pointer-events-none" />
          <img
            alt={project.heroImageAlt || project.title}
            className={`w-full h-full object-cover relative z-0 ${project.heroImagePosition || 'object-center'}`}
            src={project.heroImage}
          />
        </section>

        {/* Headline Section */}
        {project.headline && (
          <section className="max-w-[1440px] mx-auto px-10 md:px-16 pt-20 pb-8">
            <div className="grid grid-cols-4 md:grid-cols-12 gap-6">
              <div className="col-span-4 md:col-span-9 md:col-start-4">
                <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-black leading-tight tracking-tight block" aria-hidden="true">
                  {project.headline}
                </span>
              </div>
            </div>
          </section>
        )}

        {/* Metadata Grid */}
        <section className="max-w-[1440px] mx-auto px-10 md:px-16 py-8">
          <div className="border-y border-[#76777b]/30 py-8 grid grid-cols-4 md:grid-cols-12 gap-6">
            <div className="col-span-4 md:col-span-3">
              {project.servicesList ? (
                <ul className="text-black">
                  {project.servicesList.map((service, idx) => (
                    <li key={idx}>
                      <h3 className="inline text-[20px] md:text-[26px] font-bold leading-tight tracking-tight">{service}</h3>
                    </li>
                  ))}
                </ul>
              ) : (
                <p
                  className="text-[20px] md:text-[26px] text-black font-bold leading-tight tracking-tight"
                  dangerouslySetInnerHTML={{ __html: project.label }}
                />
              )}
            </div>
            {project.descriptionRightOfLabel && (
              <div className="col-span-4 md:col-span-9 flex flex-col justify-start md:pt-1">
                <p
                  className="text-left md:text-justify text-base md:text-lg font-light text-black leading-relaxed max-w-[850px] whitespace-pre-line"
                  dangerouslySetInnerHTML={{ __html: formatParagraphText(project.descriptionRightOfLabel) }}
                />
              </div>
            )}
          </div>
        </section>

        {/* Additional Section (combined 1 and 2) */}
        {(project.additionalSection || project.additionalSection2) && (
          <section className="max-w-[1440px] mx-auto px-10 md:px-16 py-8">
            <div className="border-b border-[#76777b]/30 pb-8 grid grid-cols-4 md:grid-cols-12 gap-6">
              <div className="col-span-4 md:col-span-3">
                <h2 className="text-sm text-black font-semibold leading-relaxed">{project.contextHeading || 'CONTEXT'}</h2>
              </div>
              <div className="col-span-4 md:col-span-9 flex flex-col gap-6">
                {project.additionalSection && (
                  <p
                    className="text-left md:text-justify text-base md:text-lg font-light text-black leading-relaxed max-w-[850px] whitespace-pre-line"
                    dangerouslySetInnerHTML={{ __html: formatParagraphText(project.additionalSection) }}
                  />
                )}
                {project.additionalSection2 && (
                  <p
                    className="text-left md:text-justify text-base md:text-lg font-light text-black leading-relaxed max-w-[850px] whitespace-pre-line"
                    dangerouslySetInnerHTML={{ __html: formatParagraphText(project.additionalSection2) }}
                  />
                )}
              </div>
            </div>
          </section>
        )}

        {/* Additional Section 3 */}
        {project.additionalSection3 && (
          <section className="max-w-[1440px] mx-auto px-10 md:px-16 py-8">
            <div className="border-b border-[#76777b]/30 pb-8 grid grid-cols-4 md:grid-cols-12 gap-6">
              <div className="col-span-4 md:col-span-3">
                <h2 className="text-sm text-black font-semibold leading-relaxed">{project.processHeading || 'PROCESS'}</h2>
              </div>
              <div className="col-span-4 md:col-span-9">
                <p
                  className="text-left md:text-justify text-base md:text-lg font-light text-black leading-relaxed max-w-[850px] whitespace-pre-line"
                  dangerouslySetInnerHTML={{ __html: formatParagraphText(project.additionalSection3) }}
                />
              </div>
            </div>
          </section>
        )}

        {/* The Work Section */}
        <section className="max-w-[1440px] mx-auto px-10 md:px-16 py-16">
          <div className="grid grid-cols-4 md:grid-cols-12 gap-6">
            <div className="col-span-4 md:col-span-9 md:col-start-4">
              <p
                className="text-left md:text-justify text-base md:text-lg font-light text-black leading-relaxed max-w-[850px] whitespace-pre-line"
              >
                {formatParagraphText(project.description)}
              </p>
            </div>
          </div>
        </section>

        {/* Custom Two Cards Section */}
        {project.customTwoCards && (
          <section className="max-w-[1440px] mx-auto px-10 md:px-16 py-12 border-t border-[#76777b]/20">
            <div className="grid grid-cols-4 md:grid-cols-12 gap-6">
              <div className="col-span-4 md:col-span-9 md:col-start-4 mb-2">
                <h2 className="text-[11px] md:text-xs font-bold tracking-wider text-black uppercase">
                  {project.resultsHeading || project.customTwoCards.title}
                </h2>
              </div>
              <div className="col-span-4 md:col-span-9 md:col-start-4">
                {slug === 'atc-chains-india' ? (
                  <InteractiveStatsDashboard
                    monthlyData={analyticsData.monthlyData}
                    totalImpressions={analyticsData.totalImpressions}
                    totalUniqueReached={analyticsData.totalUniqueReached}
                    totalClicks={analyticsData.totalClicks}
                    overallEngagementRate={analyticsData.overallEngagementRate}
                  />
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.customTwoCards.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-white border border-[#76777b]/20 rounded-lg p-6 flex flex-col justify-between hover:border-black transition-colors duration-300"
                      >
                        <div>
                          <div className="text-lg md:text-xl font-light text-black tracking-tight mb-2 whitespace-nowrap">
                            <AnimatedNumber value={item.value} />
                          </div>
                          <div className="text-xs md:text-sm font-semibold text-[#555] uppercase tracking-wider leading-snug">
                            {item.label}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {project.metricsList && (
                  <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {project.metricsList.map((m, i) => (
                      <div key={i}>
                        <h3 className="sr-only">{m.value} {m.label}</h3>
                        <div className="text-xl font-bold text-black" aria-hidden="true">{m.value}</div>
                        <div className="text-xs text-gray-500 uppercase tracking-widest" aria-hidden="true">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}
                {project.customTwoCards.extraText && (
                  <div className="mt-8">
                    <p
                      className="text-left md:text-justify text-base md:text-lg font-light text-black leading-relaxed whitespace-pre-line"
                    >
                      {project.customTwoCards.extraText}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}


        {/* Outcomes Section */}
        {project.outcomesSection && (
          <section className="max-w-[1440px] mx-auto px-10 md:px-16 py-16 border-t border-[#76777b]/20">
            <div className="grid grid-cols-4 md:grid-cols-12 gap-6">
              <div className="col-span-4 md:col-span-9 md:col-start-4">
                <p
                  className="text-left md:text-justify text-base md:text-lg font-light text-black leading-relaxed max-w-[850px] whitespace-pre-line"
                >
                  {project.outcomesSection.text}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Reflection Section */}
        {project.reflectionSection && (
          <section className="max-w-[1440px] mx-auto px-10 md:px-16 py-16 border-t border-[#76777b]/20">
            <div className="grid grid-cols-4 md:grid-cols-12 gap-6">
              <div className="col-span-4 md:col-span-9 md:col-start-4">
                <p
                  className="text-left md:text-justify text-base md:text-lg font-light text-black leading-relaxed max-w-[850px] whitespace-pre-line"
                >
                  {project.reflectionSection.text}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Visuals Showcase */}
        {(project.gallery || project.showcaseImage1 || project.showcaseImage2 || project.showcaseImage3 || project.showcaseImage4) && (
          <section className="max-w-[1440px] mx-auto px-4 md:px-16 py-8 space-y-12">
            {project.gallery ? (
              <div className="grid grid-cols-12 gap-6">
                {project.gallery.map((img, idx) => {
                  let colClass = "col-span-12";
                  if (img.cols === 2) colClass = "col-span-12 md:col-span-6";
                  if (img.cols === 3) colClass = "col-span-12 md:col-span-4";

                  return (
                    <div key={idx} className={`border border-[#76777b]/30 overflow-hidden rounded-lg ${colClass}`}>
                      <img
                        alt={img.alt || `${project.title} Showcase ${idx + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover"
                        src={img.src}
                      />
                    </div>
                  );
                })}
              </div>
            ) : project.showcaseImage6 ? (
              <>
                {/* 2-3-1 Layout for 6 images (Legacy) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-[#76777b]/30 overflow-hidden rounded-lg h-full">
                    <img
                      alt={project.showcaseImage1Alt || `${project.title} Showcase 1`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                      src={project.showcaseImage1}
                    />
                  </div>
                  <div className="border border-[#76777b]/30 overflow-hidden rounded-lg h-full">
                    <img
                      alt={project.showcaseImage2Alt || `${project.title} Showcase 2`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                      src={project.showcaseImage2}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="border border-[#76777b]/30 overflow-hidden rounded-lg h-full">
                    <img
                      alt={project.showcaseImage3Alt || `${project.title} Showcase 3`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                      src={project.showcaseImage3}
                    />
                  </div>
                  <div className="border border-[#76777b]/30 overflow-hidden rounded-lg h-full">
                    <img
                      alt={project.showcaseImage4Alt || `${project.title} Showcase 4`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                      src={project.showcaseImage4}
                    />
                  </div>
                  <div className="border border-[#76777b]/30 overflow-hidden rounded-lg h-full">
                    <img
                      alt={project.showcaseImage5Alt || `${project.title} Showcase 5`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                      src={project.showcaseImage5}
                    />
                  </div>
                </div>

                <div className="w-full border border-[#76777b]/30 overflow-hidden rounded-lg">
                  <img
                    alt={project.showcaseImage6Alt || `${project.title} Showcase 6`}
                    loading="lazy"
                    className="w-full h-auto object-cover"
                    src={project.showcaseImage6}
                  />
                </div>
              </>
            ) : (
              <>
                {/* Default Layout for 1-5 images (Legacy) */}
                {project.showcaseImage1 && (
                  <div className="w-full border border-[#76777b]/30 overflow-hidden rounded-lg">
                    <img
                      alt={project.showcaseImage1Alt || `${project.title} Showcase 1`}
                      loading="lazy"
                      className="w-full h-auto object-cover"
                      src={project.showcaseImage1}
                    />
                  </div>
                )}
                {project.showcaseImage2 && project.showcaseImage3 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-[#76777b]/30 overflow-hidden rounded-lg h-full">
                      <img
                        alt={project.showcaseImage2Alt || `${project.title} Showcase 2`}
                        loading="lazy"
                        className="w-full h-full object-cover"
                        src={project.showcaseImage2}
                      />
                    </div>
                    <div className="border border-[#76777b]/30 overflow-hidden rounded-lg h-full">
                      <img
                        alt={project.showcaseImage3Alt || `${project.title} Showcase 3`}
                        loading="lazy"
                        className="w-full h-full object-cover"
                        src={project.showcaseImage3}
                      />
                    </div>
                  </div>
                )}
                {(project.showcaseImage4 || project.showcaseImage5) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.showcaseImage4 && (
                      <div className="border border-[#76777b]/30 overflow-hidden rounded-lg h-full">
                        <img
                          alt={project.showcaseImage4Alt || `${project.title} Showcase 4`}
                          loading="lazy"
                          className="w-full h-full object-cover"
                          src={project.showcaseImage4}
                        />
                      </div>
                    )}
                    {project.showcaseImage5 && (
                      <div className="border border-[#76777b]/30 overflow-hidden rounded-lg h-full">
                        <img
                          alt={project.showcaseImage5Alt || `${project.title} Showcase 5`}
                          loading="lazy"
                          className="w-full h-full object-cover"
                          src={project.showcaseImage5}
                        />
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </section>
        )}

        {/* Closing Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-16 py-24 text-center border-t border-[#76777b]/30">
          {project.quote && (
            <blockquote className="text-2xl md:text-4xl font-bold italic text-black max-w-[800px] mx-auto leading-normal mb-16">
              &ldquo;{project.quote}&rdquo;
            </blockquote>
          )}
          <div className="flex justify-center">
            <Link
              href="/work"
              className="px-8 py-3.5 bg-black text-white hover:bg-white hover:text-black border border-black transition-all duration-300 text-xs uppercase tracking-widest rounded-full font-semibold"
            >
              Back to Work
            </Link>
          </div>
        </section>
      </main>
    </article>
  );
}

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({
    slug,
  }));
}
