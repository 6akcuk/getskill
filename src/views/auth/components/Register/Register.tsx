import React, { Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import * as S from './Register.styles'

function Register() {
  const { t } = useTranslation('auth')

  return (
    <S.Modal>
      <Suspense fallback={<S.Spinner />}>
        <S.Header>{t('header.register')}</S.Header>
        <S.RegisterForm />
      </Suspense>
    </S.Modal>
  )
}

export default Register
export { Register }
