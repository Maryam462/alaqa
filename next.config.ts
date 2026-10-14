import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/photo-*',

      },
    ],
  },
  cacheComponents: false,
  partialPrefetching: false,
};

export default nextConfig;
