import React, { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import useContactsForm, { UserContactValue } from './useContactsForm'
import { FormikErrors } from 'formik'
import * as S from './ContactForm.styles'

function ContactForm() {
  const { t } = useTranslation('profile')
  const form = useContactsForm()
  const { setFieldValue, setValues, values } = form

  const errors = useMemo(() => {
    if (Array.isArray(form.errors.contacts) && typeof form.errors.contacts[0] === 'object') {
      return form.errors.contacts as FormikErrors<UserContactValue>[]
    }

    return undefined
  }, [form.errors.contacts])

  const handleAdd = useCallback(() => {
    if (values.selectedResource) {
      setValues({
        ...values,
        contacts: [...values.contacts, { resource: values.selectedResource, value: '' }],
      })

      setFieldValue('selectedResource', null)
    }
  }, [values, setValues, setFieldValue])

  const handleRemove = useCallback(
    (index: number) => {
      setValues({
        ...values,
        contacts: values.contacts.filter((_v, idx) => idx !== index),
      })
    },
    [setValues, values],
  )

  return (
    <S.Form onSubmit={form.handleSubmit}>
      <S.FormContent
        title={t('form.contacts.title')}
        subtitle={t('form.contacts.subtitle')}
        fields={
          <>
            <S.Field id="add" label={t('form.contacts.label.add')}>
              <S.Flex>
                <S.InputWrapper>
                  <S.Select form={form} />
                </S.InputWrapper>
                <S.Button look="white" type="button" onClick={handleAdd}>
                  {t('form.contacts.add')}
                </S.Button>
              </S.Flex>
            </S.Field>
            {form.values.contacts.map((contact, index) => (
              <S.Field
                key={contact?.resource}
                id={`${index}.value`}
                label={t(`form.contacts.resource.${contact?.resource}`)}
                error={errors?.[index].value}>
                <S.Flex>
                  <S.InputWrapper>
                    <S.Input
                      id={`contacts.${index}.value`}
                      onChange={form.handleChange}
                      placeholder={t('form.contacts.placeholder.type_address')}
                      hasError={Boolean(errors?.[index].value)}
                      value={contact?.value ?? ''}
                    />
                  </S.InputWrapper>
                  <S.Button look="danger" type="button" onClick={() => handleRemove(index)}>
                    <S.CloseIcon />
                  </S.Button>
                </S.Flex>
              </S.Field>
            ))}
          </>
        }
        isSubmitting={form.isSubmitting}
      />
    </S.Form>
  )
}

export default ContactForm
export { ContactForm }
