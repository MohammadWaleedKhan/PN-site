/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  // ...other Next.js config options
});


const nextConfig = {
  experimental: {
    appDir: false 
  },
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // compiler: {
  //   emotion: true,
  // }
};

module.exports = withPWA(nextConfig);
