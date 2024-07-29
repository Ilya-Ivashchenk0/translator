import { Controller, useFormContext } from 'react-hook-form'
import { sendFormProps } from './types'
import { Textarea } from '@/shared/ui/textarea'

export const SendForm: React.FC<sendFormProps> = ({
  className,
  inputs,
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
      <div className="absolute bottom-[46px] w-full left-[2.5%]">
        <hr className="w-[95%] border-primary-text-color" />
      </div>
      <button
        type="submit"
        disabled={Object.keys(errors).length > 0}
        className={`cursor-pointer absolute bottom-2 right-4 px-12 py-1 rounded border border-action-color text-secondary-text-color bg-primary-bg-color hover:text-secondary-text-color hover:bg-secondary-bg-color ${Object.keys(errors).length > 0 ? 'bg-primary-text-color' : ''}`}
      >
        Send
      </button>
    </form>
  )
}
