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

interface CaseStudyData {
  title: string;
  category: string;
  headline?: string;
  client: string;
  label: string;
  industry: string;
  deliverables: string;
  description: string;
  descriptionRightOfLabel?: string;
  additionalSection?: string;
  additionalSection2?: string;
  additionalSection3?: string;
  heroImage: string;
  heroImagePosition?: string;
  heroImageAlt?: string;
  showcaseImage1?: string;
  showcaseImage1Alt?: string;
  showcaseImage2?: string;
  showcaseImage2Alt?: string;
  showcaseImage3?: string;
  showcaseImage3Alt?: string;
  showcaseImage4?: string;
  showcaseImage4Alt?: string;
  showcaseImage5?: string;
  showcaseImage5Alt?: string;
  quote?: string;
  heroHeaderTheme?: 'light' | 'dark';
  stats?: {
    title: string;
    subtitle: string;
    items: { value: string; label: string }[];
    context?: string;
  };
  customTwoCards?: {
    title: string;
    items: { value: string; label: string }[];
    extraText?: string;
  };
  outcomesSection?: {
    title: string;
    text: string;
  };
  reflectionSection?: {
    title: string;
    text: string;
  };
}

const caseStudies: Record<string, CaseStudyData> = {
  'atc-chains-india': {
    title: 'ATC CHAINS INDIA',
    category: 'Manufacturing / Conveyor Components / Food & Beverage',
    client: 'ATC CHAINS INDIA',
    label: 'BRAND STRATEGY<br/>IDENTITY & EXPRESSION<br/>CONTENT & COMMUNICATION<br/>SOCIAL & COMMUNITY',
    industry: 'Manufacturing / Conveyor Components / Food & Beverage',
    deliverables: 'Visual Identity & Logo<br/>Corporate Stationery<br/>Brochure Design<br/>Industry Materials Consulting',
    description: `We started by developing a cohesive brand kit that established consistency across communication and visual expression.
From there, we developed a LinkedIn content strategy focused on industry expertise rather than promotion. The goal was not volume. It was relevance.
Content covered manufacturing insights, industry observations, operational knowledge, and practical experience accumulated over decades of working in the sector.
Alongside digital communication, we designed AV materials for exhibitions and industry events, ensuring that every touchpoint reflected the same level of professionalism and expertise.`,
    descriptionRightOfLabel: `ATC Chains India has been manufacturing conveyor components for the food and beverage industry for over four decades.
The company had built its reputation the traditional way—through product quality, long-term relationships, and consistent delivery. The expertise was real. The trust had already been earned.
But buying behaviour was changing.
Even in industrial sectors, conversations increasingly begin online. Before a procurement manager reaches out, they often research suppliers, explore websites, and review digital presence. The first impression no longer happens at an exhibition or in a meeting room. It happens on a screen.
The challenge was not creating credibility. It was making existing credibility visible.`,
    additionalSection: `Industrial manufacturing is not a category known for strong communication.
Most companies focus on operations, engineering, and sales. Marketing often becomes an afterthought. As a result, much of the category looks and sounds remarkably similar.
That creates an interesting opportunity.
When few competitors invest in communication, even thoughtful improvements can create meaningful differentiation. A company that presents itself with clarity, consistency, and expertise immediately feels more trustworthy than one that doesn't.`,
    additionalSection2: `ATC's experience, technical knowledge, and industry understanding were not being communicated consistently across customer-facing touchpoints.
The business had decades of credibility, but very little of it was visible to potential buyers discovering the company digitally.`,
    additionalSection3: `Many manufacturers begin with product communication.
We believed credibility was the more important challenge.
Before buyers compare specifications, pricing, or capabilities, they make a quieter judgement: does this company feel trustworthy enough to consider?
Every decision that followed was guided by that question.`,
    heroImage: '/ATC-hero.webp',
    customTwoCards: {
      title: "Within a span of 8 months..",
      items: [
        { value: "36,393", label: "organic impressions" },
        { value: "11,950", label: "unique accounts reached" }
      ],
      extraText: `Monthly reach grew from 2,663 impressions to 7,079 impressions
      
Beyond the numbers, the company established a more consistent and credible presence across both digital and physical channels.`
    }
  },
  'global-guardians-school': {
    title: 'GLOBAL GUARDIANS SCHOOL',
    category: 'EDUCATION',
    client: 'GLOBAL GUARDIANS SCHOOL',
    label: 'BRAND STRATEGY<br/>IDENTITY & EXPRESSION<br/>CONTENT & COMMUNICATION<br/>SOCIAL & COMMUNITY<br/>OOH ADVERTISING',
    industry: 'Education',
    deliverables: 'Visual Identity<br/>Brand Guidelines<br/>Admissions Communication<br/>Hoardings<br/>Brochures & Flyers<br/>Social Media Management',
    descriptionRightOfLabel: `Global Guardians School was founded on a belief that education should support more than academic achievement.
The school combines academic excellence with consciousness development, value education, and holistic growth. Its philosophy places equal importance on learning, living, and understanding.
This created both an opportunity and a challenge.
The philosophy was distinctive, but it was also unfamiliar to many parents evaluating schools for their children.
The task was to help families understand what made the school different without reducing its philosophy to marketing language.`,
    additionalSection: `<strong>Most school communication focuses on familiar markers:</strong>
• Board affiliation.
• Infrastructure.
• Facilities.
• Results.

As a consequence, many schools sound remarkably similar.
Global Guardians School had a genuinely different perspective on education. The challenge was translating that perspective into a brand experience parents could understand and trust.`,
    additionalSection2: `The school needed a complete identity system and admissions communication framework capable of carrying a nuanced educational philosophy.
Parents needed to quickly understand what the school stood for while also feeling confident in its credibility and structure.`,
    additionalSection3: `We believed the school's philosophy was its strongest differentiator.
The work was not about explaining every aspect of the educational model.
It was about helping the right parents recognise themselves in the idea.`,
    description: `We developed the school's visual identity, logo, typography system, colour architecture, and brand guidelines.
The circular emblem was designed around the school's core values, representing harmony, interconnectedness, and universal orderliness.
A complete admissions communication system followed, including brochures, flyers, forms, stationery, and supporting materials.
To build awareness, the communication extended into outdoor advertising across Visnagar, creating visibility beyond the immediate school community.
Social media established an ongoing presence and helped communicate everyday moments, culture, and learning experiences.`,
    heroImage: '/ggs-hero.webp',
    showcaseImage1: '/gss-logo.webp',
    showcaseImage1Alt: 'Logo design concept created by Pragyan for Global Guardians School',
    showcaseImage2: '/GGS.webp',
    showcaseImage2Alt: 'Pragyan educational work and design implementation at Global Guardians School',
    showcaseImage3: '/ggs-banner.webp',
    showcaseImage3Alt: 'Billboard campaign created by Pragyan for Global Guardians School',
    showcaseImage4: '/ggs-inside.webp',
    showcaseImage4Alt: 'Pragyan educational work and design implementation at Global Guardians School',
    showcaseImage5: '/ggs-folder.webp',
    showcaseImage5Alt: 'Pragyan educational work and design implementation at Global Guardians School',
    outcomesSection: {
      title: 'Outcomes',
      text: `The project created a consistent identity system across admissions, communication, and public visibility.
More importantly, it gave the school's philosophy a form that parents could engage with and understand.`
    }
  },
  'bhavya-srishti-udyog': {
    title: 'BHAVYA SRISHTI UDYOG',
    category: 'Sustainable Manufacturing / Bamboo',
    client: 'BHAVYA SRISHTI UDYOG',
    label: 'BRAND STRATEGY<br/>IDENTITY & EXPRESSION<br/>CONTENT & COMMUNICATION<br/>SOCIAL & COMMUNITY<br/>LINKEDIN<br/>PR',
    industry: 'Sustainable Manufacturing / Bamboo',
    deliverables: 'Brand Identity<br/>Communication Strategy<br/>Industry Materials<br/>Presentations<br/>Social Media Management<br/>LinkedIn Management<br/>PR Support',
    description: `We developed the visual identity and communication framework that would guide the brand across channels.
From there, we created industry materials, presentations, reports, social media content, exhibition assets, and communication support for business development activities.
Alongside the company brand, we also supported founder visibility through LinkedIn and personal branding initiatives.
Both the company and the people behind it needed to earn trust together.`,
    descriptionRightOfLabel: `Bhavya Srishti Udyog is working to expand the role of bamboo within modern construction and manufacturing.`,
    additionalSection: `Emerging categories often face a credibility gap.
People are being asked to trust a product they may not fully understand, from a company they may have only recently discovered.
In these situations, communication becomes part of the infrastructure required for growth.`,
    additionalSection2: `BSU needed a brand capable of communicating innovation while maintaining trust.
The company also needed a system that could support multiple audiences, each with different concerns and levels of familiarity with bamboo as a material.`,
    additionalSection3: `We believed education and credibility mattered more than promotion.
The goal was not simply to generate visibility.
The goal was to help people understand why the category mattered in the first place.`,
    heroImage: '/bsu-hero.webp',
    showcaseImage1: '/bsu-billboard.webp',
    showcaseImage2: '/bsu-phone.webp',
    showcaseImage3: '/bsu-mockups.webp',
    heroHeaderTheme: 'light',
    outcomesSection: {
      title: 'Outcomes',
      text: `April – May 2026
LinkedIn (Organic)
    • 12,504 impressions
    • 7,712 accounts reached
    • 683 link clicks
    • 277 reactions
    • 56 new followers

The project established a foundation that helped BSU communicate more clearly across audiences while supporting visibility for both the company and its leadership.`
    }
  },
  'shreeji-enterprise': {
    title: 'SHREEJI ENTERPRISE',
    category: 'Engineered Roofing Solutions',
    client: 'SHREEJI ENTERPRISE',
    label: 'IDENTITY & EXPRESSION<br/>CONTENT & COMMUNICATION',
    industry: 'Engineered Roofing Solutions',
    deliverables: 'Visual Identity<br/>Logo Design<br/>Stationery System<br/>Brochure Design<br/>Industry Materials Consulting',
    description: `We developed a complete visual identity system built around the ideas of structure, reliability, and engineering precision.
The logo integrated references to roofing systems, the letter S, and layered construction. Typography, colour systems, stationery, and brochures were developed to create consistency across every interaction.`,
    descriptionRightOfLabel: `Shreeji Enterprise provides engineered roofing solutions for industrial and commercial projects.
Like many businesses in the category, the company had built its reputation through product quality, reliability, and relationships. The work was strong. The presentation wasn't.
The challenge was to create a visual identity and communication system that reflected the professionalism already present within the business.`,
    additionalSection: `In manufacturing and construction-related industries, branding is often treated as secondary to operations and sales.
Yet clients make judgements long before a project begins. A business card, a brochure, a quotation, or a first meeting often shapes confidence before technical discussions ever happen.
A coherent identity can communicate reliability before a single specification is reviewed.`,
    additionalSection2: `Shreeji had a clear positioning around engineered roofing solutions, but the brand lacked consistency and distinction across customer-facing touchpoints.`,
    heroImage: '/shreeji.webp',
    heroImagePosition: 'object-left',
    showcaseImage1: '/Shreeji-Brochure.webp',
    showcaseImage1Alt: 'Pragyan brochure design for Shreeji Enterprise',
    outcomesSection: {
      title: 'Outcomes',
      text: `The project provided Shreeji with a cohesive identity system capable of supporting sales conversations, quotations, presentations, and marketing materials with greater confidence and consistency.`
    }
  },
  'yash-engineers-(india)-pvt.-ltd.': {
    title: 'YASH ENGINEERS (INDIA) PVT. LTD.',
    category: 'Industrial Machinery',
    client: 'YASH ENGINEERS (INDIA) PVT. LTD.',
    label: 'Identity & Expression<br/>Content & Communication',
    industry: 'Industrial Machinery',
    deliverables: 'Brochure Design<br/>Industry Materials<br/>Communication Consulting',
    description: 'We redesigned brochures and supporting materials to create a clearer, more structured communication system for technical buyers. The focus was on readability, hierarchy, and communicating expertise without unnecessary complexity.',
    descriptionRightOfLabel: `Yash Engineers designs and manufactures cut-to-length and slitting lines for the metal processing industry.
    The company builds complex machinery for highly informed buyers making high-value decisions.
    The challenge was ensuring the communication reflected the same level of precision as the machines themselves.`,
    additionalSection: `Industrial brochures are often treated as supporting materials rather than strategic tools.
    Yet for many buyers, these materials become the reference point long after the first meeting ends.
    The quality of communication influences how the quality of the company is perceived.`,
    additionalSection2: `Existing materials did not fully communicate the sophistication, expertise, and professionalism behind the company's work.`,
    heroImage: '/yash-hero.webp',
    showcaseImage1: '/Yash-Brochure.webp',
    showcaseImage1Alt: 'Pragyan brochure design for Yash Engineers',
    outcomesSection: {
      title: 'Outcomes',
      text: `The new materials provided prospects with clearer information and supported more confident conversations throughout the sales process.`
    }
  },
  'bhaktinandan': {
    title: 'BHAKTINANDAN',
    category: 'Consumer Goods / Cold-Pressed Oils',
    client: 'BHAKTINANDAN',
    label: 'Identity & Expression<br/>Content & Communication',
    industry: 'Consumer Goods / Cold-Pressed Oils',
    deliverables: 'Rebranding<br/>Visual Identity<br/>Label Design<br/>Catalog Design<br/>Brand Consulting',
    description: 'We redesigned the identity, labels, and supporting brand materials around the ideas of purity, simplicity, and authenticity. The visual language was contemporary while remaining rooted in the product\'s heritage.',
    descriptionRightOfLabel: `Bhaktinandan produces wooden cold-pressed oils using traditional extraction methods.
    Consumers are increasingly interested in where their food comes from and how it is made.
    At the same time, shelves have become crowded with brands making similar claims.
    Authenticity alone is no longer enough.
    It has to be communicated.`,
    additionalSection: `The brand needed an identity and packaging system capable of expressing quality, trust, and tradition without appearing outdated.`,
    heroImage: '/Bhaktinandan-hero.webp',
    showcaseImage1: '/bhaktinandan-oil.webp',
    showcaseImage2: '/bhaktinandan-mood.webp',
    showcaseImage3: '/bhaktinandan-logo.webp',
    outcomesSection: {
      title: 'Outcomes',
      text: `The rebrand created a more cohesive and premium brand presence across packaging and communication materials.`
    }
  },
  'ganesh-verma': {
    title: 'GANESH VERMA',
    category: 'Personal Branding & LinkedIn',
    client: 'GANESH VERMA',
    label: 'Personal Branding & LinkedIn',
    industry: 'Sustainable Manufacturing',
    deliverables: 'LinkedIn Positioning<br/>Profile Optimisation<br/>Content Strategy<br/>Thought Leadership Content<br/>Engagement Management',
    description: 'We developed positioning, profile optimisation, content themes, thought leadership content, and engagement strategy. The communication focused on real projects, industry observations, and the practical realities of building within a developing category.',
    descriptionRightOfLabel: `As founder of Bhavya Srishti Udyog, Ganesh Verma is helping shape conversations around bamboo, sustainability, and alternative construction materials.
    The challenge was translating experience and conviction into a clear personal brand.
    In emerging industries, founders often become an important source of credibility.
    People connect with ideas more easily when they understand the people behind them.`,
    additionalSection: `Ganesh needed a LinkedIn presence that reflected his expertise, perspective, and role within the broader sustainability ecosystem.`,
    additionalSection2: `Personal branding works best when it is rooted in genuine experience rather than performance.
    The goal was not visibility alone.
    It was meaningful visibility.`,
    heroImage: '/ganesh-hero.webp',
    heroHeaderTheme: 'light',
    outcomesSection: {
      title: 'Outcomes',
      text: `April–June 2026
      • 850 followers
      • 299 new followers
      • 4.7% engagement rate
      • Audience including owners, directors, senior professionals, and CXOs`
    }
  },
  'nails-our-way': {
    title: 'NAILS OUR WAY',
    category: 'FASHION & BEAUTY',
    headline: 'A salon experience that celebrates expression and art.',
    client: 'NAILS OUR WAY',
    label: 'Identity & Expression<br/>Personal Branding',
    industry: 'Fashion & Beauty / Salon Services',
    deliverables: 'Logo & Brand Mark<br/>Interior Concept Consulting<br/>Digital Strategy<br/>Uniforms Design',
    description: 'Nails Our Way wanted to position nail care as an art form rather than a routine service. We created a bold, graphic identity using experimental layouts, fluid brand marks, and a high-contrast dark palette, helping them launch a highly successful flagship salon.',
    heroImage: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=1200',
    showcaseImage1: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&q=80&w=800',
    showcaseImage2: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800',
    showcaseImage3: 'https://images.unsplash.com/photo-1488866022504-f2584929ca5f?auto=format&fit=crop&q=80&w=800',
    quote: 'Art, down to your fingertips.'
  },
  'cityflo': {
    title: 'CITYFLO',
    category: 'TECH & FINANCE',
    headline: 'Designing the brand for stress-free daily commutes.',
    client: 'CITYFLO',
    label: 'Identity & Expression<br/>Content & Communication',
    industry: 'Tech & Finance / Transit Solutions',
    deliverables: 'Corporate Positioning<br/>App UI Design System<br/>Advertising Campaigns<br/>Copywriting',
    description: 'Cityflo is redefining public transport for corporate professionals. We designed a calm, premium brand language that reflects the quiet space of their buses. This visual system was integrated from the app interface to outdoor billboards, boosting B2B subscription sales.',
    heroImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200',
    showcaseImage1: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800',
    showcaseImage2: 'https://images.unsplash.com/photo-1494518748479-7ca9c32f84f3?auto=format&fit=crop&q=80&w=800',
    showcaseImage3: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&q=80&w=800',
    quote: 'The best start and end to your workday.'
  },
  'hooked-on-hocco': {
    title: 'HOOKED ON HOCCO',
    category: 'FOOD & BEVERAGE',
    headline: 'Creating a digital playground for ice cream enthusiasts.',
    client: 'HOCCO REDUX',
    label: 'Identity & Expression<br/>Digital Marketing',
    industry: 'Food & Beverage / Digital Campaign',
    deliverables: 'Web UI Design<br/>Interactive Campaign<br/>Character Assets<br/>Motion Graphics',
    description: 'For Hooked on Hocco, we built a digital microsite designed to engage younger customers through gamified interactions, dynamic brand animations, and a rich, interactive brand voice that amplified brand loyalty during peak summer seasons.',
    heroImage: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=1200',
    showcaseImage1: 'https://images.unsplash.com/photo-1505394033641-4d324043b37b?auto=format&fit=crop&q=80&w=800',
    showcaseImage2: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=800',
    showcaseImage3: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800',
    quote: 'Joy, captured in one scroll.'
  },
  'lightyears': {
    title: 'LIGHTYEARS',
    category: 'HOME & LIFESTYLE',
    headline: 'Lighting spaces with minimalist Scandinavian craftsmanship.',
    client: 'LIGHTYEARS DENMARK',
    label: 'Identity & Expression<br/>Content & Communication',
    industry: 'Home & Lifestyle / Premium Lighting',
    deliverables: 'Brand Identity Redesign<br/>Print Catalog<br/>Product Consulting<br/>Spatial Styling',
    description: 'Lightyears wanted to reinforce its position as a high-end designer lighting brand. We modernised their brand assets, designing an exquisite editorial catalog that focuses on light dispersion, premium textures, and minimal Scandinavian design philosophy.',
    heroImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=1200',
    showcaseImage1: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800',
    showcaseImage2: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=800',
    showcaseImage3: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=800',
    quote: 'Design that illuminates, simply.'
  },
  'ugaoo': {
    title: 'UGAOO',
    category: 'DESIGN FOR GOOD',
    headline: 'Bringing nature back to urban, fast-paced lifestyles.',
    client: 'UGAOO',
    label: 'Identity & Expression<br/>Content & Communication',
    industry: 'Design for Good / Home Gardening',
    deliverables: 'Brand Identity Redesign<br/>Sustainable Packaging<br/>Educational Materials<br/>Video Strategy',
    description: 'Ugaoo wanted to make urban gardening approachable and rewarding. We redesigned their packaging to be 100% plastic-free, created illustrated plant-care booklets, and unified their look across physical stores and web platforms, prompting a 40% growth in first-time gardeners.',
    heroImage: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&q=80&w=1200',
    showcaseImage1: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&q=80&w=800',
    showcaseImage2: 'https://images.unsplash.com/photo-1530968464165-7a1861cadd72?auto=format&fit=crop&q=80&w=800',
    showcaseImage3: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800',
    quote: 'Grow your own peace, one leaf at a time.'
  }
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

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
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black leading-tight tracking-tight">
                  {project.headline}
                </h1>
              </div>
            </div>
          </section>
        )}

        {/* Metadata Grid */}
        <section className="max-w-[1440px] mx-auto px-10 md:px-16 py-8">
          <div className="border-y border-[#76777b]/30 py-8 grid grid-cols-4 md:grid-cols-12 gap-6">
            <div className="col-span-4 md:col-span-3">
              <p
                className="text-sm text-black font-semibold leading-relaxed"
                dangerouslySetInnerHTML={{ __html: project.label }}
              />
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
                <p className="text-sm text-black font-semibold leading-relaxed">
                  CONTEXT
                </p>
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
                <p className="text-sm text-black font-semibold leading-relaxed">
                  PROCESS
                </p>
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
                <h3 className="text-[11px] md:text-xs font-bold tracking-wider text-black uppercase">
                  {project.customTwoCards.title}
                </h3>
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
        {(project.showcaseImage1 || project.showcaseImage2 || project.showcaseImage3 || project.showcaseImage4) && (
          <section className="max-w-[1440px] mx-auto px-4 md:px-16 py-8 space-y-12">
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
