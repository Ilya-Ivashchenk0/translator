import { Controller, useFormContext } from 'react-hook-form'
import { sendFormProps } from './types'
import { Textarea } from '@/shared/ui/textarea'
import { Button } from '@/src/shared/ui/button'
import send from '@/shared/images/for-send-form/send.svg'

export const SendForm: React.FC<sendFormProps> = ({
  className,
  inputs,
  submitText,
  onSubmit,
  ...otherProps
}) => {
  const {
    control,
    watch,
    formState: { errors }
  } = useFormContext()

  const allFields = watch()

  return (
    <form
      className="p-1 h-full flex flex-col gap-2 relative"
      onSubmit={onSubmit}
    >
      <div className="h-full">
        {inputs &&
          inputs.map(input => (
            <Controller
              key={input.name}
              name={input.name}
              control={control}
              rules={input.options}
              render={({ field }) => (
                <Textarea
                  {...field}
                  onChange={input.handleChange ? input.handleChange : undefined}
                  label={input.label}
                  required
                />
              )}
            />
          ))}
      </div>
      <div className="absolute bottom-[54px] w-full left-[2.5%]">
        <hr className="w-[95%] border-primary-text-color" />
      </div>
      <div className={`absolute bottom-2 right-4`}>
        <Button
          type="submit"
          disabled={Object.keys(errors).length > 0}
          icon={send}
        >
          {submitText}
        </Button>
      </div>
    </form>
  )
}
