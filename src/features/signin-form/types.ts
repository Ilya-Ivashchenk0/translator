import { HTMLAttributes, DetailedHTMLProps } from 'react'
import { inputTypes } from '@/helpers/validation/types'

export interface signinFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  inputs: inputTypes[]
  pathname: string | null
  recoveryLinkUrl: string
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>
}
