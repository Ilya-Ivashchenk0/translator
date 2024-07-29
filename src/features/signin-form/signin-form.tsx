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
    <form className="" onSubmit={onSubmit}>
      <div className="">
        <Link className={''} href="/signup">
          Зарегистрироваться
        </Link>
        <p className="">Войти</p>
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
      <div className="">
        <Link className="" href={recoveryLinkUrl}>
          <p>Забыли пароль?</p>
        </Link>
        <Button
          className=""
          type="submit"
          disabled={Object.keys(errors).length > 0 || !checkValuesAllFields}
        >
          <p>Войти</p>
        </Button>
      </div>
    </form>
  )
}
