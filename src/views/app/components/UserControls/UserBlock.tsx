import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSetRecoilState } from 'recoil'
import { useCurrentUser } from '../../../../hooks'
import { authTokenState } from '../../../auth/atoms'
import * as S from './UserBlock.styles'

interface UserBlockProps {
  className?: string
}

function UserBlock(props: UserBlockProps) {
  const user = useCurrentUser()
  const { t } = useTranslation('auth')
  const setAuthToken = useSetRecoilState(authTokenState)

  const handleSignOut = useCallback(() => {
    setAuthToken(null)
  }, [setAuthToken])

  return (
    <S.Dropdown
      className={props.className}
      items={[
        <S.SignedInBlock key={0}>
          <S.SignedInAs>{t('label.signed_in_as')}</S.SignedInAs>
          <S.PublicName>{user?.publicName}</S.PublicName>
        </S.SignedInBlock>,
        <S.MenuDivider key={1} />,
        <S.MenuGroup key={2}>
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
