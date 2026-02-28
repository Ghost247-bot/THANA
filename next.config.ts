import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'images.unsplash.com'
      }
    ]
  }
};

export default nextConfig;
