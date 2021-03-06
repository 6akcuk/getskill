import React from 'react'
import * as S from './VideoPlayer.styles'

interface VideoPlayerProps {
  className?: string
  serviceId: string | null
}

function VideoPlayer(props: VideoPlayerProps) {
  if (!props.serviceId) {
    return null
  }

  return (
    <S.Wrapper>
      <S.Video controls={true} src={props.serviceId} />
    </S.Wrapper>
  )
}

export default VideoPlayer
export { VideoPlayer }
