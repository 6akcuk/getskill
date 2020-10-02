import React from 'react'
import { ButtonProps } from '../Button'
import { DropdownProps } from '../Dropdown/Dropdown'
import * as S from './DropdownButton.styles'

type DropdownButtonProps = ButtonProps & Pick<DropdownProps, 'items'>

function DropdownButton(props: DropdownButtonProps) {
  const { children, items, ...buttonProps } = props

  return (
    <S.Dropdown items={items}>
      <S.Button {...buttonProps}>
        {children}
        <S.DownIcon />
      </S.Button>
    </S.Dropdown>
  )
}

export default DropdownButton
export { DropdownButton }
export type { DropdownButtonProps }
