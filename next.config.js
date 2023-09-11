const dotenv = require("dotenv");

dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["source.unsplash.com"],
  },
};

module.exports = nextConfig;
