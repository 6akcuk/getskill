import React, { useCallback, ReactNode } from 'react'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import * as S from './ErrorDisplay.styles'

interface ErrorDisplayProps {
  className?: string
  title?: ReactNode
  text?: ReactNode
  image?: ReactNode
  showAction?: boolean
  actionText?: ReactNode
  actionCallback?: () => void
}

function ErrorDisplay(props: ErrorDisplayProps) {
  const { t } = useTranslation('app')
  const history = useHistory()
  const refreshCallback = useCallback(() => {
    history.replace('/')
    window.location.reload()
  }, [history])

  return (
    <S.Wrapper className={props.className} onClick={e => e.stopPropagation()}>
      <S.MessageContainer>
        <S.Title>{props.title ?? t('common.generic_error.title')}</S.Title>
        <S.Text>{props.text ?? t('common.generic_error.text')}</S.Text>
        {props.showAction && (
          <S.RefreshButton look="primary" onClick={props.actionCallback ?? refreshCallback}>
            {props.actionText ?? t('common.generic_error.button')}
          </S.RefreshButton>
        )}
      </S.MessageContainer>
    </S.Wrapper>
  )
}

export default ErrorDisplay
export { ErrorDisplay }
export type { ErrorDisplayProps }
