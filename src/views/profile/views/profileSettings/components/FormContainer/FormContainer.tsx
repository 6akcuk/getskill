import React, { ReactNode } from 'react'
import * as S from './FormContainer.styles'
import { useTranslation } from 'react-i18next'

interface FormContainerProps {
  className?: string
  title: ReactNode
  subtitle?: ReactNode
  fields?: ReactNode
  hint?: ReactNode
  isDirty?: boolean
  isSubmitting?: boolean
}

function FormContainer(props: FormContainerProps) {
  const { t } = useTranslation('app')

  return (
    <S.FormContent className={props.className}>
      <S.Body>
        <S.Heading>
          <S.Title>{props.title}</S.Title>
          {props.subtitle && <S.Subtitle>{props.subtitle}</S.Subtitle>}
        </S.Heading>
        {props.fields && <S.Fields>{props.fields}</S.Fields>}
        {props.hint && <S.Hint>{props.hint}</S.Hint>}
      </S.Body>
      {props.fields && (
        <S.Footer>
          <S.Button
            look="primary"
            type="submit"
            disabled={props.isDirty === undefined ? false : !props.isDirty}
            showSpinner={props.isSubmitting}>
            {t('common.save')}
          </S.Button>
        </S.Footer>
      )}
    </S.FormContent>
  )
}

export default FormContainer
export { FormContainer }
