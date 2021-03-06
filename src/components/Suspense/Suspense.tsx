import React, { SuspenseProps as ReactSuspenseProps, ReactNode } from 'react'
import { Spinner } from '../Spinner'

interface SuspenseProps {
  children?: ReactNode
  fallback?: ReactSuspenseProps['fallback']
}

function Suspense(props: SuspenseProps) {
  return <React.Suspense {...props} fallback={props.fallback ?? <Spinner />} />
}

export default Suspense
export { Suspense }
export type { SuspenseProps }
