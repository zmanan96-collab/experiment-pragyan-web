import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';

type PageProps = {
  params: Promise<{ slug: string }>;
};

const posts: Record<string, any> = {
  'branding-for-manufacturing-companies': {
    title: 'Branding for Manufacturing Companies in India — What Good Industrial Branding Looks Like | Pragyan',
    description: "Manufacturing companies in India are underbranded. Here's what good industrial branding looks like — identity, communication, LinkedIn, and why it matters for B2B growth.",
    h1: "Branding for Manufacturing Companies — Why Industrial Businesses Can't Ignore Brand Anymore",
    date: 'June, 2026',
    author: 'Pragyan',
    heroImage: '/journal/ARK Fabrication Works.webp',
  },
  'brand-identity-design-ahmedabad': {
    title: 'Brand Identity Design in Ahmedabad — What It Is, What It Costs, and How to Get It Right | Pragyan',
    description: 'A guide to brand identity design in Ahmedabad — what a complete identity system includes, what separates a logo from a brand, and what to look for in a local agency.',
    h1: 'Brand Identity Design in Ahmedabad — What Most Businesses Are Getting Wrong',
    date: 'May, 2026',
    author: 'Pragyan',
    heroImage: '/journal/blog-2.webp',
  },
  'personal-branding-agencies-india': {
    title: 'Personal Branding Agencies in India — What They Do and Whether You Need One | Pragyan',
    description: 'Personal branding agencies in India — what they actually do, what separates strategic work from content production, and what founders should look for before investing.',
    h1: 'Personal Branding Agencies in India — What They Actually Do and What Most Get Wrong',
    date: 'April, 2026',
    author: 'Pragyan',
    heroImage: '/journal/blog-3.webp',
  },
  'ooh-advertising-ahmedabad': {
    title: 'OOH Advertising in Ahmedabad — What Works, What Doesn\'t, and How to Brief an Agency | Pragyan',
    description: 'A practical guide to OOH advertising in Ahmedabad — what formats work, what most outdoor campaigns get wrong, and how to brief a design agency for maximum impact.',
    h1: 'OOH Advertising in Ahmedabad — What Most Campaigns Get Wrong',
    date: 'March, 2026',
    author: 'Pragyan',
    heroImage: '/journal/blog-4.webp',
  },
  'build-brand-as-founder': {
    title: 'How to Build a Brand as a Founder — What Actually Matters and Where to Start | Pragyan',
    description: "Most founders think about brand too late. Here's how to build a brand as a founder — what matters, what doesn't, and what to do first.",
    h1: 'How to Build a Brand as a Founder — Stop Starting With the Logo',
    date: 'Feb, 2026',
    author: 'Pragyan',
    heroImage: '/journal/blog-5.webp',
  },
  'linkedin-personal-branding-india': {
    title: "LinkedIn Personal Branding in India — A Founder's Practical Guide | Pragyan",
    description: "How to build a personal brand on LinkedIn in India — profile, content, positioning, and strategy. Practical guidance for founders who want real outcomes, not just followers.",
    h1: "LinkedIn Personal Branding in India — What's Actually Working Right Now",
    date: 'Feb, 2026',
    author: 'Pragyan',
    heroImage: '/journal/Panda Security.webp',
  },
  'visual-identity-design-india': {
    title: 'Visual Identity Design in India — What It Actually Includes and How to Evaluate an Agency | Pragyan',
    description: 'A guide to visual identity design in India — what a complete identity system includes, the difference between a logo and a brand, and what to look for before hiring an agency.',
    h1: 'Visual Identity Design in India — What Most Businesses Are Actually Missing',
    date: 'Jan, 2026',
    author: 'Pragyan',
    heroImage: '/journal/blog-7.webp',
  },
  'personal-brand-consultant-india': {
    title: 'Personal Brand Consultant in India — What They Do and How to Find the Right One | Pragyan',
    description: "Looking for a personal brand consultant in India? Here's what the work actually involves, who needs it, and what to look for before investing.",
    h1: 'Personal Brand Consultant in India — What the Work Actually Involves',
    date: 'Jan, 2026',
    author: 'Pragyan',
    heroImage: '/journal/blog-8.webp',
  },
  'brand-guidelines-design': {
    title: "Brand Guidelines Design — What They Are, What's Inside, and Why You Need Them | Pragyan",
    description: "Brand guidelines tell your team and vendors how to use your brand correctly. Here's what to include in brand guidelines design, and why every growing business needs them.",
    h1: 'Brand Guidelines Design — The Thing Most Businesses Skip and Then Regret',
    date: 'Jan, 2026',
    author: 'Pragyan',
    heroImage: '/journal/Google Guidelines - The Rivalry.webp',
  }
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return { title: 'Journal | Pragyan Agency' };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://www.mypragyan.com/journal/${slug}`,
    },
  };
}

export default async function JournalPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    notFound();
  }

  return (
    <article data-header-theme="light" className="bg-white min-h-screen text-[#1a1c1c] pt-[140px] pb-28 antialiased selection:bg-[#4b3fd4] selection:text-white">

      {/* Article Header */}
      <header className="max-w-[1000px] mx-auto px-6 md:px-8 lg:px-10 mb-6">
        <span className="text-[11px] md:text-xs font-bold tracking-[0.15em] uppercase text-gray-500 block mb-6">
          JOURNAL
        </span>

        <h1 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold text-black leading-[1.1] tracking-tight mb-6">
          {post.h1}
        </h1>

        <div className="text-[14px] md:text-[15px] text-gray-800 mb-1">
          Words by <strong className="font-bold text-black">{post.author}</strong>
          {post.illustrator && <span> &amp; Illustration by <strong className="font-bold text-black">{post.illustrator}</strong></span>}
        </div>
        <div className="text-[14px] md:text-[15px] text-gray-800 mb-8">
          {post.date}
        </div>
      </header>

      {/* Hero Image */}
      {post.heroImage && (
        <div className="max-w-[1000px] mx-auto px-6 md:px-8 lg:px-10 mb-10">
          <div className="w-full h-[300px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.heroImage}
              alt={post.h1}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Article Content */}
      <div className="max-w-[1000px] mx-auto px-6 md:px-8 lg:px-10 text-[16px] md:text-[18px] leading-[1.6] font-normal text-black space-y-6 pb-20">
        {slug === 'branding-for-manufacturing-companies' && (
          <>
            <p>
              Here&apos;s what happens before any deal closes in B2B today.
            </p>

            <p>
              A procurement manager gets your name from someone. Sounds promising. Before they call you back, they Google you. They check your website. Maybe scroll through your LinkedIn. It takes two minutes.
              And in those two minutes, they&apos;ve already started forming an opinion about how serious your business is.
            </p>

            <p>
              If your website looks like it hasn't been updated in years, that becomes part of the impression. If your brochure looks like every other manufacturer in your category, you're already blending in. Not because your product isn't good enough. But because your brand didn't show up when it needed to.
            </p>

            <p className="text-xl md:text-2xl font-medium leading-snug tracking-tight my-10">
              The brand is doing the first meeting now.<br /> Whether you built one or not.
            </p>

            <p>
              This is why branding matters for manufacturing companies today more than it did five years ago — and why industrial businesses can no longer afford to treat communication as an afterthought.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              Why Manufacturing Companies Don&apos;t Invest in Branding
            </h2>

            <p>
              Most founders we speak to in manufacturing say the same thing:<br />
              &ldquo;Our reputation is built on relationships. The product speaks for itself.&rdquo;
            </p>

            <p>
              They&apos;re not wrong.<br />
              Relationships still matter. Product quality still matters. Operational excellence still matters.
            </p>

            <p>
              But the context has changed.<br />
              Your existing clients already know you. They&apos;ve visited your facility, met your team, and experienced the quality of your work firsthand.
            </p>

            <p>
              New buyers haven&apos;t.<br />
              Before reaching out, they&apos;re researching suppliers online. They&apos;re reviewing websites, brochures, LinkedIn profiles, and every publicly available touchpoint they can find.
            </p>

            <p>
              If what they discover feels outdated, inconsistent, or generic, they&apos;re making assumptions before the first conversation even begins.
            </p>

            <p>
              The relationship still closes the deal.<br />
              But increasingly, the brand is what gets you into the room to build one.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              What&apos;s Actually Different About Branding for Manufacturing Companies
            </h2>

            <p>
              Branding for manufacturing businesses comes with its own set of challenges.<br />
              Industrial products are often technical by nature. Explaining why a precision-engineered component performs better than another isn&apos;t always straightforward. The communication has to remain accessible without oversimplifying what makes the product valuable.
            </p>

            <p>
              You&apos;re also communicating with multiple stakeholders.<br />
              Procurement teams care about reliability and pricing.<br />
              Plant heads focus on technical performance.<br />
              Distributors evaluate market potential.<br />
              Investors may look at entirely different indicators.<br />
              A strong industrial brand creates consistency across these conversations without losing clarity.
            </p>

            <p>
              There&apos;s another challenge too.<br />
              Many competitors in manufacturing categories present themselves in remarkably similar ways. Similar websites. Similar claims about quality and service. Similar brochures that haven&apos;t evolved in years.
            </p>

            <p>
              That similarity creates opportunity.<br />
              A manufacturing company with clear positioning, thoughtful communication, and consistent branding immediately stands apart.
            </p>

            <p>
              Not because it&apos;s louder.<br />
              Because it&apos;s easier to trust.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              What This Looks Like in Practice
            </h2>

            <div className="space-y-12">
              <div>
                <p className="mb-4">
                  <strong className="font-bold text-black">ATC Chains India</strong><br />
                  ATC Chains India had built credibility over decades through product quality and long-term relationships. The expertise was real. The challenge was making that credibility visible to buyers discovering the business online.
                </p>
                <p className="mb-4">
                  We developed a complete brand strategy and communication system, including visual identity assets and LinkedIn content focused on industry expertise. Over time, the company established a more consistent and professional presence across customer touchpoints.
                </p>
                <Link href="/work/atc-chains-india" className="text-[#4b3fd4] font-bold uppercase tracking-widest text-xs hover:underline decoration-2 underline-offset-4">
                  Read the case study →
                </Link>
              </div>

              <div>
                <p className="mb-4">
                  <strong className="font-bold text-black">Shreeji Enterprise</strong><br />
                  Shreeji Enterprise had a strong product offering, but its brand materials weren&apos;t supporting sales conversations effectively.
                </p>
                <p className="mb-4">
                  We developed a visual identity system and supporting collateral that reflected the professionalism already present within the business. The result was a stronger and more confident presentation across proposals, brochures, and client interactions.
                </p>
                <Link href="/work/shreeji-enterprise" className="text-[#4b3fd4] font-bold uppercase tracking-widest text-xs hover:underline decoration-2 underline-offset-4">
                  Read the case study →
                </Link>
              </div>

              <div>
                <p className="mb-4">
                  <strong className="font-bold text-black">Yash Engineers</strong><br />
                  Yash Engineers manufactures specialised machinery for the metal processing industry. The capability was there. The communication wasn&apos;t reflecting it.
                </p>
                <p className="mb-4">
                  We redesigned brochures and supporting materials to improve clarity, structure, and professionalism, helping the company communicate more effectively with technical decision-makers.
                </p>
                <Link href="/work/yash-engineers-india" className="text-[#4b3fd4] font-bold uppercase tracking-widest text-xs hover:underline decoration-2 underline-offset-4">
                  Read the case study →
                </Link>
              </div>

              <div>
                <p className="mb-4">
                  <strong className="font-bold text-black">Bhavya Srishti Udyog</strong><br />
                  Bhavya Srishti Udyog operates within an emerging category where awareness and credibility needed to be built simultaneously.
                </p>
                <p className="mb-4">
                  We developed the brand identity and communication framework while supporting founder visibility through LinkedIn and strategic content. The objective wasn&apos;t simply visibility. It was helping people understand why the category itself mattered.
                </p>
                <Link href="/work/bhavya-srishti-udyog" className="text-[#4b3fd4] font-bold uppercase tracking-widest text-xs hover:underline decoration-2 underline-offset-4">
                  Read the case study →
                </Link>
              </div>
            </div>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              What Good Industrial Branding Actually Looks Like
            </h2>

            <p>
              Good manufacturing branding isn&apos;t flashy.<br />
              It doesn&apos;t rely on trends or exaggerated claims.<br />
              Instead, it creates consistency.
            </p>

            <p>
              The company someone discovers through a LinkedIn post should feel like the same company they encounter at a trade exhibition.<br />
              The brochure should reflect the same standards visible in the production process.<br />
              The website should communicate the same level of professionalism clients experience during meetings.
            </p>

            <p>
              Strong industrial branding uses language technical audiences respect.<br />
              It communicates expertise without unnecessary complexity.<br />
              And it reinforces one important message:<br />
              This is a business that takes its work seriously.
            </p>

            <p>
              The manufacturers we&apos;ve worked with didn&apos;t fundamentally change what they do.<br />
              They changed how clearly other people understood it.<br />
              And that changed how they were perceived.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              How a Manufacturing Branding Agency Works
            </h2>

            <p>
              The process begins with understanding where the business stands today.<br />
              We review existing communication, evaluate competitive positioning, and identify the gap between how the company is currently perceived and how it wants to be perceived.
            </p>

            <p>
              Positioning comes first.<br />
              Who are you for?<br />
              What do you stand for?<br />
              Why should someone choose you over another supplier?<br />
              Only after those questions are answered does design begin.
            </p>

            <p>
              From there, the work expands into the touchpoints that influence buyer perception:<br />
              &bull; Brand identity systems<br />
              &bull; Brochures and sales collateral<br />
              &bull; Website communication<br />
              &bull; LinkedIn strategy<br />
              &bull; Exhibition and presentation materials
            </p>

            <p>
              For manufacturing businesses specifically, understanding the product is essential.<br />
              The technical language.<br />
              The sales process.<br />
              The objections buyers raise.<br />
              Because effective communication starts with understanding what you&apos;re actually communicating.
            </p>

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              The Bottom Line
            </h2>

            <p>
              Manufacturing companies have never competed on branding alone.<br />
              They compete on quality, reliability, expertise, and relationships.<br />
              That hasn&apos;t changed.
            </p>

            <p>
              What has changed is how people decide who deserves their attention in the first place.<br />
              Before the factory visit comes the Google search.<br />
              Before the sales meeting comes the LinkedIn profile.<br />
              Before someone picks up your brochure at an exhibition, they&apos;ve often already formed an impression.
            </p>

            <p>
              The businesses recognising this shift aren&apos;t becoming marketing companies.<br />
              They&apos;re simply ensuring that the reputation they&apos;ve built over years of work is visible to the people they&apos;re trying to reach.<br />
              Because if your brand is already doing the first meeting, it should represent you well.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">Do you work with smaller manufacturers?</h3>
                <p>Yes. Many manufacturing businesses are SMEs. If you produce quality work and want your brand to reflect that, company size matters far less than clarity of intent.</p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">Can you help with trade show materials?</h3>
                <p>Yes. We create exhibition backdrops, standees, brochures, AV presentations, and supporting collateral designed to maintain consistency across every touchpoint.</p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">How long does a branding project take?</h3>
                <p>A complete brand identity project typically takes between six and ten weeks, depending on the scope. Additional communication and marketing requirements are planned separately.</p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">Do you understand technical products?</h3>
                <p>We make it a priority to understand what we&apos;re communicating before creating anything. Every project begins with discovery — learning the product, the process, and the language buyers actually use.</p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">Are you a manufacturing branding agency based in India?</h3>
                <p>Yes. Pragyan is based in Ahmedabad, Gujarat, and works with manufacturing businesses across India, from regional SMEs to companies serving national markets.</p>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-gray-200">
              <Link
                href="/inquiry"
                className="inline-block px-10 py-[15px] bg-black text-white text-nav-label uppercase tracking-[0.2em] rounded-full hover:bg-[#4b3fd4] transition-colors duration-300"
              >
                Start a project →
              </Link>

              <p className="mt-8 text-sm text-gray-500 italic">
                Pragyan is a brand strategy and communications agency based in Ahmedabad, India.
              </p>
            </div>
          </>
        )}

        {slug === 'brand-identity-design-ahmedabad' && (
          <>
            <p>
              Ahmedabad has a serious business culture.<br />
              Manufacturing corridors, D2C brands, schools, startups — the ecosystem here is genuinely active.<br />
              But when it comes to brand identity design in Ahmedabad, many businesses are still approaching it as a one-time creative task rather than a long-term business asset.
            </p>

            <p>
              They have a logo. Usually designed quickly, chosen from a few options, and launched without much thought about how it will function across the years ahead.<br />
              Then, over time, the same questions start appearing.<br />
              Why does the website look different from the brochure?<br />
              Why do different vendors interpret the brand differently?<br />
              Why does the business feel inconsistent depending on where people encounter it?
            </p>

            <p className="text-xl md:text-2xl font-medium leading-snug tracking-tight my-10">
              Most of the time, that&apos;s not a logo problem.<br />
              It&apos;s a visual identity problem.<br />
              And it&apos;s fixable.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              Most Businesses Are Underbranded
            </h2>

            <p>
              Not because the quality isn&apos;t there.<br />
              Because brand identity has traditionally been treated as something you invest in after you&apos;ve grown, rather than something that supports growth in the first place.<br />
              That thinking can become expensive.
            </p>

            <p>
              Buyers, partners, and investors increasingly form opinions through digital signals before they ever step into a meeting.<br />
              A serious business that looks generic risks being perceived as one.<br />
              The gap between how good your business is and how professional it appears has real commercial consequences — especially when you&apos;re competing beyond referrals and existing relationships.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              A Logo Is Not a Brand Identity
            </h2>

            <p>
              This is worth saying clearly because many businesses come to us after experiencing this exact challenge.<br />
              A logo is one asset.<br />
              A brand identity is a system.
            </p>

            <p>
              The system includes:<br />
              &bull; A logo designed to work across multiple applications and formats.<br />
              &bull; A colour palette with clearly defined digital and print specifications.<br />
              &bull; Typography systems that establish hierarchy and consistency.<br />
              &bull; Visual elements that shape how imagery and graphics are used.<br />
              &bull; Brand guidelines that help every designer, printer, developer, and team member make consistent decisions.
            </p>

            <p>
              Without these systems, every new touchpoint becomes a fresh interpretation of the brand.<br />
              Over time, those inconsistencies accumulate.<br />
              And inconsistency quietly erodes trust.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              How We Approach Brand Identity Design
            </h2>

            <p>
              We don&apos;t begin with design software.<br />
              We begin with understanding.<br />
              What does the business do?<br />
              Who is it trying to reach?<br />
              What alternatives are customers considering?<br />
              How should people feel when they encounter the brand?
            </p>

            <p>
              Every visual decision should have a reason behind it.<br />
              Not personal preference.<br />
              Not whatever happens to be trending.<br />
              A strategic reason.
            </p>

            <p>
              Once the strategic direction is clear, we explore visual territories — different ways the identity could express the same underlying idea.<br />
              From there, we build the system:<br />
              &bull; Logo variations<br />
              &bull; Colour architecture<br />
              &bull; Typography systems<br />
              &bull; Supporting visual elements<br />
              &bull; Brand guidelines
            </p>

            <p>
              Because the value of identity isn&apos;t just in creating something beautiful.<br />
              It&apos;s in creating something usable and consistent for years to come.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              Brand Identity Work We&apos;ve Done Across Ahmedabad and Gujarat
            </h2>

            <div className="space-y-12">
              <div>
                <p className="mb-4">
                  <strong className="font-bold text-black">ATC Chains India</strong><br />
                  A conveyor component manufacturer with decades of engineering expertise that needed a brand presence capable of reflecting its credibility.
                </p>
                <Link href="/work/atc-chains-india" className="text-[#4b3fd4] font-bold uppercase tracking-widest text-xs hover:underline decoration-2 underline-offset-4">
                  View case study →
                </Link>
              </div>

              <div>
                <p className="mb-4">
                  <strong className="font-bold text-black">Shreeji Enterprise</strong><br />
                  An engineered roofing company whose identity system now supports sales conversations with greater confidence and consistency.
                </p>
                <Link href="/work/shreeji-enterprise" className="text-[#4b3fd4] font-bold uppercase tracking-widest text-xs hover:underline decoration-2 underline-offset-4">
                  View case study →
                </Link>
              </div>

              <div>
                <p className="mb-4">
                  <strong className="font-bold text-black">Global Guardians School</strong><br />
                  A school that needed its philosophy and values translated into a visual identity parents could recognise and trust.
                </p>
                <Link href="/work/global-guardians-school" className="text-[#4b3fd4] font-bold uppercase tracking-widest text-xs hover:underline decoration-2 underline-offset-4">
                  View case study →
                </Link>
              </div>

              <div>
                <p className="mb-4">
                  <strong className="font-bold text-black">Bhavya Srishti Udyog</strong><br />
                  A sustainable bamboo manufacturer building credibility within an emerging category through strategic identity and communication.
                </p>
                <Link href="/work/bhavya-srishti-udyog" className="text-[#4b3fd4] font-bold uppercase tracking-widest text-xs hover:underline decoration-2 underline-offset-4">
                  View case study →
                </Link>
              </div>

              <div>
                <p className="mb-4">
                  <strong className="font-bold text-black">Bhaktinandan</strong><br />
                  A traditional cold-pressed oil brand whose packaging and identity system helped modernise perception without losing authenticity.
                </p>
                <Link href="/work/bhaktinandan" className="text-[#4b3fd4] font-bold uppercase tracking-widest text-xs hover:underline decoration-2 underline-offset-4">
                  View case study →
                </Link>
              </div>
            </div>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              Why Working With a Local Agency Matters
            </h2>

            <p>
              Understanding context matters.<br />
              Business culture in Gujarat often values substance over spectacle, long-term relationships over short-term wins, and clarity over unnecessary complexity.<br />
              Those values influence how brands are built and how trust is earned.
            </p>

            <p>
              Being based in Ahmedabad also allows for in-person workshops, strategy sessions, and collaborative reviews when needed.<br />
              At the same time, geography doesn&apos;t limit the work.<br />
              We&apos;ve partnered with organisations across India, adapting our process to businesses operating in very different markets and categories.<br />
              Local understanding and broader perspective can coexist.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              The Bottom Line
            </h2>

            <p>
              A strong visual identity doesn&apos;t exist to make a business look fashionable.<br />
              It exists to make the business recognisable, credible, and consistent.
            </p>

            <p>
              Because people don&apos;t encounter brands in a single place anymore.<br />
              They encounter them on websites.<br />
              On packaging.<br />
              Through presentations.<br />
              At exhibitions.<br />
              Across social media.<br />
              And every one of those moments contributes to how the business is perceived.
            </p>

            <p>
              The businesses that invest in identity early aren&apos;t doing it for aesthetics alone.<br />
              They&apos;re building systems that support trust at every stage of growth.<br />
              Because if people are forming impressions before the first conversation, your brand should help you make the right one.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">How much does brand identity design cost in Ahmedabad?</h3>
                <p>Every project is scoped based on what the business actually needs. Some require a complete identity system with collateral and guidelines. Others need a focused rebrand. Once we understand the scope, we provide a clear proposal and investment estimate.</p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">Do you work outside Ahmedabad?</h3>
                <p>Yes. While we&apos;re based in Ahmedabad, we work with clients across India through a combination of remote collaboration and in-person sessions when required.</p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">What industries do you work in?</h3>
                <p>Our experience spans manufacturing, education, D2C and FMCG brands, consumer businesses, and emerging categories. The process remains strategic while adapting to each audience and industry.</p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">Can you redesign an existing identity?</h3>
                <p>Yes. We begin by understanding what currently exists, identifying what&apos;s working, and recommending what should evolve and what should change.</p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">How long does a brand identity project take?</h3>
                <p>Most identity projects take between six and ten weeks from discovery through final guideline delivery, depending on complexity and feedback cycles.</p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">What makes Pragyan different from other brand identity designers in Ahmedabad?</h3>
                <p>We begin with strategy rather than aesthetics.<br />Understanding positioning, audience perception, and business objectives before designing allows the identity to become more than a visual exercise.<br />It becomes a tool that supports recognition, consistency, and long-term growth.</p>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-gray-200">
              <Link
                href="/inquiry"
                className="inline-block px-10 py-[15px] bg-black text-white text-nav-label uppercase tracking-[0.2em] rounded-full hover:bg-[#4b3fd4] transition-colors duration-300"
              >
                Start your project →
              </Link>

              <div className="mt-8 text-sm text-gray-500 italic space-y-1">
                <p>Pragyan — A-607, Money Plant High Street, SG Highway, Ahmedabad — 382470</p>
                <p>+91 99980 81399 | connect@mypragyan.com</p>
              </div>
            </div>
          </>
        )}

        {slug === 'personal-branding-agencies-india' && (
          <>
            <p>
              The personal branding industry in India has exploded. Every second LinkedIn coach is now calling themselves a personal branding agency. Content mills are promising 10x follower growth in 30 days. Social media managers rebrand overnight.
            </p>

            <p>
              So if you&apos;re a founder looking for a personal branding agency in India, the noise is real.
            </p>

            <p>
              This piece is about cutting through it. What a serious personal branding agency actually does, what separates strategic work from content production, and what to look for before you invest.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              What Personal Branding Actually Is
            </h2>

            <p>
              Not posting on LinkedIn. That&apos;s the last step.
            </p>

            <p>
              Personal branding is the deliberate process of shaping how others perceive you — your expertise, your values, your perspective on your industry. For founders specifically, it goes further. Your personal brand is directly tied to your company&apos;s brand. When people trust you, they trust what you&apos;ve built. When you&apos;re visible, your business is visible.
            </p>

            <p>
              The shift is already happening across India. Founders who show up consistently on LinkedIn are closing deals that never go to tender. Building partnerships over DMs. Attracting talent that approaches them. Walking into investor meetings with people who already believed in them before the first call.
            </p>

            <p className="text-xl md:text-2xl font-medium leading-snug tracking-tight my-10">
              None of that happens by accident.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              What a Personal Branding Agency in India Should Actually Do
            </h2>

            <p>
              Most agencies skip the hard part and go straight to posting. That&apos;s why most personal branding content looks and sounds the same — busy, but building nothing.
            </p>

            <p>
              The real work, before a single post goes live, looks like this:
            </p>

            <p>
              <strong className="font-bold text-black">Listening.</strong> Understanding who you are, what you&apos;ve built, what you believe, and what you want to be known for. Not a quick onboarding form. The foundation everything else is built on.
            </p>

            <p>
              <strong className="font-bold text-black">Positioning.</strong> Defining the space you occupy. Who your audience is. What perspective you have that nobody else is saying quite the way you say it. This is the part most agencies skip.
            </p>

            <p>
              <strong className="font-bold text-black">Building.</strong> Optimising your LinkedIn profile so it works as a landing page — not a resume. Reflects your positioning, communicates credibility, converts visitors into conversations.
            </p>

            <p>
              <strong className="font-bold text-black">Creating.</strong> A content strategy built around your themes, your voice, your audience&apos;s genuine interests. Then helping you produce that content consistently.
            </p>

            <p>
              <strong className="font-bold text-black">Tracking.</strong> What&apos;s landing, what&apos;s not, adjusting based on real data — not assumptions.
            </p>

            <p>
              If an agency jumps to content production without doing the first three, you&apos;ll get posts. You won&apos;t get a brand.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              Who Actually Needs a Personal Branding Agency
            </h2>

            <p>
              Founders launching or scaling a business who want their personal credibility to pull weight for the company. Especially in B2B, where trust in the founder often precedes trust in the business.
            </p>

            <p>
              Senior executives who want an industry profile beyond their current role — for board positions, advisory work, or whatever comes next.
            </p>

            <p>
              Professionals pivoting industries who need to reframe their experience for a new audience.
            </p>

            <p>
              Consultants and coaches whose entire business depends on trust. And trust depends on visibility.
            </p>

            <p>
              Anyone who&apos;s tried LinkedIn alone and hit a wall. Posted for three months, got nothing meaningful from it, and knows the problem is strategy — not effort.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              A Real Example — Ganesh Verma
            </h2>

            <p>
              Ganesh Verma works in sustainable bamboo manufacturing. A category most people hadn&apos;t encountered. The challenge was building credibility and visibility in a space where most buyers were starting from zero knowledge.
            </p>

            <p>
              As his personal branding agency, we defined his positioning, rebuilt his LinkedIn profile, and built a thought leadership content strategy around sustainability, entrepreneurship, and industrial innovation.
            </p>

            <p>
              Three months in: 850 total followers. 299 new followers acquired. 4.7% engagement rate — well above LinkedIn&apos;s average. Primary audience: owners, directors, senior professionals, CXOs.
            </p>

            <p>
              The numbers came from strategy. Not volume, not tricks.
            </p>

            <p className="mt-4">
              <Link href="/work/ganesh-verma" className="text-[#4b3fd4] font-bold uppercase tracking-widest text-xs hover:underline decoration-2 underline-offset-4">
                Read the full case study →
              </Link>
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              Why Strategy-First Personal Branding Works
            </h2>

            <p>
              When you skip positioning and go straight to content, you produce content that sounds like everyone else in your industry. Generic. Predictable. Forgettable.
            </p>

            <p>
              When you get the positioning right first — when you know exactly what space you occupy and who you&apos;re talking to — the content that follows is consistent, specific, and compound. Each post reinforces the same brand. Over time, that builds authority in a way that generic content never can.
            </p>

            <p>
              We don&apos;t write a single word until the strategy is clear. That&apos;s not a slow approach. It&apos;s the one that actually works.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">How long before results show?</h3>
                <p>Meaningful results typically emerge over 3 to 6 months. Profile improvements and early engagement signals happen faster. Anyone promising dramatic results in 30 days is selling you a metric that doesn&apos;t matter.</p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">Do you write the content or do I?</h3>
                <p>Both work. Some founders prefer to write with our strategy and feedback. Most prefer we ghostwrite based on briefing sessions. Either way, it sounds like you — not an agency.</p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">Is it only LinkedIn?</h3>
                <p>For most Indian founders, yes. The return on investment is highest there. We extend to other platforms based on where your audience actually is.</p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">How is a personal branding agency different from a social media manager?</h3>
                <p>A social media manager handles execution. A personal branding agency handles strategy — positioning, voice, audience, and content direction — then either handles or guides execution. Strategy without execution is useless. Execution without strategy is noise.</p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">What does it cost?</h3>
                <p>Depends on scope — positioning only, content strategy, or full ghostwriting and management. <Link href="/inquiry" className="text-[#4b3fd4] font-medium hover:underline">Reach out</Link> and we&apos;ll share what makes sense for your goals and budget.</p>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-gray-200">
              <Link
                href="/inquiry"
                className="inline-block px-10 py-[15px] bg-black text-white text-nav-label uppercase tracking-[0.2em] rounded-full hover:bg-[#4b3fd4] transition-colors duration-300"
              >
                Start a project →
              </Link>

              <div className="mt-8 text-sm text-gray-500 italic space-y-1">
                <p>Pragyan is a brand strategy and personal branding agency based in Ahmedabad, India.</p>
                <p>We work with founders and professionals across India.</p>
              </div>
            </div>
          </>
        )}

        {slug === 'build-brand-as-founder' && (
          <>
            <p>
              Most founders build their brand backwards.
            </p>

            <p>
              They get a logo first. Then a colour palette. Then a website. Then wonder why none of it feels right, or why they keep having to explain what their business does even after all that investment.
            </p>

            <p>
              The problem isn&apos;t the design. The design came before the strategy. That&apos;s the only problem.
            </p>

            <p className="text-xl md:text-2xl font-medium leading-snug tracking-tight my-10">
              If you&apos;re figuring out how to build a brand as a founder — whether you&apos;re starting fresh or fixing something that&apos;s not working — here&apos;s the order that actually makes sense.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              You Are the Brand, Whether You Like It or Not
            </h2>

            <p>
              Before anything else: as a founder, the trust people place in you is the trust they place in what you&apos;ve built.
            </p>

            <p>
              Not entirely. Not forever. But in the early and growth stages, it&apos;s true for almost every business.
            </p>

            <p>
              Look at how Falguni Nayar&apos;s clarity shaped Nykaa&apos;s positioning before it was a category leader. Or how Ritesh Agarwal&apos;s story made OYO&apos;s disruption feel credible. Regional founders across India have built loyal customer bases because people trusted the person before they trusted the product.
            </p>

            <p>
              When you show up with a clear perspective — consistently, over time — you create trust at scale. That trust compounds in ways advertising spend cannot replicate.
            </p>

            <p>
              The six steps below are how you build that deliberately.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              Step 1 — Define What Your Brand Actually Stands For
            </h2>

            <p>
              A brand without a clear point of view is just a business with a logo.
            </p>

            <p>
              Your point of view is what your brand believes about the world, your category, and your customers. It&apos;s the perspective that informs every decision — from your website copy to how you respond when something goes wrong.
            </p>

            <p>
              Three questions to find it:
            </p>

            <p>
              What do you believe that most competitors wouldn&apos;t publicly agree with? That&apos;s differentiation. Not features, not a USP — your perspective.
            </p>

            <p>
              What problem in your market genuinely bothers you? The best brands are built by founders personally frustrated by the gap between what exists and what should.
            </p>

            <p>
              Who are you building this for, specifically? Not everyone. The more specifically you can describe that person, the more powerfully your brand speaks to them.
            </p>

            <p>
              Write one sentence: &quot;We exist because the world needs more ___.&quot;
            </p>

            <p>
              Start there.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              Step 2 — Get Positioning Right Before You Design Anything
            </h2>

            <p>
              Positioning is the strategic foundation. It defines where you sit in the market, who you serve, and why someone should choose you.
            </p>

            <p>
              Done well, it makes every subsequent decision easier. Done badly — or skipped entirely — you end up with a brand that&apos;s hard to explain and impossible to differentiate.
            </p>

            <p>
              Four things to nail down: what business you&apos;re actually in, who specifically it&apos;s for, what you do differently, and what makes that credible.
            </p>

            <p>
              This doesn&apos;t go on your website. It&apos;s the internal compass. The thing your designer, your content writer, and your sales team all reference when they&apos;re making decisions on behalf of the brand.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              Step 3 — Build the Visual Identity After the Strategy
            </h2>

            <p>
              Now you can design.
            </p>

            <p>
              A visual identity is not just a logo. It&apos;s a system — a set of visual rules that tell anyone who touches your brand how it should look, at any size, on any medium, in any context.
            </p>

            <p>
              What a complete identity includes: a logo system with multiple versions for different contexts, a colour palette with the exact codes for print and digital, a typography system, an imagery style that guides every photo decision, and brand guidelines that hold all of it together.
            </p>

            <p>
              One thing worth saying plainly: the design should express the strategy. If your brand stands for simplicity, a complicated logo is contradicting that. If it stands for warmth, cold colours are doing damage.
            </p>

            <p>
              The visual identity is not where your brand starts. It&apos;s where the strategy becomes visible.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              Step 4 — Figure Out How Your Brand Sounds
            </h2>

            <p>
              How your brand communicates in words matters as much as how it looks.
            </p>

            <p>
              Define your brand voice in three adjectives. Then explain what each one means in practice — and what it doesn&apos;t mean.
            </p>

            <p>
              <strong className="font-bold text-black">Direct</strong> means short sentences, no filler. It doesn&apos;t mean blunt.<br />
              <strong className="font-bold text-black">Warm</strong> means human and considerate. It doesn&apos;t mean casual.<br />
              <strong className="font-bold text-black">Expert</strong> means confident and substantive. It doesn&apos;t mean jargon-heavy.
            </p>

            <p>
              Then your messaging pillars — the three to five themes you return to consistently. These are what make a brand feel coherent over time. Your content, your proposals, your LinkedIn posts — they&apos;re all expressing the same underlying perspective.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              Step 5 — Show Up Consistently on LinkedIn
            </h2>

            <p>
              For most Indian founders, LinkedIn is currently the highest-leverage brand channel. Your buyers are there. Your potential partners are there. The investors and journalists who might want to talk to you are there.
            </p>

            <p>
              What works: your genuine take on what&apos;s happening in your industry. Behind-the-scenes of what building your business actually looks like. How you think about specific problems. Client stories told as real narratives, not testimonials.
            </p>

            <p>
              What doesn&apos;t work: company announcements, generic motivation, posting heavily for a month and then going silent.
            </p>

            <p>
              Consistent beats frequent. Two thoughtful posts a week over 12 months builds significantly more than any burst of activity.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              Step 6 — Document Your Work
            </h2>

            <p>
              At some point, the most powerful brand-building you can do is show what you&apos;ve actually done.
            </p>

            <p>
              Case studies are more credible than any claim. A well-told client story — here&apos;s the situation, here&apos;s what we did, here&apos;s what changed — communicates your process, your values, and your results in a single piece of content.
            </p>

            <p>
              Capture it as you go. Every significant win becomes a blog post, a LinkedIn piece, a website page, a pitch material. The work becomes the brand.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              Common Mistakes Founders Make
            </h2>

            <p>
              <strong className="font-bold text-black">Building around aesthetics, not strategy.</strong> A beautiful logo attached to confused positioning is still confused.
            </p>

            <p>
              <strong className="font-bold text-black">Copying competitors.</strong> If your brand looks and sounds like the category leader, you&apos;re helping them, not yourself.
            </p>

            <p>
              <strong className="font-bold text-black">Inconsistency across touchpoints.</strong> Premium website, unprofessional email signature. Thoughtful LinkedIn presence, outdated brochure. Every inconsistency erodes trust.
            </p>

            <p>
              <strong className="font-bold text-black">Delegating brand entirely without understanding it yourself.</strong> You can hire for execution. You can&apos;t hire for perspective. The founder&apos;s point of view has to be present in the brand — which means the founder has to define it.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">Do I need an agency or can I do this myself?</h3>
                <p>You can do a lot early on. But the positioning work is worth doing with someone who can push back and ask the uncomfortable questions. That&apos;s where most founders get stuck.</p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">When is too early to invest in brand?</h3>
                <p>If you have customers, it&apos;s not too early. Brand isn&apos;t just for scale-ups — it&apos;s how you get there.</p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">How long does it take to build a brand as a founder?</h3>
                <p>A full brand identity project is typically 6 to 10 weeks. Building personal brand visibility on LinkedIn takes 3 to 6 months of consistent work. Neither is a quick fix.</p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">Where do I start if I have no budget?</h3>
                <p>LinkedIn. Free to use. The only investment is time and clarity about what you actually want to say.</p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">Should my personal brand and company brand be separate?</h3>
                <p>For most founders, especially early on, they shouldn&apos;t be. The founder&apos;s visibility directly benefits the business. They grow together. At a certain scale, they become distinct — but that&apos;s a later problem.</p>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-gray-200">
              <Link
                href="/inquiry"
                className="inline-block px-10 py-[15px] bg-black text-white text-nav-label uppercase tracking-[0.2em] rounded-full hover:bg-[#4b3fd4] transition-colors duration-300"
              >
                Start a project →
              </Link>

              <div className="mt-8 text-sm text-gray-500 italic space-y-3">
                <p>Pragyan is a brand strategy and communications agency based in Ahmedabad, India.</p>
                <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-black">
                  <Link href="/services" className="hover:text-[#4b3fd4] hover:underline underline-offset-4 transition-colors">View our services →</Link>
                  <Link href="/work" className="hover:text-[#4b3fd4] hover:underline underline-offset-4 transition-colors">See our work →</Link>
                </div>
              </div>
            </div>
          </>
        )}

        {slug === 'ooh-advertising-ahmedabad' && (
          <>
            <p>
              Every day, thousands of people move through SG Highway, CG Road, and Sardar Patel Ring Road. Commuting, half-distracted, not looking for your hoarding.
            </p>

            <p>
              A hoarding has about three seconds to land.
            </p>

            <p>
              Three seconds to say something that sticks. Most OOH advertising in Ahmedabad wastes those three seconds completely. As an OOH advertising agency in Ahmedabad, we see the same mistakes repeat — too much copy, too many elements, no single clear idea. The hoarding exists but doesn&apos;t communicate.
            </p>

            <p className="text-xl md:text-2xl font-medium leading-snug tracking-tight my-10">
              This is what we&apos;ve learned from actually doing this work, and what you should know before briefing any agency.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              Why Most Outdoor Advertising Fails
            </h2>

            <p>
              The most common brief we get: &quot;We want a hoarding. Here&apos;s everything about our company. Please fit it all in.&quot;
            </p>

            <p>
              That&apos;s the problem right there.
            </p>

            <p>
              A hoarding is not a brochure. It&apos;s not a website. It&apos;s not a place for your full product list, your phone number, your website URL, your tagline, and your company name all at once. By the time someone reads the third line, they&apos;re already three hundred metres past it.
            </p>

            <p>
              Outdoor advertising fails when it tries to do too much. And in Ahmedabad, where every major road has multiple hoardings competing for the same three seconds, the ones that do one thing clearly are the ones that get remembered.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              What Actually Works in OOH Advertising
            </h2>

            <p>
              One clear idea. Said as simply as possible.
            </p>

            <p>
              Type large enough to read from a moving vehicle. High contrast. A visual hierarchy that&apos;s obvious at distance — not on a screen mockup, but from a car going 60 km/h.
            </p>

            <p>
              Something honest. Ahmedabad audiences have seen every promotional trick. What still cuts through is a brand that says something direct and true. Confidence without noise.
            </p>

            <p>
              And brand consistency. Your hoarding should look unmistakably like your brand — not like it was designed by a different vendor with a different brief, which is how most outdoor work ends up looking.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              When OOH Advertising Makes Sense
            </h2>

            <p>
              Not every campaign needs outdoor. But for the right objectives, a well-placed hoarding does something digital genuinely can&apos;t — it puts your brand in the physical world, at scale, in spaces your audience moves through every day.
            </p>

            <p>
              School admissions season. A product launch in a specific locality. A new business opening on a high-footfall road. A campaign that needs to feel present, not just scrolled past.
            </p>

            <p>
              A single strong outdoor campaign can shift how an entire locality perceives a brand. Not because it&apos;s clever. Because it&apos;s clear and it&apos;s everywhere.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              What Formats Work for Which Objectives
            </h2>

            <p>
              <strong className="font-bold text-black">Large-format hoardings (20x10 ft, 40x20 ft)</strong> — best for brand awareness. High visibility on arterial roads. Works when the message is simple enough to land at speed.
            </p>

            <p>
              <strong className="font-bold text-black">Bus shelters and transit panels</strong> — better for campaigns where the audience is stationary. More time to read. Suits slightly more detailed messaging.
            </p>

            <p>
              <strong className="font-bold text-black">Mall kiosks and indoor formats</strong> — works when you&apos;re targeting specific consumer profiles. The audience is already in a buying mindset.
            </p>

            <p>
              <strong className="font-bold text-black">Building wraps</strong> — high impact, high cost. Useful for launches and events where you want maximum presence in a specific area.
            </p>

            <p>
              The format should follow the objective. Most campaigns get this backwards — they pick a format first and then figure out what to say.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              Work We&apos;ve Done
            </h2>

            <div className="space-y-12">
              <div>
                <p className="mb-4">
                  <strong className="font-bold text-black">Global Guardians School</strong>
                  <br />
                  The brief was to build awareness among parents in specific Ahmedabad localities ahead of admissions season. The challenge was communicating a school&apos;s philosophy — not just its facilities — in three seconds.
                  <br /><br />
                  We developed a campaign concept grounded in what parents actually care about when choosing a school. The hoarding and billboard artwork spoke to that directly.
                </p>
                <Link href="/work/global-guardians-school" className="text-[#4b3fd4] font-bold uppercase tracking-widest text-xs hover:underline decoration-2 underline-offset-4">
                  Read the full case study →
                </Link>
              </div>

              <div>
                <p className="mb-4">
                  <strong className="font-bold text-black">Bhavya Srishti Udyog</strong>
                  <br />
                  OOH was part of a broader brand launch for a sustainable bamboo manufacturing company. The outdoor component needed to introduce a new category to an audience that had never seriously considered it.
                  <br /><br />
                  Clean, confident, curiosity-driving. The campaign created the first layer of brand awareness that everything else built on.
                </p>
                <Link href="/work/bhavya-srishti-udyog" className="text-[#4b3fd4] font-bold uppercase tracking-widest text-xs hover:underline decoration-2 underline-offset-4">
                  Read the full case study →
                </Link>
              </div>
            </div>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              How to Brief an OOH Advertising Agency
            </h2>

            <p>
              Start with the objective. Not &quot;we want a hoarding.&quot; What do you need someone to do, think, or feel after seeing it? The brief changes completely depending on whether you&apos;re driving awareness, admissions, footfall, or launch attention.
            </p>

            <p>
              Define the audience and locations. Who are you trying to reach and where do they actually go? The right location is as important as the right design.
            </p>

            <p>
              Be clear on formats and budget upfront. A good agency will advise, but the conversation is faster when you know your constraints.
            </p>

            <p>
              Give the agency room to concept. The best outdoor work comes from a strong idea — not a brief that dictates every element of the execution. Share the objective and the audience. Let the creative solve it.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">What hoarding sizes do you design for?</h3>
                <p>All standard outdoor formats — 20x10 ft, 40x20 ft, and larger. Bus shelters, transit panels, mall kiosks. Tell us what you need and we design to spec.</p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">Do you help with media buying in Ahmedabad?</h3>
                <p>We don&apos;t do media buying directly. But we guide you on which formats and locations make sense for your objective, and help you brief vendors on technical file requirements.</p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">How long does it take from brief to artwork?</h3>
                <p>Concept to print-ready artwork is typically one to two weeks, depending on formats and feedback cycles.</p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">Do you work outside Ahmedabad?</h3>
                <p>Yes. The design principles are the same everywhere. Format specifications vary by location and vendor.</p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">Can you handle OOH as part of a larger brand campaign?</h3>
                <p>Yes. Most of our OOH work connects to a broader brand strategy — digital, social, LinkedIn. Outdoor works best as one channel in a coordinated campaign, not in isolation.</p>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-gray-200">
              <Link
                href="/inquiry"
                className="inline-block px-10 py-[15px] bg-black text-white text-nav-label uppercase tracking-[0.2em] rounded-full hover:bg-[#4b3fd4] transition-colors duration-300"
              >
                Start a project →
              </Link>

              <div className="mt-8 text-sm text-gray-500 italic space-y-1">
                <p>Pragyan is a brand strategy and communications agency based in Ahmedabad, India.</p>
                <p>A-607, Money Plant High Street, SG Highway — +91 99980 81399</p>
              </div>
            </div>
          </>
        )}

        {slug === 'linkedin-personal-branding-india' && (
          <>
            <p>
              LinkedIn in India has changed fast.
            </p>

            <p>
              Three years ago it was where you kept your resume updated and connected with ex-colleagues. Today it&apos;s where deals happen before the first meeting. Where investors form opinions before the first call. Where potential hires decide whether they want to work with you before they&apos;ve seen the job posting.
            </p>

            <p>
              For founders and senior professionals, LinkedIn personal branding in India is no longer optional if you&apos;re serious about building visibility that converts to real outcomes.
            </p>

            <p className="text-xl md:text-2xl font-medium leading-snug tracking-tight my-10">
              And the bar for standing out is still surprisingly low.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              Why LinkedIn Is the Highest-Leverage Brand Channel for Indian Founders Right Now
            </h2>

            <p>
              Most Indian professionals on LinkedIn either post nothing, or they share company announcements and congratulatory posts that generate no meaningful engagement.
            </p>

            <p>
              The gap between what most people do and what actually works is wide. Founders who show up thoughtfully and consistently can build real authority much faster here than in more saturated markets.
            </p>

            <p>
              Three specific things make LinkedIn critical right now:
            </p>

            <p>
              <strong className="font-bold text-black">Buyers research before they engage.</strong> A procurement manager, an investor, a potential partner — all of them will look you up before taking your call. What they find shapes their perception before you&apos;ve said a word.
            </p>

            <p>
              <strong className="font-bold text-black">Organic reach is still real.</strong> Unlike most platforms where reach has been throttled to push paid advertising, LinkedIn still rewards well-crafted posts with meaningful organic distribution. A strong post can reach tens of thousands of relevant professionals without spending anything.
            </p>

            <p>
              <strong className="font-bold text-black">Trust transfers.</strong> When you build authority on LinkedIn, it transfers directly to your business. For founders, personal brand and company brand are the same asset. They grow together.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              The Three Things That Actually Matter
            </h2>

            <p>
              <strong className="font-bold text-black">Positioning.</strong> Before you post anything, know what you want to be known for. Not your job title. Your perspective — the lens through which you see your industry and the problems you solve.
            </p>

            <p>
              A founder who posts generally about business gets lost in the feed. A founder with a specific, consistent point of view becomes a reference point for the people who care about that space.
            </p>

            <p>
              <strong className="font-bold text-black">Profile.</strong> Your LinkedIn profile is a landing page, not a resume. Most people treat it like a resume and wonder why it doesn&apos;t convert.
            </p>

            <p>
              A strong profile does one thing: it makes the right person want to connect, follow, or reach out. It communicates what you do, who you do it for, and why you&apos;re worth paying attention to — in the first few seconds.
            </p>

            <p>
              <strong className="font-bold text-black">Content.</strong> This is where LinkedIn personal branding actually happens. Your profile earns the click. Your content earns the trust. Trust accumulated over months of showing up with genuine perspective is what converts into opportunities.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              How to Actually Optimise Your LinkedIn Profile
            </h2>

            <p>
              <strong className="font-bold text-black">Profile photo.</strong> Professional, well-lit, looking at the camera. Your face builds trust. Use it.
            </p>

            <p>
              <strong className="font-bold text-black">Banner image.</strong> Most people leave this blank. A simple branded banner that communicates what you do and who you serve makes your profile feel intentional. Takes an hour to set up. Worth doing.
            </p>

            <p>
              <strong className="font-bold text-black">Headline.</strong> Not your job title. Your headline appears everywhere your name appears on the platform. Use it to communicate value, not a label.
            </p>

            <p className="italic text-gray-700 bg-gray-50 p-6 rounded-lg my-6">
              Instead of: <span className="font-medium">Founder &amp; CEO at XYZ Company</span>
              <br />
              Try: <span className="font-medium">Helping manufacturing SMEs in India build brands their buyers trust | Founder, XYZ</span>
            </p>

            <p>
              <strong className="font-bold text-black">About section.</strong> Write it in first person. Tell your story — why you do what you do, who you help, what you believe. End with a clear prompt. What should someone do if they want to connect, follow, or work with you?
            </p>

            <p>
              <strong className="font-bold text-black">Featured section.</strong> Curate this deliberately. Your best post, a case study, a press mention. First impressions matter — don&apos;t leave it empty.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              What Content Actually Builds a Personal Brand on LinkedIn
            </h2>

            <p>
              The content that builds personal brands is not promotional. It&apos;s perspective-driven.
            </p>

            <p>
              <strong className="font-bold text-black">Your genuine take on what&apos;s happening in your industry.</strong> What do you see that others miss? What do you disagree with? What have you learned that changed how you work?
            </p>

            <p>
              <strong className="font-bold text-black">Behind-the-scenes content.</strong> What building your business actually looks like. The decisions, the challenges, the things that didn&apos;t go as planned. This is the content that builds emotional connection with an audience.
            </p>

            <p>
              <strong className="font-bold text-black">Frameworks and processes.</strong> How you think about a specific problem. &quot;Here&apos;s how we approach X&quot; consistently performs well because it demonstrates expertise without sounding promotional.
            </p>

            <p>
              <strong className="font-bold text-black">Client stories.</strong> Not testimonials — actual narratives. Here&apos;s a problem a client had. Here&apos;s what we did. Here&apos;s what changed. This is the proof that builds credibility with future clients who recognise their own situation in the story.
            </p>

            <p className="font-medium mt-6">
              Posting 2 to 3 times per week is the sweet spot for most founders. Consistent beats frequent, every time.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              A Real Example — Ganesh Verma
            </h2>

            <p>
              Ganesh Verma is a founder in sustainable bamboo manufacturing. When Pragyan started working with him on LinkedIn personal branding, his presence was minimal. A profile that didn&apos;t reflect his expertise. No consistent content.
            </p>

            <p>
              We defined his positioning, rebuilt his profile, and developed a content strategy around three themes: sustainable business, industrial innovation, and founder experience.
            </p>

            <p>
              Three months in: 850 total followers. 299 new followers. 4.7% engagement rate — well above LinkedIn&apos;s average of 1 to 2%. Primary audience: owners, directors, senior professionals, CXOs.
            </p>

            <p>
              The results came from strategy. Not volume, not posting hacks.
            </p>

            <p className="mt-4">
              <Link href="/work/ganesh-verma" className="text-[#4b3fd4] font-bold uppercase tracking-widest text-xs hover:underline decoration-2 underline-offset-4">
                Read the full case study →
              </Link>
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              What Most People Get Wrong
            </h2>

            <p>
              <strong className="font-bold text-black">Posting without positioning.</strong> Posting randomly with no underlying theme produces noise, not a brand. You end up with a feed that doesn&apos;t represent anything specific.
            </p>

            <p>
              <strong className="font-bold text-black">Treating LinkedIn like Instagram.</strong> Motivational quotes and lifestyle content can work on Instagram. Your LinkedIn audience wants insight and substance.
            </p>

            <p>
              <strong className="font-bold text-black">Inconsistency.</strong> Posting five times in one week and disappearing for a month signals unreliability. It actively damages the brand you&apos;re trying to build.
            </p>

            <p>
              <strong className="font-bold text-black">Only sharing company news.</strong> Nobody follows a person to get press releases.
            </p>

            <p>
              <strong className="font-bold text-black">Waiting until you have something big to say.</strong> The small, honest, specific observations you have every week are more valuable than waiting for a TED-talk-worthy insight. Ship the small stuff consistently.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">How long before LinkedIn personal branding shows results in India?</h3>
                <p>Meaningful results typically emerge over 3 to 6 months. Profile improvements and early engagement signals happen faster. The compound effect builds over time.</p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">Do I need to hire an agency for LinkedIn personal branding?</h3>
                <p>Not necessarily. If you enjoy writing, have the time, and have the strategic clarity to stay consistent — you can do this yourself. Most founders are missing at least one of those three, which is where an agency helps.</p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">How many followers do I need to get results?</h3>
                <p>Follower count is the wrong metric. Engagement rate and quality of inbound are what matter. Founders with 2,000 highly relevant followers close more deals than those with 20,000 random ones.</p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">What&apos;s the difference between LinkedIn personal branding and a social media manager?</h3>
                <p>A social media manager handles execution. Personal branding handles strategy first — positioning, voice, audience, content direction — then either handles or guides execution. Strategy without execution is useless. Execution without strategy is noise.</p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">Does LinkedIn personal branding work for B2B businesses in India?</h3>
                <p>It&apos;s where the highest ROI is, especially for B2B. Founders who are visible on LinkedIn consistently report inbound leads, faster deal cycles, and easier investor conversations.</p>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-gray-200">
              <Link
                href="/inquiry"
                className="inline-block px-10 py-[15px] bg-black text-white text-nav-label uppercase tracking-[0.2em] rounded-full hover:bg-[#4b3fd4] transition-colors duration-300"
              >
                Start a project →
              </Link>

              <div className="mt-8 text-sm text-gray-500 italic space-y-3">
                <p>Pragyan is a brand strategy and personal branding agency in Ahmedabad, India.</p>
                <p>We help founders and executives build authority on LinkedIn through positioning, profile optimisation, and content strategy.</p>
              </div>
            </div>
          </>
        )}

        {slug === 'visual-identity-design-india' && (
          <>
            <p>
              Most businesses start the same way. A logo designed quickly. Chosen from a few options. Launched without much strategic grounding.
            </p>

            <p>
              It works for a while. Then the business grows. New designers come in. Vendors make their own decisions. And the brand starts looking slightly different everywhere it appears — website, brochure, packaging, LinkedIn, trade show backdrop. None of it quite matches.
            </p>

            <p>
              That&apos;s not a logo problem. It&apos;s a visual identity problem.
            </p>

            <p className="text-xl md:text-2xl font-medium leading-snug tracking-tight my-10">
              As a visual identity design agency in India working with businesses across Ahmedabad and beyond, we see this pattern constantly. And it&apos;s always more expensive to fix than it would have been to build right the first time.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              The Difference Between a Logo and a Visual Identity
            </h2>

            <p>
              This is the single most important thing to understand before briefing any agency.
            </p>

            <p>
              A logo is the primary mark of your brand. It matters. But it only works as part of a system.
            </p>

            <p>
              A visual identity is the complete system — logo (with all its variations), colour palette, typography, imagery style, supporting graphic elements, and brand guidelines that govern how all of it is used.
            </p>

            <p>
              When you only have a logo, every designer who works with you makes their own decisions about colour, type, and imagery. The result is a brand that looks different every time it appears. And inconsistency erodes trust, even when the product is excellent.
            </p>

            <p>
              A complete visual identity system eliminates that. Your brand is recognisably yours across every touchpoint — because the rules are defined and documented.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              What a Visual Identity Design Project Actually Includes
            </h2>

            <p>
              <strong className="font-bold text-black">Logo system.</strong> Not one file. Primary logo, horizontal and vertical variations, icon or monogram version, clear space rules, approved colour versions, explicit dos and don&apos;ts. Multiple formats for print and digital.
            </p>

            <p>
              <strong className="font-bold text-black">Colour palette.</strong> Primary and secondary colours with HEX, RGB, and CMYK codes. Usage ratios — which colours are dominant, which are accents. Guidance on combinations to avoid.
            </p>

            <p>
              <strong className="font-bold text-black">Typography system.</strong> Heading font and body font selected for visual harmony and legibility. Sizing hierarchy, weight guidance, line-spacing rules for consistent application.
            </p>

            <p>
              <strong className="font-bold text-black">Photography and imagery style.</strong> The mood, composition, and aesthetic your brand images should convey. What to avoid. This guides every image decision your team and vendors make — often for years.
            </p>

            <p>
              <strong className="font-bold text-black">Brand guidelines document.</strong> The rulebook. A designed PDF that tells any designer, vendor, or team member exactly how to use your brand correctly. This is what makes a visual identity sustainable without you being involved in every decision.
            </p>

            <p>
              <strong className="font-bold text-black">Application design.</strong> Business cards, letterheads, email signatures, presentation templates, social media templates, packaging, brochures. The identity applied to real materials — so you leave with a brand ready to use immediately.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              How We Work at Pragyan
            </h2>

            <p>
              Before we design anything, we understand the business.
            </p>

            <p>
              What does your brand stand for? Who does it serve? What does it need to communicate? Who are you competing with? Every visual decision gets anchored in the answers to these questions. Design without strategy is decoration.
            </p>

            <p>
              Then visual direction. We present 2 to 3 distinct approaches — each grounded in a clear strategic reason, not just aesthetic preference. You choose a direction. We align before we build. No surprises mid-project.
            </p>

            <p>
              Then identity design. Logo, colour, typography, supporting visual elements. We present, refine, and finalise with your input at each stage.
            </p>

            <p>
              Then brand guidelines. Not an afterthought — a designed, usable document that protects your brand every time someone new touches it.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              Visual Identity Work We&apos;ve Done Across India
            </h2>

            <div className="space-y-12">
              <div>
                <p className="mb-4">
                  <strong className="font-bold text-black">Bhaktinandan</strong> — Traditional cold-pressed oils needed a visual identity that balanced heritage with premium positioning. The packaging design earns trust on the shelf and tells the brand&apos;s story without needing a paragraph to do it.
                </p>
                <Link href="/work/bhaktinandan" className="text-[#4b3fd4] font-bold uppercase tracking-widest text-xs hover:underline decoration-2 underline-offset-4">
                  View case study →
                </Link>
              </div>

              <div>
                <p className="mb-4">
                  <strong className="font-bold text-black">Shreeji Enterprise</strong> — An engineered roofing company needed an identity system that held up in sales presentations, printed brochures, and trade communications. The result: a complete visual system that made every sales conversation more confident.
                </p>
                <Link href="/work/shreeji-enterprise" className="text-[#4b3fd4] font-bold uppercase tracking-widest text-xs hover:underline decoration-2 underline-offset-4">
                  View case study →
                </Link>
              </div>

              <div>
                <p className="mb-4">
                  <strong className="font-bold text-black">ATC Chains India</strong> — A B2B manufacturing company needed a visual identity that reflected decades of engineering credibility. A brand kit that works across digital, LinkedIn, and exhibition materials.
                </p>
                <Link href="/work/atc-chains-india" className="text-[#4b3fd4] font-bold uppercase tracking-widest text-xs hover:underline decoration-2 underline-offset-4">
                  View case study →
                </Link>
              </div>

              <div>
                <p className="mb-4">
                  <strong className="font-bold text-black">Global Guardians School</strong> — An educational institution needed an identity that communicated its philosophy to parents — not just its facilities. Consistent across OOH, digital, and print.
                </p>
                <Link href="/work/global-guardians-school" className="text-[#4b3fd4] font-bold uppercase tracking-widest text-xs hover:underline decoration-2 underline-offset-4">
                  View case study →
                </Link>
              </div>
            </div>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              Why Consistency Is Worth More Than You Think
            </h2>

            <p>
              First impressions happen before conscious thought. Visual judgements are made in milliseconds — before your words get a chance.
            </p>

            <p>
              And inconsistency is expensive. Every time a designer reinvents your brand because there are no guidelines, you&apos;re paying for it twice. Once in the design work. Again in the brand credibility you&apos;re quietly losing.
            </p>

            <p>
              For businesses that are actively growing — more vendors, more team members, more channels — this compounds fast. The investment in a complete visual identity system pays back every time someone uses the guidelines instead of guessing.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">What&apos;s the difference between a logo and a visual identity?</h3>
                <p>A logo is a single mark. A visual identity is the complete system — logo, colour, typography, imagery style, and guidelines — that makes your brand look consistent across every context.</p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">What industries do you work in as a visual identity design agency in India?</h3>
                <p>Manufacturing, D2C and FMCG, education, consumer goods, personal branding. The approach adapts to the industry. The strategic rigour stays constant.</p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">What deliverables do I get at the end?</h3>
                <p>A complete brand guidelines document, all logo files in relevant formats (AI, EPS, PNG, SVG, PDF), and any collateral designs included in your project scope.</p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">How long does a visual identity project take?</h3>
                <p>Typically 6 to 10 weeks from strategy to final guidelines handover. Depends on scope and how quickly feedback cycles move.</p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">Can you refresh an existing brand identity?</h3>
                <p>Yes. Rebrands and identity refreshes are a significant part of our work. We start with an audit of what exists before recommending what to evolve and what to replace.</p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">Do you work with businesses outside Ahmedabad?</h3>
                <p>Yes. We have clients in Mumbai, Delhi, Bangalore, and beyond. Most of the process works well remotely.</p>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-gray-200">
              <Link
                href="/inquiry"
                className="inline-block px-10 py-[15px] bg-black text-white text-nav-label uppercase tracking-[0.2em] rounded-full hover:bg-[#4b3fd4] transition-colors duration-300"
              >
                Start a project →
              </Link>

              <div className="mt-8 text-sm text-gray-500 italic space-y-3">
                <p>Pragyan is a brand strategy and visual identity design agency in India, based in Ahmedabad.</p>
                <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-black">
                  <Link href="/services" className="hover:text-[#4b3fd4] hover:underline underline-offset-4 transition-colors">Explore all services →</Link>
                  <Link href="/work" className="hover:text-[#4b3fd4] hover:underline underline-offset-4 transition-colors">See our work →</Link>
                </div>
              </div>
            </div>
          </>
        )}

        {slug === 'personal-brand-consultant-india' && (
          <>
            <p>
              There&apos;s a version of your professional identity that exists right now. One that other people are forming based on what they find when they look you up.
            </p>

            <p>
              The question is whether it reflects who you actually are and what you&apos;re capable of.
            </p>

            <p>
              A personal brand consultant in India helps you take control of that perception — deliberately, strategically, in a way that creates real professional outcomes. Not just more followers. Actual outcomes: inbound leads, faster deal cycles, investor attention, speaking invitations, talent that approaches you.
            </p>

            <p className="text-xl md:text-2xl font-medium leading-snug tracking-tight my-10">
              Here&apos;s what the work actually involves, who it&apos;s for, and what to look for before you invest.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              What a Personal Brand Consultant Actually Does
            </h2>

            <p>
              Part strategist. Part editor. Part coach.
            </p>

            <p>
              Their job is to help you answer the questions most professionals genuinely can&apos;t answer clearly about themselves: what do I want to be known for? Who is my audience and what do they care about? Am I communicating clearly and consistently across my professional presence? How do I build visibility that doesn&apos;t feel forced or self-promotional?
            </p>

            <p>
              The work is specific to you — your background, your ambitions, your voice, and the professional context you&apos;re operating in.
            </p>

            <p>
              At Pragyan, we start with listening. We understand your story, your expertise, and your goals before recommending any positioning or producing any content. The strategy comes from who you actually are — not a template applied to every client.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              Signs You Need a Personal Brand Consultant
            </h2>

            <p>
              <strong className="font-bold text-black">You&apos;re known in your industry but invisible online.</strong> Your reputation exists in rooms you&apos;re already in. When someone who doesn&apos;t know you searches for expertise like yours, they don&apos;t find you.
            </p>

            <p>
              <strong className="font-bold text-black">Your LinkedIn profile doesn&apos;t reflect your current level.</strong> It reads like a resume from several years ago. Lists roles and dates but doesn&apos;t communicate the perspective, expertise, and value you&apos;ve actually built.
            </p>

            <p>
              <strong className="font-bold text-black">You&apos;re posting but getting no traction.</strong> The problem is almost always strategic — positioning or content direction — not effort. Posting harder into a void doesn&apos;t fix it.
            </p>

            <p>
              <strong className="font-bold text-black">You&apos;re at an inflection point.</strong> Raising a round, launching a new venture, transitioning industries, moving into advisory or board roles. These moments require a personal brand that&apos;s ready for the level you&apos;re moving to.
            </p>

            <p>
              <strong className="font-bold text-black">You know it matters but don&apos;t know where to start.</strong> You&apos;ve watched other founders build visible, credible profiles and want the same. But the process isn&apos;t obvious and the time pressure is real.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              What We Offer as Your Personal Brand Partner in India
            </h2>

            <p>
              <strong className="font-bold text-black">Positioning clarity session.</strong> A deep conversation about your background, expertise, goals, and audience. From this, we derive your personal brand positioning — the specific space you occupy and the perspective that makes you worth following.
            </p>

            <p>
              <strong className="font-bold text-black">LinkedIn profile audit and rebuild.</strong> We audit your current profile against what it should be doing. Then we rebuild it — headline, about section, featured section, visual presentation — so it works as a landing page, not a resume.
            </p>

            <p>
              <strong className="font-bold text-black">Content strategy and themes.</strong> We define the 3 to 5 themes you&apos;ll build your content around, based on your expertise and your audience&apos;s genuine interests. This gives every post a purpose and makes staying consistent far easier.
            </p>

            <p>
              <strong className="font-bold text-black">Content production and ghostwriting.</strong> For clients who want execution support, we ghostwrite posts, articles, and carousels in your voice. We invest significant time in understanding how you think and communicate. The result sounds like you, not an agency.
            </p>

            <p>
              <strong className="font-bold text-black">Monthly performance tracking.</strong> We track follower growth, engagement rate, reach, and content performance month on month. Strategy adjusts based on what the data tells us, not assumptions.
            </p>

            <p className="mt-4">
              <Link href="/services/personal-branding-linkedin" className="text-[#4b3fd4] font-bold uppercase tracking-widest text-xs hover:underline decoration-2 underline-offset-4">
                See our full personal branding services →
              </Link>
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              A Real Example — Ganesh Verma
            </h2>

            <p>
              Ganesh Verma is a founder in sustainable bamboo manufacturing. A space where building credibility requires both industry expertise and the ability to educate an audience that&apos;s entirely new to the category.
            </p>

            <p>
              When Pragyan began working with him as his personal brand consultant in India, his LinkedIn presence was minimal. No consistent content. A profile that didn&apos;t reflect the seriousness of what he was building.
            </p>

            <p>
              We developed his positioning, rebuilt his profile, and created a content strategy around three themes: sustainability, industrial innovation, and founder experience.
            </p>

            <p>
              Three months in: 850 total followers. 299 new followers acquired. 4.7% engagement rate. Audience: owners, directors, senior professionals, CXOs.
            </p>

            <p>
              The results came from a clear strategy executed consistently.
            </p>

            <p className="mt-4">
              <Link href="/work/ganesh-verma" className="text-[#4b3fd4] font-bold uppercase tracking-widest text-xs hover:underline decoration-2 underline-offset-4">
                Read the full case study →
              </Link>
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              How to Choose the Right Personal Brand Consultant in India
            </h2>

            <p>
              <strong className="font-bold text-black">Look for strategy before content.</strong> If a consultant jumps straight to production without discussing your positioning and audience, walk away. Content without strategy is noise.
            </p>

            <p>
              <strong className="font-bold text-black">Ask to see examples in your space.</strong> Different industries require different approaches. A B2B manufacturing founder and a D2C brand founder have very different audiences and very different content needs.
            </p>

            <p>
              <strong className="font-bold text-black">Check if they write in client voices, not agency voices.</strong> Read some ghostwritten content. Does it sound like a real person with a specific perspective? Or does it sound like every other LinkedIn post you scroll past?
            </p>

            <p>
              <strong className="font-bold text-black">Expect realistic timelines.</strong> Anyone promising dramatic follower growth in 30 days is selling a vanity metric. Real personal brand development takes 3 to 6 months to show compounding results.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">How is a personal brand consultant different from a social media manager?</h3>
                <p>A social media manager handles execution — scheduling, posting, responding. A personal brand consultant handles strategy — positioning, voice, audience, and content direction. The best engagements include both, in that order.</p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">Do I need to be a CEO to invest in personal branding?</h3>
                <p>No. We work with founders at various stages, senior professionals, consultants, and people building profiles for the next chapter of their career. The common thread is genuine expertise worth making visible.</p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">What platforms do you focus on for personal branding in India?</h3>
                <p>LinkedIn for most clients. The return on investment is highest there for Indian business professionals. We extend to other platforms based on where your audience actually is.</p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">How do you measure personal branding success?</h3>
                <p>Follower growth, engagement rate, reach, and quality of inbound — connection requests, DMs, speaking invitations, inbound leads. We track and report monthly. Vanity metrics tell us nothing; these do.</p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">What does personal brand consulting cost in India?</h3>
                <p>It depends on scope — positioning only, content strategy, or full ghostwriting and management. <Link href="/inquiry" className="text-[#4b3fd4] hover:underline underline-offset-4">Reach out</Link> and we&apos;ll share what makes sense for your goals and budget.</p>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-gray-200">
              <Link
                href="/inquiry"
                className="inline-block px-10 py-[15px] bg-black text-white text-nav-label uppercase tracking-[0.2em] rounded-full hover:bg-[#4b3fd4] transition-colors duration-300"
              >
                Get in touch →
              </Link>

              <div className="mt-8 text-sm text-gray-500 italic space-y-3">
                <p>Pragyan is a personal branding and brand strategy agency based in Ahmedabad, India.</p>
                <p>We work with founders and professionals across India.</p>
              </div>
            </div>
          </>
        )}

        {slug === 'brand-guidelines-design' && (
          <>
            <p>
              You&apos;ve invested in a logo. Maybe a colour palette. Perhaps a complete visual identity.
            </p>

            <p>
              Now ask yourself: if you sent your brand assets to a new designer tomorrow, with no other context — what would they produce?
            </p>

            <p>
              If the answer is &quot;I&apos;m not sure,&quot; you need brand guidelines.
            </p>

            <p className="text-xl md:text-2xl font-medium leading-snug tracking-tight my-10">
              Brand guidelines design is the step that makes everything else sustainable. It&apos;s the document that holds your brand together and tells anyone who ever touches it — designers, vendors, employees, agencies, printers — exactly how to use it correctly.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              What Brand Guidelines Actually Are
            </h2>

            <p>
              Not a rulebook that limits creativity. A framework within which good creative decisions get made consistently — by anyone, regardless of whether they were there when the brand was built.
            </p>

            <p>
              Brand guidelines are used by in-house designers and marketing teams, external agencies and freelancers, printers, social media managers, content writers, and new employees who need to understand the brand they&apos;re representing.
            </p>

            <p>
              Every time one of these people makes a brand decision without guidelines, they&apos;re guessing. Brand guidelines replace guessing with clarity.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              Why Brand Guidelines Matter More for Growing Businesses
            </h2>

            <p>
              When your brand looks the same on your website, your business card, your social media, and your packaging, people perceive you as more credible and more trustworthy. It signals that your business is organised and serious.
            </p>

            <p>
              The opposite is also true. When your Instagram uses different colours than your brochure, your email signature uses a different logo than your website, and your presentations look like they came from three different companies — the perception is inconsistency. And inconsistent businesses are harder to trust.
            </p>

            <p>
              For growing businesses, this matters more, not less. You&apos;re building trust from scratch. Every consistent touchpoint compounds it. Every inconsistent one erodes it.
            </p>

            <p>
              And inconsistency is expensive. Every time a designer reinvents your brand because there are no guidelines, you pay for it twice. Once in the cost of the design work. Again in the brand credibility you quietly lose.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              What Good Brand Guidelines Design Includes
            </h2>

            <p>
              <strong className="font-bold text-black">Brand story and mission.</strong> Who you are, what you do, who you serve, and why your brand exists. This is the strategic context that makes every subsequent rule make sense. Design rules without the reasoning behind them get ignored. Rules with reasoning get followed.
            </p>

            <p>
              <strong className="font-bold text-black">Logo usage.</strong> Every version of your logo — primary, alternate, icon — with clear guidance on when to use each. Minimum sizes, clear space requirements, approved colour versions, and explicit examples of what not to do. This section alone prevents dozens of well-meaning mistakes every year.
            </p>

            <p>
              <strong className="font-bold text-black">Colour palette.</strong> Your primary and secondary brand colours with the exact codes for every use case. HEX for digital and web. RGB for screen design. CMYK for print. Guidance on proportions and any colour combinations to avoid.
            </p>

            <p>
              <strong className="font-bold text-black">Typography.</strong> Your heading font and body font, where to source them, sizing hierarchy, line spacing guidance, and how they&apos;re used in different contexts. Fallback fonts for situations where brand fonts aren&apos;t available.
            </p>

            <p>
              <strong className="font-bold text-black">Photography and imagery style.</strong> The mood, composition, and aesthetic your brand images should convey — and what to avoid. This is the section most agencies skip, and it shows. When teams source imagery without direction, visual inconsistency creeps in and undermines everything else.
            </p>

            <p>
              <strong className="font-bold text-black">Brand voice and tone.</strong> How your brand communicates in words. Define your voice in three adjectives and explain what each means in practice and what it doesn&apos;t. Include on-brand vs off-brand copy examples so the difference is concrete, not abstract.
            </p>

            <p>
              <strong className="font-bold text-black">Application examples.</strong> The brand in action. Real examples on a business card, a brochure, a social post, a presentation. This is what takes brand guidelines design from theoretical to practical.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              What Bad Brand Guidelines Look Like
            </h2>

            <p>
              <strong className="font-bold text-black">Too long, never used.</strong> A 60-page PDF covering every theoretical edge case is impressive to produce and ignored in practice. Good guidelines are thorough enough to answer common questions and practical enough to actually be opened and used.
            </p>

            <p>
              <strong className="font-bold text-black">Only covers the logo.</strong> A document that specifies logo usage and nothing else leaves too much room for misinterpretation on every other brand decision.
            </p>

            <p>
              <strong className="font-bold text-black">No real-world examples.</strong> Rules without examples are ambiguous. Show what on-brand looks like.
            </p>

            <p>
              <strong className="font-bold text-black">Built without strategy.</strong> Design rules disconnected from brand purpose are just aesthetic preferences. When the reasoning is there, the rules get followed. When it&apos;s not, they get overridden.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              When to Create Brand Guidelines
            </h2>

            <p>
              <strong className="font-bold text-black">After completing your visual identity design.</strong> The moment your identity system is built, document it before it gets misused. This is the primary trigger.
            </p>

            <p>
              <strong className="font-bold text-black">When you&apos;re bringing on marketing support.</strong> The first time you brief a freelancer or agency, you need to hand them more than a logo file.
            </p>

            <p>
              <strong className="font-bold text-black">When you&apos;re scaling.</strong> More team members, more vendors, more channels. Without guidelines, the brand diverges. With them, it stays coherent.
            </p>

            <p>
              <strong className="font-bold text-black">Before launching a new product line or entering a new market.</strong> Guidelines ensure the extension looks and sounds like the parent brand, not a separate entity.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              How We Design Brand Guidelines at Pragyan
            </h2>

            <p>
              Every visual identity project at Pragyan includes a complete brand guidelines document.
            </p>

            <p>
              We build it as part of the identity process — not as an afterthought. Strategy-informed, covering brand purpose and voice alongside visual rules. Designed to be used, not filed away.
            </p>

            <p>
              Deliverables include a print-ready PDF and, where applicable, a Figma file that designers can reference and build from directly.
            </p>

            <p className="font-bold text-black mt-8 mb-4">Brands we&apos;ve built identity systems and guidelines for:</p>
            <div className="flex flex-col gap-2 mb-8">
              <Link href="/work/shreeji-enterprise" className="text-[#4b3fd4] hover:underline underline-offset-4 decoration-2">Shreeji Enterprise — engineered roofing solutions</Link>
              <Link href="/work/bhaktinandan" className="text-[#4b3fd4] hover:underline underline-offset-4 decoration-2">Bhaktinandan — traditional cold-pressed oils</Link>
              <Link href="/work/atc-chains-india" className="text-[#4b3fd4] hover:underline underline-offset-4 decoration-2">ATC Chains India — industrial manufacturing</Link>
              <Link href="/work/global-guardians-school" className="text-[#4b3fd4] hover:underline underline-offset-4 decoration-2">Global Guardians School — education</Link>
            </div>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mt-16 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">Do brand guidelines change over time?</h3>
                <p>Yes. A brand evolves, and the guidelines should too. We recommend reviewing and updating them when you rebrand, expand significantly, or notice inconsistency creeping back in.</p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">What format do you deliver brand guidelines in?</h3>
                <p>A designed PDF. And where it&apos;s useful, a Figma or web-based guide that designers can work from directly.</p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">Can you create brand guidelines for an identity we already have?</h3>
                <p>Yes. If you have an existing identity without documentation, we audit what exists and build the guidelines around it.</p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">How long does brand guidelines design take?</h3>
                <p>When done as part of a full identity project, guidelines are delivered as part of the final handover — typically within 6 to 10 weeks. If you&apos;re coming to us with an existing identity that needs documenting, it&apos;s a shorter, standalone project.</p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2 text-[19px]">Do I really need brand guidelines if I&apos;m a small business?</h3>
                <p>If you have more than one person making brand decisions — or plan to — yes. The moment you brief an external designer, print vendor, or social media manager, guidelines are what prevent those decisions from going wrong.</p>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-gray-200">
              <Link
                href="/inquiry"
                className="inline-block px-10 py-[15px] bg-black text-white text-nav-label uppercase tracking-[0.2em] rounded-full hover:bg-[#4b3fd4] transition-colors duration-300"
              >
                Start a project →
              </Link>

              <div className="mt-8 text-sm text-gray-500 italic space-y-3">
                <p>Pragyan is a brand strategy and visual identity agency in Ahmedabad, India.</p>
                <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-black">
                  <Link href="/services" className="hover:text-[#4b3fd4] hover:underline underline-offset-4 transition-colors">Explore our services →</Link>
                  <Link href="/work" className="hover:text-[#4b3fd4] hover:underline underline-offset-4 transition-colors">See our work →</Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  return [
    { slug: 'branding-for-manufacturing-companies' },
    { slug: 'brand-identity-design-ahmedabad' },
    { slug: 'personal-branding-agencies-india' },
    { slug: 'ooh-advertising-ahmedabad' },
    { slug: 'build-brand-as-founder' },
    { slug: 'linkedin-personal-branding-india' },
    { slug: 'visual-identity-design-india' },
    { slug: 'personal-brand-consultant-india' },
    { slug: 'brand-guidelines-design' }
  ];
}
