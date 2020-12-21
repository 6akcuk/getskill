import React from 'react'
import { useTranslation } from 'react-i18next'
import { ErrorBoundary, AsyncRequestConsumer } from '../../../../../../components'
import * as S from './CreateVideoLesson.styles'
import GetVideoLessonForm from './GetVideoLessonForm'
import { useDraft, DraftResourceType } from '../../../../../../api'
import PublishVideoLessonLock from '../PublishVideoLessonLock'

function CreateVideoLesson() {
  const { t } = useTranslation('videolesson')

  return (
    <S.Modal>
      <ErrorBoundary>
        <PublishVideoLessonLock>
          <AsyncRequestConsumer
            hook={useDraft}
            params={{}}
            body={{ resourceType: DraftResourceType.VIDEOLESSON }}>
            {videoLesson => (
              <GetVideoLessonForm videolesson={videoLesson}>
                {form => (
                  <>
                    <S.Header>{t('create.modal.title')}</S.Header>
                    <S.Form onSubmit={form.handleSubmit}>
                      <S.VideoLessonFields form={form} />
                      <S.PublishButton
                        block={true}
                        look="primary"
                        type="submit"
                        showSpinner={form.isSubmitting}>
                        {t('create.form.label.publish')}
                      </S.PublishButton>
                    </S.Form>
                  </>
                )}
              </GetVideoLessonForm>
            )}
          </AsyncRequestConsumer>
        </PublishVideoLessonLock>
      </ErrorBoundary>
    </S.Modal>
  )
}

export default CreateVideoLesson
export { CreateVideoLesson }
