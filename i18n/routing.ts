import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['it', 'en', 'ro'],
  defaultLocale: 'it',
});
