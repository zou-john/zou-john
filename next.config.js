/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true,  // Required for static export
  },
  trailingSlash: true,  // Add trailing slashes to all routes
  basePath: process.env.NODE_ENV === 'production' ? '/zou-john' : '',  // Only add basePath in production
  assetPrefix: process.env.NODE_ENV === 'production' ? '/zou-john/' : '',  // Only add assetPrefix in production
  distDir: 'out',  // Specify output directory
}

module.exports = nextConfig;