/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    images: {
        domains: [
            "localhost",
            "img.opencritic.com"
        ],
    },
};

export default nextConfig;
