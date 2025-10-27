import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // 👇 This ensures your markdown folders are bundled in the build
  outputFileTracingIncludes: {
    "/**/*": [path.resolve("./src/content/**/*")],
  },

  webpack: (config) => {
    // Optional: allow importing .md files directly as raw text if ever needed
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
};

export default nextConfig;
