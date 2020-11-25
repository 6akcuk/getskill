import * as yup from 'yup'
import { useFormik } from 'formik'
import { useCurrentUser } from '../../../../../../hooks'
import { UserAvatar, useUpdateProfile } from '../../../../../../api'
import { mutate } from 'swr'

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

function useProfileForm() {
  const user = useCurrentUser()
  const [, updateProfile] = useUpdateProfile()

  return useFormik({
    enableReinitialize: true,
    validationSchema: profileFormSchema,
    initialValues: {
      ...profileFormSchema.default()!,
      ...{
        publicName: user?.profile.publicName ?? '',
        avatar: user?.profile.avatar,
        about: user?.profile.about,
      },
    },
    onSubmit: async values => {
      await updateProfile(null, {
        publicName: values.publicName,
        avatar: values.avatar,
        about: values.about,
      })

      mutate('/api/me')
    },
  })
}

export default useProfileForm
export { useProfileForm }
