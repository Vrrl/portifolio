import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  // assetPrefix: isProd ? '/portifolio/' : '',
  // basePath: isProd ? '/portifolio' : '',
  reactStrictMode: true,
  trailingSlash: true,
  distDir: 'out',
};

export default nextConfig;
