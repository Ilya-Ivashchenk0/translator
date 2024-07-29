import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { match as localeMatcher } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

const locales = [
  // Ваши поддерживаемые локали
  'en',
  'zh',
  'hi',
  'es',
  'fr',
  'ar',
  'bn',
  'ru',
  'pt',
  'id',
  'ja',
  'de',
  'ko',
  'tr',
  'it'
]
const defaultLocale = 'en'

function getLocale(request: NextRequest): string {
  const negotiator = new Negotiator({
    headers: {
      'accept-language': request.headers.get('accept-language') || 'en'
    }
  })
  const languages = negotiator.languages()
  return localeMatcher(languages, locales, defaultLocale)
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Проверка, если в пути уже есть поддерживаемая локаль
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return NextResponse.next()

  // Определение языка и перенаправление
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ['/((?!_next).*)']
}
