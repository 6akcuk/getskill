import React, { useRef, useEffect, useState, ReactNode } from 'react'
import { AsyncRequestHook, AsyncRequestConsumerRenderFunction } from './types'
import * as S from './AsyncRequestConsumer.styles'

interface AsyncRequestConsumerProps<B, E, P> {
  params: P
  body: B
  hook: AsyncRequestHook<B, E, P>
  children: AsyncRequestConsumerRenderFunction<E>
  fallback?: ReactNode
}

function AsyncRequestConsumer<B, E, P>(props: AsyncRequestConsumerProps<B, E, P>) {
  const useAsyncRequest = useRef(props.hook).current
  const [status, request] = useAsyncRequest()
  const [resource, setResource] = useState<E | null>()

  useEffect(() => {
    if (status.idle) {
      // FIXME allow partial params
      request(props.params, props.body).then(e => setResource(e))
    }
  }, [status, request, props.params, props.body])

  useEffect(() => {
    // We were not able to retrieve the resource even once, so we throw an error
    // This is most likely caused by the request fetching the resource failing to get it, either because
    // the params/id provided were not correct, or because the backed failed to respond correctly
    if (status.failure && !resource) {
      throw new Error(
        `Hook ${props.hook.name} reported a failure while rendering with params ${JSON.stringify(
          props.params,
        )}`,
      )
    }
  }, [status, resource, props.hook.name, props.params])

  useEffect(() => {
    // An error ocurred when mutating a resource, but we still have the "old" reference to the resource.
    // We just notify the dev that something went wrong, but allow the interface to render the last known value
    if (status.failure && resource) {
      // eslint-disable-next-line no-console
      console.error(
        `Hook ${props.hook.name} reported a failure while rendering with params ${JSON.stringify(
          props.params,
        )}, but we have a resource, so we will render the old version until we can get a good one.`,
      )
    }
  }, [status, resource, props.hook.name, props.params])

  if (
    status.idle || // the resource has not been requested yet by the hook, this is the first render
    (status.pending && !resource) // the resource is not yet available but is being requested
  ) {
    return props.fallback ? (
      <>{props.fallback}</>
    ) : (
      <S.Wrapper>
        <S.Spinner />
      </S.Wrapper>
    )
  }

  return <>{resource ? props.children(resource!, status) : null}</>
}

export default AsyncRequestConsumer
export { AsyncRequestConsumer }
export type { AsyncRequestConsumerProps }
