import React from 'react'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import { VideoLesson } from '../../../../api'
import * as S from './WatchLesson.styles'

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
          <S.Player src={data.uid} controls={true} />
          <S.Title>{data.name}</S.Title>
          <S.Description>{data.description}</S.Description>
        </>
      )}
    </S.WatchModal>
  )
}

export default WatchLesson
export { WatchLesson }
