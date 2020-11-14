import React, { useMemo } from 'react'
import { VideoLesson } from '../../../../api'
import * as S from './VideoLessonPreview.styles'

interface VideoLessonPreviewProps {
  videoLesson: VideoLesson
  className?: string
}

function VideoLessonPreview(props: VideoLessonPreviewProps) {
  const duration = useMemo(() => {
    const minutes = Math.floor(props.videoLesson.duration / 60)
    const seconds = props.videoLesson.duration % 60

    return `${minutes}:${seconds}`
  }, [props.videoLesson.duration])

  return (
    <S.Wrapper className={props.className}>
      <S.Poster src={`https://videodelivery.net/${props.videoLesson.uid}/thumbnails/thumbnail.jpg`}>
        <S.Duration>{duration}</S.Duration>
      </S.Poster>
      <S.Name>{props.videoLesson.name}</S.Name>
    </S.Wrapper>
  )
}

export default VideoLessonPreview
export { VideoLessonPreview }
