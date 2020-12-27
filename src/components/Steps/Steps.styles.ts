import styled from 'styled-components'

const Wrapper = styled.div``
const StepsWrapper = styled.ol`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`

const StepContent = styled.div`
  margin-top: 1.5rem;
`
const StepTitleWrapper = styled.a`
  display: flex;
  flex-direction: column;
  border-top: 4px solid ${props => props.theme.colors.border[200]};
  padding-top: 1rem;
  cursor: pointer;

  &:hover {
    border-color: ${props => props.theme.colors.border[300]};
  }
`
const StepNumber = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1rem;
  text-transform: uppercase;
  color: ${props => props.theme.colors.text[500]};

  &:hover {
    color: ${props => props.theme.colors.text[700]};
  }
`
const StepTitle = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`

const Step = styled.li<{ completed: boolean }>`
  &:not(:first-child) {
    margin-left: 2rem;
  }

  ${props =>
    props.completed &&
    `
    ${StepTitleWrapper} {
      border-color: ${props.theme.colors.primary[600]};

      &:hover {
        border-color: ${props.theme.colors.primary[800]};
      }
    }

    ${StepNumber} {
      color: ${props.theme.colors.primary[600]};

      &:hover {
        color: ${props.theme.colors.primary[800]};
      }
    }
  `}
`

export { Step, StepContent, StepTitle, StepTitleWrapper, StepNumber, StepsWrapper, Wrapper }
