/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/home',
            permanent: true,
          },
        ]
      },
    reactStrictMode: true,

    // Add basePath
    basePath: '/github-pages',
};

export default nextConfig;
