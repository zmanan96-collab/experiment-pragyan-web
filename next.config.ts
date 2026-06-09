import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/work/yash-engineers-\\(india\\)-pvt.-ltd.',
        destination: '/work/yash-engineers-india',
        permanent: true,
      },
    ];
  },
  allowedDevOrigins: ['192.168.1.10', 'localhost:3000'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Exclude large packages from serverless bundle to stay within Vercel's 250MB limit
  outputFileTracingExcludes: {
    '*': [
      'node_modules/xlsx/**',
      'node_modules/three/**',
      'node_modules/@types/three/**',
      'node_modules/canvas/**',
    ],
  },
};

export default nextConfig;
