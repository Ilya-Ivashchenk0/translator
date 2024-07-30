import { buttonProps } from './types'

export const Button: React.FC<buttonProps> = ({
  variant = 'void',
  children,
  disabled,
  ...otherProps
}) => {
  return (
    <button
      disabled={disabled}
      className={`px-4 py-2 ${disabled ? 'blur-sm cursor-default' : 'hover:brightness-75'} cursor-pointer rounded ${variant === 'full' ? 'bg-action-color border text-secondary-text-color' : 'bg-transparent border border-action-color text-action-color'}`}
      {...otherProps}
    >
      {children}
    </button>
  )
}
