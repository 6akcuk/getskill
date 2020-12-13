import React, { ReactNode } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Login } from './Login'
import Register from './Register'
import AuthProvider from './AuthProvider'

interface AuthRouterProviderProps {
  children: ReactNode
}

function AuthRouterProvider(props: AuthRouterProviderProps) {
  return (
    <AuthProvider>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/login/register" component={Register} />
      </Switch>
      {props.children}
    </AuthProvider>
  )
}

export default AuthRouterProvider
