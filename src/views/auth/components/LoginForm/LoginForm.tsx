import React from 'react'
import { Wrapper, Header, Form, Field, SignInButton } from './LoginForm.styles'
import { useTranslation } from 'react-i18next'
import { Input, PasswordInput } from '../../../../components'

function LoginForm() {
  const { t } = useTranslation('auth')

  return (
    <Wrapper>
      <Header>{t('login.header')}</Header>
      <Form>
        <Field id="login" label={t('label.login')}>
          <Input />
        </Field>
        <Field id="password" label={t('label.password')}>
          <PasswordInput />
        </Field>
        <SignInButton block={true} type="submit" look="primary">
          {t('button.sign_in')}
        </SignInButton>
      </Form>
    </Wrapper>
  )
}

export default LoginForm
