const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/app/work/[slug]/page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// We will use eval or simply regex to inject properties. Since we want to update the JS object, string replacement is best.

const replacements = [
  // PAGE 7 — ATC Chains India
  {
    target: `'atc-chains-india': {`,
    inject: `'atc-chains-india': {
    seoTitle: 'ATC Chains India — B2B Brand Identity & LinkedIn Strategy | Pragyan',
    seoDescription: 'How Pragyan built a sharp brand identity and LinkedIn content strategy for ATC Chains India — a leading conveyor component manufacturer targeting industrial buyers.',
    h1: 'ATC Chains India — Building B2B Brand Credibility in Industrial Manufacturing',
    contextHeading: 'The Challenge: Making a Technical Brand Visible to the Right Buyers',
    processHeading: 'Our Process: Strategy, Identity & LinkedIn Content',
    resultsHeading: 'Results: 8 Months of Measurable Brand Growth',
    servicesList: ['Brand Strategy', 'Visual Identity & Brand Kit', 'LinkedIn Content Strategy', 'Exhibition & Audiovisual Communication'],`
  },
  {
    target: `heroImage: '/ATC-hero.webp',`,
    inject: `heroImageAlt: 'ATC Chains India brand identity redesign by Pragyan — manufacturing branding case study',\n    heroImage: '/ATC-hero.webp',`
  },
  
  // PAGE 8 — Global Guardians School
  {
    target: `'global-guardians-school': {`,
    inject: `'global-guardians-school': {
    seoTitle: 'Global Guardians School — Education Branding & Identity | Pragyan',
    seoDescription: 'See how Pragyan created a distinctive brand strategy and identity for Global Guardians School — helping them communicate their vision clearly to parents and students.',
    h1: "Global Guardians School — Branding a School's Philosophy for the Modern Parent",
    contextHeading: "The Challenge: Translating a School's Vision Into a Recognisable Brand",
    processHeading: 'Our Process: Identity, Communication & OOH Campaign',
    servicesList: ['Brand Strategy', 'Identity & Expression', 'Content & Communication', 'Social Media Management', 'OOH Advertising'],`
  },
  {
    target: `heroImage: '/ggs-hero.webp',`,
    inject: `heroImageAlt: 'Global Guardians School brand identity by Pragyan — education branding Ahmedabad',\n    heroImage: '/ggs-hero.webp',`
  },
  {
    target: `showcaseImage1Alt: 'Logo design concept created by Pragyan for Global Guardians School',`,
    inject: `showcaseImage1Alt: 'Global Guardians School logo design and visual identity system by Pragyan',`
  },
  {
    target: `showcaseImage3Alt: 'Billboard campaign created by Pragyan for Global Guardians School',`,
    inject: `showcaseImage3Alt: 'Global Guardians School outdoor advertising campaign designed by Pragyan',`
  },
  {
    target: `showcaseImage5Alt: 'Pragyan educational work and design implementation at Global Guardians School',`,
    inject: `showcaseImage5Alt: 'Global Guardians School marketing collateral designed by Pragyan Ahmedabad',`
  },

  // PAGE 9 — Bhavya Srishti Udyog
  {
    target: `'bhavya-srishti-udyog': {`,
    inject: `'bhavya-srishti-udyog': {
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
    ],`
  },
  {
    target: `heroImage: '/bsu-hero.webp',`,
    inject: `heroImageAlt: 'Bhavya Srishti Udyog sustainable bamboo brand identity by Pragyan',\n    heroImage: '/bsu-hero.webp',`
  },
  {
    target: `showcaseImage1: '/BSU-billboard.webp',`,
    inject: `showcaseImage1Alt: 'Bhavya Srishti Udyog outdoor advertising campaign designed by Pragyan Ahmedabad',\n    showcaseImage1: '/BSU-billboard.webp',`
  },
  {
    target: `showcaseImage2: '/bsu-phone.webp',`,
    inject: `showcaseImage2Alt: 'Bhavya Srishti Udyog LinkedIn content strategy results — Pragyan case study',\n    showcaseImage2: '/bsu-phone.webp',`
  },
  {
    target: `showcaseImage3: '/bsu-mockups.webp',`,
    inject: `showcaseImage3Alt: 'Bhavya Srishti Udyog brand design system and visual identity by Pragyan',\n    showcaseImage3: '/bsu-mockups.webp',`
  },

  // PAGE 10 — Shreeji Enterprise
  {
    target: `'shreeji-enterprise': {`,
    inject: `'shreeji-enterprise': {
    seoTitle: 'Shreeji Enterprise — Roofing Brand Identity & Collateral | Pragyan',
    seoDescription: 'Pragyan crafted a bold visual identity system and sales collateral for Shreeji Enterprise — helping an engineered roofing company communicate with confidence.',
    h1: 'Shreeji Enterprise — Building a Confident Brand for an Engineered Roofing Company',
    contextHeading: 'The Challenge: Creating a Brand That Supports Sales Conversations',
    processHeading: 'Our Process: Visual Identity, Typography & Marketing Collateral',
    servicesList: ['Visual Identity System', 'Logo Design', 'Brand Strategy & Positioning', 'Stationery & Brochure Design'],`
  },
  {
    target: `heroImage: '/shreeji.webp',`,
    inject: `heroImageAlt: 'Shreeji Enterprise roofing brand identity case study by Pragyan Ahmedabad',\n    heroImage: '/shreeji.webp',`
  },
  {
    target: `showcaseImage1Alt: 'Pragyan brochure design for Shreeji Enterprise',`,
    inject: `showcaseImage1Alt: 'Shreeji Enterprise brand brochure and sales collateral designed by Pragyan',`
  },
  {
    target: `outcomesSection: {
      title: 'Outcomes',`,
    inject: `outcomesSection: {
      title: 'The Result: A Cohesive Identity That Works Across Every Touchpoint',`
  },

  // PAGE 11 — Yash Engineers
  {
    target: `'yash-engineers-(india)-pvt.-ltd.': {`,
    inject: `'yash-engineers-india': {
    seoTitle: 'Yash Engineers India — Industrial Brand Identity & Collateral | Pragyan',
    seoDescription: 'How Pragyan developed a credible brand identity and marketing collateral for Yash Engineers — helping an industrial machinery manufacturer win more confident sales conversations.',
    h1: 'Yash Engineers India — Designing a Brand That Technical Buyers Trust',
    contextHeading: 'The Challenge: Communicating Expertise to Engineering Decision-Makers',
    processHeading: 'Our Process: Identity Design, Content Strategy & Sales Collateral',
    servicesList: ['Identity Design', 'Content Strategy & Communication', 'Brochure & Collateral Design', 'Brand Communication Systems'],`
  },
  {
    target: `heroImage: '/yash-hero.webp',`,
    inject: `heroImageAlt: 'Yash Engineers India brand identity design by Pragyan — B2B industrial branding',\n    heroImage: '/yash-hero.webp',`
  },
  {
    target: `showcaseImage1Alt: 'Pragyan brochure design for Yash Engineers',`,
    inject: `showcaseImage1Alt: 'Yash Engineers India product brochure and marketing collateral by Pragyan Ahmedabad',`
  },

  // PAGE 12 — Bhaktinandan
  {
    target: `'bhaktinandan': {`,
    inject: `'bhaktinandan': {
    seoTitle: 'Bhaktinandan — D2C Food Brand Identity & Packaging Design | Pragyan',
    seoDescription: "Pragyan built the brand identity and packaging system for Bhaktinandan's cold-pressed oil range — connecting traditional purity with a premium modern look.",
    h1: 'Bhaktinandan — Crafting a Premium Identity for Traditional Cold-Pressed Oils',
    contextHeading: 'The Challenge: Modernising Heritage Without Losing Authenticity',
    processHeading: 'Our Process: Rebranding, Packaging System & Label Design',
    servicesList: ['Brand Identity Redesign', 'Packaging System Design', 'Label Design', 'Brand Communication'],`
  },
  {
    target: `heroImage: '/Bhaktinandan-hero.webp',`,
    inject: `heroImageAlt: 'Bhaktinandan cold-pressed oil brand identity by Pragyan — D2C food branding',\n    heroImage: '/Bhaktinandan-hero.webp',`
  },
  {
    target: `showcaseImage1: '/bhaktinandan-oil.webp',`,
    inject: `showcaseImage1Alt: 'Bhaktinandan cold-pressed oil packaging design by Pragyan Ahmedabad',\n    showcaseImage1: '/bhaktinandan-oil.webp',`
  },
  {
    target: `showcaseImage2: '/bhaktinandan-mood.webp',`,
    inject: `showcaseImage2Alt: 'Bhaktinandan brand lifestyle photography — traditional oils, modern identity',\n    showcaseImage2: '/bhaktinandan-mood.webp',`
  },
  {
    target: `showcaseImage3: '/bhaktinandan-logo.webp',`,
    inject: `showcaseImage3Alt: 'Bhaktinandan logo design and visual identity system by Pragyan',\n    showcaseImage3: '/bhaktinandan-logo.webp',`
  },

  // PAGE 13 — Ganesh Verma
  {
    target: `'ganesh-verma': {`,
    inject: `'ganesh-verma': {
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
    ],`
  },
  {
    target: `heroImage: '/ganesh-hero.webp',`,
    inject: `heroImageAlt: 'Ganesh Verma personal branding case study by Pragyan — LinkedIn strategy for sustainability founder',\n    heroImage: '/ganesh-hero.webp',`
  }
];

// Special replacement for Yash Engineers Outcomes Title
content = content.replace(
  /'yash-engineers-\(india\)-pvt\.-ltd\.',/g,
  `'yash-engineers-india',`
); // Note: replacing any potential old slug refs
content = content.replace(
  /outcomesSection: \{\s*title: 'Outcomes',\s*text: \`The new materials provided prospects with clearer information and supported more confident conversations throughout the sales process.\`\s*\}/,
  `outcomesSection: {
      title: 'The Result: Clearer Communication, More Confident Conversations',
      text: \`The new materials provided prospects with clearer information and supported more confident conversations throughout the sales process.\`
    }`
);
// Special replacement for Bhaktinandan Outcomes Title
content = content.replace(
  /outcomesSection: \{\s*title: 'Outcomes',\s*text: \`The rebrand created a more cohesive and premium brand presence across packaging and communication materials.\`\s*\}/,
  `outcomesSection: {
      title: 'The Result: A Cohesive Premium Brand Presence Across All Packaging',
      text: \`The rebrand created a more cohesive and premium brand presence across packaging and communication materials.\`
    }`
);

for (const r of replacements) {
  content = content.replace(r.target, r.inject);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Case studies data updated');
