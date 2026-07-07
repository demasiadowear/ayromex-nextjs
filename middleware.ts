import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match all pathnames except Next.js internals, static assets, the
    // /blog subtree (served by the AYROSEO zone via next.config rewrite —
    // next-intl must NOT treat /blog as a locale-less route and redirect it),
    // and the extension-less metadata image route (/opengraph-image) that
    // the file convention serves at the root — a locale redirect there
    // would break the og:image URL.
    '/((?!_next|_vercel|blog|opengraph-image|favicon\\.ico|logo\\.svg|brand|.*\\..*).*)',
  ],
};
