'use client'

import { useEffect, useState } from 'react'
import { popupProps } from './types'
import ReactDOM from 'react-dom'
import Image from 'next/image'
import close from '@/shared/images/for-modal/close.svg'
import { Button } from '../button'

export const Modal: React.FC<popupProps> = ({
  isOpen,
  onClose,
  confirmFunction,
  isCloseByOverlay,
  title,
  children,
  actions,
  variant = 'default',
  confirmText,
  cancelText,
  className,
  ...otherProps
}) => {
  const handleClickByOverlay = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (isCloseByOverlay && e.target === e.currentTarget) {
      onClose()
    }
  }

  const [isMounted, setIsMounted] = useState<boolean>(true)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted
    ? ReactDOM.createPortal(
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-[#000] bg-opacity-50 transition-opacity ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={handleClickByOverlay}
        >
          <div
            className={`bg-secondary-bg-color rounded-lg overflow-hidden transition-transform transform w-2/5 max-w-4xl ${
              isOpen ? 'scale-100' : 'scale-90'
            } ${variant === 'confirm' ? 'w-90 max-w-sm' : ''} ${className}`}
          >
            <div className="relative p-6 flex flex-col">
              {title && (
                <div className="pb-3">
                  <h2 className="text-lg font-bold text-secondary-text-color">
                    {title}
                  </h2>
                </div>
              )}
              {variant === 'confirm' ? (
                <>
                  <div className="flex justify-between">
                    <Button onClick={confirmFunction}>{confirmText}</Button>
                    <Button onClick={onClose}>{cancelText}</Button>
                  </div>
                </>
              ) : (
                <>{children}</>
              )}
              <button
                className="absolute top-0 right-0 transform -translate-x-4 translate-y-4 w-6 h-6 bg-transparent bg-center bg-no-repeat hover:opacity-70"
                aria-label="Закрыть"
                onClick={onClose}
              >
                <Image className="w-5 h-5" src={close} alt="" />
              </button>
              {actions && <div className="mt-10">{actions}</div>}
            </div>
          </div>
        </div>,
        document.body
      )
    : null
}
