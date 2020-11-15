import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ModalRoutes as PublishModalRoutes } from './publish'
import { Home } from './home'
import VideoLessonsModalRoutes from './videoLessons/components/VideoLessonsModalRoutes'

function Routes() {
  return (
    <>
      <PublishModalRoutes />
      <VideoLessonsModalRoutes />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </>
  )
}

export default Routes
