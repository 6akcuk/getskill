import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import ViewSkill from '../ViewSkill'

interface SkillsProps {
  className?: string
}

function Skills() {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Route path={`${path}/:skillName`} component={ViewSkill} />
    </Switch>
  )
}

export default Skills
export { Skills }
export type { SkillsProps }
