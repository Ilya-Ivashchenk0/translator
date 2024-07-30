'use client'

import { forwardRef, ForwardRefExoticComponent, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { InputProps } from './types'
import eye from '@/shared/images/for-input/eye.svg'
import Image from 'next/image'

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

  const [inputType, setInputType] = useState(type)

  const togglePasswordVisibility = () => {
    setInputType(prevType => (prevType === 'password' ? 'text' : 'password'))
  }

  return (
    <label className="w-full relative bg-primary-bg-color rounded">
      <input
        autoComplete={name}
        name={name}
        type={inputType}
        required={required}
        value={value}
        onChange={
          onChange
            ? e => setValue(name, onChange(e))
            : e => setValue(name, e.target.value)
        }
        className={`w-full rounded bg-[#ffffff00] text-primary-text-color focus:outline-none min-h-16 px-2 ${error !== '' ? 'focus:border focus:border-action-color' : 'focus:border'}`}
        ref={ref}
        {...otherProps}
      />

      <p className="text-xs text-action-color absolute bottom-1 left-2">
        {typeof error === 'string' && error !== '' ? error : ''}
      </p>

      {type === 'password' && (
        <Image onClick={togglePasswordVisibility} className='hover:brightness-75 absolute top-[25%] cursor-pointer right-1 w-7 h-7 p-[3px] bg-secondary-bg-color rounded-full' src={eye} alt='' />
      )}

      {label !== undefined && label !== '' && (
        <span
          className={`text-secondary-text-color absolute top-1 left-2 text-xs`}
        >
          {label}
        </span>
      )}
    </label>
  )
})

Input.displayName = 'Input'

export { Input }
