import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "skillicons.dev",
      },
      {
        protocol: "https",
        hostname: "hits.sh",
      },
      {
        protocol: "https",
        hostname: "www.risein.com",
      },
      {
        protocol: "https",
        hostname: "www.sen4a-recruiters.com",
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
