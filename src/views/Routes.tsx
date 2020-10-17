import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ModalRoutes as PublishModalRoutes } from './publish'
import { Home } from './home'

function Routes() {
  return (
    <>
      <PublishModalRoutes />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </>
  )
}

export default Routes
