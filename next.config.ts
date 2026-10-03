import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site: deployable to any static host (Vercel, Netlify, GitHub Pages, S3 + CloudFront).
  output: "export",
  // Set when served from a sub-path, e.g. "/portfolio" for github.io/portfolio. Empty at a domain root.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
