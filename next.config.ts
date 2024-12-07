import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: '/portifolio/',
  basePath: '/portifolio',
  reactStrictMode: true,
  trailingSlash: true,
  distDir: 'out',
  images: {
    unoptimized: true, // Desabilitar otimização automática de imagens
    loader: 'imgix', // Usar loader imgix para o caminho correto
    path: '/portifolio/', // Definir caminho base para imagens
  },
};

export default nextConfig;
