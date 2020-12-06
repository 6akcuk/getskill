import React from 'react'
import { useTranslation } from 'react-i18next'
import { useOpenModalCallback } from '../../../../hooks'
import * as S from './PublishDropdown.styles'

function PublishDropdown() {
  const { t } = useTranslation('publish')
  const openModal = useOpenModalCallback()

  return (
    <S.PublishDropdownButton
      items={[
        <S.MenuGroup key={1}>
          <S.MenuItem onClick={() => openModal('/publish/videolesson')}>{t('menu.videolesson')}</S.MenuItem>
        </S.MenuGroup>,
      ]}
      look="primary">
      {t('button.publish')}
    </S.PublishDropdownButton>
  )
}

export default PublishDropdown
export { PublishDropdown }
