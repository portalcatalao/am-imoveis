/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['creativelayers.net', 'images4.alphacoders.com', 'amimoveiscatalao.com.br', 'www.carpemundi.com.br', 'imoveis.portalcatalao.com.br']
  }
}

module.exports = nextConfig
