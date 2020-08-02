import React, { Suspense } from 'react'
import { Modal } from '../../../../components'
import { LoginForm } from '..'
import { Spinner } from './Login.styles'

function Login() {
  return (
    <Modal>
      <Suspense fallback={<Spinner />}>
        <LoginForm />
      </Suspense>
    </Modal>
  )
}

export default Login
