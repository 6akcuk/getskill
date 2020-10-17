import TextareaAutosize from 'react-autosize-textarea'
import { darken } from 'polished'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.sizes.radius.md};
  box-shadow: ${({ theme }) => theme.shadow.sm};
`

const TextArea = styled(TextareaAutosize)`
  display: block;
  appearance: none;
  background-color: ${({ theme }) => theme.colors.white};
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.border};
  border-width: 1px;
  border-radius: ${({ theme }) => theme.sizes.radius.md};
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  width: 100%;
  box-sizing: border-box;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => darken(0.04, theme.colors.border)};
    box-shadow: ${({ theme }) => theme.shadow.outline.primary};
  }
`

export { TextArea, Wrapper }
