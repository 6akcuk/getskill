import { ReactNode, ButtonHTMLAttributes } from 'react'

export type ButtonLook = 'primary' | 'secondary' | 'white' | 'danger'

export interface StyledButtonProps {
  look: ButtonLook
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  StyledButtonProps & {
    block?: boolean
    children: ReactNode
  }
