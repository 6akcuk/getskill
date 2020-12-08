import React from 'react'
import { Spinner } from '../Spinner'

type MissingChunkLoadError = Error & { name: 'ChunkLoadError'; type: 'missing' }

function isMissingChunkLoadError(error: any): error is MissingChunkLoadError {
  return error instanceof Error && error.name === 'ChunkLoadError' && (error as any).type === 'missing'
}

function forceReload() {
  window.location.reload(true)
}

function lazyComponent(...args: Parameters<typeof React.lazy>) {
  const [factory] = args

  /*
   * After deploying a new version, users that have the browser opened might experience an error when
   * views that were not previously loaded on the frontend side. By doing this, we allow the chunks to fail
   * loading and silently update the user, keeping the UX consistent.
   */
  const factoryWithChunkErrorHandler = () =>
    factory().catch(error => {
      if (isMissingChunkLoadError(error)) {
        forceReload()
        return { default: Spinner }
      }

      throw error
    })

  return React.lazy(factoryWithChunkErrorHandler)
}

export default lazyComponent
export { lazyComponent }
