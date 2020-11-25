import React from 'react'
import { Switch, useRouteMatch, Route, Redirect } from 'react-router-dom'
import { Account } from '../Account'
import * as S from './ProfileSettings.styles'
import Contacts from '../Contacts'

function ProfileSettings() {
  const { path } = useRouteMatch()

  return (
    <S.Wrapper>
      <S.Navigation />
      <S.Content>
        <Switch>
          <Route path={`${path}/account`} component={Account} />
          <Route path={`${path}/contacts`} component={Contacts} />
          <Route path="*">
            <Redirect to={`${path}/account`} />
          </Route>
        </Switch>
      </S.Content>
    </S.Wrapper>
  )
}

export default ProfileSettings
export { ProfileSettings }
