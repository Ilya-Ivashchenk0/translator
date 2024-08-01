'use client'

import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Locale } from '@/helpers/types'
import { languageSelectionProps } from './types'

const supportedLocales: Locale[] = [
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

export const LanguageSelector: React.FC<languageSelectionProps> = ({
  currentLocale,
  setCurrentLocale,
  mode,
  text
}) => {
  const router = useRouter()

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value as Locale
    if (mode === 'home') {
      setCurrentLocale(newLang)
      router.replace(`/${newLang}`)
    } else {
      setCurrentLocale(newLang)
    }
  }

  return (
    <form className="flex gap-10 bg-secondary-bg-color p-4 rounded-md">
      <label htmlFor="language-select" className="text-primary-text-color">
        {text}
      </label>
      <select
        id="language-select"
        value={currentLocale}
        onChange={handleLanguageChange}
        className="rounded border border-primary-text-color text-secondary-text-color bg-primary-bg-color"
      >
        {supportedLocales.map(locale => (
          <option className="rounded-none" key={locale} value={locale}>
            {locale.toUpperCase()}
          </option>
        ))}
      </select>
    </form>
  )
}
