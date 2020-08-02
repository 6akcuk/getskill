import styled, { keyframes } from 'styled-components'

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Ring = styled.div`
  position: relative;
  display: inline-block;
`

const Sector = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: calc(100% - 16px);
  height: calc(100% - 16px);
  margin: 8px;
  border: 2px solid ${({ theme }) => theme.colors.primaryText};
  border-radius: 50%;
  animation: ${animation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${({ theme }) => theme.colors.primaryText} transparent transparent transparent;
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

export { First, Forth, Ring, Second, Third }
