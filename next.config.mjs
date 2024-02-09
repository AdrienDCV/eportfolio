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
    output: 'export',
    images: {
      loader: 'custom',
      loaderFile: './my-loader.ts',
    },
};

export default nextConfig;
