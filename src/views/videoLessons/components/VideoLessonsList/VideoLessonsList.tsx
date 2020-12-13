import React from 'react'
import { useTranslation } from 'react-i18next'
import PreviewVideoLesson, { PreviewVideoLessonSkeleton } from '../PreviewVideoLesson'
import { UseInfiniteEntitiesResult } from '../../../../hooks'
import { VideoLesson } from '../../../../api'
import * as S from './VideoLessonsList.styles'

interface VideoLessonsListProps extends UseInfiniteEntitiesResult<VideoLesson> {
  hideAuthor?: boolean
}

function VideoLessonsList(props: VideoLessonsListProps) {
  const { t } = useTranslation('app')

  return (
    <>
      {props.entities?.map(videoLesson => (
        <PreviewVideoLesson hideAuthor={props.hideAuthor} key={videoLesson.id} videoLesson={videoLesson} />
      ))}
      {props.isReachedEnd && props.isValidating && <PreviewVideoLessonSkeleton />}
      {!props.isReachedEnd && (
        <S.LoadMoreWrapper>
          <S.LoadMore
            look="white"
            showSpinner={props.isValidating}
            onClick={() => props.setSize(props.size + 1)}>
            {t('common.load_more')}
          </S.LoadMore>
        </S.LoadMoreWrapper>
      )}
    </>
  )
}

export default VideoLessonsList
export { VideoLessonsList }
