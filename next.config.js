/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // disable wedding page for a bit
        source: '/wedding/:path*',
        destination: '/404',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
