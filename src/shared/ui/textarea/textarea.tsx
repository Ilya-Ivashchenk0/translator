'use client'

import { useRef, ForwardRefExoticComponent, forwardRef } from 'react'
import { textareaProps } from '@/shared/ui/textarea/types'
import { useFormContext } from 'react-hook-form'

const Textarea: ForwardRefExoticComponent<textareaProps> = forwardRef<
  HTMLTextAreaElement,
  textareaProps
>((props, ref) => {
  const { name, label, className, required, onChange, ...otherProps } = props

  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  const {
    watch,
    formState: { errors },
    setValue
  } = useFormContext()

  const value = watch(name)
  const error = errors[name]?.message || ''

  return (
    <div
      className="w-full h-full px-4 py-2 rounded-sm bg-secondary-bg-color relative pb-14"
      onClick={() => {
        if (textareaRef.current) {
          textareaRef.current.focus()
        }
      }}
    >
      <label
        className="absolute bottom-2 left-4 text-xs font-bold text-primary-text-color"
        htmlFor="textarea"
      >
        {label}
      </label>
      <textarea
        ref={textareaRef}
        id="textarea"
        value={value}
        onChange={
          onChange
            ? e => setValue(name, onChange(e))
            : e => setValue(name, e.target.value)
        }
        className="w-full h-full bg-secondary-bg-color overflow-x-hidden overflow-y-scroll focus:outline-none resize-none text-secondary-text-color scrollbar"
        autoComplete="off"
        required={required}
      />
    </div>
  )
})

Textarea.displayName = 'Textarea'

export { Textarea }
