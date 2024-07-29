import { EMAIL_MESSAGE, REQUIRED_MESSAGE } from '../../error-messages'
import { inputTypes, textareaTypes } from '../../types'

export const sandInputs: textareaTypes[] = [
  {
    name: 'text',
    label: 'Message',
    defaultValue: '',
    options: {
      minLength: {
        value: 1,
        message: 'Min length 1 sim'
      },
      maxLength: {
        value: 256,
        message: 'Max length 256 sim'
      },
      required: {
        value: true,
        message: REQUIRED_MESSAGE
      }
    }
  }
]
