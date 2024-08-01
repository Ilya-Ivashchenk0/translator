import { Locale } from '@/src/helpers/types'
import { SettingsPage } from '@/src/pages-components/settings-page'
import { getDictionary } from '../../dictionaries'

const Settings: React.FC<{
  params: { lang: Locale }
}> = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang)
  return (
    <div>
      <SettingsPage dict={dict} lang={lang} />
    </div>
  )
}

export default Settings
