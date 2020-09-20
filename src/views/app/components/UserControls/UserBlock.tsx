import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSetRecoilState } from 'recoil'
import { useCurrentUser } from '../../../../hooks'
import { authTokenState } from '../../../auth/atoms'
import * as S from './UserBlock.styles'

function UserBlock() {
  const user = useCurrentUser()
  const { t } = useTranslation('auth')
  const setAuthToken = useSetRecoilState(authTokenState)

  const handleSignOut = useCallback(() => {
    setAuthToken(null)
  }, [setAuthToken])

  return (
    <S.Dropdown
      items={[
        <S.SignedInBlock key={0}>
          <S.SignedInAs>{t('label.signed_in_as')}</S.SignedInAs>
          <S.PublicName>{user?.publicName}</S.PublicName>
        </S.SignedInBlock>,
        <S.MenuDivider key={1} />,
        <S.MenuGroup key={2}>
          <S.MenuItem key={2} onClick={handleSignOut}>
            {t('button.sign_out')}
          </S.MenuItem>
        </S.MenuGroup>,
      ]}>
      <S.UserButton>
        <S.UserAvatar user={user} />
      </S.UserButton>
    </S.Dropdown>
  )
}

export default UserBlock
export { UserBlock }
