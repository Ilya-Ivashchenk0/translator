'use client'

import { Avatar } from '@/src/shared/ui/avatar'
import { postIdPageProps } from './types'
import back from '@/shared/images/for-post-id-page/back.svg'
import { Button } from '@/src/shared/ui/button'
import { useRouter } from 'next/navigation'

export const PostIdPage: React.FC<postIdPageProps> = ({ post, dict }) => {
  const router = useRouter()

  return (
    <div className="px-4 pt-20 flex flex-col gap-12">
      <div className="flex flex-col gap-8 bg-secondary-bg-color p-4 rounded relative pt-20">
        <div className="absolute top-4 right-4">
          <Button onClick={() => router.back()} type="button" icon={back}>
            {dict.postId.back}
          </Button>
        </div>
        <div className="flex items-end gap-8 absolute -top-14">
          <Avatar img={post.avatar} />
          <h3 className="text-xl text-secondary-text-color">{post.ovner}</h3>
        </div>
        <h3 className="text-3xl text-primary-text-color rounded-3xl px-2 bg-primary-bg-color w-max">
          {post.title}
        </h3>
        <p className="text-xl text-secondary-text-color">{post.text}</p>
        <span className="text-sm text-primary-text-color text-right">{`${post.date}`}</span>
      </div>
    </div>
  )
}
