import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: '/portifolio/',
  basePath: '/portifolio',
  reactStrictMode: true,
  trailingSlash: true,
  distDir: 'out',
};

export default nextConfig;
