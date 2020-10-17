import * as yup from 'yup'
import { FormikProps, useFormik, FormikConfig } from 'formik'
import { VideoLesson, useCreateVideoLesson } from '../../../../../api'
import { useHistory } from 'react-router-dom'
import { mutate } from 'swr'

interface CreateVideoLessonFormValues {
  name: string
  file: File
  uid?: string
  uploadUrl?: string
  description?: string
}

const createVideoLessonFormSchema = yup.object<CreateVideoLessonFormValues>({
  name: yup.string().required().default(''),
  file: yup.mixed<File>().required(),
  description: yup.string().default(''),
})

type CreateVideoLessonFormConfig = Omit<
  FormikConfig<CreateVideoLessonFormValues>,
  'initialValues' | 'onSubmit'
> & {
  videoLesson?: VideoLesson
}
type CreateVideoLessonFormHandle = FormikProps<CreateVideoLessonFormValues>

function useCreateVideoLessonForm(config: CreateVideoLessonFormConfig) {
  const [, createVideoLesson] = useCreateVideoLesson()
  const history = useHistory()

  return useFormik({
    ...config,
    validationSchema: createVideoLessonFormSchema,
    initialValues: {
      ...createVideoLessonFormSchema.default()!,
      ...(config.videoLesson
        ? {
            name: config.videoLesson.name,
            description: config.videoLesson.description || '',
            uploadUrl: config.videoLesson.uploadUrl,
            uid: config.videoLesson.uid,
          }
        : {}),
    },
    onSubmit: async values => {
      await createVideoLesson(
        {},
        {
          name: values.name,
          description: values.description,
        },
      )

      history.push('/')
      mutate('/api/latest_videolessons')
    },
  })
}

export default useCreateVideoLessonForm
export { createVideoLessonFormSchema, useCreateVideoLessonForm }
export type { CreateVideoLessonFormValues, CreateVideoLessonFormHandle }
