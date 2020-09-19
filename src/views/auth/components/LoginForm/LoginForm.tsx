import React from 'react'
import { Wrapper, Header, Form, Field, SignInButton } from './LoginForm.styles'
import { useTranslation } from 'react-i18next'
import { Input, PasswordInput } from '../../../../components'
import useLoginForm, { LoginFormSchema } from './useLoginForm'

interface LoginFormProps {
  onSubmit: (values: LoginFormSchema) => void
}

function LoginForm({ onSubmit }: LoginFormProps) {
  const { t } = useTranslation('auth')
  const { handleChange, handleSubmit, values, isSubmitting } = useLoginForm({ onSubmit })

  return (
    <Wrapper>
      <Header>{t('login.header')}</Header>
      <Form onSubmit={handleSubmit}>
        <Field id="username" label={t('label.login')}>
          <Input id="username" onChange={handleChange} value={values.username} />
        </Field>
        <Field id="password" label={t('label.password')}>
          <PasswordInput id="password" onChange={handleChange} value={values.password} />
        </Field>
        <SignInButton block={true} type="submit" look="primary" showSpinner={isSubmitting}>
          {t('button.sign_in')}
        </SignInButton>
      </Form>
    </Wrapper>
  )
}

export default LoginForm
