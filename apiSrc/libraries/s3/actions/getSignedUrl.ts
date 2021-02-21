import client from '../client'
import { Video } from '@prisma/client'

interface GetSignedUrlProps {
  filename: string
  filetype: string
  asset: Video
}

type SignedUrl = string

const SIGNED_URL_EXPIRATION_TIME = 300

function getSignedUrl(props: GetSignedUrlProps): Promise<SignedUrl> {
  const bucket = process.env.YC_S3_STORAGE_BUCKET
  const s3Params = {
    Bucket: bucket,
    Key: props.filename,
    Expires: SIGNED_URL_EXPIRATION_TIME,
    ContentType: props.filetype,
    ACL: 'public-read',
    Metadata: {
      'asset-id': `${props.asset.id}`,
    },
  }

  return client.getSignedUrlPromise('putObject', s3Params)
}

export default getSignedUrl
export { getSignedUrl }
export type { GetSignedUrlProps }
