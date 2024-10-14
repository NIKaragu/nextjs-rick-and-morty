/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "feji.us",
        port: "",
      },
    ],
  },
};

export default nextConfig;
