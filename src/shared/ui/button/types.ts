import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

export interface buttonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: 'full' | 'void'
  icon?: string | StaticImport
}
