import styled from 'styled-components'

const StyledPhoneInput = styled.div<{ hasError?: boolean }>`
  .special-label {
    display: none;
  }

  input.form-control {
    outline: none;
    appearance: none;
    transition: none;
    box-shadow: none;

    background-color: ${props => props.theme.colors.white};
    border-style: solid;
    border-color: ${props => props.theme.colors.border[300]};
    border-width: 1px;
    border-radius: ${props => props.theme.sizes.radius.md};
    caret-color: ${props => props.theme.colors.primary[500]};
    color: ${props => props.theme.colors.text[700]};
    --color: ${props => props.theme.colors.text[700]};

    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    width: 100%;
    box-sizing: border-box;

    &:focus {
      border-color: ${props => props.theme.colors.primary[500]};
      box-shadow: 0 0 0 1px ${({ theme }) => `${theme.colors.primary[500]}, ${theme.shadow.sm}`};
    }

    ${props =>
      props.hasError &&
      `
      border-color: ${props.theme.colors.danger[300]};
      color: ${props.theme.colors.danger[900]};
  
      &:focus {
        border-color: ${props.theme.colors.danger[500]};
        box-shadow: 0 0 0 1px ${`${props.theme.colors.danger[500]}, ${props.theme.shadow.sm}`};
      }
  
      &::placeholder {
        color: ${props.theme.colors.danger[300]};
      }
    `}
  }
`

export { StyledPhoneInput }
