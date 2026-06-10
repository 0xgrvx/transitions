/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/transitions' : '',
  output: 'export',
  images: { unoptimized: true },
}

module.exports = nextConfig
