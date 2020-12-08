import React from 'react'
import styled from 'styled-components'
import { IconInstagram } from '../../../../components'

interface InstagramProps {
  value: string
  className?: string
}

const InstagramIcon = styled(IconInstagram)`
  --size: 24px;
`

function Instagram(props: InstagramProps) {
  const profileName = props.value.replace(/^https:\/\/instagram\.com\//, '')
  const prefix = profileName.match(/^id/) ? '' : '@'

  return (
    <a
      href={`https://instagram.com/${profileName}`}
      target="_blank"
      rel="noopener noreferrer"
      className={props.className}>
      <InstagramIcon />
      <span>
        {prefix}
        {profileName}
      </span>
    </a>
  )
}

export default Instagram
export { Instagram }
