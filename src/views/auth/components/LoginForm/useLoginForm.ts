import { useFormik } from 'formik'
import * as yup from 'yup'

interface LoginFormSchema {
  username: string
  password: string
}

interface UseLoginFormOptions {
  onSubmit: (values: LoginFormSchema) => void
}

const loginFormSchema = yup.object<LoginFormSchema>({
  username: yup.string().required(),
  password: yup.string().required(),
})

function useLoginForm(options: UseLoginFormOptions) {
  return useFormik<LoginFormSchema>({
    validationSchema: loginFormSchema,
    validateOnChange: false,
    initialValues: {
      username: '',
      password: '',
    },
    ...options,
  })
}

export default useLoginForm
export { useLoginForm }
export type { LoginFormSchema }
