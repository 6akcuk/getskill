import React from 'react'
import ReactDOM from 'react-dom'
import { User } from '../../../../api'
import { Banner } from '../../../../components'
import * as S from './PhoneVerifiedBanner.styles'
import { useTranslation } from 'react-i18next'

interface PhoneVerifiedBannerProps {
  user?: User | null
}

function PhoneVerifiedBanner(props: PhoneVerifiedBannerProps) {
  const { t } = useTranslation('auth')
  const bannersRoot = document.getElementById('banners')

  if (props.user?.isPhoneVerified || !bannersRoot) {
    return null
  }

  return ReactDOM.createPortal(
    <Banner
      icon={<S.WarningIcon />}
      message={t('banner.phone_not_verified.message')}
      action={t('banner.phone_not_verified.action')}
    />,
    bannersRoot,
  )
}

export default PhoneVerifiedBanner
export { PhoneVerifiedBanner }
