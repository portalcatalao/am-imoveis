/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['creativelayers.net', 'images4.alphacoders.com']
  }
}

module.exports = nextConfig
