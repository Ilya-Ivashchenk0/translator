import { messageProps } from './types'
import Image from 'next/image'
import logo from '@/shared/images/for-logo/logo.png'

export const Message: React.FC<messageProps> = ({ message, align }) => {
  return (
    <div className="">
      <div
        className={`pb-4 w-full flex justify-start items-center gap-5 text-primary-text-color ${align === 'left' ? '' : 'flex-row-reverse'}`}
      >
        <Image
          className="rounded-full bg-primary-bg-color w-10 h-10"
          src={logo}
          alt=""
        />
        <span
          className={`text-lg ${align === 'left' ? 'text-sender-color' : 'text-recipient-color'}`}
        >
          {message.ownerName}
        </span>
      </div>
      <div
        className={`relative flex ${align === 'left' ? 'justify-start' : 'justify-end'}`}
      >
        <p
          className={`relative max-w-[98%] z-10 rounded-md p-2 pb-5 text-md break-words whitespace-pre-wrap text-secondary-text-color ${align === 'left' ? 'text-left bg-sender-bg-color' : 'text-right bg-recipient-bg-color'}`}
        >
          {message.text}
          <span
            className={`text-xs ${align === 'left' ? 'text-sender-color' : 'text-recipient-color'} absolute bottom-2 right-2`}
          >
            {message.date.toDateString()}
          </span>
        </p>
        <div
          className={`w-4 h-4 absolute top-[-5px] ${align === 'left' ? 'left-[12px] bg-sender-bg-color' : 'right-[12px] bg-recipient-bg-color'} rotate-45`}
        />
      </div>
    </div>
  )
}
