/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    forceSwcTransforms: true,
  },
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  // assetPrefix: process.env.NODE_ENV === "production" ? "/about/" : undefined,
  basePath: "",
  assetPrefix: "",
};
module.exports = nextConfig;
