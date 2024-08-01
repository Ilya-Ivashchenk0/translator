import '@/app/styles/globals.css'
import { roboto, notoSans } from '@/app/fonts/fonts'
import { getDictionary } from './dictionaries'
import { Locale } from '@/helpers/types'
import React from 'react'

const RootLayout: React.FC<
  React.PropsWithChildren<{ params: { lang: Locale } }>
> = ({ children, params }) => {
  const { lang } = params

  return (
    <html lang={lang} className={`${roboto.variable} ${notoSans.variable}`}>
      <body data-lang={lang} className="bg-primary-bg-color">
        {children}
      </body>
    </html>
  )
}

export default RootLayout
