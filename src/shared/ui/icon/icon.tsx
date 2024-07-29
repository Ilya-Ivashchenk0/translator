'use client'

import Image from 'next/image'
import { iconProps } from './types'

export const Icon: React.FC<iconProps> = ({ path, primary }) => {
  return <Image className="" src={path} alt={''} />
}
