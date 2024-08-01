import { HTMLAttributes, DetailedHTMLProps } from 'react'
import { inputTypes } from '@/helpers/validation/types'
import { Dictionary } from '@/src/helpers/types'

export interface signinFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  inputs: inputTypes[]
  dict: Dictionary
  pathname: string | null
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>
}
