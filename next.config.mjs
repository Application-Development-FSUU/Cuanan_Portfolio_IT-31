/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Skip ESLint during production builds to avoid known tooling issues
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
