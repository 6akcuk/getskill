import React from 'react'
import { useParams } from 'react-router-dom'
import { createStylableComponent } from '../../../../utils'
import * as S from './ProfileView.styles'

interface ProfileViewRouteParams {
  userId: string
}
interface ProfileViewProps {
  className?: string
}

function ProfileView(props: ProfileViewProps) {
  const { userId } = useParams<ProfileViewRouteParams>()

  return (
    <S.Wrapper className={props.className}>
      <S.Overview userId={userId} />
      <S.Feed userId={userId} />
    </S.Wrapper>
  )
}

const StylableProfileView = createStylableComponent(S, ProfileView)

export default StylableProfileView
export { StylableProfileView as ProfileView }
export type { ProfileViewProps }
