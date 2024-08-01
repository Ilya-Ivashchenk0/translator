'use client'

import { SignupForm } from '@/src/features/signup-form'
import { Dictionary } from '@/src/helpers/types'
import { signupInputs } from '@/src/helpers/validation'
import { usePathname } from 'next/navigation'
import { useForm, FormProvider } from 'react-hook-form'
import { signupPageProps } from './types'

export const SignupPage: React.FC<signupPageProps> = ({ dict }) => {
  const methods = useForm({
    defaultValues: Object.fromEntries(
      signupInputs.map(input => [input.name, input.defaultValue])
    ),
    mode: 'onBlur'
  })

  const pathname = usePathname()

  const onSubmit = (data: any) => {
    console.log({ ...data })
  }

  return (
    <FormProvider {...methods}>
      <SignupForm
        dict={dict}
        inputs={signupInputs}
        pathname={pathname}
        onSubmit={methods.handleSubmit(onSubmit)}
        className="signup-form"
      />
    </FormProvider>
  )
}
