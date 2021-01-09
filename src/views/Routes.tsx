import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ModalRoutes as PublishModalRoutes } from './publish'
import { VideoLessonsModalRoutes } from './videoLessons'
import { Home } from './home'
import { ProfileSettings } from './profile/views/profileSettings'
import { ProfileView } from './profile'
import { useLocation } from '../hooks'
import { VideoLessons } from './videoLessons/views/VideoLessons'
import { Specialists } from './specialists/views/Specialists'

function Routes() {
  const location = useLocation()

  return (
    <>
      <PublishModalRoutes />
      <VideoLessonsModalRoutes />
      <Switch location={location.state?.background ?? location}>
        <Route path="/" exact={true} component={Home} />
        <Route path="/videolessons" component={VideoLessons} />
        <Route path="/specialists" component={Specialists} />
        <Route path="/user/:userId" component={ProfileView} />
        <Route path="/settings" component={ProfileSettings} />
      </Switch>
    </>
  )
}

export default Routes
