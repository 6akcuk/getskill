import { AsyncRequestStatus } from '../createRequestHook'
import { useMemo } from 'react'

interface AsyncRequestStatusObject {
  idle: boolean
  pending: boolean
  success: boolean
  failure: boolean
}

function useAsyncRequestStatus(status: AsyncRequestStatus | undefined): AsyncRequestStatusObject {
  return useMemo(
    () => ({
      idle: status === undefined || status === AsyncRequestStatus.IDLE,
      pending: status === AsyncRequestStatus.PENDING,
      success: status === AsyncRequestStatus.SUCCESS,
      failure: status === AsyncRequestStatus.FAILURE,
    }),
    [status],
  )
}

export default useAsyncRequestStatus
export { useAsyncRequestStatus }
