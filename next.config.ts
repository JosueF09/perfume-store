import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/perfume-store',
  assetPrefix: '/perfume-store', 
  images: {
    unoptimized: true,
  },
};

export default nextConfig;