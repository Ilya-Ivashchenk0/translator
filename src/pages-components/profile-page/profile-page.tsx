import { profilePage } from './types'
import { UserInfoBody } from '@/src/features/user-info-body'
import { UserInfoDetails } from '@/src/features/user-info-details'
import { UserInfoHeader } from '@/src/features/user-info-header'

export const ProfilePage: React.FC<profilePage> = ({ dict, posts }) => {
  return (
    <div className="flex flex-col items-center">
      <UserInfoHeader />
      <UserInfoDetails
        bio={dict.profile.details.bio}
        send={dict.profile.details.send}
      />
      <UserInfoBody posts={posts} />
    </div>
  )
}
