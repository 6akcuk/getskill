import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { UploadResource, UploadResponse } from '../../../../../../components'
import useProfileForm from './useProfileForm'
import { userAssetTransformations } from '../../../../../../api'
import * as S from './AvatarUploader.styles'

interface AvatarUploaderProps {
  form: ReturnType<typeof useProfileForm>
  className?: string
}

const eager = Object.values(userAssetTransformations)

function AvatarUploader(props: AvatarUploaderProps) {
  const { t } = useTranslation('profile')
  const { setFieldValue } = props.form
  const handleAvatarChange = useCallback(
    (response?: UploadResponse) => {
      setFieldValue(
        'avatar',
        response && {
          publicId: response.public_id,
          version: response.version,
        },
      )
    },
    [setFieldValue],
  )

  return (
    <S.ImageUploader
      className={props.className}
      eager={eager}
      resource={UploadResource.avatar}
      onSuccess={handleAvatarChange}>
      <S.Button look="white" type="button">
        {t('form.profile.label.change_avatar')}
      </S.Button>
    </S.ImageUploader>
  )
}

export default AvatarUploader
export { AvatarUploader }
