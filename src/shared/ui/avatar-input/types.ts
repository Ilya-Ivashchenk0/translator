import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  PropsWithoutRef,
  RefAttributes
} from 'react'

interface typeInputFileProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  avatar: string | undefined
  label?: string
  name: string
  type?: 'file' | string
  handleUploadedFile: (e: React.ChangeEvent<HTMLInputElement>) => void
  drop: boolean
}

export type inputFileProps = PropsWithoutRef<typeInputFileProps> &
  RefAttributes<HTMLInputElement>
