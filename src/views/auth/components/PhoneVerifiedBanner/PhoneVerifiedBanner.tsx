import React, { useCallback } from 'react'
import ReactDOM from 'react-dom'
import { User } from '../../../../api'
import { Banner } from '../../../../components'
import { useTranslation } from 'react-i18next'
import { useRecoilValue } from 'recoil'
import { phoneVerifiedBannerState } from '../../recoil/selectors'
import * as S from './PhoneVerifiedBanner.styles'
import { useSetRecoilState } from 'recoil'
import { authBannerStatuses } from '../../recoil/atoms'
import { DateTime } from 'luxon'
import { useHistory } from 'react-router-dom'

interface PhoneVerifiedBannerProps {
  user?: User | null
}

function PhoneVerifiedBanner(props: PhoneVerifiedBannerProps) {
  const { t } = useTranslation('auth')
  const bannersRoot = document.getElementById('banners')
  const state = useRecoilValue(phoneVerifiedBannerState)
  const setState = useSetRecoilState(authBannerStatuses)
  const history = useHistory()

  const handleClose = useCallback(() => {
    setState(state => ({
      ...state,
      phoneVerified: {
        viewed: true,
        lastDate: DateTime.local().toString(),
      },
    }))
  }, [setState])

  const handleAction = useCallback(() => {
    history.push('/settings/verification')
  }, [history])

  if (props.user?.isPhoneVerified || !bannersRoot) {
    return null
  }

  if (state.viewed && state.lastDate && DateTime.fromISO(state.lastDate).diffNow().as('days') < 7) {
    return null
  }

  return ReactDOM.createPortal(
    <Banner
      icon={<S.WarningIcon />}
      message={t('banner.phone_not_verified.message')}
      actionContent={t('banner.phone_not_verified.action')}
      onAction={handleAction}
      onClose={handleClose}
    />,
    bannersRoot,
  )
}

export default PhoneVerifiedBanner
export { PhoneVerifiedBanner }
