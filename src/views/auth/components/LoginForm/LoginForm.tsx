import React from 'react'
import { useTranslation } from 'react-i18next'
import { Input, PasswordInput } from '../../../../components'
import useLoginForm, { LoginFormSchema } from './useLoginForm'
import * as S from './LoginForm.styles'

interface LoginFormProps {
  onSubmit: (values: LoginFormSchema) => void
}

function LoginForm({ onSubmit }: LoginFormProps) {
  const { t } = useTranslation('auth')
  const { handleChange, handleSubmit, values, isSubmitting } = useLoginForm({ onSubmit })

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Field id="username" label={t('label.login')}>
        <Input id="username" onChange={handleChange} value={values.username} />
      </S.Field>
      <S.Field id="password" label={t('label.password')}>
        <PasswordInput id="password" onChange={handleChange} value={values.password} />
      </S.Field>
      <S.Buttons>
        <S.SignInButton block={true} type="submit" look="primary" showSpinner={isSubmitting}>
          {t('button.sign_in')}
        </S.SignInButton>
        <S.ForgotPasswordLink type="button" look="text">
          {t('button.forgot_password')}
        </S.ForgotPasswordLink>
      </S.Buttons>
    </S.Form>
  )
}

export default LoginForm
