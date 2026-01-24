import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const languages = ['en', 'es'];
const defaultLanguage = 'es';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = languages.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (pathnameHasLocale) return;
  const locale = request.cookies.get('i18next')?.value || defaultLanguage;
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
}
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|.*\\.svg|.*\\.png|.*\\.jpg).*)'
  ],
};
