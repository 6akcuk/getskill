import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { CreateVideoLesson } from '../../../videoLessons/views/ManageLessons'

function ModalRoutes() {
  return (
    <Switch>
      <Route path="/publish/videolesson" component={CreateVideoLesson} />
    </Switch>
  )
}

export default ModalRoutes
export { ModalRoutes }
