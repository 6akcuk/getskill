import styled, { css } from 'styled-components'
import Vkontakte from './Vkontakte'
import BaseInstagram from './Instagram'

const Wrapper = styled.div``
const Title = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
`
const Contacts = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const contactStyles = css`
  display: grid;
  grid-template-columns: 32px 1fr;
  margin-top: 0.75rem;
  font-size: 0.875rem;
  color: ${props => props.theme.colors.primaryAccentText};
  text-decoration: none;
  align-items: center;

  &:hover {
    color: ${props => props.theme.colors.primaryText};
  }
`

const VK = styled(Vkontakte)`
  ${contactStyles}
`
const Instagram = styled(BaseInstagram)`
  ${contactStyles}
`

export { Contacts, Instagram, Title, VK, Wrapper }
