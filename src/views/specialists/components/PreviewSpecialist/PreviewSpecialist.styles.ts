import styled from 'styled-components'
import { Tag } from '../../../../components'
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

const SkillsList = styled.div`
  margin-top: 0.75rem;
  line-height: 2rem;

  & > *:not(:last-child) {
    margin-right: 0.75rem;
  }
`
const Skill = styled(Tag)``
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

export { Avatar, ContentWrapper, Name, Skill, SkillsList, Wrapper }
