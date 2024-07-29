import { Controller, useFormContext } from 'react-hook-form'
import { signupFromProps } from './types'
import Link from 'next/link'
import { Button } from '@/src/shared/ui/button'
import { Input } from '@/src/shared/ui/input'

export const SignupForm: React.FC<signupFromProps> = ({
  inputs,
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
  const checkValuesAllFields = Object.values(allFields).every(field => !!field) // просмотр наличия значений сразу во всех полях

  return (
    <form className="" onSubmit={onSubmit}>
      <div className="">
        <Link className="" href="/signup">
          Зарегистрироваться
        </Link>
        <Link className="" href="/signin">
          Войти
        </Link>
      </div>
      <div className="">
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
        className=""
        type="submit"
        disabled={Object.keys(errors).length > 0 || !checkValuesAllFields}
      >
        Зарегистрироваться
      </Button>
    </form>
  )
}
