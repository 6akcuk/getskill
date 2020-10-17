import { AxiosResponse, AxiosError } from 'axios'
import { useState, useCallback } from 'react'
import client, { APIInstance } from '../client'
import { useAsyncRequestStatus } from './hooks'
import { useSetRecoilState } from 'recoil'
import { notificationsState, NotificationType } from '../../views/app/views/notifications/atoms'

type ApiCallFunction<RequestParams, RequestBody, ResponseBody> = ({
  params,
  body,
}: {
  params: RequestParams
  body: RequestBody
}) => Promise<AxiosResponse<ResponseBody>>

enum AsyncRequestStatus {
  IDLE = 'idle',
  PENDING = 'pending',
  SUCCESS = 'success',
  FAILURE = 'failure',
}

interface UseRequestHookProps {
  suspense?: boolean
}

function createRequestHook<RequestParams, RequestBody, ResponseBody>(
  apiCall: (api: APIInstance) => ApiCallFunction<RequestParams, RequestBody, ResponseBody>,
) {
  return function useRequestHook(props?: UseRequestHookProps) {
    const [status, setStatus] = useState<AsyncRequestStatus>(AsyncRequestStatus.IDLE)
    const asyncRequestStatus = useAsyncRequestStatus(status)
    const setNotifications = useSetRecoilState(notificationsState)

    const requestCallback = useCallback(async (params: RequestParams, body: RequestBody) => {
      setStatus(AsyncRequestStatus.PENDING)

      try {
        const response = await apiCall(client)({ params, body })

        setStatus(AsyncRequestStatus.SUCCESS)

        return response.data
      } catch (e) {
        setStatus(AsyncRequestStatus.FAILURE)

        setNotifications(oldNotifications => [
          ...oldNotifications,
          {
            title: 'Ошибка',
            text: (e as AxiosError).response?.data.error.message,
            type: NotificationType.ERROR,
          },
        ])

        throw e
      }
    }, [])

    if (Boolean(props?.suspense) && asyncRequestStatus.pending) {
      throw Promise.resolve()
    }

    return [asyncRequestStatus, requestCallback] as [typeof asyncRequestStatus, typeof requestCallback]
  }
}

export default createRequestHook
export { AsyncRequestStatus, createRequestHook }
