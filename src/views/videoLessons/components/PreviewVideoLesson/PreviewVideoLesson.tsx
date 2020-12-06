import React, { useMemo, useCallback } from 'react'
import { VideoLesson, videoLessonPosterTransformations } from '../../../../api'
import * as S from './PreviewVideoLesson.styles'
import { useOpenModalCallback } from '../../../../hooks'
import { Transformation } from 'cloudinary-react'

interface VideoLessonPreviewProps {
  videoLesson: VideoLesson
  className?: string
}

function PreviewVideoLesson(props: VideoLessonPreviewProps) {
  const duration = useMemo(() => {
    const minutes = Math.floor(props.videoLesson.duration / 60)
    const seconds = props.videoLesson.duration % 60

    return `${minutes}:${seconds}`
  }, [props.videoLesson.duration])
  const openModal = useOpenModalCallback()

  const handleClick = useCallback(() => {
    openModal(`/watch/videolessons/${props.videoLesson.id}`)
  }, [openModal, props.videoLesson.id])

  return (
    <S.Wrapper className={props.className} onClick={handleClick}>
      <S.PosterWrapper>
        <S.Poster
          publicId={`${props.videoLesson.publicId}.jpg`}
          version={`${props.videoLesson.version}`}
          resourceType="video">
          <Transformation
            width={videoLessonPosterTransformations.poster.width}
            height={videoLessonPosterTransformations.poster.height}
            crop={videoLessonPosterTransformations.poster.crop}
          />
        </S.Poster>
        <S.Duration>{duration}</S.Duration>
      </S.PosterWrapper>
      <S.Author to={`/user/${props.videoLesson.userId}`} onClick={e => e.stopPropagation()}>
        <S.AuthorAvatar size="xs" user={props.videoLesson.user} />
        <S.AuthorName>{props.videoLesson.user.profile.publicName}</S.AuthorName>
      </S.Author>
      <S.Name>{props.videoLesson.name}</S.Name>
    </S.Wrapper>
  )
}

export default PreviewVideoLesson
export { PreviewVideoLesson }
