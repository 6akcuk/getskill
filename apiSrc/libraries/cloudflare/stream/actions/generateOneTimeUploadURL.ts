import { postStreamDirectUpload, PostStreamDirectUploadRequestBody } from '../endpoints'

type GenerateOneTimeUploadURLParams = Pick<PostStreamDirectUploadRequestBody, 'maxDurationSeconds'>

async function generateOneTimeUploadURL(params: GenerateOneTimeUploadURLParams) {
  const response = await postStreamDirectUpload(
    {
      account_id: '',
    },
    {
      maxDurationSeconds: params.maxDurationSeconds,
    },
  )

  if (!response.success) {
    throw new Error(response.errors[0]?.message ?? 'Не удалось подготовить ссылку для загрузки')
  }

  return response.result
}

export default generateOneTimeUploadURL
export { generateOneTimeUploadURL }
export type { GenerateOneTimeUploadURLParams }
