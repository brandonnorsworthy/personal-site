/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: '/wedding/admin',
        destination: '/wedding',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
