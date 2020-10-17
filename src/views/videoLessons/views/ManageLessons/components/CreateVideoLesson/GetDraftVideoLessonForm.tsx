import React, { ReactNode } from 'react'
import { useCreateVideoLessonForm, CreateVideoLessonFormHandle } from '../../hooks'
import { VideoLesson } from '../../../../../../api'

interface GetDraftVideoLessonFormProps {
  videoLesson: VideoLesson
  children: (form: CreateVideoLessonFormHandle) => ReactNode
}

function GetDraftVideoLessonForm(props: GetDraftVideoLessonFormProps) {
  const form = useCreateVideoLessonForm({
    videoLesson: props.videoLesson,
  })

  return <>{props.children(form)}</>
}

export default GetDraftVideoLessonForm
export { GetDraftVideoLessonForm }
export type { GetDraftVideoLessonFormProps }
