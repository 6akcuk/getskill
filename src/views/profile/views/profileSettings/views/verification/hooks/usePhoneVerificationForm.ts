import * as yup from 'yup'
import { useFormik } from 'formik'
import { useCurrentUser } from '../../../../../../../hooks'

interface PhoneVerificationFormValues {
  phone: string
  code: string
}

const phoneVerificationFormSchema = yup.object<PhoneVerificationFormValues>({
  phone: yup.string().required(),
  code: yup.string().required(),
})

function usePhoneVerificationForm() {
  const user = useCurrentUser()

  return useFormik<PhoneVerificationFormValues>({
    initialValues: {
      phone: user?.phone ?? '',
      code: '',
    },
    validationSchema: phoneVerificationFormSchema,
    onSubmit: () => {},
  })
}

export { usePhoneVerificationForm }
