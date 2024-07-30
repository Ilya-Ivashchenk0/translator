import { Avatar } from '@/src/shared/ui/avatar'

export const UserInfoHeader: React.FC = () => {
  return (
    <div className='bg-secondary-bg-color w-full min-h-32 relative rounded-b-xl'>
      <div className='absolute bottom-[-40%] left-[5%] rounded-2xl flex justify-between items-center gap-6'>
        <Avatar />
        <h3 className='text-2xl text-secondary-text-color flex gap-1 bg-primary-bg-color px-4 pt-2 rounded-t'><span className='text-action-color'>#</span>Gregg</h3>
      </div>
    </div>
  )
}