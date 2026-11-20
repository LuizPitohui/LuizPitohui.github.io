import type { NextConfig } from "next";

// Export estático para o GitHub Pages.
// Se o site for publicado em um subcaminho (ex.: /portfolio), defina NEXT_PUBLIC_BASE_PATH=/portfolio no build.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
