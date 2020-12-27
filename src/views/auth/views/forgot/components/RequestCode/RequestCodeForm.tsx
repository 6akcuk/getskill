import React from 'react'
import { useRequestCodeForm } from '../../hooks'
import { useTranslation } from 'react-i18next'
import * as S from '../ForgotPasswordForm/ForgotPasswordForm.styles'

interface RequestCodeFormProps {
  className?: string
}

function RequestCodeForm(props: RequestCodeFormProps) {
  const form = useRequestCodeForm()
  const { t } = useTranslation(['app', 'auth'])

  return (
    <S.Form className={props.className} onSubmit={form.handleSubmit}>
      <S.FormField
        id="phone"
        label={t('auth:forgot_password.request.form.label.phone')}
        error={form.errors.phone}>
        <S.PhoneInput
          id="phone"
          value={form.values.phone}
          hasError={Boolean(form.errors.phone)}
          onChange={phone => form.setFieldValue('phone', phone)}
        />
      </S.FormField>
      <S.FormField id="hint" hint={t('app:code.phone.helper')}>
        <S.SendButton type="submit" look="primary" showSpinner={form.isSubmitting}>
          {t('auth:forgot_password.request.form.send_button')}
        </S.SendButton>
      </S.FormField>
    </S.Form>
  )
}

export default RequestCodeForm
export { RequestCodeForm }
