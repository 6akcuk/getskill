import { ReactNode, ButtonHTMLAttributes } from 'react'

export type ButtonLook = 'primary' | 'secondary' | 'white' | 'danger' | 'text'

export interface StyledButtonProps {
  look: ButtonLook
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  StyledButtonProps & {
    className?: string
    block?: boolean
    showSpinner?: boolean
    children: ReactNode
  }
