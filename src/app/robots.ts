import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: ['GPTBot', 'PerplexityBot', 'ClaudeBot', 'Google-Extended', 'CCBot', 'Applebot-Extended'],
        allow: '/',
      }
    ],
    sitemap: 'https://www.mypragyan.com/sitemap.xml',
  }
}
