/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Required for GitHub Pages sub-directory hosting
  basePath: '/Mr.Mystery',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
