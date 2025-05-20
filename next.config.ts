import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "www.zastavki.com" },
      { hostname: "images-porsche.imgix.net" },
      { hostname: "i.pinimg.com" },
      { hostname: "cache3.arabwheels.ae" },
    ],
  },
};

export default nextConfig;
