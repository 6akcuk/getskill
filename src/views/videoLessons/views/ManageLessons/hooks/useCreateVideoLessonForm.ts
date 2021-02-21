import * as yup from 'yup'
import { mutate } from 'swr'
import { FormikProps, useFormik } from 'formik'
import { useCreateVideoLesson } from '../../../../../api'
import { useNavigateBack } from '../../../../../hooks'
import { OptionType } from '../../../../../components'

interface CreateVideoLessonFormValues {
  name: string
  uploaded: boolean
  videoReady: boolean
  uploadUrl: string
  description?: string
  skills: OptionType[]
}

const createVideoLessonFormSchema = yup.object<CreateVideoLessonFormValues>({
  name: yup.string().required().default(''),
  uploaded: yup.boolean().required().default(undefined),
  videoReady: yup.boolean().required().default(false),
  uploadUrl: yup.string().required().default(''),
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

function useCreateVideoLessonForm() {
  const [, createVideoLesson] = useCreateVideoLesson()
  const navigateBack = useNavigateBack()

  return useFormik<CreateVideoLessonFormValues>({
    validationSchema: createVideoLessonFormSchema,
    initialValues: {
      ...createVideoLessonFormSchema.default()!,
    },
    onSubmit: async values => {
      await createVideoLesson(
        {},
        {
          name: values.name,
          description: values.description,
          uploadUrl: values.uploadUrl,
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
