'use client'

import { SignupForm } from '@/src/features/signup-form'
import { signupInputs } from '@/src/helpers/validation'
import { usePathname } from 'next/navigation'
import { useForm, FormProvider } from 'react-hook-form'

export const SignupPage: React.FC = () => {
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
        inputs={signupInputs}
        pathname={pathname}
        onSubmit={methods.handleSubmit(onSubmit)}
        className="signup-form"
      />
    </FormProvider>
  )
}
