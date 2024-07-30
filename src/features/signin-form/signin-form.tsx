import { Controller, useFormContext } from 'react-hook-form'
import { signinFormProps } from './types'
import { Button } from '@/src/shared/ui/button'
import Link from 'next/link'
import { Input } from '@/src/shared/ui/input'

export const SigninForm: React.FC<signinFormProps> = ({
  className,
  inputs,
  pathname,
  onSubmit,
  recoveryLinkUrl,
  ...otherProps
}) => {
  const {
    control,
    watch,
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
        Вы здесь впервые?
        <Link
          className="text-secondary-text-color hover:text-primary-text-color underline"
          href="/signup"
        >
          Регистрация
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
      <div className="w-full flex flex-col gap-4">
        <Link
          className="w-full flex justify-end text-secondary-text-color hover:text-primary-text-color"
          href={recoveryLinkUrl}
        >
          Забыли пароль?
        </Link>
        <Button
          type="submit"
          disabled={Object.keys(errors).length > 0 || !checkValuesAllFields}
        >
          <p>Войти</p>
        </Button>
      </div>
    </form>
  )
}
