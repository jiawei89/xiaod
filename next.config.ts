import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // 工具列表页
      {
        source: '/tool',
        destination: '/tools/index.html',
      },
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
      // 游戏列表页
      {
        source: '/game',
        destination: '/games/index.html',
      },
      // 动态映射 /game/xxx → /games/xxx.html
      {
        source: '/game/:slug',
        destination: '/games/:slug.html',
      },
    ];
  },
};

export default nextConfig;
