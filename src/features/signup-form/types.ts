import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { inputTypes } from '@/helpers/validation/types'

export interface signupFromProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  inputs: inputTypes[]
  pathname: string | null
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>
}
