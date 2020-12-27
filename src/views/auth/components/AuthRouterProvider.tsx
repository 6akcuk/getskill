import React, { ReactNode } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Login } from './Login'
import { ForgotPassword } from '../views/forgot'
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
        <Route path="/register" component={Register} />
        <Route path="/forgot" component={ForgotPassword} />
      </Switch>
      {props.children}
    </AuthProvider>
  )
}

export default AuthRouterProvider
