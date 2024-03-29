import React, { ReactNode } from 'react'
import { Wrapper, Label, Error, Hint } from './Field.styles'
import { useTranslation } from 'react-i18next'
import { FormikErrors } from 'formik'

interface FieldErrorWithValues {
  key: string
  values: any[]
}
type FieldError = string | FieldErrorWithValues | FormikErrors<any>

interface FieldProps {
  id: string
  label?: string
  error?: FieldError
  hint?: ReactNode
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
      {props.hint && <Hint>{props.hint}</Hint>}
      {props.error && <Error>{handleError()}</Error>}
    </Wrapper>
  )
}

export default Field
export { Field }
export type { FieldError, FieldProps }
