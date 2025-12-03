import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // importante para poder usar next export
  images: {
    unoptimized: true, // porque GitHub Pages no soporta Optimizador de imágenes de Next
  },
  // Sólo si el proyecto NO está en user.github.io sino en un repo tipo user.github.io/mi-app
  basePath: '/hecto-inmobiliaria',
  assetPrefix: '/hecto-inmobiliaria/',
  distDir: 'dist',
};

export default nextConfig;
