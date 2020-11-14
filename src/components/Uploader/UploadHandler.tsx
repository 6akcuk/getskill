import axios, { AxiosError } from 'axios'
import React, { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import * as S from './UploadHandler.styles'
import { notificationsState, NotificationType } from '../../views/app/views/notifications/atoms'

import 'react-circular-progressbar/dist/styles.css'

interface UploadHandlerProps {
  uploadUrl?: string
  file?: File
  onSuccess: () => void
  onFailure: () => void
}

function UploadHandler(props: UploadHandlerProps) {
  const [percentage, setPercentage] = useState(0)
  const setNotifications = useSetRecoilState(notificationsState)

  useEffect(() => {
    if (props.uploadUrl && props.file && percentage === 0) {
      /* const upload = new tus.Upload(props.file, {
        endpoint: props.uploadUrl,
        // Callback for errors which cannot be fixed using retries
        onError(error) {
          console.log(`Failed because: ${error}`)
        },
        // Callback for reporting upload progress
        onProgress(bytesUploaded, bytesTotal) {
          setPercentage(Number(((bytesUploaded / bytesTotal) * 100).toFixed(2)))
        },
        // Callback for once the upload is completed
        onSuccess() {},
      })

      upload.start()*/
      const formData = new FormData()

      formData.append('file', props.file)

      axios
        .post(props.uploadUrl, formData, {
          onUploadProgress: (progressEvent: ProgressEvent) => {
            setPercentage(Number(((progressEvent.loaded / progressEvent.total) * 100).toFixed(0)))
          },
        })
        .then(() => props.onSuccess())
        .catch(e => {
          if ((e as AxiosError).response?.data === 'Video already uploaded') {
            props.onSuccess()
          }

          setNotifications(oldNotifications => [
            ...oldNotifications,
            {
              title: 'Ошибка',
              text: (e as AxiosError).response?.data.message,
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
export type { UploadHandlerProps }
