import React from 'react'
import { useUserProfile } from '../../../../hooks'
import ProfileAvatar from './ProfileAvatar'
import * as S from './ProfileOverview.styles'

interface ProfileOverviewProps {
  userId: string
  className?: string
}

function ProfileOverview(props: ProfileOverviewProps) {
  const profile = useUserProfile(props.userId)

  return (
    <S.Wrapper className={props.className}>
      {profile && (
        <>
          <ProfileAvatar profile={profile} />
          <S.PublicName profile={profile} />
          <S.About profile={profile} />
          <S.Contacts profile={profile} />
        </>
      )}
    </S.Wrapper>
  )
}

export default ProfileOverview
export { ProfileOverview }
