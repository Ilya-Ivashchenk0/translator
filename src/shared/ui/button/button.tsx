import Image from 'next/image'
import { buttonProps } from './types'

export const Button: React.FC<buttonProps> = ({
  variant = 'void',
  icon,
  children,
  disabled,
  ...otherProps
}) => {
  return (
    <button
      disabled={disabled}
      className={`max-h-10 px-4 py-2 ${disabled ? 'blur-sm cursor-default' : 'hover:brightness-75'} cursor-pointer text-secondary-text-color flex gap-2 items-center rounded ${variant === 'full' ? 'bg-action-color' : 'bg-transparent border border-action-color'}`}
      {...otherProps}
    >
      {icon && <Image className="w-5 h-5" src={icon} alt="" />}
      {children}
    </button>
  )
}
