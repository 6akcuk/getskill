import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import { useIsLoggedIn } from '../../../../hooks'
import * as S from './UserControls.styles'

interface UserControlsProps {
  className?: string
}

function UserControls(props: UserControlsProps) {
  const isLoggedIn = useIsLoggedIn()
  const { t } = useTranslation('auth')
  const history = useHistory()

  const handleSignIn = useCallback(() => {
    history.push('/login')
  }, [history])

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
