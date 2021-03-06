import * as yup from 'yup'
import { useFormik, FormikProps } from 'formik'
import { useCurrentUser } from '../../../../../../hooks'
import { UserAvatar, useUpdateProfile } from '../../../../../../api'
import { mutate } from 'swr'
import { useMemo } from 'react'

interface ProfileFormValues {
  publicName: string
  avatar?: UserAvatar | null
  about?: string | null
}

const profileFormSchema = yup.object<ProfileFormValues>({
  publicName: yup.string().required().default(''),
  avatar: yup.object<UserAvatar>().nullable(),
  about: yup.string().nullable(),
})

type ProfileFormHandle = FormikProps<ProfileFormValues>

function useProfileForm() {
  const user = useCurrentUser()
  const [, updateProfile] = useUpdateProfile()
  const initialValues = useMemo<ProfileFormValues>(
    () => ({
      ...profileFormSchema.default()!,
      ...{
        publicName: user?.profile.publicName ?? '',
        avatar: user?.profile.avatar,
        about: user?.profile.about,
      },
    }),
    [user],
  )

  return useFormik({
    enableReinitialize: true,
    validationSchema: profileFormSchema,
    initialValues,
    onSubmit: async values => {
      await updateProfile(null, {
        publicName: values.publicName,
        avatar: values.avatar,
        about: values.about,
      })

      mutate('/api/me', () => ({
        ...user,
        profile: {
          ...user?.profile,
          publicName: values.publicName,
          avatar: values.avatar,
          about: values.about,
        },
      }))
    },
  })
}

export default useProfileForm
export { useProfileForm }
export type { ProfileFormHandle }
