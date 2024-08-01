import { Dictionary } from '@/src/helpers/types'

export interface typeMessage {
  ownerId: string
  ownerName: string
  date: Date
  text: string
}

interface typeChat {
  owners: string[]
  messages: typeMessage[]
}

export interface chatBodyProps {
  dict: Dictionary
  isOpenBar: boolean
  chat: typeChat
}
