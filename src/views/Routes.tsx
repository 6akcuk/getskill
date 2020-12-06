import React, { useMemo } from 'react'
import { Switch, Route } from 'react-router-dom'
import { ModalRoutes as PublishModalRoutes } from './publish'
import { VideoLessonsModalRoutes } from './videoLessons'
import { Home } from './home'
import { ProfileSettings } from './profile/views/profileSettings'
import { ProfileView } from './profile'
import { usePrevious } from 'ahooks'
import { useLocation } from '../hooks'

function Routes() {
  const location = useLocation()
  const previousLocation = usePrevious(location, (prev, next) => prev !== next && !prev?.state?.modal)
  const isModal = useMemo(() => location.state && location.state.modal && location !== previousLocation, [
    location,
    previousLocation,
  ])

  return (
    <>
      <PublishModalRoutes />
      <VideoLessonsModalRoutes />
      <Switch location={isModal ? previousLocation : location}>
        <Route path="/" exact={true} component={Home} />
        <Route path="/user/:userId" component={ProfileView} />
        <Route path="/settings" component={ProfileSettings} />
      </Switch>
    </>
  )
}

export default Routes
