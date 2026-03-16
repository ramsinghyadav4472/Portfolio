import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone output for optimized Docker images
  output: "standalone",

  // Enable response compression
  compress: true,

  // Poweredby header removal (security)
  poweredByHeader: false,

  // Image optimization with remote patterns
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ghchart.rshah.org",
      },
      {
        protocol: "https",
        hostname: "github-readme-streak-stats.herokuapp.com",
      },
    ],
  },

  // Headers for security and caching
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        // Cache static assets aggressively
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
  
  // Suppress font fetch errors during build in environments with no internet access
  // or restricted connectivity (like Docker on Windows)
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
