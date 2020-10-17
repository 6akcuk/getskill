import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import * as S from './PublishDropdown.styles'

function PublishDropdown() {
  const { t } = useTranslation('publish')
  const history = useHistory()
  const navigateTo = useCallback(
    (to: string) => {
      history.push(to)
    },
    [history],
  )

  return (
    <S.PublishDropdownButton
      items={[
        <S.MenuGroup key={1}>
          <S.MenuItem onClick={() => navigateTo('/publish/videolesson')}>{t('menu.videolesson')}</S.MenuItem>
        </S.MenuGroup>,
      ]}
      look="primary">
      {t('button.publish')}
    </S.PublishDropdownButton>
  )
}

export default PublishDropdown
export { PublishDropdown }
