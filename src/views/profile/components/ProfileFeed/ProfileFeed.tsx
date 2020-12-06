import React from 'react'
import { useTranslation } from 'react-i18next'
import { useRouteMatch, Switch, Route } from 'react-router-dom'
import * as S from './ProfileFeed.styles'
import VideoLessons from './VideoLessons'

interface ProfileFeedProps {
  userId: string
}

function ProfileFeed(props: ProfileFeedProps) {
  const { t } = useTranslation('profile')
  const { url } = useRouteMatch()

  return (
    <S.Wrapper>
      <S.FeedTabs
        tabs={[
          {
            to: `${url}`,
            label: t('nav.videolessons'),
          },
        ]}
      />
      <S.Content>
        <Switch>
          <Route path="/" render={() => <VideoLessons userId={props.userId} />} />
        </Switch>
      </S.Content>
    </S.Wrapper>
  )
}

export default ProfileFeed
export { ProfileFeed }
