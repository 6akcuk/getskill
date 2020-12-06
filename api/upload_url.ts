import cloudinary, { ResourceType } from 'cloudinary'
import { ApiRequestWithAuth, ApiResponse, withAuth } from '../apiSrc'
import { NowRequestBody, NowRequestQuery } from '@vercel/node'

interface GetUploadUrlRequestQuery extends NowRequestQuery {
  resource_type: ResourceType
  resource: 'videolesson' | 'avatar'
  eager: string
  eager_async: string
  id?: string
}
type GetUploadUrlRequest = ApiRequestWithAuth<NowRequestBody, GetUploadUrlRequestQuery>

function getPublicId(req: GetUploadUrlRequest) {
  const parts = [`users/${req.user.id}`]

  switch (req.query.resource) {
    case 'videolesson':
      // FIXME add checking if resource is available for modification for current user
      parts.push(`videolessons/${req.query.id}`)
      break

    case 'avatar':
    default:
      parts.push('avatar')
      break
  }

  return parts.join('/')
}

async function uploadUrl(req: GetUploadUrlRequest, res: ApiResponse) {
  const publicId = getPublicId(req)
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME
  const apiKey = process.env.CLOUDINARY_API_KEY
  const timestamp = Math.round(new Date().getTime() / 1000)
  const eager = req.query.eager
  const eagerAsync = req.query.eager_async === 'true' ? 'true' : 'false'
  const signature = cloudinary.v2.utils.api_sign_request(
    {
      timestamp,
      eager,
      eager_async: eagerAsync,
      public_id: publicId,
    },
    process.env.CLOUDINARY_API_SECRET,
  )

  return res.send(
    // eslint-disable-next-line max-len
    `https://api.cloudinary.com/v1_1/${cloudName}/${req.query.resource_type}/upload?public_id=${publicId}&api_key=${apiKey}&eager=${eager}&eager_async=${eagerAsync}&timestamp=${timestamp}&signature=${signature}`,
  )
}

export default withAuth(uploadUrl)
