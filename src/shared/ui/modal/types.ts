import { ReactNode } from 'react'
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

export interface popupProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isOpen: boolean
  onClose: () => void
  confirmFunction: () => void
  isCloseByOverlay: boolean
  title?: string | undefined
  children?: ReactNode
  actions?: ReactNode[]
  variant?: 'default' | 'confirm'
  confirmText?: string
  cancelText?: string
}
