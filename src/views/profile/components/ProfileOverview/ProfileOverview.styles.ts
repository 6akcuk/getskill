import styled from 'styled-components'
import ProfilePublicName from './ProfilePublicName'
import ProfileAbout from './ProfileAbout'
import ProfileContacts from '../ProfileContacts'

const Wrapper = styled.div``

const PublicName = styled(ProfilePublicName)`
  margin-top: 1rem;
`
const About = styled(ProfileAbout)`
  margin-top: 1rem;
`
const Contacts = styled(ProfileContacts)`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${props => props.theme.colors.border[300]};
`

export { About, Contacts, PublicName, Wrapper }
