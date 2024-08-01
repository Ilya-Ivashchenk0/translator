import Image from 'next/image'
import { avatarProps } from './types'

export const Avatar: React.FC<avatarProps> = ({ img }) => {
  return (
    <Image
      className="w-28 h-28 rounded-2xl border-4 border-primary-bg-color"
      src={img}
      alt=""
      placeholder="blur"
    />
  )
}
