import React from 'react'
import { useTranslation } from 'react-i18next'
import useProfileForm from './useProfileForm'
import * as S from './ProfileForm.styles'

function ProfileForm() {
  const { t } = useTranslation('profile')
  const form = useProfileForm()
  const { errors, values, handleChange, handleSubmit } = form

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.FormContent
        title={t('form.profile.title')}
        subtitle={t('form.profile.subtitle')}
        fields={
          <>
            <S.Field id="publicName" label={t('form.profile.label.public_name')} error={errors.publicName}>
              <S.Input
                id="publicName"
                hasError={Boolean(errors.publicName)}
                onChange={handleChange}
                value={values.publicName}
              />
            </S.Field>
            <S.Field id="about" label={t('form.profile.label.about')} error={errors.about}>
              <S.TextArea id="about" onChange={handleChange} value={values.about ?? ''} />
            </S.Field>
            <S.Field id="avatar" label={t('form.profile.label.avatar')} error={errors.avatar}>
              <S.UserAvatarWrapper>
                <S.DeletableAvatar form={form}>
                  <S.UserAvatar size="xl" avatar={values.avatar} publicName={values.publicName} />
                </S.DeletableAvatar>
                <S.AvatarUploader form={form} />
              </S.UserAvatarWrapper>
            </S.Field>
          </>
        }
        isDirty={form.dirty}
        isSubmitting={form.isSubmitting}
      />
    </S.Form>
  )
}

export default ProfileForm
export { ProfileForm }
