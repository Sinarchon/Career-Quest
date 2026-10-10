/** @type {import("next").NextConfig} */
export default {
  // The browser only talks to this site; /api/* is forwarded to the FastAPI backend (keeps login cookies first-party).
  async rewrites() {
    const api = process.env.API_ORIGIN ?? 'http://localhost:8000';
    return [{ source: '/api/:path*', destination: `${api}/:path*` }];
  },
};
