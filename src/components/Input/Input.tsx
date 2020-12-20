import React, { InputHTMLAttributes } from 'react'
import { StyledInput } from './Input.styles'

interface GSInputProps {
  hasError?: boolean
}
type InputProps = GSInputProps &
  InputHTMLAttributes<HTMLInputElement> & {
    className?: string
  }

function Input(props: InputProps) {
  const { className, ...rest } = props

  return <StyledInput {...rest} className={className} />
}

export default Input
export { Input }
export type { InputProps, GSInputProps }
