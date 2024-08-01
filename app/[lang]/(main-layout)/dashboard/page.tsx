import { Locale } from '@/src/helpers/types'
import { DashboardPage } from '@/src/pages-components/dashboard-page'
import { getDictionary } from '../../dictionaries'

const Dashboard: React.FC<{
  params: { lang: Locale }
}> = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang)
  return (
    <div>
      <DashboardPage dict={dict} />
    </div>
  )
}

export default Dashboard
