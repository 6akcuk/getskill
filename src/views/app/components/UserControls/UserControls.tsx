import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useIsLoggedIn, useOpenModalCallback } from '../../../../hooks'
import * as S from './UserControls.styles'

interface UserControlsProps {
  className?: string
}

function UserControls(props: UserControlsProps) {
  const isLoggedIn = useIsLoggedIn()
  const { t } = useTranslation('auth')
  const openModal = useOpenModalCallback()

  const handleSignIn = useCallback(() => {
    openModal('/login')
  }, [openModal])

  return (
    <S.Wrapper className={props.className}>
      {!isLoggedIn && (
        <S.LoginButton look="primary" onClick={handleSignIn}>
          {t('button.sign_in')}
        </S.LoginButton>
      )}
      {isLoggedIn && (
        <S.UserControls>
          <S.PublishDropdownButton />
          <S.UserBlock />
        </S.UserControls>
      )}
    </S.Wrapper>
  )
}

export default UserControls
export { UserControls }
