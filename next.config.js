const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  eslint: {
    dirs: ['pages', 'components', 'lib', 'layouts', 'scripts'],
  },
  swcMinify: false,
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      process: require.resolve('process/browser'),
    }
    return config
  },
})
