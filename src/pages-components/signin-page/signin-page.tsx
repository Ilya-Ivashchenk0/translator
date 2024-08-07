'use client'

import { SigninForm } from '@/src/features/signin-form/signin-form'
import { signinInputs } from '@/src/helpers/validation'
import { usePathname } from 'next/navigation'
import { FormProvider, useForm } from 'react-hook-form'
import { signinPageProps } from './types'

export const SigninPage: React.FC<signinPageProps> = ({ dict }) => {
  const methods = useForm({
    defaultValues: Object.fromEntries(
      signinInputs.map(input => [input.name, input.defaultValue])
    ),
    mode: 'onBlur'
  })

  const pathname = usePathname()

  const onSubmit = (data: any) => {
    console.log({ ...data })
  }

  return (
    <FormProvider {...methods}>
      <SigninForm
        inputs={signinInputs}
        dict={dict}
        pathname={pathname}
        onSubmit={methods.handleSubmit(onSubmit)}
      />
    </FormProvider>
  )
}
