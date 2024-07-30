import { UserInfoBody } from '@/src/features/user-info-body'
import { UserInfoDetails } from '@/src/features/user-info-details'
import { UserInfoHeader } from '@/src/features/user-info-header'

export const UserInfo: React.FC = () => {
  return (
    <section className="w-full">
      <UserInfoHeader />
      <UserInfoDetails />
      <UserInfoBody />
    </section>
  )
}
