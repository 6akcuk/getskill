import React, { useCallback, useState } from 'react'
import * as S from './VideoUploader.styles'
import { useTranslation } from 'react-i18next'

type FileProps = File

interface VideoUploaderProps {
  uploadUrl?: string
  className?: string
  maxSize?: number
  onSuccess: (video?: File) => void
}

function VideoUploader(props: VideoUploaderProps) {
  const { t } = useTranslation('app')
  const [video, setVideo] = useState<FileProps>()

  const { onSuccess } = props
  const maxSize = props.maxSize ?? 1024 * 1024 * 1024 // 1Gb
  const handleDrop = useCallback(
    acceptedFiles => {
      setVideo(acceptedFiles[0])
    },
    [onSuccess],
  )
  const handleRemove = useCallback(() => {
    setVideo(undefined)
    onSuccess(undefined)
  }, [onSuccess])

  return (
    <S.Wrapper className={props.className}>
      <S.UploadHandler
        uploadUrl={props.uploadUrl}
        file={video}
        onSuccess={() => props.onSuccess(video)}
        onFailure={handleRemove}
      />
      <S.Dropzone accept="video/*" maxSize={maxSize} onDrop={handleDrop}>
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
      </S.Dropzone>
    </S.Wrapper>
  )
}

export default VideoUploader
export { VideoUploader }
export type { VideoUploaderProps }
