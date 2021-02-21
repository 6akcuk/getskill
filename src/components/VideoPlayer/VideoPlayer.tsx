import React, { useRef, useLayoutEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import VideoJS from 'video.js'
import 'videojs-contrib-quality-levels'
import 'videojs-hls-quality-selector'
import 'video.js/dist/video-js.css'
import videoJsRu from 'video.js/dist/lang/ru.json'
import '@videojs/themes/dist/fantasy/index.css'
import { AssetTransformationStreamingProfile } from '../../api'
import * as S from './VideoPlayer.styles'

interface VideoPlayerProps {
  className?: string
  serviceId: string | null
  streamingProfile: AssetTransformationStreamingProfile
}

VideoJS.addLanguage('ru', videoJsRu)

function VideoPlayer(props: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const { i18n } = useTranslation()

  useLayoutEffect(() => {
    if (videoRef.current) {
      videoRef.current.setAttribute('type', 'application/x-mpegURL')

      const player = VideoJS(videoRef.current, {
        controls: true,
        fluid: true,
        language: i18n.language,
        plugins: {
          qualityLevels: true,
          hlsQualitySelector: true,
        },
      })

      return () => player.dispose()
    }

    return undefined
  }, [i18n, videoRef])

  const src = useMemo(() => `https://videodelivery.net/${props.serviceId}/manifest/video.m3u8`, [props])

  if (!props.serviceId) {
    return null
  }

  return (
    <S.Wrapper>
      <S.Video ref={videoRef} className="video-js vjs-big-play-centered vjs-theme-fantasy">
        <source type="application/x-mpegURL" src={src} />
      </S.Video>
    </S.Wrapper>
  )
}

export default VideoPlayer
export { VideoPlayer }
