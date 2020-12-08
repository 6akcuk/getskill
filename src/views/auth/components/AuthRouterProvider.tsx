import React, { ReactNode } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Login } from './Login'
import Register from './Register'
import { useCurrentUser } from '../../../hooks'

interface AuthRouterProviderProps {
  children: ReactNode
}

function AuthRouterProvider(props: AuthRouterProviderProps) {
  useCurrentUser()

  return (
    <>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/login/register" component={Register} />
      </Switch>
      {props.children}
    </>
  )
}

export default AuthRouterProvider
