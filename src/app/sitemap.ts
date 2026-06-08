import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.mypragyan.com'

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
  }))

  const caseStudies = [
    '/work/atc-chains-india',
    '/work/global-guardians-school',
    '/work/bhavya-srishti-udyog',
    '/work/yash-engineers',
    '/work/shreeji-packaging',
    '/work/bhaktinandan',
    '/work/ganesh-housing'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...routes, ...caseStudies]
}
