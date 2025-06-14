/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/zou-john' : '',
  assetPrefix: isProd ? '/zou-john/' : '',
};

module.exports = nextConfig;
