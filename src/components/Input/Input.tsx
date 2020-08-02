import React, { InputHTMLAttributes } from 'react'
import { Wrapper, StyledInput } from './Input.styles'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string
}

function Input(props: InputProps) {
  const { className, ...rest } = props

  return (
    <Wrapper>
      <StyledInput {...rest} className={className} />
    </Wrapper>
  )
}

export default Input
export { Input }
