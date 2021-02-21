import React from 'react'
import { useTranslation } from 'react-i18next'
import { useRegisterForm } from '../../hooks'
import * as S from './RegisterForm.styles'

function RegisterForm() {
  const form = useRegisterForm()
  const { t } = useTranslation('auth')

  return (
    <S.Form onSubmit={form.handleSubmit}>
      <S.Field id="phone" label={t('label.phone')} error={form.errors.phone}>
        <S.PhoneInput onChange={phone => form.setFieldValue('phone', phone)} value={form.values.phone} />
      </S.Field>
      <S.Field id="email" label={t('label.email')} error={form.errors.email}>
        <S.Input id="email" type="email" onChange={form.handleChange} value={form.values.email} />
      </S.Field>
      <S.Field id="publicName" label={t('label.public_name')} error={form.errors.publicName}>
        <S.Input id="publicName" onChange={form.handleChange} value={form.values.publicName} />
      </S.Field>
      <S.Field id="password" label={t('label.password')} error={form.errors.password}>
        <S.PasswordInput id="password" onChange={form.handleChange} value={form.values.password} />
      </S.Field>
      <S.SignUpButton
        block={true}
        type="submit"
        look="primary"
        showSpinner={form.isSubmitting || form.isValidating}>
        {t('button.sign_up')}
      </S.SignUpButton>
    </S.Form>
  )
}

export default RegisterForm
export { RegisterForm }
