import React from 'react'
import { useTranslation } from 'react-i18next'
import { useOpenModalCallback } from '../../../../hooks'
import { Feature } from '../../../../features'
import * as S from './PublishDropdown.styles'

function PublishDropdown() {
  const { t } = useTranslation('publish')
  const openModal = useOpenModalCallback()

  return (
    <S.PublishDropdownButton
      items={[
        <S.MenuGroup key={1}>
          <S.MenuItemWithLock
            lock={Feature.PUBLISH_VIDEOLESSON}
            onClick={() => openModal('/publish/videolesson')}>
            {t('menu.videolesson')}
          </S.MenuItemWithLock>
        </S.MenuGroup>,
      ]}
      look="primary">
      {t('button.publish')}
    </S.PublishDropdownButton>
  )
}

export default PublishDropdown
export { PublishDropdown }
