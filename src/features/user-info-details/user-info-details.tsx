import { Button } from '@/src/shared/ui/button'

export const UserInfoDetails: React.FC = () => {
  return (
    <section className="flex flex-col pt-20 items-center">
      <hr className="w-[90%] border-primary-text-color pb-4" />
      <div className="bg-secondary-bg-color w-[90%] rounded p-4 flex justify-between">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl text-primary-text-color">Bio</h3>
          <p className="text-sm text-secondary-text-color">
            The internet&#39;s friendliest designer kid.
          </p>
          <h3 className="text-xl text-primary-text-color">City</h3>
          <span className="text-sm text-secondary-text-color">Krasnodar</span>
        </div>
        <div className="flex gap-8">
          <Button variant="full">0xc0E3...B79C</Button>
          <Button>Follow</Button>
        </div>
      </div>
    </section>
  )
}
