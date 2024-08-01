import { Button } from '@/src/shared/ui/button'
import { userInfoDetailsProps } from './types'

export const UserInfoDetails: React.FC<userInfoDetailsProps> = ({
  bio,
  send
}) => {
  return (
    <section className="w-full flex flex-col pt-20 items-center">
      <hr className="w-[90%] border-primary-text-color pb-4" />
      <div className="w-[90%] rounded p-4 flex justify-between">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl text-primary-text-color">{bio}</h3>
          <p className="text-sm text-secondary-text-color">
            The internet&#39;s friendliest designer kid.
          </p>
        </div>
        <div className="flex gap-8">
          <Button variant="full">0xc0E3...B79C</Button>
          <Button>{send}</Button>
        </div>
      </div>
    </section>
  )
}
