/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: true,
    },
    i18n: {
      defaultLocale: 'es',
      locales: ['es', 'en'],
    },
  };
  
  module.exports = nextConfig;
  