import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match all pathnames except Next.js internals, static assets, and the
    // /blog subtree (served by the AYROSEO zone via next.config rewrite —
    // next-intl must NOT treat /blog as a locale-less route and redirect it).
    '/((?!_next|_vercel|blog|favicon\\.ico|logo\\.svg|brand|.*\\..*).*)',
  ],
};
