import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { inputTypes } from '@/helpers/validation/types'
import { Dictionary } from '@/src/helpers/types'

export interface signupFromProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  inputs: inputTypes[]
  dict: Dictionary
  pathname?: string | null
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>
}
