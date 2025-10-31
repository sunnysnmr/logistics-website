import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["en", "ms", "zh"],
    defaultLocale: "en",
    localeDetection: true,
  },
};

export default nextConfig;
