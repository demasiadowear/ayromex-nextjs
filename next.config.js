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

      // Alias marketing: /meta-tech-provider → pagina WhatsApp Business
      // API (slug SEO canonico). Evita una pagina duplicata.
      {
        source: '/meta-tech-provider',
        destination: '/it/whatsapp-business-api',
        permanent: true,
      },
      {
        source: '/:locale(it|en|ro)/meta-tech-provider',
        destination: '/:locale/whatsapp-business-api',
        permanent: true,
      },

      // /kit → WhatsApp con messaggio precompilato (card AYROMEX recensioni
      // Google). statusCode 301 esplicito richiesto (permanent:true darebbe 308).
      {
        source: '/kit',
        destination:
          'https://wa.me/390808407861?text=Ciao%2C%20ho%20visto%20le%20card%20AYROMEX%20per%20le%20recensioni%20Google%2C%20mi%20interessano%20per%20la%20mia%20attivit%C3%A0',
        statusCode: 301,
      },

      // ── Redirect legacy (rotte del sito marzo 2026, ora 404 in GSC) ──
      // Queste regole girano PRIMA del middleware next-intl, quindi
      // intercettano anche le vecchie URL senza prefisso locale (l'IT
      // viveva alla root nella versione precedente).

      // /termini → /terms (la pagina è stata rinominata)
      { source: '/termini', destination: '/it/terms', permanent: true },
      {
        source: '/:locale(it|en|ro)/termini',
        destination: '/:locale/terms',
        permanent: true,
      },

      // Vecchie pagine prodotto dedicate → nuova pagina /prodotti
      // con àncora al deep dive corrispondente.
      {
        source: '/prodotti/ayrodesk24',
        destination: '/it/prodotti#ayrodesk24',
        permanent: true,
      },
      {
        source: '/prodotti/ayrohub',
        destination: '/it/prodotti#ayrohub',
        permanent: true,
      },
      {
        source: '/:locale(it|en|ro)/prodotti/ayrodesk24',
        destination: '/:locale/prodotti#ayrodesk24',
        permanent: true,
      },
      {
        source: '/:locale(it|en|ro)/prodotti/ayrohub',
        destination: '/:locale/prodotti#ayrohub',
        permanent: true,
      },
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
