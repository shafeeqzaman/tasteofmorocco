import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,  // allow type errors to pass build
  },
  eslint: {
    ignoreDuringBuilds: true,  // allow eslint errors to pass build
  },
};

export default nextConfig;
