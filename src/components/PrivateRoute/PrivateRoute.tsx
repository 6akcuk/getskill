import React from 'react'
import { useRecoilValue } from 'recoil'
import { isLoggedInState } from '../../views/auth/recoil/selectors'
import { RouteProps, Route, Redirect } from 'react-router-dom'

type PrivateRouteProps = RouteProps

function PrivateRoute(props: PrivateRouteProps) {
  const isLoggedIn = useRecoilValue(isLoggedInState)

  return isLoggedIn ? <Route {...props} /> : <Redirect to={'/'} />
}

export default PrivateRoute
export { PrivateRoute }
