import React from 'react'
import { Switch, Route } from 'react-router-dom'
import WatchLesson from '../WatchLesson'

function VideoLessonsModalRoutes() {
  return (
    <Switch>
      <Route path="/watch/videolessons/:id" component={WatchLesson} />
    </Switch>
  )
}

export default VideoLessonsModalRoutes
export { VideoLessonsModalRoutes }
