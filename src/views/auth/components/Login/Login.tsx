import React, { Suspense, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSetRecoilState } from 'recoil'
import { Modal } from '../../../../components'
import { LoginForm } from '..'
import { LoginFormSchema } from '../LoginForm/useLoginForm'
import { useLogin } from '../../../../api'
import { authTokenState } from '../../recoil/atoms'
import { useNavigateBack, useOpenModalCallback } from '../../../../hooks'
import * as S from './Login.styles'

function Login() {
  const setAuthToken = useSetRecoilState(authTokenState)
  const { t } = useTranslation('auth')
  const [, login] = useLogin()
  const navigateBack = useNavigateBack()
  const openModal = useOpenModalCallback()

  const handleSubmit = useCallback(
    async (values: LoginFormSchema) => {
      const response = await login(
        {},
        {
          username: values.username,
          password: values.password,
        },
      )

      setAuthToken(response.token)
      navigateBack()
    },
    [setAuthToken],
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
