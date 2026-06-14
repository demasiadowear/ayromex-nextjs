const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

// Origine del deployment AYROSEO che serve il blog multi-tenant.
// Env-driven (no hardcode rigido): in preview Vercel punta al deployment ayroseo
// di test, in produzione a quello prod. Default sul dominio prod ayroseo.
const AYROSEO_ORIGIN = process.env.AYROSEO_ORIGIN || 'https://ayroseo.vercel.app';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  // Il blog AYROSEO è servito come SOTTOCARTELLA /blog (pattern Next.js
  // multi-zones). Gli asset /_next NON passano da qui: AYROSEO usa assetPrefix
  // e li serve dal proprio dominio (cross-origin). Qui proxiamo solo le pagine
  // del blog e la sua sitemap. Il resto del sito madre è del tutto invariato.
  async redirects() {
    return [
      // Entry point comodo: /blog → home del blog del tenant ayromex.
      { source: '/blog', destination: '/blog/ayromex', permanent: true },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        // La sitemap del blog vive alla root di ayroseo (/sitemap.xml).
        // Deve precedere la regola /blog/:path* (match in ordine).
        { source: '/blog/sitemap.xml', destination: `${AYROSEO_ORIGIN}/sitemap.xml` },
        // Pagine del blog: /blog/{tenant}/{slug} → ayroseo, path identico.
        { source: '/blog/:path*', destination: `${AYROSEO_ORIGIN}/blog/:path*` },
      ],
    };
  },
};

module.exports = withNextIntl(nextConfig);
