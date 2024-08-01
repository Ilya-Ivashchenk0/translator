import { StaticImageData } from 'next/image'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface postProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  id: string
  avatar: StaticImageData
  title: string
  text: string
  date: Date
  ovner: string
}
