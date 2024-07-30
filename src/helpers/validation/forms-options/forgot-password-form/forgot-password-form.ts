import { EMAIL_MESSAGE, REQUIRED_MESSAGE } from '../../error-messages'
import { inputTypes } from '../../types'

export const forgotPasswordInputs: inputTypes[] = [
  {
    name: 'email',
    type: 'email',
    label: 'E-mail',
    defaultValue: '',
    options: {
      pattern: {
        value: /^.+@.+\..+$/,
        message: EMAIL_MESSAGE
      },
      required: {
        value: true,
        message: REQUIRED_MESSAGE
      }
    }
  }
]
