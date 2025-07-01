// @ts-expect-error: no type definitions for 'next-pwa'
import withPWA from 'next-pwa';
import withPlaiceholder from '@plaiceholder/next';
import type { NextConfig } from 'next';

const baseConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

// 플러그인 체이닝: 먼저 Plaiceholder → 그 결과를 PWA에 넣음
const withPlugins = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
})(withPlaiceholder(baseConfig));

export default withPlugins;
