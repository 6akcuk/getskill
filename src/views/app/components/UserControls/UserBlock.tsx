import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import { useCurrentUser } from '../../../../hooks'
import { AuthStorageKeys } from '../../../../api'
import { useSetRecoilState } from 'recoil'
import { isLoggedInState } from '../../../auth/recoil/atoms'
import * as S from './UserBlock.styles'

interface UserBlockProps {
  className?: string
}

function UserBlock(props: UserBlockProps) {
  const user = useCurrentUser()
  const { t } = useTranslation('auth')
  const history = useHistory()
  const setLoggedIn = useSetRecoilState(isLoggedInState)

  const handleNavigateToProfile = useCallback(() => {
    history.push(`/user/${user?.id}`)
  }, [history, user])

  const handleNavigateToSettings = useCallback(() => {
    history.push('/settings')
  }, [history])

  const handleSignOut = useCallback(() => {
    localStorage.removeItem(AuthStorageKeys.AUTH_TOKEN)
    localStorage.removeItem(AuthStorageKeys.REFRESH_TOKEN)

    setLoggedIn(false)
  }, [])

  return (
    <S.Dropdown
      className={props.className}
      items={[
        <S.SignedInBlock key={0}>
          <S.SignedInAs>{t('label.signed_in_as')}</S.SignedInAs>
          <S.PublicName>{user?.profile.publicName}</S.PublicName>
        </S.SignedInBlock>,
        <S.MenuDivider key={1} />,
        <S.MenuGroup key={2}>
          <S.MenuItem onClick={handleNavigateToProfile}>{t('button.profile')}</S.MenuItem>
          <S.MenuItem onClick={handleNavigateToSettings}>{t('button.settings')}</S.MenuItem>
          <S.MenuItem onClick={handleSignOut}>{t('button.sign_out')}</S.MenuItem>
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
export type { UserBlockProps }
