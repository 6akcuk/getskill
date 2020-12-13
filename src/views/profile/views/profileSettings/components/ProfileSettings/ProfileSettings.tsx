import React from 'react'
import { Switch, useRouteMatch, Redirect } from 'react-router-dom'
import { PrivateRoute } from '../../../../../../components'
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
          <PrivateRoute path={`${path}/account`} component={Account} />
          <PrivateRoute path={`${path}/contacts`} component={Contacts} />
          <PrivateRoute path="*">
            <Redirect to={`${path}/account`} />
          </PrivateRoute>
        </Switch>
      </S.Content>
    </S.Wrapper>
  )
}

export default ProfileSettings
export { ProfileSettings }
