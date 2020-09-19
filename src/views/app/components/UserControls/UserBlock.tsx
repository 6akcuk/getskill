import React from 'react'
import { useCurrentUser } from '../../../../hooks'
import * as S from './UserBlock.styles'

function UserBlock() {
  const user = useCurrentUser()

  return <S.UserAvatar user={user} />
}

export default UserBlock
export { UserBlock }
