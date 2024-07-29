'use client'

import { forwardRef, ForwardRefExoticComponent } from 'react'
import { useFormContext } from 'react-hook-form'
import { InputProps } from './types'

const Input: ForwardRefExoticComponent<InputProps> = forwardRef<
  HTMLInputElement,
  InputProps
>((props, ref) => {
  const {
    name,
    label,
    className,
    required,
    onChange,
    type = 'text',
    ...otherProps
  } = props

  const {
    watch,
    formState: { errors },
    setValue
  } = useFormContext()

  const value = watch(name)
  const error = errors[name]?.message || ''

  return (
    <label className="">
      <input
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={
          onChange
            ? e => setValue(name, onChange(e))
            : e => setValue(name, e.target.value)
        }
        className=""
        ref={ref}
        {...otherProps}
      />

      <p className="">
        {typeof error === 'string' && error !== '' ? error : ''}
      </p>

      {label !== undefined && label !== '' && <span className="">{label}</span>}
    </label>
  )
})

Input.displayName = 'Input'

export { Input }
