import styled from 'styled-components'
import { IconSearch } from '../../../../components'

const Wrapper = styled.div`
  display: flex;
`

const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  color: ${props => props.theme.colors.text[400]};

  &:focus-within {
    color: ${props => props.theme.colors.text[600]};
  }
`

const SearchIconWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  pointer-events: none;
  top: 0;
  bottom: 0;
  left: 0;
`

const SearchIcon = styled(IconSearch)`
  --size: 1.25rem;
`

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: 0;
  box-sizing: border-box;
  padding: 0.5rem 0.75rem 0.5rem 2rem;
  outline: none;
`

export { SearchIcon, SearchIconWrapper, SearchInput, SearchWrapper, Wrapper }
