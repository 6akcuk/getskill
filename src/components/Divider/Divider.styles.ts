import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
`

const LineWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`

const Line = styled.div`
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.border[300]};
`

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  line-height: 1.25rem;
  font-size: 0.875rem;
`

const Text = styled.span`
  padding: 0 0.5rem;
  color: ${props => props.theme.colors.text[500]};
  background: ${props => props.theme.colors.white};
`

export { Line, LineWrapper, Text, TextWrapper, Wrapper }
