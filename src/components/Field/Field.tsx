import React, { ReactNode } from 'react'
import { Wrapper, Label, Error } from './Field.styles'
import { useTranslation } from 'react-i18next'

interface FieldErrorWithValues {
  key: string
  values: any[]
}
type FieldError = string | FieldErrorWithValues

interface FieldProps {
  id: string
  label?: string
  error?: FieldError
  children: ReactNode
  className?: string
}

function isString(error: FieldError): error is string {
  return typeof error === 'string'
}

function isObject(error: FieldError): error is FieldErrorWithValues {
  return typeof error === 'object' && Boolean(error.key)
}

function Field(props: FieldProps) {
  const { t } = useTranslation('yup')

  const handleError = () => {
    if (!props.error) {
      return null
    }

    if (isString(props.error)) {
      return t(props.error)
    }

    if (isObject(props.error)) {
      return t(props.error.key, props.error.values)
    }

    return null
  }

  return (
    <Wrapper className={props.className}>
      {props.label && <Label htmlFor={props.id}>{props.label}</Label>}
      {props.children}
      {props.error && <Error>{handleError()}</Error>}
    </Wrapper>
  )
}

export default Field
export { Field }
export type { FieldError, FieldProps }
