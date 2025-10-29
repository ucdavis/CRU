import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
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
