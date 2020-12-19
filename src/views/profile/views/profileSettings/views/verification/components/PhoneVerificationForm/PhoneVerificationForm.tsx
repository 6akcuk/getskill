import React from 'react'
import * as S from './PhoneVerificationForm.styles'
import { usePhoneVerificationForm } from '../../hooks'
import { useTranslation } from 'react-i18next'

interface PhoneVerificationFormProps {
  className?: string
}

function PhoneVerificationForm(props: PhoneVerificationFormProps) {
  const form = usePhoneVerificationForm()
  const { t } = useTranslation('profile')

  return (
    <S.Form className={props.className} onSubmit={form.handleSubmit}>
      <S.FormContent
        isSubmitting={form.isSubmitting}
        title={t('form.verification.phone.title')}
        subtitle={t('form.verification.phone.subtitle')}
        fields={
          <>
            <S.Field id="phone" label={t('form.verification.phone.label.phone')}>
              {form.values.phone}
            </S.Field>
            <S.Field
              id="code"
              label={t('form.verification.phone.label.code')}
              error={form.errors.code}
              hint={t('form.verification.phone.helper')}>
              <S.Input id="code" value={form.values.code} onChange={form.handleChange} />
            </S.Field>
            <S.SendButton />
          </>
        }
      />
    </S.Form>
  )
}

export default PhoneVerificationForm
export { PhoneVerificationForm }
