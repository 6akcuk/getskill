import styled from 'styled-components'
import { SkillSpecialistsList as BaseSkillSpecialistsList } from '../SkillSpecialistsList'
import { SkillVideoLessonsList as BaseSkillVideoLessonsList } from '../SkillVideoLessonsList'

const SkillSpecialistsList = styled(BaseSkillSpecialistsList)``
const SkillVideoLessonsList = styled(BaseSkillVideoLessonsList)``
const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 1.25rem;
  margin: 0 0 2rem;
`
const Wrapper = styled.div``

export { SkillSpecialistsList, SkillVideoLessonsList, Title, Wrapper }
