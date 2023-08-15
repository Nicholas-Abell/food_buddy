/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.kasandbox.org",
        port: "http://localhost:3000/",
      },
    ],
  },
};
module.exports = nextConfig;

//    domains: ["www.kasandbox.org"], // Add the domain(s) here
