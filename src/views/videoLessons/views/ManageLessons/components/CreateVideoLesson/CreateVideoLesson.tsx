import React from 'react'
import { useTranslation } from 'react-i18next'
import GetDraftVideoLessonForm from './GetDraftVideoLessonForm'
import { useDraft, DraftResourceType } from '../../../../../../api'
import { AsyncRequestConsumer, ErrorBoundary } from '../../../../../../components'
import * as S from './CreateVideoLesson.styles'

function CreateVideoLesson() {
  const { t } = useTranslation('videolesson')

  return (
    <S.Modal>
      <ErrorBoundary>
        <AsyncRequestConsumer
          hook={useDraft}
          params={{}}
          body={{ resourceType: DraftResourceType.VIDEOLESSON }}>
          {videoLesson => (
            <GetDraftVideoLessonForm videoLesson={videoLesson}>
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
            </GetDraftVideoLessonForm>
          )}
        </AsyncRequestConsumer>
      </ErrorBoundary>
    </S.Modal>
  )
}

export default CreateVideoLesson
export { CreateVideoLesson }
