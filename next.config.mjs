/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  experimental: {
    serverComponentsExternalPackages: ["@react-pdf/renderer"],
  },
};

export default nextConfig;
