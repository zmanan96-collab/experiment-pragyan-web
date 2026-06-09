const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/app/work/[slug]/page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Add generateMetadata
const generateMetadataCode = `
export async function generateMetadata({ params }: PageProps): Promise<import('next').Metadata> {
  const { slug } = await params;
  const project = caseStudies[slug];

  if (!project) {
    return {
      title: 'Work — Pragyan',
    };
  }

  return {
    title: project.seoTitle || \`\${project.title} — Pragyan\`,
    description: project.seoDescription || \`Case study for \${project.title}.\`,
    alternates: {
      canonical: \`https://www.mypragyan.com/work/\${slug}\`,
    },
  };
}
`;

if (!content.includes('export async function generateMetadata')) {
  content = content.replace('export default async function CaseStudyPage', generateMetadataCode + '\nexport default async function CaseStudyPage');
}

// 2. Update CaseStudyData interface
content = content.replace('interface CaseStudyData {', `interface CaseStudyData {
  seoTitle?: string;
  seoDescription?: string;
  h1?: string;
  servicesList?: string[];
  contextHeading?: string;
  processHeading?: string;
  resultsHeading?: string;
  metricsList?: { value: string, label: string }[];
  ctaHeading?: string;`);

// 3. Render the global H1
if (!content.includes('<h1 className="sr-only">{project.h1 || project.title}</h1>')) {
  content = content.replace(
    /<main className="flex-grow">/,
    `<main className="flex-grow">
        <h1 className="sr-only">{project.h1 || project.title}</h1>`
  );
}

// 4. Update the visual h1 in headline to a span
content = content.replace(
  /<h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black leading-tight tracking-tight">\s*\{project\.headline\}\s*<\/h1>/,
  `<span className="text-3xl md:text-5xl lg:text-6xl font-bold text-black leading-tight tracking-tight block" aria-hidden="true">
                  {project.headline}
                </span>`
);

// 5. Render services list as H3
content = content.replace(
  /dangerouslySetInnerHTML=\{\{ __html: project\.label \}\}/g,
  `dangerouslySetInnerHTML={{ __html: project.label }}`
); // Reset
content = content.replace(
  /<div className="col-span-4 md:col-span-3">\s*<p\s*className="text-sm text-black font-semibold leading-relaxed"\s*dangerouslySetInnerHTML=\{\{ __html: project\.label \}\}\s*\/>\s*<\/div>/,
  `<div className="col-span-4 md:col-span-3">
              {project.servicesList ? (
                <ul className="text-sm text-black font-semibold leading-relaxed">
                  {project.servicesList.map((service, idx) => (
                    <li key={idx}>
                      <h3 className="inline text-inherit font-inherit">{service}</h3>
                    </li>
                  ))}
                </ul>
              ) : (
                <p
                  className="text-sm text-black font-semibold leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: project.label }}
                />
              )}
            </div>`
);

// 6. Update CONTEXT heading
content = content.replace(
  /<p className="text-sm text-black font-semibold leading-relaxed">\s*CONTEXT\s*<\/p>/,
  `<h2 className="text-sm text-black font-semibold leading-relaxed">{project.contextHeading || 'CONTEXT'}</h2>`
);

// 7. Update PROCESS heading
content = content.replace(
  /<p className="text-sm text-black font-semibold leading-relaxed">\s*PROCESS\s*<\/p>/,
  `<h2 className="text-sm text-black font-semibold leading-relaxed">{project.processHeading || 'PROCESS'}</h2>`
);

// 8. Update RESULTS heading in customTwoCards
content = content.replace(
  /<h3 className="text-\[11px\] md:text-xs font-bold tracking-wider text-black uppercase">\s*\{project\.customTwoCards\.title\}\s*<\/h3>/,
  `<h2 className="text-[11px] md:text-xs font-bold tracking-wider text-black uppercase">
                  {project.resultsHeading || project.customTwoCards.title}
                </h2>`
);

// Add metrics list rendering
content = content.replace(
  /\{project\.customTwoCards\.extraText && \(/,
  `{project.metricsList && (
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
                {project.customTwoCards.extraText && (`
);

// 9. Add Breadcrumbs schema
const breadcrumbsCode = `
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
                  "item": \`https://www.mypragyan.com/work/\${slug}\`
                }
              ]
            })
          }}
        />
`;

if (!content.includes('"@type": "BreadcrumbList"')) {
  content = content.replace(/<main className="flex-grow">/, `<main className="flex-grow">\n${breadcrumbsCode}`);
}

// 10. We also need to update the data objects, but we can do that directly via JS replace or just replacing the whole caseStudies object.
// I will just write this content back and then use multi_replace to update the data in a cleaner way.

fs.writeFileSync(filePath, content, 'utf8');
console.log('Script completed successfully');
