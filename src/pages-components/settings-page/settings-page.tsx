'use client'

import { FormProvider, useForm } from 'react-hook-form'
import { settingsPageProps } from './types'
import { settingsInputs } from '@/src/helpers/validation'
import { SettingsForm } from '@/src/features/settings-form'
import { useState } from 'react'
import { Locale } from '@/src/helpers/types'

export const SettingsPage: React.FC<settingsPageProps> = ({ dict, lang }) => {
  const [avatar, setAvatar] = useState<string | undefined>(undefined)
  const [editMode, setEditMode] = useState<boolean>(false)
  const [currentLocale, setCurrentLocale] = useState<Locale>(lang)

  const methods = useForm({
    defaultValues: {
      email: '',
      nikeName: '',
      firstName: ''
    },
    mode: 'onBlur'
  })

  const onSubmit = (data: any) => {
    console.log({ ...data })
  }

  return (
    <div className="p-4 h-screen">
      <FormProvider {...methods}>
        <SettingsForm
          dict={dict}
          currentLocale={currentLocale}
          setCurrentLocale={setCurrentLocale}
          editMode={editMode}
          setEditMode={setEditMode}
          inputs={settingsInputs}
          onSubmit={methods.handleSubmit(onSubmit)}
          avatar={avatar}
          setAvatar={setAvatar}
        />
      </FormProvider>
    </div>
  )
}
