import React, { useMemo } from 'react'
import { User, UserAvatar as UserAvatarType, AssetTransformation } from '../../api/types'
import { UserAvatarStyleProps } from './types'
import { Transformation } from 'cloudinary-react'
import { userAssetTransformations } from '../../api'
import * as S from './UserAvatar.styles'

interface UserAvatarProps extends UserAvatarStyleProps {
  user?: User | null
  publicName?: string
  avatar?: UserAvatarType | null
  transformation?: AssetTransformation
  className?: string
}

function UserAvatar(props: UserAvatarProps) {
  const initials = useMemo(
    () =>
      (props.publicName ?? props.user?.profile.publicName ?? '')
        .split(' ')
        .map(name => name.substr(0, 1))
        .join('')
        .substr(0, 2),
    [props.user, props.publicName],
  )

  const avatar = useMemo(() => props.avatar ?? props.user?.profile.avatar, [props.user, props.avatar])
  const showAvatar = Boolean(avatar)

  return (
    <S.Wrapper className={props.className} size={props.size ?? 'sm'}>
      <S.InitialsPlaceholder>{initials}</S.InitialsPlaceholder>
      {showAvatar && (
        <S.Image publicId={avatar?.publicId} version={avatar?.version}>
          <Transformation {...(props.transformation ?? userAssetTransformations.avatar)} />
        </S.Image>
      )}
    </S.Wrapper>
  )
}

export default UserAvatar
export { UserAvatar }
