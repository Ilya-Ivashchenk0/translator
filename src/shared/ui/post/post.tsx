'use client'

import Image from 'next/image'
import { postProps } from './types'
import { useRouter } from 'next/navigation'

export const Post: React.FC<postProps> = ({
  id,
  avatar,
  title,
  text,
  date,
  ovner
}) => {
  const router = useRouter()

  return (
    <article
      onClick={() => router.push(`/post/${id}`)}
      className="hover:outline hover:outline-[1px] hover:outline-secondary-text-color cursor-pointer bg-secondary-bg-color rounded relative overflow-hidden flex flex-col justify-center items-center px-4 pt-4 pb-20 gap-4"
    >
      <div className="w-full flex flex-col gap-4">
        <h3 className="rounded-xl bg-primary-bg-color w-max px-4 text-secondary-text-color text-xl">
          {title}
        </h3>
        <p className="text-lg text-secondary-text-color line-clamp-3 max-h-40">
          {text}
        </p>
      </div>
      <small className="absolute bottom-4 left-4 text-primary-text-color text-xs">{`${date}`}</small>
      <div className="absolute bottom-4 right-4 flex items-end gap-4">
        <span className="text-sm text-secondary-text-color">{ovner}</span>
        <Image className="w-16 h-16 rounded-full" src={avatar} alt="" />
      </div>
    </article>
  )
}
