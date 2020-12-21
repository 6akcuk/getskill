import styled from 'styled-components'

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text[700]};
  text-align: center;
  outline: none;
  flex: 1;
`

export { Content }
