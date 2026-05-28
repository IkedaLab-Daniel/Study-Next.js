import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        // https://placehold.co/600x400/EEE/31343C
        protocol: 'https',
        hostname: 'fastly.picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig;
