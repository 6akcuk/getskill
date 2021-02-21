import AWS from 'aws-sdk'

function createClient() {
  AWS.config.update({
    accessKeyId: process.env.YC_ACCESS_KEY,
    secretAccessKey: process.env.YC_SECRET_KEY,
  })

  const endpoint = process.env.YC_S3_ENDPOINT

  return new AWS.S3({
    endpoint,
    signatureVersion: 'v4',
    region: process.env.YC_REGION,
  })
}

const client = createClient()

export default client
export { client }
