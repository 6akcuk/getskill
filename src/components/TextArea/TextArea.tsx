import React, { InputHTMLAttributes } from 'react'
import * as S from './TextArea.styles'

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  className?: string

  /** Called whenever the textarea resizes */
  onResize?: (e: Event) => void

  /** Minimum number of visible rows */
  rows?: React.HTMLProps<HTMLTextAreaElement>['rows']

  /** Maximum number of visible rows */
  maxRows?: number

  /** Initialize `autosize` asynchronously.
   * Enable it if you are using StyledComponents
   * This is forced to true when `maxRows` is set.
   */
  async?: boolean
}

function TextArea(props: TextAreaProps) {
  return (
    <S.Wrapper>
      <S.TextArea rows={3} maxRows={6} {...props} async={true} />
    </S.Wrapper>
  )
}

export default TextArea
export { TextArea }
