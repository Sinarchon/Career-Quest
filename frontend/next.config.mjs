/** @type {import("next").NextConfig} */
export default {
  async rewrites() {
    const api = process.env.API_ORIGIN ?? 'http://localhost:8000';
    return [{ source: '/api/:path*', destination: `${api}/:path*` }];
  },
};