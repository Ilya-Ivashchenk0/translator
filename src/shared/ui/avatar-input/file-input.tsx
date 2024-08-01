import { forwardRef, ForwardRefExoticComponent } from 'react'
import cn from 'classnames'
import { inputFileProps } from './types'
import Image from 'next/image'
import img from '@/shared/images/for-logo/logo.png'
import paint from '@/shared/images/for-file-input/paint.svg'

const AvatarInput: ForwardRefExoticComponent<inputFileProps> = forwardRef<
  HTMLInputElement,
  inputFileProps
>((props, ref) => {
  const {
    avatar,
    label,
    name,
    type = 'file',
    className,
    onChange,
    drop,
    handleUploadedFile,
    ...otherProps
  } = props

  return (
    <label
      className={cn(
        'relative w-28 h-28 flex flex-col items-center justify-center cursor-pointer rounded-2xl border-primary-bg-color border-4 border-dashed overflow-hidden'
      )}
      htmlFor={name}
    >
      <div
        className={cn(
          'absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 z-30 flex justify-center items-center'
        )}
      >
        <Image className={cn('w-12 h-12 ')} src={paint} alt="" />
      </div>
      <Image
        className={cn('absolute top-0 left-0 w-28 h-28')}
        layout="fill"
        objectFit="cover"
        src={avatar ? avatar : img}
        alt=""
      />
      <input
        name={name}
        id={name}
        type={type}
        value={undefined}
        onChange={handleUploadedFile}
        accept=".png, .jpg, .jpeg, .gif"
        ref={ref}
        className={cn(
          'absolute inset-0 w-full h-full opacity-0 cursor-pointer'
        )}
      />
    </label>
  )
})

AvatarInput.displayName = 'InputFile'

export { AvatarInput }
