import { Dictionary } from '@/src/helpers/types'
import { inputTypes } from '@/src/helpers/validation/types'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface forgotPasswordFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  inputs: inputTypes[]
  submit: string
  title: string
  link: {
    url: string
    text: string
  }
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>
}
