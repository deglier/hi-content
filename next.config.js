/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['public.tsx', 'public.ts'],
  images: {
    deviceSizes: [580, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [250, 350, 450, 640, 720, 1024, 1280, 1366],
  },
}

module.exports = nextConfig
