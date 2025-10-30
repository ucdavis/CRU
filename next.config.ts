import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove outputFileTracingIncludes since we're using static generation
  // outputFileTracingIncludes: {
  //   "/**/*": [path.resolve("./content/**/*")],
  // },

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
