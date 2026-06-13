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
  showcaseImage6?: string;
  showcaseImage6Alt?: string;
  gallery?: {
    src: string;
    alt?: string;
    cols?: 1 | 2 | 3;
  }[];
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
    description: `We began by developing a cohesive brand kit that brought consistency to the company's communication and visual expression. From there, we developed a LinkedIn content strategy centred around industry expertise rather than promotion. The goal wasn't volume. It was relevance. Content focused on manufacturing insights, operational knowledge, industry observations, and practical experience accumulated over decades of working in the sector. Alongside digital communication, we created audiovisual materials for exhibitions and industry events — ensuring every touchpoint reflected the same level of professionalism and expertise.`,
    descriptionRightOfLabel: `ATC Chains India has been manufacturing conveyor components for the food and beverage industry for over four decades.
The company had built its reputation the traditional way—through product quality, long-term relationships, and consistent delivery. The expertise was real. The trust had already been earned.
But buying behaviour was changing.
Even in industrial sectors, conversations increasingly begin online. Before a procurement manager reaches out, they often research suppliers, explore websites, and evaluate digital presence. The first impression no longer happens at an exhibition or in a meeting room. It happens on a screen.
The challenge wasn't creating credibility. It was making existing credibility visible.`,
    additionalSection: `Industrial manufacturing is not a category known for strong communication. Most companies focus on operations, engineering, and sales. Marketing often becomes an afterthought. As a result, much of the category looks and sounds remarkably similar. That creates an interesting opportunity. When few competitors invest in communication, even thoughtful improvements can create meaningful differentiation. A company that presents itself with clarity, consistency, and expertise immediately feels more trustworthy than one that doesn't.`,
    additionalSection2: `ATC's experience, technical knowledge, and industry understanding were not being communicated consistently across customer-facing touchpoints. The business had decades of credibility, but very little of it was visible to potential buyers discovering the company digitally.`,
    additionalSection3: `Many manufacturers begin with product communication.
We believed credibility was the more important challenge.
Before buyers compare specifications, pricing, or capabilities, they make a quieter judgement: does this company feel trustworthy enough to consider?
Every decision that followed was guided by that question.`,
    heroImageAlt: 'ATC Chains India brand identity redesign by Pragyan — manufacturing branding',
    heroImage: '/ATC-hero.webp',
    gallery: [
      {
        src: "/atc-social-media.webp",
        alt: "ATC Chains India LinkedIn and Social Media Strategy",
        cols: 1
      },
      {
        src: "/atc-mockups.webp",
        alt: "ATC Chains India Brand Identity Mockups",
        cols: 1
      }
    ],
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
• Academic Results.

As a consequence, many schools sound remarkably similar.
Global Guardians School offered a genuinely different perspective on education. The challenge was translating that perspective into a brand experience parents could understand and trust.`,
    additionalSection2: `The school needed a complete identity system and admissions communication framework capable of carrying a nuanced educational philosophy.
Parents needed to quickly understand what the school stood for while also feeling confident in its credibility and structure, and ability to deliver on its promise.`,
    additionalSection3: `We believed the school's philosophy was its strongest differentiator.
The work was not about explaining every aspect of the educational model.
It was about helping the right parents recognise themselves in the idea.`,
    description: `We developed the school's visual identity, logo, typography system, colour architecture, and brand guidelines to establish a cohesive and recognisable presence.
The circular emblem was designed around the school's core values, representing harmony, interconnectedness, and universal orderliness.
The colour system reflected the school's learning environments while creating consistency across communication.
From there, we built a complete admissions communication system, including brochures, flyers, forms, stationery, and supporting materials that helped parents navigate their decision-making journey with clarity.
To extend awareness beyond the immediate school community, communication moved into outdoor advertising across Visnagar. Social media established an ongoing presence, offering parents a window into everyday school life, culture, and learning experiences.
Every touchpoint worked towards the same goal: helping families understand not just what the school offered, but what it believed.`,
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
More importantly, it gave the school's philosophy a form that parents could engage with.
From the first interaction with a brochure to a passing glance at a hoarding, the school began to communicate with greater clarity and confidence.
Because when education is built around values, the way those values are expressed matters just as much as the message itself.`
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
    description: `We developed the visual identity and communication framework that would guide the brand across channels and audiences.
From there, we created industry materials, presentations, reports, exhibition assets, and communication support for business development activities. Social media became a space to document progress, share insights, and build familiarity around the work BSU was doing.
Alongside the company brand, we also supported founder visibility through LinkedIn and personal branding initiatives.
In emerging categories, trust is often built through people as much as organisations. Both the company and the individuals behind it needed to communicate with clarity and consistency.`,
    descriptionRightOfLabel: `Bhavya Srishti Udyog is working to expand the role of bamboo within modern construction and manufacturing.
    While bamboo has been used for generations, its application in contemporary infrastructure and industrial contexts remains unfamiliar to many. Introducing people to a new way of thinking about materials requires more than visibility. It requires understanding.
The challenge was to build communication that could support both.`,
    additionalSection: `Emerging categories often face a credibility gap.
People are being asked to trust a product they may not fully understand, from a company they may have only recently discovered.
In these situations, communication becomes part of the infrastructure required for growth.`,
    additionalSection2: `BSU needed a brand capable of communicating innovation while maintaining trust.
The company also needed a system that could support multiple audiences, each with different concerns and varying levels of familiarity with bamboo as a material. <br /><br />
      Potential collaborators needed clarity.<br />
      Institutional stakeholders needed confidence.<br />
      The wider public needed context.<br />
`,
    additionalSection3: `We believed understanding mattered more than visibility alone.
The objective wasn't simply to generate attention. It was to help people understand why the category mattered in the first place.`,
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
      text: `Establishing a foundation for future growth.
The project helped BSU communicate more clearly across audiences while creating greater consistency across its public-facing touchpoints.
It established a system that could support ongoing outreach, relationship-building, and category awareness efforts as the organisation continued to grow.

LinkedIn Performance (Organic)
April – May 2026
    • 12,504 impressions
    • 7,712 accounts reached
    • 683 link clicks
    • 277 reactions
    • 56 new followers

For an organisation operating within an emerging category, these numbers represented more than engagement metrics. They reflected growing awareness and increasing interest among people beginning to pay attention to the possibilities of bamboo.
Because when you're introducing something unfamiliar, communication isn't just promotion.
It's part of the work itself.`
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
    description: `We developed a visual identity system rooted in the ideas of structure, reliability, and engineering precision.
    The logo integrated references to roofing systems, the letter S, and layered construction — creating a mark that reflected both the category and the company's expertise.
    From there, we extended the identity across typography, colour systems, stationery applications, and brochure design.
    Every element was designed to work together, ensuring that the experience of interacting with the brand felt clear, professional, and considered.
    The objective wasn't decoration.
    It was to create consistency across the moments that influence trust.`,
    descriptionRightOfLabel: `Shreeji Enterprise provides engineered roofing solutions for industrial and commercial projects.
    Like many businesses in the category, the company had built its reputation through product quality, reliability, and long-standing relationships.
    The work was strong.
    The presentation wasn't.
    The challenge was to create a visual identity and communication system that reflected the professionalism already present within the business.`,
    additionalSection: `In manufacturing and construction-related industries, branding is often treated as secondary to operations and sales.
    Yet decisions begin forming long before a project starts.
    A business card handed over during a site visit.
    A brochure shared after a meeting.
    A quotation arriving in an inbox.
    These seemingly small interactions shape perception before technical discussions ever take place.
    A coherent identity can communicate reliability before a single specification is reviewed.`,
    additionalSection2: `Shreeji had a clear positioning around engineered roofing solutions, but the brand lacked consistency and distinction across customer-facing touchpoints. <br /> The opportunity wasn't to reinvent the business.
It was to help the business look as dependable as the work it had been delivering for years.`,
    heroImageAlt: 'Shreeji Enterprise roofing brand identity case study by Pragyan Ahmedabad',
    heroImage: '/shreeji.webp',
    heroImagePosition: 'object-left',
    showcaseImage1: '/Shreeji-Brochure.webp',
    showcaseImage1Alt: 'Shreeji Enterprise brand brochure and sales collateral designed by Pragyan',
    showcaseImage2: '/shreeji envelope.webp',
    showcaseImage2Alt: 'shreeji Enterprise brand envelope and sales collateral designed by Pragyan',
    showcaseImage3: '/shreeji stationery.webp',
    showcaseImage3Alt: 'Shreeji Enterprise brand stationery and sales collateral designed by Pragyan',
    outcomesSection: {
      title: 'Outcomes',
      text: `The project provided Shreeji Enterprise with a cohesive identity system capable of supporting sales conversations with greater confidence and clarity.
From quotations and presentations to brochures and everyday correspondence, the company gained a visual language that reflected the quality of its work.
Because in industries built on trust, how you present yourself becomes part of what people are buying.`
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
    description: `Structuring information to build confidence.
    We redesigned brochures and supporting collateral to create a clearer and more effective communication system for technical audiences.
        The focus was on readability, hierarchy, and helping buyers navigate complex information with ease.
        Content was reorganised to prioritise what decision-makers needed most, while the visual system introduced greater consistency across materials.
        Every decision was guided by a simple principle:
        When people are making important decisions, clarity builds trust.
        The objective wasn't to make the communication feel more promotional.
        It was to make it more useful.`,
    descriptionRightOfLabel: `Yash Engineers designs and manufactures cut-to-length and slitting lines for the metal processing industry.
    The company builds complex machinery for highly informed buyers making high-value decisions. Purchases involve technical evaluation, multiple stakeholders, and long decision cycles.
    The challenge was ensuring the communication reflected the same level of precision as the machines themselves.`,
    additionalSection: `Industrial brochures are often treated as supporting materials rather than strategic tools.
    Yet for many buyers, these materials become the reference point long after the first meeting ends.
    They are revisited during internal discussions, shared across teams, and used to compare potential partners.
    The quality of communication inevitably shapes perceptions about the quality of the company behind it.
    Yash Engineers had the technical capability, experience, and product expertise required to compete in the category. However, the existing materials did not fully communicate the sophistication and professionalism behind the company's work.`,
    additionalSection2: `The opportunity was not to simplify the engineering.
    It was to present it with greater clarity.`,
    heroImageAlt: 'Yash Engineers India brand identity design by Pragyan — B2B industrial branding',
    heroImage: '/yash-hero.webp',
    showcaseImage1: '/Yash-Brochure.webp',
    showcaseImage1Alt: 'Yash Engineers India product brochure and marketing collateral by Pragyan Ahmedabad',
    outcomesSection: {
      title: 'The Result: Clearer Communication, More Confident Conversations',
      text: `Communication that matched the precision of the work itself.
      The redesigned materials provided prospects with clearer information and supported more confident conversations throughout the sales process.
      The company gained a more cohesive communication system capable of representing its expertise across meetings, presentations, and customer interactions.
      Because when you're building machines that demand precision, the way you communicate should reflect the same standard.`
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
    description: `We redesigned the identity, packaging system, and labels around the ideas of purity, simplicity, and authenticity. The visual language was contemporary while remaining rooted in the product's heritage. Information hierarchy, typography, colour application, and packaging structure were carefully considered to improve readability and create a stronger shelf presence. The objective was to help consumers quickly understand what made the product valuable without relying on exaggerated claims or borrowed aesthetics. Every design decision aimed to support the same message: Traditional processes can still feel relevant in a modern context.`,
    descriptionRightOfLabel: `Bhaktinandan produces wooden cold-pressed oils using traditional extraction methods.
    As consumers become more conscious about what they eat, interest in traditional food practices has grown alongside it. People increasingly want to understand where their food comes from, how it is made, and what they are bringing into their homes.
    At the same time, shelves have become crowded with brands making similar promises.
    Authenticity alone is no longer enough.
    It has to be recognised.`,
    additionalSection: `The cold-pressed oil category sits at an interesting intersection of tradition and contemporary consumer expectations.
    While heritage creates trust, presentation influences choice.
    Many brands either lean too heavily into nostalgia or move so far towards modernity that they lose the very qualities that make them distinctive.
    Bhaktinandan needed an identity and packaging system capable of expressing quality, trust, and tradition without appearing outdated.
    The challenge wasn't to reinvent the brand.
    It was to communicate its existing values more clearly and confidently.`,
    heroImageAlt: 'Bhaktinandan cold-pressed oil brand identity by Pragyan — D2C food branding',
    heroImage: '/Bhaktinandan-hero.webp',
    gallery: [
      { src: '/bhaktinandan-oil.webp', alt: 'Bhaktinandan cold-pressed oil packaging design by Pragyan Ahmedabad', cols: 1 },
      { src: '/bhaktinandan-mood.webp', alt: 'Bhaktinandan brand lifestyle photography — traditional oils, modern identity', cols: 2 },
      { src: '/bhaktinandan-logo.webp', alt: 'Bhaktinandan logo design and visual identity system by Pragyan', cols: 2 },
      { src: '/Almond oil.webp', alt: '', cols: 3 },
      { src: '/Flax seeds oil.webp', alt: '', cols: 3 },
      { src: '/Mustard oil.webp', alt: '', cols: 3 },
      { src: '/White sesame oil.webp', alt: '', cols: 2 },
      { src: '/Safflower oil.webp', alt: '', cols: 2 },
      { src: '/Kalonji oil.webp', alt: '', cols: 3 },
      { src: '/Groundnut oil.webp', alt: '', cols: 3 },
      { src: '/Coconut oil.webp', alt: '', cols: 3 },
      { src: '/Castor oil.webp', alt: '', cols: 2 },
      { src: '/Black sesame oil.webp', alt: '', cols: 2 },
      { src: '/Sunflower oil.webp', alt: '', cols: 1 },




    ],
    outcomesSection: {
      title: 'The Result: A Cohesive Premium Brand Presence Across All Packaging',
      text: `The rebrand created a more cohesive and premium presence across packaging and supporting communication materials.
      Bhaktinandan gained a visual system that better reflected the care, craftsmanship, and integrity behind its products.
      Because when the process has remained thoughtful for generations, the brand should honour that same level of intention.`
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
    description: `We developed a personal positioning framework grounded in Ganesh's work, values, and long-term vision for sustainable materials. The LinkedIn profile was optimised to better communicate his expertise and areas of focus. From there, we identified content themes centred around real projects, industry observations, policy discussions, and the practical realities of building within a developing category. Thought leadership content focused on contributing to conversations rather than chasing attention. Alongside content creation, we supported engagement efforts designed to foster meaningful professional interactions and strengthen relationships within the ecosystem. The objective was simple: To create a presence that felt credible because it was.`,
    descriptionRightOfLabel: `As the founder of Bhavya Srishti Udyog, Ganesh Verma is helping shape conversations around bamboo, sustainability, and alternative construction materials.
    The challenge was translating experience and conviction into a clear personal brand.
    In emerging industries, founders often become an important source of credibility. People connect with ideas more easily when they understand the people behind them.
    The question wasn't simply how to build a LinkedIn presence.
    It was how to build trust through perspective.`,
    additionalSection: `Sustainability conversations are increasingly visible, but practical insights from people actively building within the sector remain relatively rare.
    Ganesh needed a LinkedIn presence that reflected his expertise, perspective, and role within the broader sustainability ecosystem.`,
    additionalSection2: `Personal branding works best when it is rooted in genuine experience rather than performance.
    The goal was not visibility alone.
    It was meaningful visibility.
    The kind that attracts the right conversations, strengthens professional relationships, and contributes something valuable to the industry itself.`,
    heroImageAlt: 'Ganesh Verma personal branding case study by Pragyan — LinkedIn strategy',
    heroImage: '/ganesh-hero.webp',
    heroHeaderTheme: 'light',
    outcomesSection: {
      title: 'Outcomes',
      text: `A stronger voice within the sustainability ecosystem.
      The project helped establish a more consistent and purposeful LinkedIn presence aligned with Ganesh's work and perspective.
      It created a platform through which expertise, experiences, and ideas could be shared more effectively with peers, collaborators, and industry stakeholders.

      LinkedIn Performance
      April – June 2026
            • 850 followers
            • 299 new followers
            • 4.7% engagement rate
            • Audience including owners, directors, senior professionals, and CXOs

      For an early-stage personal brand operating within a niche industry, the results reflected growing interest from a relevant professional audience.
      Because people don't just invest in ideas.
      They invest in the people committed to bringing those ideas to life.`
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