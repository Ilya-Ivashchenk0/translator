import { LanguageSelector } from '@/src/features/language-selection'
import { homePageProps } from './types'
import Link from 'next/link'

export const HomePage: React.FC<homePageProps> = ({ dict, lang }) => {
  return (
    <div className="min-w-[60%] flex flex-col  gap-10">
      <h1 className="text-2xl font-bold text-secondary-text-color">
        {dict.welcome.title}
      </h1>
      <p className="text-primary-text-color">{dict.welcome.description}</p>
      <div className="w-full flex justify-center">
        <LanguageSelector currentLocale={lang} dict={dict} />
      </div>
      <div className="min-w-[100%] flex justify-around ">
        <Link
          href={`/${lang}/signup`}
          className="bg-primary-bg-color border transition-colors-[0.5s] hover:bg-action-color min-w-48 bg-blue-500 p-2 rounded text-action-color hover:text-secondary-text-color flex justify-center items-center max-w-32"
        >
          Signup
        </Link>
        <Link
          href={`/${lang}/signin`}
          className="bg-primary-bg-color border transition-colors-[0.5s] hover:bg-action-color min-w-48 bg-blue-500 p-2 rounded text-action-color hover:text-secondary-text-color flex justify-center items-center max-w-32"
        >
          Signin
        </Link>
      </div>
    </div>
  )
}
