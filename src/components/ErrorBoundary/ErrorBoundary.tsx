import React, { ReactNode } from 'react'
import { ErrorDisplay } from './ErrorDisplay'

interface ErrorBoundaryProps {
  children?: ReactNode
  error?: ReactNode
}

interface ErrorBoundaryState {
  hasError: false
}

class ErrorBoundary extends React.PureComponent<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    return this.state.hasError ? this.props.error ?? <ErrorDisplay /> : this.props.children
  }
}

export default ErrorBoundary
export { ErrorBoundary }
export type { ErrorBoundaryProps }
