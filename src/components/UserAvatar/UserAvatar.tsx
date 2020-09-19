import React, { useMemo } from 'react'
import { User } from '../../api/types'
import { UserAvatarStyleProps } from './types'
import * as S from './UserAvatar.styles'

interface UserAvatarProps extends UserAvatarStyleProps {
  user?: User | null
}

function UserAvatar(props: UserAvatarProps) {
  const initials = useMemo(
    () =>
      props.user?.publicName
        .split(' ')
        .map(name => name.substr(0, 1))
        .join('')
        .substr(0, 2),
    [props.user],
  )

  return (
    <S.Wrapper>
      <S.InitialsPlaceholder>{initials}</S.InitialsPlaceholder>
    </S.Wrapper>
  )
}

export default UserAvatar
export { UserAvatar }
