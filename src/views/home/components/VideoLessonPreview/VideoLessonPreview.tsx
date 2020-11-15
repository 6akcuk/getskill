import React, { useMemo, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
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
  const history = useHistory()

  const handleClick = useCallback(() => {
    history.push(`/watch/videolessons/${props.videoLesson.id}`)
  }, [history, props.videoLesson.id])

  return (
    <S.Wrapper className={props.className} onClick={handleClick}>
      <S.Poster src={`https://videodelivery.net/${props.videoLesson.uid}/thumbnails/thumbnail.jpg`}>
        <S.Duration>{duration}</S.Duration>
      </S.Poster>
      <S.Name>{props.videoLesson.name}</S.Name>
    </S.Wrapper>
  )
}

export default VideoLessonPreview
export { VideoLessonPreview }
