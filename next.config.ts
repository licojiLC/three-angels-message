import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    // Formatos modernos — Next.js serve AVIF/WebP automaticamente
    formats: ["image/avif", "image/webp"],

    // Tamanhos de tela para srcSet responsivo
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],

    // Tamanhos fixos para componentes menores (avatares, thumbnails)
    imageSizes: [80, 160, 320, 480, 640],

    // Domínios externos — descomente quando migrar para CDN/S3
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "cdn.threeangelsmessage.com",
      // },
      // {
      //   protocol: "https",
      //   hostname: "seu-bucket.s3.amazonaws.com",
      // },
    ],
  },
};

export default nextConfig;
