import * as yup from 'yup'
import { mutate } from 'swr'
import { FormikProps, useFormik } from 'formik'
import { useCreateVideoLesson, VideoLesson } from '../../../../../api'
import { useNavigateBack } from '../../../../../hooks'
import { OptionType } from '../../../../../components'

interface CreateVideoLessonFormValues {
  id: string
  name: string
  uploaded: boolean
  videoReady: boolean
  publicId: string
  version: number
  duration: number
  description?: string
  skills: OptionType[]
}

const createVideoLessonFormSchema = yup.object<CreateVideoLessonFormValues>({
  id: yup.string().required().default(''),
  name: yup.string().required().default(''),
  uploaded: yup.boolean().required().default(undefined),
  videoReady: yup.boolean().required().default(false),
  publicId: yup.string().required().default(''),
  version: yup.number().required().min(1),
  duration: yup.number().required(),
  description: yup.string().default(''),
  skills: yup
    .array()
    .of(
      yup
        .object<OptionType>({
          label: yup.string().required(),
          value: yup.string().required(),
        })
        .required(),
    )
    .required(),
})

type CreateVideoLessonFormHandle = FormikProps<CreateVideoLessonFormValues>

function useCreateVideoLessonForm(videoLesson: VideoLesson) {
  const [, createVideoLesson] = useCreateVideoLesson()
  const navigateBack = useNavigateBack()

  return useFormik<CreateVideoLessonFormValues>({
    validationSchema: createVideoLessonFormSchema,
    initialValues: {
      ...createVideoLessonFormSchema.default()!,
      ...{
        id: `${videoLesson.id}`,
        name: videoLesson.name,
        uploaded: videoLesson.isUploaded,
        videoReady: videoLesson.isReady,
        publicId: videoLesson.publicId ?? '',
        version: videoLesson.version ?? 0,
        duration: videoLesson.duration,
        description: videoLesson.description ?? '',
      },
    },
    onSubmit: async values => {
      await createVideoLesson(
        {},
        {
          name: values.name,
          description: values.description,
          duration: values.duration,
          publicId: values.publicId,
          version: values.version,
          skills: values.skills.map(skill => skill.value),
        },
      )

      navigateBack()
      mutate('/api/videolessons')
    },
  })
}

export default useCreateVideoLessonForm
export { createVideoLessonFormSchema, useCreateVideoLessonForm }
export type { CreateVideoLessonFormValues, CreateVideoLessonFormHandle }
