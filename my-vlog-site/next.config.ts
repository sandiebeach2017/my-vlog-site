import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'i.ytimg.com' }, // Allows YouTube thumbnails
      { protocol: 'https', hostname: 'images.unsplash.com' }, // Allows demo images
    ],
  },
};

export default nextConfig;
