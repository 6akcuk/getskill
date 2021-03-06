import React, { ReactNode, useCallback } from 'react'
import * as S from './Banner.styles'

interface BannerProps {
  message: ReactNode
  icon?: ReactNode
  actionContent?: ReactNode
  onAction?: () => void
  onClose?: () => void
}

function Banner(props: BannerProps) {
  const handleAction = useCallback(() => {
    props.onAction?.()
  }, [props.onAction])

  return (
    <S.Wrapper>
      <S.Content>
        {props.icon && <S.Icon>{props.icon}</S.Icon>}
        <S.Message hasIcon={Boolean(props.icon)}>{props.message}</S.Message>
      </S.Content>
      {props.actionContent && (
        <S.ActionItem>
          <S.Action onClick={handleAction}>{props.actionContent}</S.Action>
        </S.ActionItem>
      )}
      <S.ActionItem>
        <S.CloseButton look="icon" onClick={props.onClose}>
          <S.CloseIcon />
        </S.CloseButton>
      </S.ActionItem>
    </S.Wrapper>
  )
}

export default Banner
export { Banner }
