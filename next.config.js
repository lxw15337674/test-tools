const withLess = require('next-with-less');

/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  ...withLess({}),
  eslint: {
    dirs: ['.'],
  },
  // experimental: {
  //   // Prefer loading of ES Modules over CommonJS
  //   // @link {https://nextjs.org/blog/next-11-1#es-modules-support|Blog 11.1.0}
  //   // @link {https://github.com/vercel/next.js/discussions/27876|Discussion}
  //   esmExternals: true,
  //   // Experimental monorepo support
  //   // @link {https://github.com/vercel/next.js/pull/22867|Original PR}
  //   // @link {https://github.com/vercel/next.js/discussions/26420|Discussion}
  //   externalDir: true,
  // },
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
      },
    ];
  },
});
