/** @type {import('next').NextConfig} */

module.exports = {
  redirects: async () => {
    return [
      {
        source: '/wedding/',
        destination: '/',
        permanent: true,
      },
    ]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
}
