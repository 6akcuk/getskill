import React from 'react'
import useSWR from 'swr'
import { ListVideoLessons } from '../../../videoLessons'

interface VideoLessonsProps {
  userId: string
}

function VideoLessons(props: VideoLessonsProps) {
  const { data } = useSWR(`/api/videolessons?userId=${props.userId}`)

  return <ListVideoLessons items={data} />
}

export default VideoLessons
export { VideoLessons }
