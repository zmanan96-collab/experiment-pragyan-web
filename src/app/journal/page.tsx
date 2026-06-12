import { Metadata } from 'next';
import Reveal from '../../components/Reveal';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Journal | Pragyan Agency',
  description: 'Thoughts, insights, and stories from the Pragyan team.',
  alternates: {
    canonical: 'https://www.mypragyan.com/journal',
  },
};

const journalEntries = [
  {
    title: "Branding for Manufacturing Companies — Why Industrial Businesses Can't Ignore Brand Anymore",
    excerpt: "Manufacturing companies in India are underbranded. Here's what good industrial branding looks like — identity, communication, LinkedIn, and why it matters for B2B growth.",
    author: 'Words by Pragyan',
    illustrator: '',
    date: 'June, 2026',
    image: '/journal/ARK Fabrication Works.webp',
    slug: 'branding-for-manufacturing-companies',
  },
  {
    title: 'Brand Identity Design in Ahmedabad — What Most Businesses Are Getting Wrong',
    excerpt: 'A guide to brand identity design in Ahmedabad — what a complete identity system includes, what separates a logo from a brand, and what to look for in a local agency.',
    author: 'Words by Pragyan',
    illustrator: '',
    date: 'May, 2026',
    image: '/journal/blog-2.webp',
    slug: 'brand-identity-design-ahmedabad',
  },
  {
    title: 'Personal Branding Agencies in India — What They Actually Do and What Most Get Wrong',
    excerpt: 'Personal branding agencies in India — what they actually do, what separates strategic work from content production, and what founders should look for before investing.',
    author: 'Words by Pragyan',
    illustrator: '',
    date: 'April, 2026',
    image: '/journal/blog-3.webp',
    slug: 'personal-branding-agencies-india',
  },
  {
    title: 'OOH Advertising in Ahmedabad — What Most Campaigns Get Wrong',
    excerpt: 'A practical guide to OOH advertising in Ahmedabad — what formats work, what most outdoor campaigns get wrong, and how to brief a design agency for maximum impact.',
    author: 'Words by Pragyan',
    illustrator: '',
    date: 'March, 2026',
    image: '/journal/blog-4.webp',
    slug: 'ooh-advertising-ahmedabad',
  },
  {
    title: 'How to Build a Brand as a Founder — Stop Starting With the Logo',
    excerpt: "Most founders think about brand too late. Here's how to build a brand as a founder — what matters, what doesn't, and what to do first.",
    author: 'Words by Pragyan',
    illustrator: '',
    date: 'Feb, 2026',
    image: '/journal/blog-5.webp',
    slug: 'build-brand-as-founder',
  },
  {
    title: "LinkedIn Personal Branding in India — What's Actually Working Right Now",
    excerpt: 'How to build a personal brand on LinkedIn in India — profile, content, positioning, and strategy. Practical guidance for founders who want real outcomes, not just followers.',
    author: 'Words by Pragyan',
    illustrator: '',
    date: 'Feb, 2026',
    image: '/journal/Panda Security.webp',
    slug: 'linkedin-personal-branding-india',
  },
  {
    title: 'Visual Identity Design in India — What Most Businesses Are Actually Missing',
    excerpt: 'A guide to visual identity design in India — what a complete identity system includes, the difference between a logo and a brand, and what to look for before hiring an agency.',
    author: 'Words by Pragyan',
    illustrator: '',
    date: 'Jan, 2026',
    image: '/journal/blog-7.webp',
    slug: 'visual-identity-design-india',
  },
  {
    title: 'Personal Brand Consultant in India — What the Work Actually Involves',
    excerpt: "Looking for a personal brand consultant in India? Here's what the work actually involves, who needs it, and what to look for before investing.",
    author: 'Words by Pragyan',
    illustrator: '',
    date: 'Jan, 2026',
    image: '/journal/blog-8.webp',
    slug: 'personal-brand-consultant-india',
  },
  {
    title: 'Brand Guidelines Design — The Thing Most Businesses Skip and Then Regret',
    excerpt: "Brand guidelines tell your team and vendors how to use your brand correctly. Here's what to include in brand guidelines design, and why every growing business needs them.",
    author: 'Words by Pragyan',
    illustrator: '',
    date: 'Jan, 2026',
    image: '/journal/Google Guidelines - The Rivalry.webp',
    slug: 'brand-guidelines-design',
  },
];

export default function Journal() {
  return (
    <article data-header-theme="dark" aria-label="Journal" className="bg-[#0b0c10] min-h-screen pt-[140px] pb-28">
      <div className="wrap px-4 sm:px-8 md:px-[4vw] lg:px-[6vw] xl:px-[8vw] w-full">
        {/* Page Title */}
        <Reveal className="mb-16 text-center">
          <span className="text-nav-label tracking-[0.22em] uppercase text-[#8a8a8a] block mb-3">Insights & Stories</span>
          <h1 className="text-[40px] md:text-[56px] font-bold text-white tracking-tight leading-none uppercase block" aria-hidden="true">
            Journal
          </h1>
        </Reveal>

        {/* Journal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {journalEntries.map((entry, idx) => {
            const CardContent = (
              <div className="group bg-[#f0f0f0] rounded-md p-6 lg:p-8 flex flex-col h-full transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(255,255,255,0.05)]">
                <div className="mb-6 relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-[#e0e0e0]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={entry.image}
                    alt={entry.title}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <h2 className="text-[20px] md:text-[22px] font-bold text-black leading-tight mb-4 tracking-tight">
                  {entry.title}
                </h2>

                <p className="text-[14px] md:text-[15px] text-black/80 leading-snug mb-8 flex-grow">
                  {entry.excerpt}
                </p>

                <div className="flex justify-between items-end mt-auto text-[11px] md:text-[12px] font-medium text-black">
                  <div className="flex flex-col gap-0.5 max-w-[70%]">
                    <span>
                      {entry.author.startsWith('Words') || entry.author.startsWith('Illustration')
                        ? <>
                          <span className="font-normal">{entry.author.split('by')[0]}by </span>
                          <span className="font-bold">{entry.author.split('by')[1]}</span>
                        </>
                        : <span className="font-bold">{entry.author}</span>
                      }
                    </span>
                    {entry.illustrator && (
                      <span>
                        <span className="font-normal">{entry.illustrator.split('by')[0]}by </span>
                        <span className="font-bold">{entry.illustrator.split('by')[1]}</span>
                      </span>
                    )}
                  </div>
                  <span className="text-right pb-0.5 font-normal">{entry.date}</span>
                </div>
              </div>
            );

            return (
              <Reveal key={idx} delay={idx * 0.1} className="h-full block">
                {entry.slug ? (
                  <Link href={`/journal/${entry.slug}`} className="h-full block cursor-pointer">
                    {CardContent}
                  </Link>
                ) : (
                  <div className="h-full block">
                    {CardContent}
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </article>
  );
}
