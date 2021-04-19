import React from 'react'
import { useParams, useRouteMatch } from 'react-router-dom'
import useSWR from 'swr'
import { VideoLesson } from '../../../../api'
import * as S from './WatchLesson.styles'
import { lazyComponent } from '../../../../components'
import { createStylableComponent } from '../../../../utils'
import { pick } from 'lodash'

interface WatchLessonParams {
  id: string
}
interface WatchLessonProps {
  className?: string
}

const Player = lazyComponent(() => import('../../../../components/VideoPlayer'))

function WatchLessonContainer() {
  const params = useParams<WatchLessonParams>()
  const { data } = useSWR<VideoLesson>(`/api/videolesson/${params.id}`)

  if (!data) {
    return null
  }

  return (
    <>
      <Player serviceId={data.video.serviceId} />
      <S.Content>
        <S.Title>{data.name}</S.Title>
        <S.Author user={data.user} />
        <S.Description>{data.description}</S.Description>
        <S.SkillsList serviceType="videolesson" serviceTags={data.tags} />
      </S.Content>
    </>
  )
}

const SContainer = pick(S, ['Description', 'SkillsList', 'Title'])
const StylableWatchLessonContainer = createStylableComponent(SContainer, WatchLessonContainer)

function WatchLesson(props: WatchLessonProps) {
  const match = useRouteMatch('/watch/videolessons/:id')

  return (
    <S.WatchModal in={match !== null} className={props.className} backdrop={true}>
      <StylableWatchLessonContainer />
    </S.WatchModal>
  )
}

const StylableWatchLesson = createStylableComponent(S, WatchLesson)

export default StylableWatchLesson
export { StylableWatchLesson as WatchLesson }
export type { WatchLessonParams, WatchLessonProps }
