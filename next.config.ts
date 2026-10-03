import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site: deployable to any static host (Vercel, Netlify, GitHub Pages, S3 + CloudFront).
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
