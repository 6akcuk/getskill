import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ModalRoutes as PublishModalRoutes } from './publish'
import { Home } from './home'
import VideoLessonsModalRoutes from './videoLessons/components/VideoLessonsModalRoutes'
import { ProfileSettings } from './profile/views/profileSettings'

function Routes() {
  return (
    <>
      <PublishModalRoutes />
      <VideoLessonsModalRoutes />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/settings" component={ProfileSettings} />
      </Switch>
    </>
  )
}

export default Routes
