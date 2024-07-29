import React from 'react'
import { preloaderProps } from './types'

export const Preloader: React.FC<preloaderProps> = ({ size = 'sm' }) => {
  const sizeClasses = {
    xs: 'w-[calc(30px-1em-10px)] h-[calc(30px-1em-10px)] text-xs',
    sm: 'w-[calc(60px-1em-10px)] h-[calc(60px-1em-10px)] text-sm',
    md: 'w-[calc(100px-1em-10px)] h-[calc(100px-1em-10px)] text-base',
    lg: 'w-[calc(150px-1em-10px)] h-[calc(150px-1em-10px)] text-lg'
  }[size]

  return (
    <div
      className={`${sizeClasses} relative rounded-full border-4 border-t-transparent border-r-transparent border-b-transparent border-l-primary border-t-[rgba(78,78,78,0.5)] border-r-[rgba(78,78,78,0.5)] border-b-[rgba(78,78,78,0.5)] border-l-action-color animate-spin`}
      style={{ animationDuration: '1.5s' }}
    />
  )
}
