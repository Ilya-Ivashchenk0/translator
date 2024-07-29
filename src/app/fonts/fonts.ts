import { Roboto, Noto_Sans } from 'next/font/google'

// Roboto для латинских и кириллических символов
export const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
  variable: '--font-roboto',
  display: 'swap', // 'swap' обеспечивает быструю замену шрифта при загрузке
  fallback: ['sans-serif']
})

// Noto Sans для дополнительных языков
export const notoSans = Noto_Sans({
  subsets: [
    'latin',
    'cyrillic',
    'latin-ext',
    'greek',
    'vietnamese',
    'devanagari'
  ], // Измененные наборы символов
  weight: ['400', '700'],
  variable: '--font-noto-sans',
  display: 'swap',
  fallback: ['sans-serif']
})
