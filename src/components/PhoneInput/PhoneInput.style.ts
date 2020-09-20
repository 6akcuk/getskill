import styled from 'styled-components'
import { darken } from 'polished'

const StyledPhoneInput = styled.div`
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
    border-color: ${props => props.theme.colors.border};
    border-width: 1px;
    border-radius: ${props => props.theme.sizes.radius.md};
    caret-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primaryText};
    --color: ${props => props.theme.colors.primaryText};

    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    width: 100%;
    box-sizing: border-box;

    &:focus {
      border-color: ${props => darken(0.04, props.theme.colors.border)};
      box-shadow: ${props => props.theme.shadow.outline.primary};
    }
  }
`

export { StyledPhoneInput }
