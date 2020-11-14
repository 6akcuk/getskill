import React from 'react'
import useSWR from 'swr'
import { VideoLesson } from '../../../../api'
import * as S from './NewVideoLessons.styles'

function NewVideoLessons() {
  const { data, isValidating } = useSWR<VideoLesson[]>('/api/latest_videolessons')

  return (
    <S.Wrapper>
      {isValidating && <S.Loading />}
      {data && data.map(videoLesson => <S.VideoLesson key={videoLesson.id} videoLesson={videoLesson} />)}
    </S.Wrapper>
  )
}

export default NewVideoLessons
export { NewVideoLessons }
