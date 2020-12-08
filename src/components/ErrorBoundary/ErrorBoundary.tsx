import React, { ReactNode } from 'react'
import { ErrorDisplay } from './ErrorDisplay'
import styled from 'styled-components'

interface ErrorBoundaryProps {
  children?: ReactNode
  error?: ReactNode
}

interface ErrorBoundaryState {
  hasError: false
}

const Wrapper = styled.div``

class ErrorBoundary extends React.PureComponent<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    return this.state.hasError ? (
      <Wrapper onClick={() => this.setState({ hasError: false })}>
        {this.props.error ?? <ErrorDisplay />}
      </Wrapper>
    ) : (
      this.props.children
    )
  }
}

export default ErrorBoundary
export { ErrorBoundary }
export type { ErrorBoundaryProps }
