import React from 'react'
import { UserProfile } from '../../../../api'
import styled from 'styled-components'

interface ProfileAboutProps {
  profile: UserProfile
  className?: string
}

const About = styled.div`
  font-size: 0.875rem;
`

function ProfileAbout(props: ProfileAboutProps) {
  return <About className={props.className}>{props.profile.about}</About>
}

export default ProfileAbout
export { ProfileAbout }
