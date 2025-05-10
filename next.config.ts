import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    transpilePackages: ['@tailwindcss/postcss'],
};

export default nextConfig;
