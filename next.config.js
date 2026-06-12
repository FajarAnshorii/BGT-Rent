/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'minimax-algeng-chat-tts-us.oss-us-east-1.aliyuncs.com',
      },
    ],
  },
}

module.exports = nextConfig
