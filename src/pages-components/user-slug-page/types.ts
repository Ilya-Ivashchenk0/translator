import { Dictionary } from '@/src/helpers/types'
import { StaticImageData } from 'next/image'

interface Post {
  id: string
  avatar: StaticImageData
  title: string
  text: string
  date: Date
  ovner: string
}

export interface userSlugPageProps {
  dict: Dictionary
  posts: Post[]
}
