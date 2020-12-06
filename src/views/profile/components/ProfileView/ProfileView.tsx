import React from 'react'
import { useParams } from 'react-router-dom'
import * as S from './ProfileView.styles'

interface ProfileViewRouteParams {
  userId: string
}

function ProfileView() {
  const { userId } = useParams<ProfileViewRouteParams>()

  return (
    <S.Wrapper>
      <S.Overview userId={userId} />
      <S.Feed userId={userId} />
    </S.Wrapper>
  )
}

export default ProfileView
export { ProfileView }
