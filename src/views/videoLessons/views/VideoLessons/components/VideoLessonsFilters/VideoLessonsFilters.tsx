import React from 'react'
import * as S from './VideoLessonsFilters.styles'

interface VideoLessonsFiltersProps {
  className?: string
}

function VideoLessonsFilters(props: VideoLessonsFiltersProps) {
  return <S.Wrapper className={props.className} />
}

export default VideoLessonsFilters
export { VideoLessonsFilters }
