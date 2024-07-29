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
  isOpenBar: boolean
  chat: typeChat
}
