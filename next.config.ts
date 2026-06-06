import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // 动态映射 /tool/xxx → /tools/xxx.html
      {
        source: '/tool/:slug',
        destination: '/tools/:slug.html',
      },
      // 旧链接兼容
      {
        source: '/pure-image',
        destination: '/tools/pure-image.html',
      },
    ];
  },
};

export default nextConfig;
