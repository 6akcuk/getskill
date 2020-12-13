import React, { ReactNode } from 'react'
import * as S from './Banner.styles'

interface BannerProps {
  message: ReactNode
  icon?: ReactNode
  action?: ReactNode
  onClose?: () => void
}

function Banner(props: BannerProps) {
  return (
    <S.Wrapper>
      <S.Content>
        {props.icon && <S.Icon>{props.icon}</S.Icon>}
        <S.Message hasIcon={Boolean(props.icon)}>{props.message}</S.Message>
      </S.Content>
      {props.action && (
        <S.ActionItem>
          <S.Action>{props.action}</S.Action>
        </S.ActionItem>
      )}
      <S.ActionItem>
        <S.CloseButton look="icon">
          <S.CloseIcon />
        </S.CloseButton>
      </S.ActionItem>
    </S.Wrapper>
  )
}

export default Banner
export { Banner }
