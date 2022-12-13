const withLess = require('next-with-less');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  ...withLess({}),
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript:{
    ignoreBuildErrors: true,
  },
  output: 'standalone',

  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/compare',
        permanent: true,
      },]
  },
  async rewrites() {
    return {
      fallback: [
        {
          source: '/BimToolApi/:path*',
          destination: 'https://bim-tool-service-sit.qunhequnhe.com/BimToolApi/:path*',
        },
        {
          source: '/kaptain/:path*',
          destination: 'https://kaptain.qunhequnhe.com/:path*',
        }
      ],
    }
  },
});
