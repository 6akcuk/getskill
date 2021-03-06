import axios, { AxiosError } from 'axios'
import React, { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { notificationsState, NotificationType } from '../../views/app/views/notifications/atoms'
import * as S from './UploadHandler.styles'

import 'react-circular-progressbar/dist/styles.css'

interface CloudinaryUploadResponse {
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

interface UploadResponse {
  upload_url: string
  public_id: string // Backward compatibility with Cloudinary response (e.g. use asset_id for others)
  version: number
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
  const { uploadUrl, file, onSuccess, onFailure } = props

  useEffect(() => {
    const cancelable = axios.CancelToken.source()

    if (uploadUrl && file && percentage === 0) {
      const formData = new FormData()

      formData.append('file', file)

      axios
        .post<UploadResponse>(uploadUrl, formData, {
          cancelToken: cancelable.token,
          headers: {
            'Content-Type': file.type,
          },
          onUploadProgress: (progressEvent: ProgressEvent) => {
            setPercentage(Number(((progressEvent.loaded / progressEvent.total) * 100).toFixed(0)))
          },
        })
        .then(response =>
          onSuccess(
            response.data
              ? {
                  upload_url: uploadUrl!,
                  public_id: response.data.public_id,
                  version: response.data.version,
                }
              : {
                  upload_url: uploadUrl!,
                  public_id: '',
                  version: 1,
                },
          ),
        )
        .catch(e => {
          setNotifications(oldNotifications => [
            ...oldNotifications,
            {
              title: 'Ошибка',
              text: (e as AxiosError).response?.data.error.message,
              type: NotificationType.ERROR,
            },
          ])

          onFailure()
        })
        .finally(() => setPercentage(0))
    }

    if (!file) {
      cancelable.cancel()
    }
  }, [uploadUrl, file, onSuccess, onFailure, setNotifications, percentage])

  if (!file) {
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
