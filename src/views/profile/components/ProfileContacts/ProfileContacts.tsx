import React, { useMemo } from 'react'
import { UserProfile, UserContactResource } from '../../../../api'
import * as S from './ProfileContacts.styles'
import { useTranslation } from 'react-i18next'

interface ProfileContactsProps {
  profile: UserProfile
  className?: string
}

function renderContact(resource: UserContactResource, contact: string) {
  switch (resource) {
    case 'instagram':
      return <S.Instagram value={contact} />

    case 'vkontakte':
      return <S.VK value={contact} />

    default:
      return null
  }
}

function ProfileContacts(props: ProfileContactsProps) {
  const contacts = useMemo(
    () =>
      Object.entries(props.profile.contacts ?? {}).map(([resource, contact]) => (
        <React.Fragment key={resource}>
          {renderContact(resource as UserContactResource, contact)}
        </React.Fragment>
      )),
    [props.profile.contacts],
  )
  const { t } = useTranslation('profile')

  return (
    <S.Wrapper className={props.className}>
      <S.Title>{t('view.contacts_title')}</S.Title>
      <S.Contacts>{contacts}</S.Contacts>
    </S.Wrapper>
  )
}

export default ProfileContacts
export { ProfileContacts }
