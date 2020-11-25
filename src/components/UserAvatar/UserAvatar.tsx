import React, { useMemo } from 'react'
import { User, UserAvatar as UserAvatarType } from '../../api/types'
import { UserAvatarStyleProps } from './types'
import { Image, Transformation } from 'cloudinary-react'
import { userAssetTransformations } from '../../api'
import * as S from './UserAvatar.styles'

interface UserAvatarProps extends UserAvatarStyleProps {
  user?: User | null
  publicName?: string
  avatar?: UserAvatarType | null
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

  const showInitials = !avatar
  const showAvatar = Boolean(avatar)

  return (
    <S.Wrapper size={props.size}>
      {showInitials && <S.InitialsPlaceholder>{initials}</S.InitialsPlaceholder>}
      {showAvatar && (
        <Image publicId={avatar?.publicId} version={avatar?.version}>
          <Transformation
            width={userAssetTransformations.avatar.width}
            height={userAssetTransformations.avatar.height}
            crop={userAssetTransformations.avatar.crop}
            gravity={userAssetTransformations.avatar.gravity}
          />
        </Image>
      )}
    </S.Wrapper>
  )
}

export default UserAvatar
export { UserAvatar }
