import React, { ReactNode, useCallback } from 'react'
import { Lock, Feature } from '../../../../../../features'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'

interface PublishVideoLessonLockProps {
  children: ReactNode
}

function PublishVideoLessonLock(props: PublishVideoLessonLockProps) {
  const { t } = useTranslation('videolesson')
  const history = useHistory()
  const handleAction = useCallback(() => {
    history.push('/settings/verification')
  }, [history])

  return (
    <Lock
      feature={Feature.PUBLISH_VIDEOLESSON}
      heading={t('lock.publish_videolesson.heading')}
      hint={t('lock.publish_videolesson.hint')}
      action={handleAction}
      actionContent={t('lock.publish_videolesson.action')}>
      {props.children}
    </Lock>
  )
}

export default PublishVideoLessonLock
export { PublishVideoLessonLock }
