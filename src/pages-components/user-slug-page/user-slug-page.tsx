import { userSlugPageProps } from './types'
import { UserInfoBody } from '@/src/features/user-info-body'
import { UserInfoDetails } from '@/src/features/user-info-details'
import { UserInfoHeader } from '@/src/features/user-info-header'

export const UserSlugPage: React.FC<userSlugPageProps> = ({ dict, posts }) => {
  return (
    <div className="flex flex-col items-center">
      <UserInfoHeader />
      <UserInfoDetails
        bio={dict.user.details.bio}
        send={dict.user.details.send}
      />
      <UserInfoBody posts={posts} />
    </div>
  )
}
