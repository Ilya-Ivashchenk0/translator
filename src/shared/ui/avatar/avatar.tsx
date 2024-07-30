import Image from 'next/image'
import img from '@/shared/images/for-logo/logo.png'

export const Avatar: React.FC = () => {
  return (
    <Image
      className="w-28 h-28 rounded-2xl border-4 border-primary-bg-color"
      src={img}
      alt=""
      placeholder="blur"
    />
  )
}
