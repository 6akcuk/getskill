import React from 'react'
import { useRecoilState } from 'recoil'
import { VideoLessonsList } from '../../../../components'
import { useVideoLessons } from '../../../../../../hooks'
import { offsetState } from '../../recoil'

function VideoLessonsListContainer() {
  const [offset] = useRecoilState(offsetState)
  const { data, isValidating } = useVideoLessons({ offset })

  return <VideoLessonsList data={data} isValidating={isValidating} />
}

export default VideoLessonsListContainer
export { VideoLessonsListContainer }
