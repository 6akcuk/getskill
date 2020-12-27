import React from 'react'
import { useRecoilValue } from 'recoil'
import { useTranslation } from 'react-i18next'
import { Modal, Steps } from '../../../../../../components'
import RequestCode from '../RequestCode'
import { forgotPasswordStep } from '../../recoil'
import VerifyCode from '../VerifyCode'
import { useForgotPasswordStepChanger } from '../../hooks'
import ChangePassword from '../ChangePassword'
import * as S from './ForgotPassword.styles'

function ForgotPassword() {
  const step = useRecoilValue(forgotPasswordStep)
  const { t } = useTranslation('auth')
  const handleChange = useForgotPasswordStepChanger()

  return (
    <Modal>
      <S.Title>{t('forgot_password.title')}</S.Title>
      <Steps
        onChange={handleChange}
        step={step}
        steps={[
          { title: t('forgot_password.request.header'), content: <RequestCode /> },
          { title: t('forgot_password.verify.header'), content: <VerifyCode /> },
          { title: t('forgot_password.change.header'), content: <ChangePassword /> },
        ]}
      />
    </Modal>
  )
}

export default ForgotPassword
export { ForgotPassword }
