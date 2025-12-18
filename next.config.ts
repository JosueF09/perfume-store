import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/perfume-store',
  assetPrefix: '/perfume-store', // Añade esta línea también
  images: {
    unoptimized: true,
  },
};

export default nextConfig;