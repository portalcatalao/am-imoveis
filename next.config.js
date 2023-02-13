/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['creativelayers.net', 'images4.alphacoders.com', 'amimoveiscatalao.com.br', 'www.carpemundi.com.br', '192.168.0.23']
  }
}

module.exports = nextConfig
