import styled from 'styled-components'
import { ServiceTagsList } from '../../../../components'
import { Image } from 'cloudinary-react'

const Wrapper = styled.div`
  cursor: pointer;
  overflow: hidden;
  border-radius: ${props => props.theme.sizes.radius.md};
  background: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadow.lg};

  &:hover {
    box-shadow: ${props => props.theme.shadow.xl};
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
`

const SkillsList = styled(ServiceTagsList)``
const Name = styled.h3`
  margin: 1rem 0 0;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  text-decoration: none;
  color: ${props => props.theme.colors.text[900]};
`
const Avatar = styled(Image)`
  width: 12.5rem;
  border-radius: 9999px;
`
const Description = styled.div`
  font-size: 0.875rem;
  text-align: center;
  margin-top: 0.25rem;
`

export { Avatar, ContentWrapper, Description, Name, SkillsList, Wrapper }
