import React, { ReactNode, useCallback } from 'react'
import { ProfileFormHandle } from '../useProfileForm'
import * as S from './DeletableAvatar.styles'

interface DeletableAvatarProps {
  form: ProfileFormHandle
  children: ReactNode
  className?: string
}

function DeletableAvatar(props: DeletableAvatarProps) {
  const { setFieldValue } = props.form
  const handleDelete = useCallback(() => {
    setFieldValue('avatar', null)
  }, [setFieldValue])

  if (props.form.values.avatar) {
    return (
      <S.Wrapper className={props.className}>
        <S.DeleteButton onClick={handleDelete}>
          <S.CloseIcon />
        </S.DeleteButton>
        {props.children}
      </S.Wrapper>
    )
  }

  return <S.Wrapper className={props.className}>{props.children}</S.Wrapper>
}

export default DeletableAvatar
export { DeletableAvatar }
export type { DeletableAvatarProps }
