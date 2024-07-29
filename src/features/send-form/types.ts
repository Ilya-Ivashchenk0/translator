import { textareaTypes } from '@/src/helpers/validation/types'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface sendFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  inputs: textareaTypes[]
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>
}
