import { inputTypes } from '@/src/helpers/validation/types'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface forgotPasswordFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  inputs: inputTypes[]
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>
}
