import React from 'react'
import { useChangePasswordForm } from '../../hooks'
import * as S from '../ForgotPasswordForm/ForgotPasswordForm.styles'
import { useTranslation } from 'react-i18next'

function ChangePassword() {
  const form = useChangePasswordForm()
  const { t } = useTranslation('auth')

  return (
    <S.Form onSubmit={form.handleSubmit}>
      <S.FormField
        id="password"
        label={t('forgot_password.change.form.label.password')}
        error={form.errors.password}>
        <S.PasswordInput
          id="password"
          onChange={form.handleChange}
          value={form.values.password}
          hasError={Boolean(form.errors.password)}
        />
      </S.FormField>
      <S.SendButton type="submit" look="primary" showSpinner={form.isSubmitting}>
        {t('forgot_password.change.form.submit_button')}
      </S.SendButton>
    </S.Form>
  )
}

export default ChangePassword
export { ChangePassword }
