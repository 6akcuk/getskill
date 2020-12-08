import React from 'react'
import * as S from './VideoLessons.styles'

interface VideoLessonsProps {
  className?: string
}

function VideoLessons(props: VideoLessonsProps) {
  return (
    <S.Wrapper className={props.className}>
      <S.Filters />
      <S.List />
    </S.Wrapper>
  )
}

export default VideoLessons
export { VideoLessons }
