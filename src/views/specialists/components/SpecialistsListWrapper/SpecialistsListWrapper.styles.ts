import styled from 'styled-components'

const Wrapper = styled.div``
const ListWrapper = styled.div<{ gridSize?: number }>`
  display: grid;
  grid-template-columns: repeat(${props => props.gridSize ?? 3}, 1fr);
  grid-gap: 1.5rem;

  position: relative;
  padding-bottom: 4.5rem;
`

export { ListWrapper, Wrapper }
