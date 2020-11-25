import React, { useMemo } from 'react'
import { Select, OptionType } from '../../../../../../components'
import { useTranslation } from 'react-i18next'
import useContactsForm, { contactResourcesList } from './useContactsForm'

interface ContactResourceSelectProps {
  form: ReturnType<typeof useContactsForm>
}

function ContactResourceSelect(props: ContactResourceSelectProps) {
  const { t } = useTranslation('profile')
  const options = useMemo<OptionType[]>(
    () =>
      contactResourcesList
        .filter(
          resource => props.form.values.contacts.findIndex(contact => contact.resource === resource) === -1,
        )
        .map(resource => ({
          label: t(`form.contacts.resource.${resource}`),
          value: resource,
        })),
    [t, props.form.values],
  )

  return (
    <Select
      placeholder={t('form.contacts.placeholder.select_resource')}
      options={options}
      onChange={resource => props.form.setFieldValue('selectedResource', resource?.value)}
      value={props.form.values.selectedResource}
    />
  )
}

export default ContactResourceSelect
export { ContactResourceSelect }
