import React, { ReactNode } from 'react'
import { Wrapper, Label, Error } from './Field.styles'

interface FieldProps {
  id: string
  label?: string
  error?: string
  children: ReactNode
  className?: string
}

function Field(props: FieldProps) {
  return (
    <Wrapper className={props.className}>
      {props.label && <Label htmlFor={props.id}>{props.label}</Label>}
      {props.children}
      {props.error && <Error>{props.error}</Error>}
    </Wrapper>
  )
}

export default Field
