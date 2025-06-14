/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true,  // Required for static export
  },
  trailingSlash: true,  // Add trailing slashes to all routes
  basePath: '/zou-john',  // Your GitHub Pages repository name
  assetPrefix: '/zou-john/',  // Your GitHub Pages repository name
}

module.exports = nextConfig 