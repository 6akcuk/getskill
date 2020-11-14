import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { CreateVideoLessonFormHandle } from '../../hooks'
import * as S from './VideoLessonFields.styles'

interface VideoLessonFieldsProps {
  form: CreateVideoLessonFormHandle
}

function VideoLessonFields(props: VideoLessonFieldsProps) {
  const { t } = useTranslation('videolesson')
  const { setFieldValue } = props.form
  const handleUploadSuccess = useCallback(
    (video?: File) => {
      setFieldValue('file', video)
      setFieldValue('uploaded', true)
    },
    [setFieldValue],
  )

  return (
    <S.Wrapper>
      <S.Field id="name" label={t('create.form.label.name')} error={props.form.errors.name}>
        <S.Input id="name" value={props.form.values.name} onChange={props.form.handleChange} />
      </S.Field>
      <S.Field id="video" label={t('create.form.label.video')} error={props.form.errors.uploaded}>
        {!props.form.values.uploaded && (
          <>
            <S.HelperText>{t('create.form.helper.video')}</S.HelperText>
            <S.VideoUploader uploadUrl={props.form.values.uploadUrl} onSuccess={handleUploadSuccess} />
          </>
        )}
        {props.form.values.uploaded && (
          <S.VideoProcessing>{t('create.form.helper.video_processing')}</S.VideoProcessing>
        )}
      </S.Field>
      <S.Field
        id="description"
        label={t('create.form.label.description')}
        error={props.form.errors.description}>
        <S.TextArea
          id="description"
          onChange={props.form.handleChange}
          value={props.form.values.description}
        />
      </S.Field>
    </S.Wrapper>
  )
}

export default VideoLessonFields
export { VideoLessonFields }
