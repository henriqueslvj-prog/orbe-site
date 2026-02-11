/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }]
  },

  // ✅ Não rodar ESLint durante o build na Vercel
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
