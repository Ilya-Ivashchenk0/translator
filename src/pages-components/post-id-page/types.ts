import { StaticImageData } from 'next/image'

export interface postIdPageProps {
  post: {
    id: string
    avatar: StaticImageData
    title: string
    text: string
    date: Date
    ovner: string
  }
}
