import React from 'react'
import * as S from './PhoneVerificationForm.styles'
import { usePhoneVerificationForm } from '../../hooks'
import { useTranslation } from 'react-i18next'
import { useCurrentUser } from '../../../../../../../../hooks'

interface PhoneVerificationFormProps {
  className?: string
}

function PhoneVerificationForm(props: PhoneVerificationFormProps) {
  const form = usePhoneVerificationForm()
  const { t } = useTranslation(['app', 'profile'])
  const user = useCurrentUser()

  if (user?.isPhoneVerified) {
    return (
      <S.FormContent
        title={t('profile:form.verification.phone.title')}
        hint={<S.Hint look="success" heading={t('profile:form.verification.phone.done.heading')} />}
      />
    )
  }

  return (
    <S.Form className={props.className} onSubmit={form.handleSubmit}>
      <S.FormContent
        isSubmitting={form.isSubmitting}
        title={t('profile:form.verification.phone.title')}
        subtitle={t('profile:form.verification.phone.subtitle')}
        fields={
          <>
            <S.Field id="phone" label={t('profile:form.verification.phone.label.phone')}>
              {form.values.phone}
            </S.Field>
            <S.Field
              id="code"
              label={t('profile:form.verification.phone.label.code')}
              error={form.errors.code}
              hint={t('app:code.phone.helper')}>
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
