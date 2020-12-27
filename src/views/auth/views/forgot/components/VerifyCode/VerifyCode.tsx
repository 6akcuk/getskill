import React from 'react'
import { useTranslation } from 'react-i18next'
import { useVerifyCodeForm } from '../../hooks'
import * as S from '../ForgotPasswordForm/ForgotPasswordForm.styles'

function VerifyCode() {
  const form = useVerifyCodeForm()
  const { t } = useTranslation('auth')

  return (
    <S.Form onSubmit={form.handleSubmit}>
      <S.FormField id="code" label={t('forgot_password.verify.form.label.code')} error={form.errors.code}>
        <S.Input
          id="code"
          onChange={form.handleChange}
          value={form.values.code}
          hasError={Boolean(form.errors.code)}
        />
      </S.FormField>
      <S.SendButton type="submit" look="primary" showSpinner={form.isSubmitting}>
        {t('forgot_password.verify.form.verify_button')}
      </S.SendButton>
    </S.Form>
  )
}

export default VerifyCode
export { VerifyCode }
