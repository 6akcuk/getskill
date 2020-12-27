import * as yup from 'yup'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { forgotPasswordCode, forgotPasswordStep, forgotPasswordPhone, forgotPasswordToken } from '../recoil'
import { useFormik } from 'formik'
import { useVerifyCode } from '../../../../../api'

interface VerifyCodeFormValues {
  code: string
}

const validationSchema = yup.object<VerifyCodeFormValues>({
  code: yup.string().required(),
})

function useVerifyCodeForm() {
  const phone = useRecoilValue(forgotPasswordPhone)
  const code = useRecoilValue(forgotPasswordCode)
  const setStep = useSetRecoilState(forgotPasswordStep)
  const setCode = useSetRecoilState(forgotPasswordCode)
  const setToken = useSetRecoilState(forgotPasswordToken)
  const [, verifyCode] = useVerifyCode()

  return useFormik({
    validationSchema,
    initialValues: {
      ...validationSchema.default()!,
      code: code ?? '',
    },
    onSubmit: async values => {
      const response = await verifyCode(
        {},
        {
          phone: phone ?? undefined,
          code: values.code,
          by: 'phone',
          verify: 'forgot_password',
        },
      )

      setStep(3)
      setCode(values.code)
      setToken(response.token!)
    },
  })
}

export default useVerifyCodeForm
export { useVerifyCodeForm }
