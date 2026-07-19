import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/first-website',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
