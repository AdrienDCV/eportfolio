/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'dist',
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

export default nextConfig;
