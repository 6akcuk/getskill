import React, { useMemo, useCallback } from 'react'
import { VideoLesson } from '../../../../api'
import { useOpenModalCallback } from '../../../../hooks'
import * as S from './PreviewVideoLesson.styles'

interface VideoLessonPreviewProps {
  videoLesson: VideoLesson
  hideAuthor?: boolean
  className?: string
}

function PreviewVideoLesson(props: VideoLessonPreviewProps) {
  const duration = useMemo(() => {
    const minutes = Math.floor(props.videoLesson.video.duration / 60)
    const seconds = props.videoLesson.video.duration % 60

    return `${minutes}:${seconds}`
  }, [props.videoLesson.video.duration])
  const openModal = useOpenModalCallback()

  const handleClick = useCallback(() => {
    openModal(`/watch/videolessons/${props.videoLesson.id}`)
  }, [openModal, props.videoLesson.id])

  return (
    <S.Wrapper className={props.className} onClick={handleClick}>
      <S.PosterWrapper>
        <S.Poster
          src={
            props.videoLesson.video.serviceId
              ? `https://videodelivery.net/${props.videoLesson.video.serviceId}/thumbnails/thumbnail.jpg`
              : ''
          }
          alt={props.videoLesson.name}
        />
        <S.Duration>{duration}</S.Duration>
      </S.PosterWrapper>
      <S.ContentWrapper>
        <S.Name>{props.videoLesson.name}</S.Name>
        <S.Description>{props.videoLesson.description}</S.Description>
        <S.SkillsList serviceType="videolesson" serviceTags={props.videoLesson.tags} />
        {!props.hideAuthor && (
          <S.Author
            to={`/user/${props.videoLesson.userId}`}
            onClick={e => e.stopPropagation()}
            user={props.videoLesson.user}
          />
        )}
      </S.ContentWrapper>
    </S.Wrapper>
  )
}

export default PreviewVideoLesson
export { PreviewVideoLesson }
