import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { CreateVideoLessonFormHandle } from '../../hooks'
import { UploadResponse, UploadResource } from '../../../../../../components'
import { videoLessonAssetTransformations } from '../../../../../../api'
import * as S from './VideoLessonFields.styles'

interface VideoLessonFieldsProps {
  form: CreateVideoLessonFormHandle
}

const eager = Object.values(videoLessonAssetTransformations)

function VideoLessonFields(props: VideoLessonFieldsProps) {
  const { t } = useTranslation('videolesson')
  const { setFieldValue } = props.form
  const handleUploadSuccess = useCallback(
    (response?: UploadResponse) => {
      if (response) {
        setFieldValue('uploadUrl', response.upload_url)
        setFieldValue('uploaded', true)
      }
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
            <S.VideoUploader eager={eager} resource={UploadResource.video} onSuccess={handleUploadSuccess} />
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
      <S.Field id="skills" label={t('create.form.label.skills')} error={props.form.errors.skills as string}>
        <S.SkillsInput
          value={props.form.values.skills}
          onChange={skills => props.form.setFieldValue('skills', skills ?? [])}
        />
      </S.Field>
    </S.Wrapper>
  )
}

export default VideoLessonFields
export { VideoLessonFields }
