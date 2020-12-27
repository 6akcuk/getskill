import * as yup from 'yup'
import { useFormik } from 'formik'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { forgotPasswordPhone, forgotPasswordStep } from '../recoil'
import { useSendCode } from '../../../../../api'

interface RequestCodeFormValues {
  phone: string
}

const validationSchema = yup.object<RequestCodeFormValues>({
  phone: yup.string().required(),
})

function useRequestCodeForm() {
  const phone = useRecoilValue(forgotPasswordPhone)
  const setPhone = useSetRecoilState(forgotPasswordPhone)
  const setStep = useSetRecoilState(forgotPasswordStep)
  const [, sendCode] = useSendCode()

  return useFormik({
    validationSchema,
    initialValues: {
      ...validationSchema.default()!,
      phone: phone ?? '',
    },
    onSubmit: async values => {
      await sendCode(
        {},
        {
          phone: values.phone,
          by: 'phone',
          verify: 'forgot_password',
        },
      )

      setPhone(values.phone)
      setStep(2)
    },
  })
}

export default useRequestCodeForm
export { useRequestCodeForm }
