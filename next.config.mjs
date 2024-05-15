/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/adcv-eportfolio',
    output: 'export',
    reactStrictMode: true,
    async redirects() {
        return [
          {
            source: '/',
            destination: '/home',
            permanent: true,
          },
        ]
      },
};
module.exports = nextConfig;
export default nextConfig;
