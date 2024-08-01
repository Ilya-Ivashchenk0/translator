import { Locale } from '@/src/helpers/types'
import { ForgotPasswordPage } from '@/src/pages-components/forgot-password-page'
import { getDictionary } from '../../dictionaries'

const ForgotPassword: React.FC<{
  params: { lang: Locale }
}> = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang)
  return (
    <div>
      <ForgotPasswordPage dict={dict} />
    </div>
  )
}

export default ForgotPassword
