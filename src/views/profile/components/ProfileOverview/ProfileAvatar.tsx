import React from 'react'
import { UserProfile, userAssetTransformations } from '../../../../api'
import styled from 'styled-components'
import { Image, Transformation } from 'cloudinary-react'

interface ProfileAvatarProps {
  profile: UserProfile
}

const Avatar = styled.div<{ avatar?: string }>`
  line-height: 0;
  border-radius: 9999px;
  background: ${props => props.theme.colors.background[500]};
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    border-radius: 9999px;
  }
`

function ProfileAvatar(props: ProfileAvatarProps) {
  return (
    <Avatar>
      {props.profile.avatar && (
        <Image
          publicId={props.profile.avatar.publicId}
          version={props.profile.avatar.version}
          responsive={true}>
          <Transformation
            width={userAssetTransformations.profile.width}
            height={userAssetTransformations.profile.height}
            crop={userAssetTransformations.profile.crop}
            gravity={userAssetTransformations.profile.gravity}
          />
        </Image>
      )}
    </Avatar>
  )
}

export default ProfileAvatar
export { ProfileAvatar }
