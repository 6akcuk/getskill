import styled from 'styled-components'
import ProfileOverview from '../ProfileOverview'
import ProfileFeed from '../ProfileFeed'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 3rem;
`

const Overview = styled(ProfileOverview)``
const Feed = styled(ProfileFeed)``

export { Feed, Overview, Wrapper }
