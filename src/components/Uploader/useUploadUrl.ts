import useSWR from 'swr'
import { useMemo } from 'react'
import { AssetTransformation } from '../../api'

enum UploadResource {
  videolesson = 'videolesson',
  avatar = 'avatar',
}

interface UseUploadUrlParams {
  resourceType: 'image' | 'video' | 'auto'
  resource: UploadResource
  eager: AssetTransformation[]
  cacheBuster: number
  id?: string
}

function useUploadUrl(params: UseUploadUrlParams) {
  const eager = useMemo(
    () =>
      params.eager
        .map(eager => {
          const transformation = [`w_${eager.width}`, `h_${eager.height}`, `c_${eager.crop}`]

          if (eager.gravity) {
            transformation.push(`g_${eager.gravity}`)
          }

          return transformation.join(',')
        })
        .join('|'),
    [params.eager],
  )

  const { data } = useSWR<string>(
    // eslint-disable-next-line max-len
    `/api/upload_url?resource_type=${params.resourceType}&resource=${params.resource}&eager=${eager}&id=${params.id}&cacheBuster=${params.cacheBuster}`,
  )

  return data
}

export default useUploadUrl
export { UploadResource, useUploadUrl }
export type { UseUploadUrlParams }
