import React, { Suspense, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { Modal } from '../../../../components'
import { LoginForm } from '..'
import { LoginFormSchema } from '../LoginForm/useLoginForm'
import { postLogin } from '../../../../api'
import { authTokenState } from '../../atoms'
import { useIsLoggedIn } from '../../../../hooks'
import * as S from './Login.styles'

function Login() {
  const setAuthToken = useSetRecoilState(authTokenState)
  const isLoggedIn = useIsLoggedIn()
  const history = useHistory()
  const { t } = useTranslation('auth')

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/')
    }
  }, [isLoggedIn, history])

  const handleSubmit = useCallback(
    async (values: LoginFormSchema) => {
      const response = await postLogin({
        username: values.username,
        password: values.password,
      })

      setAuthToken(response.token)
    },
    [setAuthToken],
  )

  const handleSignUpClick = useCallback(() => {
    history.push('/register')
  }, [history])

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
