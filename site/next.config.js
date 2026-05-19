/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Jans Kasm Repo',
    description: 'Yes.',
    icon: '/img/logo.svg',
    listUrl: 'https://jti989.github.io/kasm-repository/',
    contactUrl: 'https://none.example.com',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
