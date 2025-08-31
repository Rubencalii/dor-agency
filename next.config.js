/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    allowedDevOrigins: ['http://192.168.1.39:3000'], // tu IP local
  },
};

module.exports = nextConfig;