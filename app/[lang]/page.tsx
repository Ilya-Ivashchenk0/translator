import { getDictionary } from './dictionaries'
import { Locale } from '@/helpers/types'
import { HomePage } from '@/src/pages-components/home-page'
import cn from 'classnames'

const Home: React.FC<{
  params: { lang: Locale }
}> = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang)
  return (
    <main className={cn('h-screen flex justify-center items-center flex-col p-4')}>
      <HomePage dict={dict} lang={lang} />
    </main>
  )
}

export default Home
