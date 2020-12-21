import React, { ReactNode } from 'react'
import { Feature } from '../../mapping'
import { useIsLocked } from '../../hooks'
import { useTranslation } from 'react-i18next'
import { useNavigateBack } from '../../../../hooks'
import * as S from './Lock.styles'

interface LockProps {
  feature: Feature
  children: ReactNode
  heading?: ReactNode
  hint?: ReactNode
  action?: () => void
  actionContent?: ReactNode
}

function Lock(props: LockProps) {
  const [isLocked, lockAction] = useIsLocked(props.feature)
  const { t } = useTranslation('app')
  const navigateBack = useNavigateBack()

  if (isLocked) {
    if (lockAction === 'deny') {
      return null
    }

    return (
      <S.Wrapper>
        <S.LockIcon />
        <S.Heading>{props.heading ?? t('common.lock.heading')}</S.Heading>
        {props.hint && <S.Hint>{props.hint}</S.Hint>}
        <S.Actions>
          {props.actionContent && <S.Action onClick={props.action}>{props.actionContent}</S.Action>}
          <S.Close onClick={navigateBack}>{t('common.lock.close')}</S.Close>
        </S.Actions>
      </S.Wrapper>
    )
  }

  return <>{props.children}</>
}

export default Lock
export { Lock }
