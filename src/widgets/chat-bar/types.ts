import { Dictionary } from '@/src/helpers/types'

export interface chatBarProps {
  dict: Dictionary
  isOpenBar: boolean
  toggleBar: () => void
  chats: any
}
