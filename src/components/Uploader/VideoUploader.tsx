import React, { ReactNode, useCallback, useState } from 'react'
import * as S from './VideoUploader.styles'
import { useTranslation } from 'react-i18next'

type FileProps = File

interface VideoUploaderProps {
  video?: string
  className?: string
  maxSize?: number
  onChange: (video: File | null) => void
}

function VideoUploader(props: VideoUploaderProps) {
  const { t } = useTranslation('app')
  const [video, setVideo] = useState<FileProps | string | null>(() => props.video ?? null)

  const { onChange } = props
  const maxSize = props.maxSize ?? 1024 * 1024 * 1024 // 1Gb
  const handleDrop = useCallback(
    acceptedFiles => {
      setVideo({ ...acceptedFiles[0] })
      onChange(acceptedFiles[0])
    },
    [onChange],
  )
  const handleRemove = useCallback(() => {
    setVideo(null)
    onChange(null)
  }, [onChange])

  return (
    <S.Wrapper className={props.className}>
      <S.Dropzone maxSize={maxSize} onDrop={handleDrop}>
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
