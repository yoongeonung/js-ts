/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/form',
        permanent: false,
      },
      {
        source: '/old-blog/:path*',
        destination: '/new-blog/:path*',
        permanent: false,
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: '/api/movie/:id',
        destination: `https://api.themoviedb.org/3/movies/:id?api_key=${API_KEY}`,
      }
    ]
  }
}

module.exports = nextConfig
