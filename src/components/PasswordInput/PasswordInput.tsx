import React from 'react'
import Input, { InputProps } from '../Input'

export type PasswordInputProps = InputProps

function PasswordInput(props: PasswordInputProps) {
  const { className, ...rest } = props

  return <Input type="password" {...rest} className={className} />
}

export default PasswordInput
export { PasswordInput }
