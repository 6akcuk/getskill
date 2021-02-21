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
        <S.SkillsList>
          {props.videoLesson.tags?.map(serviceTag => (
            <S.Skill>{serviceTag.tag.name}</S.Skill>
          ))}
        </S.SkillsList>
        {!props.hideAuthor && (
          <S.Author to={`/user/${props.videoLesson.userId}`} onClick={e => e.stopPropagation()}>
            <S.AuthorAvatar size="sm" user={props.videoLesson.user} />
            <S.AuthorName>{props.videoLesson.user.profile.publicName}</S.AuthorName>
          </S.Author>
        )}
      </S.ContentWrapper>
    </S.Wrapper>
  )
}

export default PreviewVideoLesson
export { PreviewVideoLesson }
