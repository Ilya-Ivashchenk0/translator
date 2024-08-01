import { Locale } from '@/src/helpers/types'
import { SigninPage } from '@/src/pages-components/signin-page'
import { getDictionary } from '../../dictionaries'

const Signin: React.FC<{
  params: { lang: Locale }
}> = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang)
  return (
    <div>
      <SigninPage dict={dict} />
    </div>
  )
}

export default Signin
