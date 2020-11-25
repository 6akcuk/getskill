import * as yup from 'yup'
import { UserContactResource, useUpdateProfileContacts, UserContacts } from '../../../../../../api'
import { useCurrentUser } from '../../../../../../hooks'
import { useFormik } from 'formik'
import { mutate } from 'swr'
import { useMemo } from 'react'

interface UserContactValue {
  resource: UserContactResource
  value: string | null
}
interface ContactsFormValues {
  selectedResource?: UserContactResource
  contacts: UserContactValue[]
}

const contactResourcesList: UserContactResource[] = ['vkontakte', 'instagram', 'twitter', 'facebook']

const contactsFormSchema = yup.object({
  contacts: yup.array().of(
    yup
      .object<UserContactValue>({
        resource: yup.mixed().oneOf(contactResourcesList).required(),
        value: yup.string().required(),
      })
      .required(),
  ),
})

function useContactsForm() {
  const [, updateProfileContacts] = useUpdateProfileContacts()
  const user = useCurrentUser()
  const initialValues = useMemo<ContactsFormValues>(
    () => ({
      contacts: Object.entries(user?.profile.contacts ?? []).map(([resource, value]) => ({
        resource: resource as UserContactResource,
        value,
      })),
    }),
    [user],
  )

  return useFormik<ContactsFormValues>({
    initialValues,
    enableReinitialize: true,
    validationSchema: contactsFormSchema,
    onSubmit: async values => {
      await updateProfileContacts(null, {
        contacts: values.contacts.reduce(
          (acc, contact) => ({
            ...acc,
            [contact.resource]: contact.value,
          }),
          {} as UserContacts,
        ),
      })

      mutate('/api/me')
    },
  })
}

export default useContactsForm
export { contactResourcesList, useContactsForm }
export type { UserContactValue }
