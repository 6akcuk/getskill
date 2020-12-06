import React from 'react'
import { UserProfile } from '../../../../api'
import styled from 'styled-components'

interface ProfilePublicNameProps {
  profile: UserProfile
  className?: string
}

const PublicName = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
`

function ProfilePublicName(props: ProfilePublicNameProps) {
  return <PublicName className={props.className}>{props.profile.publicName}</PublicName>
}

export default ProfilePublicName
export { ProfilePublicName }
