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
  const handleAvatarChange = useCallback(
    (response?: UploadResponse) => {
      props.form.setFieldValue(
        'avatar',
        response && {
          publicId: response.public_id,
          version: response.version,
        },
      )
    },
    [props.form.setFieldValue],
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
