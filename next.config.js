/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true,  // Required for static export
  },
  trailingSlash: true,  // Add trailing slashes to all routes
  basePath: '/zou-john',  // Replace with your GitHub repository name
  assetPrefix: '/zou-john/',  // Replace with your GitHub repository name
}

module.exports = nextConfig 