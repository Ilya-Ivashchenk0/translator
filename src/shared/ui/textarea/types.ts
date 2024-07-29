import {
  TextareaHTMLAttributes,
  DetailedHTMLProps,
  SetStateAction,
  Dispatch,
  PropsWithoutRef,
  RefAttributes
} from 'react'

export interface typeTextareaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label: string
  name: string
}

export type textareaProps = PropsWithoutRef<typeTextareaProps> &
  RefAttributes<HTMLTextAreaElement>
