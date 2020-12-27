import * as yup from 'yup'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { forgotPasswordCode, forgotPasswordStep, forgotPasswordPhone, forgotPasswordToken } from '../recoil'
import { useFormik } from 'formik'
import { useChangePassword } from '../../../../../api'
import { useNotifications, useNavigateBack } from '../../../../../hooks'
import { NotificationType } from '../../../../app/views/notifications/atoms'
import { useTranslation } from 'react-i18next'

interface ChangePasswordFormValues {
  password: string
}

const validationSchema = yup.object<ChangePasswordFormValues>({
  password: yup.string().required(),
})

function useChangePasswordForm() {
  const token = useRecoilValue(forgotPasswordToken)
  const setStep = useSetRecoilState(forgotPasswordStep)
  const setPhone = useSetRecoilState(forgotPasswordPhone)
  const setCode = useSetRecoilState(forgotPasswordCode)
  const setToken = useSetRecoilState(forgotPasswordToken)
  const [, changePassword] = useChangePassword()
  const { push } = useNotifications()
  const { t } = useTranslation('auth')
  const navigateBack = useNavigateBack()

  return useFormik({
    validationSchema,
    initialValues: {
      ...validationSchema.default()!,
    },
    onSubmit: async values => {
      await changePassword(
        {},
        {
          token: token ?? '',
          password: values.password,
        },
      )

      setStep(1)
      setPhone(null)
      setCode(null)
      setToken(null)

      push({
        type: NotificationType.SUCCESS,
        title: t('forgot_password.change.success.title'),
        text: t('forgot_password.change.success.text'),
      })

      navigateBack()
    },
  })
}

export default useChangePasswordForm
export { useChangePasswordForm }
