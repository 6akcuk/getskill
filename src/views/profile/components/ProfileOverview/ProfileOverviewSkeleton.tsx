import React from 'react'
import * as S from './ProfileOverviewSkeleton.styles'

function ProfileOverviewSkeleton() {
  return (
    <S.Wrapper>
      <S.Avatar />
      <S.Name />
      <S.About count={3} />
    </S.Wrapper>
  )
}

export default ProfileOverviewSkeleton
export { ProfileOverviewSkeleton }
