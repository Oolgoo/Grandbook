/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["storage.googleapis.com", "chart.googleapis.com", "cdn.shopify.com", "res.cloudinary.com"],
		formats: ["image/avif", "image/webp"],
		minimumCacheTTL: 720,
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
	},

};

module.exports = nextConfig;
