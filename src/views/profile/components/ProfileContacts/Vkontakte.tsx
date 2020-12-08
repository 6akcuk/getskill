import React from 'react'
import styled from 'styled-components'
import { IconVk } from '../../../../components'

interface VkontakteProps {
  value: string
  className?: string
}

const VkIcon = styled(IconVk)`
  --size: 24px;
`

function Vkontakte(props: VkontakteProps) {
  const profileName = props.value.replace(/^https:\/\/vk\.com\//, '')
  const prefix = profileName.match(/^id/) ? '' : '@'

  return (
    <a
      href={`https://vk.com/${profileName}`}
      target="_blank"
      rel="noopener noreferrer"
      className={props.className}>
      <VkIcon />
      <span>
        {prefix}
        {profileName}
      </span>
    </a>
  )
}

export default Vkontakte
export { Vkontakte }
