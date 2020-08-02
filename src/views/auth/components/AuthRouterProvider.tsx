import React, { ReactNode } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Login } from './Login'

interface AuthRouterProviderProps {
  children: ReactNode
}

function AuthRouterProvider(props: AuthRouterProviderProps) {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      {props.children}
    </Switch>
  )
}

export default AuthRouterProvider
