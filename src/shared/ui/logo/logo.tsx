import Image from 'next/image'
import logo from '@/shared/images/for-logo/logo.png'
import { logoProps } from './types'

export const Logo: React.FC<logoProps> = ({ direction }) => {
  return (
    <div className="py-4 flex items-center gap-3">
      <Image
        className={`w-14 h-14 rounded-full`}
        src={logo}
        alt={''}
        placeholder="blur"
      />
      <h2 className="text-xl text-secondary-text-color">Barrier</h2>
    </div>
  )
}
