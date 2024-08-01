import { Dictionary, Locale } from '@/src/helpers/types'
import { inputTypes } from '@/src/helpers/validation/types'
import {
  DetailedHTMLProps,
  HTMLAttributes,
  SetStateAction,
  Dispatch
} from 'react'

export interface settingsFromProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  inputs: inputTypes[]
  dict: Dictionary
  currentLocale: Locale
  setCurrentLocale: Dispatch<SetStateAction<Locale>>
  editMode: boolean
  setEditMode: Dispatch<SetStateAction<boolean>>
  avatar: string | undefined
  setAvatar: Dispatch<SetStateAction<string | undefined>>
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>
}
