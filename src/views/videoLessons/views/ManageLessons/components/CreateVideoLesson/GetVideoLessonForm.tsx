import React, { ReactNode } from 'react'
import { VideoLesson } from '../../../../../../api'
import { useCreateVideoLessonForm, CreateVideoLessonFormHandle } from '../../hooks'

interface GetVideoLessonFormProps {
  videolesson: VideoLesson
  children: (form: CreateVideoLessonFormHandle) => ReactNode
}

function GetVideoLessonForm(props: GetVideoLessonFormProps) {
  const form = useCreateVideoLessonForm(props.videolesson)

  return <>{props.children(form)}</>
}

export default GetVideoLessonForm
export { GetVideoLessonForm }
