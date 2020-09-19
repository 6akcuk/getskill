import React, { ReactNode } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Login } from './Login'
import { useCurrentUser } from '../../../hooks'

interface AuthRouterProviderProps {
  children: ReactNode
}

function AuthRouterProvider(props: AuthRouterProviderProps) {
  useCurrentUser()

  return (
    <Switch>
      <Route path="/login" component={Login} />
      {props.children}
    </Switch>
  )
}

export default AuthRouterProvider
