import { Dictionary } from '@/src/helpers/types'
import { StaticImageData } from 'next/image'

export interface postIdPageProps {
  dict: Dictionary
  post: {
    id: string
    avatar: StaticImageData
    title: string
    text: string
    date: Date
    ovner: string
  }
}
