'use client'

import { ForgotPasswordForm } from '@/src/features/forgot-password-form'
import { forgotPasswordInputs } from '@/src/helpers/validation/forms-options/forgot-password-form'
import { FormProvider, useForm } from 'react-hook-form'

export const ForgotPasswordPage: React.FC = () => {
  const methods = useForm({
    defaultValues: Object.fromEntries(
      forgotPasswordInputs.map(input => [input.name, input.defaultValue])
    ),
    mode: 'onBlur'
  })

  const onSubmit = (data: any) => {
    console.log({ ...data })
  }

  return (
    <div>
      <FormProvider {...methods}>
        <ForgotPasswordForm
          inputs={forgotPasswordInputs}
          onSubmit={methods.handleSubmit(onSubmit)}
        />
      </FormProvider>
    </div>
  )
}
