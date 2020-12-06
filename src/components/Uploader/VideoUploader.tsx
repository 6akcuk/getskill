import React, { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { UploaderProps } from './Uploader'
import * as S from './VideoUploader.styles'

interface VideoUploaderProps extends Pick<UploaderProps, 'eager' | 'resource' | 'id' | 'onSuccess'> {
  children?: ReactNode
  className?: string
}

function VideoUploader(props: VideoUploaderProps) {
  const { t } = useTranslation('app')

  return (
    <S.Wrapper className={props.className}>
      <S.Uploader
        onSuccess={props.onSuccess}
        accept={['video/*']}
        id={props.id}
        eager={props.eager}
        eagerAsync={true}
        resource={props.resource}
        resourceType="video">
        {props.children || (
          <S.Content>
            <S.UploadIcon>
              <S.FilmIcon />
              <S.PlusWrapper>
                <S.PlusIcon />
              </S.PlusWrapper>
            </S.UploadIcon>
            <S.Title>
              <S.Browse>{t('video.drag_drop.browse')}</S.Browse>
              {t('video.drag_drop.title')}
            </S.Title>
            <S.FileInfo>{t('video.drag_drop.info')}</S.FileInfo>
          </S.Content>
        )}
      </S.Uploader>
    </S.Wrapper>
  )
}

export default VideoUploader
export { VideoUploader }
export type { VideoUploaderProps }
