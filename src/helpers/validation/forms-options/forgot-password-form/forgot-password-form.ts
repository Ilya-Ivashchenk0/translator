import {
  EMAIL_MESSAGE,
  PASSWORD_MESSAGE,
  REQUIRED_MESSAGE
} from '../../error-messages'
import { inputTypes } from '../../types'

export const forgotPasswordInputs: inputTypes[] = [
  {
    name: 'password',
    type: 'password',
    label: 'Пароль',
    defaultValue: '',
    options: {
      pattern: {
        value: /.{8,}/,
        message: PASSWORD_MESSAGE
      },
      required: {
        value: true,
        message: REQUIRED_MESSAGE
      }
    }
  },
  {
    name: 'confirm password',
    type: 'password',
    label: 'Подтверждение пароля',
    defaultValue: '',
    options: {
      pattern: {
        value: /.{8,}/,
        message: PASSWORD_MESSAGE
      },
      required: {
        value: true,
        message: REQUIRED_MESSAGE
      }
    }
  }
]
