import * as yup from 'yup'
import { useFormik } from 'formik'
import { useCurrentUser } from '../../../../../../../hooks'
import { useVerifyCode } from '../../../../../../../api'
import { mutate } from 'swr'

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
  const [, verifyCode] = useVerifyCode()

  return useFormik<PhoneVerificationFormValues>({
    initialValues: {
      phone: user?.phone ?? '',
      code: '',
    },
    validationSchema: phoneVerificationFormSchema,
    onSubmit: async values => {
      await verifyCode(
        {},
        {
          by: 'phone',
          verify: 'phone',
          code: values.code,
        },
      )

      mutate('/api/me')
    },
  })
}

export { usePhoneVerificationForm }
