import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/pure-image',
        destination: '/tools/pure-image.html',
      },
    ];
  },
};

export default nextConfig;
