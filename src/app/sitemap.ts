import { MetadataRoute } from 'next';
import { caseStudies } from './work/[slug]/page';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.mypragyan.com';

  const routes = [
    '',
    '/work',
    '/services',
    '/culture',
    '/inquiry',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const caseStudyRoutes = Object.keys(caseStudies).map((slug) => ({
    url: `${baseUrl}/work/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...caseStudyRoutes];
}
