import React from 'react'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import { VideoLesson, videoLessonAssetTransformations } from '../../../../api'
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
      <Player
        publicId={data.publicId ?? ''}
        version={data.version ?? 0}
        streamingProfile={videoLessonAssetTransformations.player.streaming_profile ?? 'hd_lean'}
      />
      <S.Title>{data.name}</S.Title>
      <S.Description>{data.description}</S.Description>
      <S.SkillsList>
        {data.tags?.map(tag => (
          <S.Skill>{tag.name}</S.Skill>
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
