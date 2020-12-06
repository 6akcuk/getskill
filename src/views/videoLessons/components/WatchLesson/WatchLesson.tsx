import React from 'react'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import { VideoLesson } from '../../../../api'
import * as S from './WatchLesson.styles'
import { Transformation } from 'cloudinary-react'

interface WatchLessonParams {
  id: string
}

function WatchLesson() {
  const params = useParams<WatchLessonParams>()
  const { data, isValidating } = useSWR<VideoLesson>(`/api/videolesson/${params.id}`)

  return (
    <S.WatchModal backdrop={true}>
      {isValidating && <S.Loading />}
      {data && (
        <>
          <S.Player
            publicId={data.publicId ?? undefined}
            version={`${data.version}`}
            controls={true}
            sourceTypes="hls">
            <Transformation streamingProfile="hd_lean" />
          </S.Player>
          <S.Title>{data.name}</S.Title>
          <S.Description>{data.description}</S.Description>
        </>
      )}
    </S.WatchModal>
  )
}

export default WatchLesson
export { WatchLesson }
