/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Jans Kasm Repo',
    description: 'Yes.',
    icon: '/favicon.ico',
    listUrl: 'https://jti989.github.io/kasm-repository/',
    contactUrl: 'https://none.example.com',
  },
  reactStrictMode: true,
  basePath: '/kasm-repository/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
