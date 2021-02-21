import cloudinary, { ResourceType } from 'cloudinary'
import { ApiRequestWithAuth, ApiResponse, withAuth, generateOneTimeUploadURL } from '../apiSrc'
import { NowRequestBody, NowRequestQuery } from '@vercel/node'
import { PrismaClient } from '@prisma/client'
import crypto from 'crypto'
import mime from 'mime-types'

const prisma = new PrismaClient()

type Resource = 'video' | 'avatar'

interface GetUploadUrlRequestQuery extends NowRequestQuery {
  resource_type: ResourceType
  resource: Resource
  eager: string
  eager_async: string
  filetype: string
  id?: string
}
type GetUploadUrlRequest = ApiRequestWithAuth<NowRequestBody, GetUploadUrlRequestQuery>
type ServiceFunc = (req: GetUploadUrlRequest, res: ApiResponse) => Promise<ApiResponse>

function getFilename(req: GetUploadUrlRequest, filename?: string) {
  const parts = [`users/${req.user.id}`]

  switch (req.query.resource) {
    case 'video':
      // FIXME add checking if resource is available for modification for current user
      parts.push('videos')
      break

    case 'avatar':
    default:
      parts.push('avatar')
      break
  }

  if (filename) {
    parts.push(filename)
  }

  return parts.join('/')
}

async function cloudinaryFunc(req: GetUploadUrlRequest, res: ApiResponse) {
  const publicId = getFilename(req)
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

async function cloudflareFunc(req: GetUploadUrlRequest, res: ApiResponse) {
  const asset = await prisma.video.create({
    data: {
      filename: '',
      signedUrl: '',
      ownerId: Number(req.user.id),
    },
  })

  const filetype = req.query.filetype
  const filename = getFilename(
    req,
    `${crypto.createHash('md5').update(`${asset.id}`).digest('hex')}.${mime.extension(filetype)}`,
  )

  const uploadUrlResponse = await generateOneTimeUploadURL({
    maxDurationSeconds: 600,
  })

  await prisma.video.update({
    data: {
      filename,
      signedUrl: uploadUrlResponse.uploadURL,
      serviceId: uploadUrlResponse.uid,
    },
    where: { id: asset.id },
  })

  return res.send(uploadUrlResponse.uploadURL)
}

async function uploadUrl(req: GetUploadUrlRequest, res: ApiResponse) {
  const resourceToServiceFunc: Record<Resource, ServiceFunc> = {
    video: cloudflareFunc,
    avatar: cloudinaryFunc,
  }

  return resourceToServiceFunc[req.query.resource](req, res)
}

export default withAuth(uploadUrl)
