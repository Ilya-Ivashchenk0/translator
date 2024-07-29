import '@/app/styles/globals.css'
import { roboto, notoSans } from '@/app/fonts/fonts'
import { getDictionary } from './dictionaries'
import { Locale } from '@/helpers/types'
import React from 'react'

const RootLayout: React.FC<
  React.PropsWithChildren<{ params: { lang: Locale } }>
> = async ({ children, params }) => {
  const { lang } = params

  const dict = await getDictionary(lang) // Загрузите словарь для текущего языка

  return (
    <html lang={lang} className={`${roboto.variable} ${notoSans.variable}`}>
      <body data-lang={lang} className="bg-primary-bg-color">
        {React.cloneElement(children as React.ReactElement, { dict })}
      </body>
    </html>
  )
}

export default RootLayout
