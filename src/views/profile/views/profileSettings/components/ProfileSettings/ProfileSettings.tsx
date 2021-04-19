import React from 'react'
import { Switch, useRouteMatch, Redirect } from 'react-router-dom'
import { PrivateRoute } from '../../../../../../components'
import { Account } from '../Account'
import Contacts from '../Contacts'
import { Verification } from '../../views/verification'
import { createStylableComponent } from '../../../../../../utils'
import * as S from './ProfileSettings.styles'

interface ProfileSettingsProps {
  className?: string
}

function ProfileSettings(props: ProfileSettingsProps) {
  const { path } = useRouteMatch()

  return (
    <S.Wrapper className={props.className}>
      <S.Navigation />
      <S.Content>
        <Switch>
          <PrivateRoute path={`${path}/account`} component={Account} />
          <PrivateRoute path={`${path}/contacts`} component={Contacts} />
          <PrivateRoute path={`${path}/verification`} component={Verification} />
          <PrivateRoute path="*">
            <Redirect to={`${path}/account`} />
          </PrivateRoute>
        </Switch>
      </S.Content>
    </S.Wrapper>
  )
}

const StylableProfileSettings = createStylableComponent(S, ProfileSettings)

export default StylableProfileSettings
export { StylableProfileSettings as ProfileSettings }
export type { ProfileSettingsProps }
