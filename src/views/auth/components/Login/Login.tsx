import React, { Suspense, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Modal } from '../../../../components'
import { LoginForm } from '..'
import { LoginFormSchema } from '../LoginForm/useLoginForm'
import { useLogin } from '../../../../api'
import { useNavigateBack, useOpenModalCallback } from '../../../../hooks'
import { useSetRecoilState } from 'recoil'
import { isLoggedInState } from '../../recoil/atoms'
import * as S from './Login.styles'

function Login() {
  const { t } = useTranslation('auth')
  const [, login] = useLogin()
  const navigateBack = useNavigateBack()
  const openModal = useOpenModalCallback()
  const setIsLoggedIn = useSetRecoilState(isLoggedInState)

  const handleSubmit = useCallback(
    async (values: LoginFormSchema) => {
      await login(
        {},
        {
          username: values.username,
          password: values.password,
        },
      )

      setIsLoggedIn(true)
      navigateBack()
    },
    [login, setIsLoggedIn, navigateBack],
  )

  const handleSignUpClick = useCallback(() => {
    openModal('/register')
  }, [openModal])

  return (
    <Modal>
      <Suspense fallback={<S.Spinner />}>
        <S.Wrapper>
          <S.Header>{t('header.login')}</S.Header>
          <LoginForm onSubmit={handleSubmit} />
          <S.Divider text={t('label.or')} />
          <S.RegisterButton onClick={handleSignUpClick}>{t('button.sign_up')}</S.RegisterButton>
        </S.Wrapper>
      </Suspense>
    </Modal>
  )
}

export default Login
