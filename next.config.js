/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "mechomogenizer.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;

