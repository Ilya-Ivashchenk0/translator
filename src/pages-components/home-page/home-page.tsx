'use client'

import { LanguageSelector } from '@/src/shared/ui/language-selection'
import { homePageProps } from './types'
import Link from 'next/link'
import { useState } from 'react'
import { Locale } from '@/src/helpers/types'

export const HomePage: React.FC<homePageProps> = ({ dict, lang }) => {
  const [currentLocale, setCurrentLocale] = useState<Locale>(lang)

  return (
    <div className="h-screen w-full bg-secondary-bg-color flex flex-col gap-10 rounded p-12">
      <h1 className="w-full flex justify-center text-2xl font-bold text-secondary-text-color">
        {dict?.home.title}
      </h1>
      <div className="flex gap-12">
        <div className="flex flex-col gap-12">
          <p className="bg-primary-bg-color rounded p-4 text-secondary-text-color max-w-lg">
            {dict?.home.description}
          </p>
          <LanguageSelector
            mode="home"
            currentLocale={currentLocale}
            setCurrentLocale={setCurrentLocale}
            text={dict?.home.switcher}
          />
        </div>
        <div className="flex flex-col items-center gap-8">
          <Link
            href={`/${lang}/signup`}
            className="bg-primary-bg-color border transition-colors-[0.5s] hover:bg-action-color min-w-48 bg-blue-500 p-2 rounded text-action-color hover:text-secondary-text-color flex justify-center items-center max-w-32"
          >
            {dict?.home.signup}
          </Link>
          <Link
            href={`/${lang}/signin`}
            className="bg-primary-bg-color border transition-colors-[0.5s] hover:bg-action-color min-w-48 bg-blue-500 p-2 rounded text-action-color hover:text-secondary-text-color flex justify-center items-center max-w-32"
          >
            {dict?.home.signin}
          </Link>
        </div>
      </div>
    </div>
  )
}
