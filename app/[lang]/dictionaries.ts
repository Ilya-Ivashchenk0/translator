import 'server-only'
import { Dictionary, Locale } from '@/helpers/types'

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () =>
    import('@/helpers/dictionaries/en.json').then(module => module.default),
  zh: () =>
    import('@/helpers/dictionaries/zh.json').then(module => module.default),
  hi: () =>
    import('@/helpers/dictionaries/hi.json').then(module => module.default),
  es: () =>
    import('@/helpers/dictionaries/es.json').then(module => module.default),
  fr: () =>
    import('@/helpers/dictionaries/fr.json').then(module => module.default),
  ar: () =>
    import('@/helpers/dictionaries/ar.json').then(module => module.default),
  bn: () =>
    import('@/helpers/dictionaries/bn.json').then(module => module.default),
  ru: () =>
    import('@/helpers/dictionaries/ru.json').then(module => module.default),
  pt: () =>
    import('@/helpers/dictionaries/pt.json').then(module => module.default),
  id: () =>
    import('@/helpers/dictionaries/id.json').then(module => module.default),
  ja: () =>
    import('@/helpers/dictionaries/ja.json').then(module => module.default),
  de: () =>
    import('@/helpers/dictionaries/de.json').then(module => module.default),
  ko: () =>
    import('@/helpers/dictionaries/ko.json').then(module => module.default),
  tr: () =>
    import('@/helpers/dictionaries/tr.json').then(module => module.default),
  it: () =>
    import('@/helpers/dictionaries/it.json').then(module => module.default)
}

// Убедитесь, что возвращаемое значение функции действительно является промисом.
export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  const loadDict = dictionaries[locale]
  if (typeof loadDict === 'function') {
    return loadDict()
  } else {
    throw new Error(`Dictionary for locale "${locale}" is not available`)
  }
}
