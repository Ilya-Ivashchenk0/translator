import { Controller, useFormContext } from 'react-hook-form'
import { signupFromProps } from './types'
import Link from 'next/link'
import { Button } from '@/src/shared/ui/button'
import { Input } from '@/src/shared/ui/input'

export const SignupForm: React.FC<signupFromProps> = ({
  inputs,
  dict,
  pathname,
  onSubmit,
  className
}) => {
  const {
    watch,
    control,
    formState: { errors }
  } = useFormContext()
  const allFields = watch()
  const checkValuesAllFields = Object.values(allFields).every(field => !!field)

  return (
    <form
      className="bg-secondary-bg-color rounded p-6 flex flex-col gap-3 min-w-96"
      onSubmit={onSubmit}
    >
      <p className="flex justify-between text-primary-text-color">
        {dict?.signup.title}
        <Link
          className="text-secondary-text-color hover:text-primary-text-color underline"
          href={dict.signup.signinLink.url}
        >
          {dict.signup.signinLink.text}
        </Link>
      </p>
      <div className="flex flex-col justify-center items-center gap-4">
        {inputs &&
          inputs.map(input => (
            <Controller
              key={input.name}
              name={input.name}
              control={control}
              rules={input.options}
              render={({ field }) => (
                <Input
                  {...field}
                  onChange={input.handleChange ? input.handleChange : undefined}
                  label={input.label}
                  type={input.type}
                  required
                />
              )}
            />
          ))}
      </div>
      <Button
        type="submit"
        disabled={Object.keys(errors).length > 0 || !checkValuesAllFields}
      >
        {dict.signup.submit}
      </Button>
    </form>
  )
}
