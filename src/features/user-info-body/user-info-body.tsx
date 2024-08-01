import { Post } from '@/src/shared/ui/post'
import { userInfoBodyProps } from './types'

export const UserInfoBody: React.FC<userInfoBodyProps> = ({ posts }) => {
  return (
    <section className="py-12 w-[90%]">
      <ul className="flex flex-col gap-8">
        {posts.map((post, index) => (
          <li key={index}>
            <Post
              id={post.id}
              avatar={post.avatar}
              title={post.title}
              text={post.text}
              date={post.date}
              ovner={post.ovner}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
