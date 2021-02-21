import React from 'react'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import { VideoLesson } from '../../../../api'
import * as S from './WatchLesson.styles'
import { lazyComponent } from '../../../../components'

interface WatchLessonParams {
  id: string
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
      <S.Title>{data.name}</S.Title>
      <S.Description>{data.description}</S.Description>
      <S.SkillsList>
        {data.tags?.map(serviceTag => (
          <S.Skill>{serviceTag.tag.name}</S.Skill>
        ))}
      </S.SkillsList>
    </>
  )
}

function WatchLesson() {
  return (
    <S.WatchModal backdrop={true}>
      <WatchLessonContainer />
    </S.WatchModal>
  )
}

export default WatchLesson
export { WatchLesson }
