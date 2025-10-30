import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  outputFileTracingIncludes: {
    "/**/*": [path.resolve("./src/content/**/*")],
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.embed.ly",
      },
      // Add more if needed later
      // {
      //   protocol: "https",
      //   hostname: "another-host.com",
      // },
    ],
  },
};

export default nextConfig;
