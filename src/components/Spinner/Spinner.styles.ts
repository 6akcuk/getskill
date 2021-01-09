import styled, { keyframes } from 'styled-components'

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  justify-self: stretch;
`

const Ring = styled.div`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 48px;
`

const Sector = styled.div<{ inverse?: boolean }>`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: calc(100% - 16px);
  height: calc(100% - 16px);
  margin: 8px;
  border: 2px solid ${props => (props.inverse ? props.theme.colors.white : props.theme.colors.text[700])};
  border-radius: 50%;
  animation: ${animation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${props => (props.inverse ? props.theme.colors.white : props.theme.colors.text[700])}
    transparent transparent transparent;
`
const First = styled(Sector)``
const Second = styled(Sector)`
  animation-delay: -0.45s;
`
const Third = styled(Sector)`
  animation-delay: -0.3s;
`
const Forth = styled(Sector)`
  animation-delay: -0.15s;
`

export { First, Forth, Ring, Second, Third, Wrapper }
