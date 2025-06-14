/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true,  // Required for static export
  },
  trailingSlash: true,  // Add trailing slashes to all routes
  basePath: '/zou-john.github.io',  // Your GitHub Pages site
  assetPrefix: '/zou-john.github.io/',  // Your GitHub Pages site
}

module.exports = nextConfig 