import { buttonProps } from './types'

export const Button: React.FC<buttonProps> = ({
  variant = 'violet',
  children,
  disabled,
  ...otherProps
}) => {
  return (
    <button
      disabled={disabled}
      className={`w-32 h-6 ${variant === 'violet' ? 'bg-action-color rounded' : ''}`}
      {...otherProps}
    >
      {children}
    </button>
  )
}
