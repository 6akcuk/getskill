import axios, { AxiosError } from 'axios'
import React, { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { notificationsState, NotificationType } from '../../views/app/views/notifications/atoms'
import * as S from './UploadHandler.styles'

import 'react-circular-progressbar/dist/styles.css'

interface UploadResponse {
  asset_id: string
  bytes: number
  duration: number
  created_at: string
  etag: string
  format: string
  height: number
  original_extension: string
  original_filename: string
  placeholder: boolean
  public_id: string
  resource_type: string
  secure_url: string
  signature: string
  tags: string[]
  type: string
  url: string
  version: number
  version_id: string
  width: number
}

interface UploadHandlerProps {
  uploadUrl?: string
  file?: File
  onSuccess: (response: UploadResponse) => void
  onFailure: () => void
}

function UploadHandler(props: UploadHandlerProps) {
  const [percentage, setPercentage] = useState(0)
  const setNotifications = useSetRecoilState(notificationsState)

  useEffect(() => {
    if (props.uploadUrl && props.file && percentage === 0) {
      const formData = new FormData()

      formData.append('file', props.file)

      axios
        .post<UploadResponse>(props.uploadUrl, formData, {
          onUploadProgress: (progressEvent: ProgressEvent) => {
            setPercentage(Number(((progressEvent.loaded / progressEvent.total) * 100).toFixed(0)))
          },
        })
        .then(response => props.onSuccess(response.data))
        .catch(e => {
          setNotifications(oldNotifications => [
            ...oldNotifications,
            {
              title: 'Ошибка',
              text: (e as AxiosError).response?.data.error.message,
              type: NotificationType.ERROR,
            },
          ])

          props.onFailure()
        })
    }
  }, [props, percentage])

  if (!props.uploadUrl || !props.file) {
    return null
  }

  return (
    <S.Wrapper>
      <S.ProgressBar value={percentage} text={`${percentage}%`} strokeWidth={5} />
    </S.Wrapper>
  )
}

export default UploadHandler
export { UploadHandler }
export type { UploadHandlerProps, UploadResponse }
