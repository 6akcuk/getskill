import React, { ReactNode } from 'react'
import { useCurrentUser } from '../../../hooks'
import PhoneVerifiedBanner from './PhoneVerifiedBanner'

interface AuthProviderProps {
  children: ReactNode
}

function AuthProvider(props: AuthProviderProps) {
  const user = useCurrentUser()

  return (
    <>
      <PhoneVerifiedBanner user={user} />
      {props.children}
    </>
  )
}

export default AuthProvider
export { AuthProvider }
