import { FormikConfig, useFormik, FormikProps } from 'formik'
import { useSetRecoilState } from 'recoil'
import * as yup from 'yup'
import { useRegister } from '../../../api'
import { useNavigateBack } from '../../../hooks'
import { authTokenState } from '../recoil/atoms'

interface RegisterFormValues {
  email: string
  phone: string
  publicName: string
  password: string
}

const registerFormSchema = yup.object<RegisterFormValues>({
  email: yup.string().email().required().default(''),
  phone: yup
    .string()
    .required()
    .default('+7 ')
    .test('phone', 'custom.phone', value => value.replace(/[^0-9]*/g, '').match(/^[0-9]{11,}$/)),
  publicName: yup.string().required().default(''),
  password: yup
    .string()
    .required()
    .test('password', 'custom.password', value => value.match(/^[A-z0-9]{6,}$/))
    .default(''),
})

type RegisterFormConfig = Omit<FormikConfig<RegisterFormValues>, 'initialValues' | 'onSubmit'>
type RegisterFormHandle = FormikProps<RegisterFormValues>

function useRegisterForm(config: RegisterFormConfig = {}) {
  const setAuthToken = useSetRecoilState(authTokenState)
  const navigateBack = useNavigateBack()
  const [, register] = useRegister()

  return useFormik({
    initialValues: registerFormSchema.default()!, // TEMPFIX: somehow yup returns undefined?
    validationSchema: registerFormSchema,
    onSubmit: async values => {
      const response = await register({}, values)

      setAuthToken(response.token)
      navigateBack()
    },
    ...config,
  })
}

export default useRegisterForm
export { useRegisterForm }
export type { RegisterFormHandle, RegisterFormValues }
