import React from 'react'
import { useTranslation } from 'react-i18next'
import { ErrorBoundary } from '../../../../../../components'
import PublishVideoLessonLock from '../PublishVideoLessonLock'
import { useCreateVideoLessonForm } from '../../hooks'
import * as S from './CreateVideoLesson.styles'

function CreateVideoLesson() {
  const { t } = useTranslation('videolesson')
  const form = useCreateVideoLessonForm()

  return (
    <S.Modal>
      <ErrorBoundary>
        <PublishVideoLessonLock>
          <S.Header>{t('create.modal.title')}</S.Header>
          <S.Form onSubmit={form.handleSubmit}>
            <S.VideoLessonFields form={form} />
            <S.PublishButton block={true} look="primary" type="submit" showSpinner={form.isSubmitting}>
              {t('create.form.label.publish')}
            </S.PublishButton>
          </S.Form>
        </PublishVideoLessonLock>
      </ErrorBoundary>
    </S.Modal>
  )
}

export default CreateVideoLesson
export { CreateVideoLesson }
