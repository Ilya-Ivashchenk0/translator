import { Dictionary, Locale } from '@/src/helpers/types'
import { Dispatch, SetStateAction } from 'react'

export interface languageSelectionProps {
  currentLocale: Locale
  setCurrentLocale: Dispatch<SetStateAction<Locale>>
  mode: 'home' | 'settings'
  text: string | undefined
}
