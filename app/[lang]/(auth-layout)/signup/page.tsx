import { Locale } from '@/src/helpers/types'
import { SignupPage } from '@/src/pages-components/signup-page'
import { getDictionary } from '../../dictionaries'

const Signup: React.FC<{
  params: { lang: Locale }
}> = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang)
  return (
    <div>
      <SignupPage dict={dict} />
    </div>
  )
}

export default Signup
