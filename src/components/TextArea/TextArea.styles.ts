import TextareaAutosize from 'react-autosize-textarea'
import styled from 'styled-components'

const TextArea = styled(TextareaAutosize)`
  display: block;
  appearance: none;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border[300]};
  border-radius: ${({ theme }) => theme.sizes.radius.md};
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  box-shadow: ${({ theme }) => theme.shadow.sm};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary[500]};
    box-shadow: 0 0 0 1px ${({ theme }) => `${theme.colors.primary[500]}, ${theme.shadow.sm}`};
  }
`

export { TextArea }
