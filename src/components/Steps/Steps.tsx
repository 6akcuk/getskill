import React, { ReactNode, useMemo } from 'react'
import * as S from './Steps.styles'
import { useTranslation } from 'react-i18next'

interface Step {
  title: ReactNode
  content?: ReactNode
}
interface StepsProps {
  step: number
  steps: Step[]
  onChange?: (step: number) => void
}

function Steps(props: StepsProps) {
  const { t } = useTranslation('app')
  const activeComponent = useMemo(() => props.steps[props.step - 1].content, [props])

  return (
    <S.Wrapper>
      <S.StepsWrapper>
        {props.steps.map((step, index) => (
          <S.Step key={index} completed={index <= props.step - 1} onClick={() => props.onChange?.(index + 1)}>
            <S.StepTitleWrapper>
              <S.StepNumber>{t('common.steps.label.step_number', { step: index + 1 })}</S.StepNumber>
              <S.StepTitle>{step.title}</S.StepTitle>
            </S.StepTitleWrapper>
          </S.Step>
        ))}
      </S.StepsWrapper>
      <S.StepContent>{activeComponent}</S.StepContent>
    </S.Wrapper>
  )
}

export default Steps
export { Steps }
