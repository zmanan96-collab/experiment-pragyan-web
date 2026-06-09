export interface CaseStudyData {
  seoTitle?: string;
  seoDescription?: string;
  h1?: string;
  servicesList?: string[];
  contextHeading?: string;
  processHeading?: string;
  resultsHeading?: string;
  metricsList?: { value: string, label: string }[];
  ctaHeading?: string;
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

export const caseStudies: Record<string, CaseStudyData> = {
  'atc-chains-india': {
    seoTitle: 'ATC Chains India — B2B Brand Identity & LinkedIn Strategy | Pragyan',
    seoDescription: 'How Pragyan built a sharp brand identity and LinkedIn content strategy for ATC Chains India — a leading conveyor component manufacturer targeting industrial buyers.',
    h1: 'ATC Chains India — Building B2B Brand Credibility in Industrial Manufacturing',
    contextHeading: 'The Challenge: Making a Technical Brand Visible to the Right Buyers',
    processHeading: 'Our Process: Strategy, Identity & LinkedIn Content',
    resultsHeading: 'Results: 8 Months of Measurable Brand Growth',
    servicesList: ['Brand Strategy', 'LinkedIn Content Strategy', 'Exhibition & Audiovisual Communication'],
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
    heroImageAlt: 'ATC Chains India brand identity redesign by Pragyan — manufacturing branding',
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
    seoTitle: 'Global Guardians School — Education Branding & Identity | Pragyan',
    seoDescription: 'See how Pragyan created a distinctive brand strategy and identity for Global Guardians School — helping them communicate their vision clearly to parents and students.',
    h1: "Global Guardians School — Branding a School's Philosophy for the Modern Parent",
    contextHeading: "The Challenge: Translating a School's Vision Into a Recognisable Brand",
    processHeading: 'Our Process: Identity, Communication & OOH Campaign',
    servicesList: ['Brand Strategy', 'Identity & Expression', 'Content & Communication', 'Social Media Management', 'OOH Advertising'],
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
    heroImageAlt: 'Global Guardians School brand identity by Pragyan — education branding Ahmedabad',
    heroImage: '/ggs-hero.webp',
    showcaseImage1: '/gss-logo.webp',
    showcaseImage1Alt: 'Global Guardians School logo design and visual identity system by Pragyan',
    showcaseImage2: '/GGS.webp',
    showcaseImage2Alt: 'Pragyan educational work and design implementation at Global Guardians School',
    showcaseImage3: '/ggs-banner.webp',
    showcaseImage3Alt: 'Global Guardians School outdoor advertising campaign designed by Pragyan',
    showcaseImage4: '/ggs-inside.webp',
    showcaseImage4Alt: 'Pragyan educational work and design implementation at Global Guardians School',
    showcaseImage5: '/ggs-folder.webp',
    showcaseImage5Alt: 'Global Guardians School marketing collateral designed by Pragyan Ahmedabad',
    outcomesSection: {
      title: 'Outcomes',
      text: `The project created a consistent identity system across admissions, communication, and public visibility.
More importantly, it gave the school's philosophy a form that parents could engage with and understand.`
    }
  },
  'bhavya-srishti-udyog': {
    seoTitle: 'Bhavya Srishti Udyog — Sustainable Brand Identity & LinkedIn | Pragyan',
    seoDescription: 'How Pragyan built a brand identity and LinkedIn strategy for a bamboo and sustainable manufacturing business — 12,504 impressions and 683 link clicks in 2 months.',
    h1: 'Bhavya Srishti Udyog — Branding a Sustainable Manufacturing Business',
    contextHeading: 'The Challenge: Building Awareness for an Emerging Sustainable Category',
    processHeading: 'Our Process: Brand Identity, Social Content & LinkedIn PR',
    resultsHeading: 'Results: 12,504 LinkedIn Impressions in 8 Weeks',
    servicesList: ['Brand Strategy', 'Identity & Expression', 'Content & Communication', 'Social & Community Management', 'LinkedIn Marketing', 'Public Relations'],
    metricsList: [
      { value: '12,504', label: 'Impressions' },
      { value: '7,712', label: 'Accounts Reached' },
      { value: '683', label: 'Link Clicks' },
      { value: '4.7%', label: 'Engagement Rate' }
    ],
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
    heroImageAlt: 'Bhavya Srishti Udyog sustainable bamboo brand identity by Pragyan',
    heroImage: '/bsu-hero.webp',
    showcaseImage1Alt: 'Bhavya Srishti Udyog outdoor advertising campaign designed by Pragyan Ahmedabad',
    showcaseImage1: '/BSU-billboard.webp',
    showcaseImage2Alt: 'Bhavya Srishti Udyog LinkedIn content strategy results — Pragyan case study',
    showcaseImage2: '/bsu-phone.webp',
    showcaseImage3Alt: 'Bhavya Srishti Udyog brand design system and visual identity by Pragyan',
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
    seoTitle: 'Shreeji Enterprise — Roofing Brand Identity & Collateral | Pragyan',
    seoDescription: 'Pragyan crafted a bold visual identity system and sales collateral for Shreeji Enterprise — helping an engineered roofing company communicate with confidence.',
    h1: 'Shreeji Enterprise — Building a Confident Brand for an Engineered Roofing Company',
    contextHeading: 'The Challenge: Creating a Brand That Supports Sales Conversations',
    processHeading: 'Our Process: Visual Identity, Typography & Marketing Collateral',
    servicesList: ['Visual Identity System', 'Logo Design', 'Brand Strategy & Positioning', 'Stationery & Brochure Design'],
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
    heroImageAlt: 'Shreeji Enterprise roofing brand identity case study by Pragyan Ahmedabad',
    heroImage: '/shreeji.webp',
    heroImagePosition: 'object-left',
    showcaseImage1: '/Shreeji-Brochure.webp',
    showcaseImage1Alt: 'Shreeji Enterprise brand brochure and sales collateral designed by Pragyan',
    outcomesSection: {
      title: 'Outcomes',
      text: `The project provided Shreeji with a cohesive identity system capable of supporting sales conversations, quotations, presentations, and marketing materials with greater confidence and consistency.`
    }
  },
  'yash-engineers-india': {
    seoTitle: 'Yash Engineers India — Industrial Brand Identity & Collateral | Pragyan',
    seoDescription: 'How Pragyan developed a credible brand identity and marketing collateral for Yash Engineers — helping an industrial machinery manufacturer win more confident sales conversations.',
    h1: 'Yash Engineers India — Designing a Brand That Technical Buyers Trust',
    contextHeading: 'The Challenge: Communicating Expertise to Engineering Decision-Makers',
    processHeading: 'Our Process: Identity Design, Content Strategy & Sales Collateral',
    servicesList: ['Identity Design', 'Content Strategy & Communication', 'Brochure & Collateral Design', 'Brand Communication Systems'],
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
    heroImageAlt: 'Yash Engineers India brand identity design by Pragyan — B2B industrial branding',
    heroImage: '/yash-hero.webp',
    showcaseImage1: '/Yash-Brochure.webp',
    showcaseImage1Alt: 'Yash Engineers India product brochure and marketing collateral by Pragyan Ahmedabad',
    outcomesSection: {
      title: 'The Result: Clearer Communication, More Confident Conversations',
      text: `The new materials provided prospects with clearer information and supported more confident conversations throughout the sales process.`
    }
  },
  'bhaktinandan': {
    seoTitle: 'Bhaktinandan — D2C Food Brand Identity & Packaging Design | Pragyan',
    seoDescription: "Pragyan built the brand identity and packaging system for Bhaktinandan's cold-pressed oil range — connecting traditional purity with a premium modern look.",
    h1: 'Bhaktinandan — Crafting a Premium Identity for Traditional Cold-Pressed Oils',
    contextHeading: 'The Challenge: Modernising Heritage Without Losing Authenticity',
    processHeading: 'Our Process: Rebranding, Packaging System & Label Design',
    servicesList: ['Brand Identity Redesign', 'Packaging System Design', 'Label Design', 'Brand Communication'],
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
    heroImageAlt: 'Bhaktinandan cold-pressed oil brand identity by Pragyan — D2C food branding',
    heroImage: '/Bhaktinandan-hero.webp',
    showcaseImage1Alt: 'Bhaktinandan cold-pressed oil packaging design by Pragyan Ahmedabad',
    showcaseImage1: '/bhaktinandan-oil.webp',
    showcaseImage2Alt: 'Bhaktinandan brand lifestyle photography — traditional oils, modern identity',
    showcaseImage2: '/bhaktinandan-mood.webp',
    showcaseImage3Alt: 'Bhaktinandan logo design and visual identity system by Pragyan',
    showcaseImage3: '/bhaktinandan-logo.webp',
    outcomesSection: {
      title: 'The Result: A Cohesive Premium Brand Presence Across All Packaging',
      text: `The rebrand created a more cohesive and premium brand presence across packaging and communication materials.`
    }
  },
  'ganesh-verma': {
    seoTitle: 'Ganesh Verma — Personal Branding & LinkedIn Strategy | Pragyan',
    seoDescription: "How Pragyan built Ganesh Verma's personal brand on LinkedIn — 299 new followers, 850 total followers, and a 4.7% engagement rate in under 3 months.",
    h1: "Ganesh Verma — Building a Founder's Voice in the Sustainability Space",
    contextHeading: 'The Challenge: Establishing Credibility in an Emerging Industry',
    processHeading: 'Our Process: Positioning, Profile Optimisation & Thought Leadership Content',
    resultsHeading: 'Results: 850 Followers, 4.7% Engagement Rate in 3 Months',
    servicesList: ['Personal Brand Positioning', 'LinkedIn Profile Optimisation', 'Content Theme Development', 'Thought Leadership Strategy', 'Engagement & Community Building'],
    metricsList: [
      { value: '850', label: 'Total Followers' },
      { value: '299', label: 'New Followers' },
      { value: '4.7%', label: 'Engagement Rate' },
      { value: 'CXO & Director', label: 'Audience Reach' }
    ],
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
    heroImageAlt: 'Ganesh Verma personal branding case study by Pragyan — LinkedIn strategy',
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
  }

};