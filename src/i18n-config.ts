export const locales = ['en', 'es', 'ja', 'de'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale = 'en';

export const routing = {
  locales,
  defaultLocale,
  pathnames: {
    '/': '/',
    '/dashboard': '/dashboard',
    '/docs': '/docs',
    '/about': '/about',
  } as const,
};