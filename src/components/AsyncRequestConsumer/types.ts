import type { ReactNode } from 'react'
import { AsyncRequestStatusObject } from '../../api/utils/hooks'

type AsyncRequest<B, E, P> = [AsyncRequestStatusObject, (params: P, body: B) => Promise<E | undefined | null>]

interface AsyncRequestHook<B, E, P> {
  (): AsyncRequest<B, E, P>
}

interface AsyncRequestConsumerRenderFunction<E> {
  (resource: NonNullable<E>, status: AsyncRequestStatusObject): ReactNode
}

export type { AsyncRequestHook, AsyncRequestConsumerRenderFunction }
