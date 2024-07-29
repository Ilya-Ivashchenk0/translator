'use client'

import { useMemo, useState } from 'react'
import { chatBarProps } from './types'
import Image from 'next/image'
import Link from 'next/link'
import { Logo } from '@/src/shared/ui/logo'
import left from '@/shared/images/for-chat-bar/left.svg'

export const ChatBar: React.FC<chatBarProps> = ({
  chats,
  isOpenBar,
  toggleBar
}) => {
  const chatsList = useMemo(() => {
    return (
      <>
        {chats.map((chat: any, index: number) => (
          <Link key={index} href={`/chat/${chat}`}>
            {chat}
          </Link>
        ))}
      </>
    )
  }, [chats])

  return (
    <nav
      className={`overflow-hidden border-r-[0.5px] border-r-secondary-text-color bg-secondary-bg-color min-h-screen rounded-r flex flex-col justify-between transition-transform relative z-0 ${isOpenBar ? 'w-8 px-4' : 'w-2/5 px-4'}`}
    >
      <div className={`${isOpenBar ? 'hidden' : ''}`}>
        <Logo direction="row" />
        <div className="flex justify-center">
          <hr className="min-w-[95%] border-primary-text-color" />
        </div>
      </div>
      {chatsList}
      <div
        className={`py-4 flex items-center flex-col ${isOpenBar ? 'hidden' : ''}`}
      >
        <div className="flex justify-center pb-4 w-full">
          <hr className="min-w-[95%] border-primary-text-color" />
        </div>
        <Link
          className="text-secondary-text-color bg-primary-bg-color p-2 rounded"
          href={'/settings'}
        >
          Настройки
        </Link>
      </div>
      <div
        onClick={toggleBar}
        className={`w-14 h-14 pr-2 flex justify-end items-center absolute z-10 cursor-pointer top-1/2 translate-y-1/2 bg-secondary-bg-color rounded-full right-0`}
      >
        <Image
          className={`w-6 h-6 transition-transform ${isOpenBar ? 'rotate-180' : 'rotate-0'}`}
          src={left}
          alt=""
        />
      </div>
    </nav>
  )
}
