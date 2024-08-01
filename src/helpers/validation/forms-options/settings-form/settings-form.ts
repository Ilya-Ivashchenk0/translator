import {
  EMAIL_MESSAGE,
  LASTNAME_MESSAGE,
  FIRSTNAME_MESSAGE,
  REQUIRED_MESSAGE
} from '../../error-messages'
import { inputTypes } from '../../types'

export const settingsInputs: inputTypes[] = [
  {
    name: 'avatar',
    type: 'file',
    label: '',
    defaultValue: ''
  },
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
  },
  {
    name: 'nikeName',
    type: 'text',
    label: 'Никнейм',
    defaultValue: '',
    options: {
      pattern: {
        value: /^[a-zA-Zа-яА-Я]{2,50}$/,
        message: LASTNAME_MESSAGE
      },
      minLength: {
        value: 2,
        message: LASTNAME_MESSAGE
      },
      maxLength: {
        value: 50,
        message: LASTNAME_MESSAGE
      },
      required: {
        value: true,
        message: REQUIRED_MESSAGE
      }
    }
  },
  {
    name: 'firstName',
    type: 'text',
    label: 'Имя',
    defaultValue: '',
    options: {
      pattern: {
        value: /^[a-zA-Zа-яА-Я]{2,50}$/,
        message: FIRSTNAME_MESSAGE
      },
      minLength: {
        value: 2,
        message: FIRSTNAME_MESSAGE
      },
      maxLength: {
        value: 50,
        message: FIRSTNAME_MESSAGE
      },
      required: {
        value: true,
        message: REQUIRED_MESSAGE
      }
    }
  }
]
