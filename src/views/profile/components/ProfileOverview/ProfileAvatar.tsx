import React from 'react'
import styled from 'styled-components'
import { userAssetTransformations, UserProfile } from '../../../../api'
import { UserAvatar } from '../../../../components'

interface ProfileAvatarProps {
  profile: UserProfile
}

const Avatar = styled(UserAvatar)`
  width: 100%;
  height: 0;
  padding: 50% 0;
`

function ProfileAvatar(props: ProfileAvatarProps) {
  return (
    <Avatar
      publicName={props.profile.publicName}
      avatar={props.profile.avatar}
      transformation={userAssetTransformations.profile}
    />
  )
}

export default ProfileAvatar
export { ProfileAvatar }
