import React, { Suspense, useCallback, useEffect } from 'react'
import { Modal } from '../../../../components'
import { LoginForm } from '..'
import { Spinner } from './Login.styles'
import { LoginFormSchema } from '../LoginForm/useLoginForm'
import { postLogin } from '../../../../api'
import { useSetRecoilState } from 'recoil'
import { authTokenState } from '../../atoms'
import { useIsLoggedIn } from '../../../../hooks'
import { useHistory } from 'react-router-dom'

function Login() {
  const setAuthToken = useSetRecoilState(authTokenState)
  const isLoggedIn = useIsLoggedIn()
  const history = useHistory()

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

  return (
    <Modal>
      <Suspense fallback={<Spinner />}>
        <LoginForm onSubmit={handleSubmit} />
      </Suspense>
    </Modal>
  )
}

export default Login
