import { postSend } from '../endpoints'

interface SendCodeInCallResponse {
  code: string
}

async function sendCodeInCall(phone: string) {
  const response = (await postSend({
    phones: phone.replace(/[^0-9]*/g, ''),
    mes: 'code',
  })) as SendCodeInCallResponse

  return response
}

export default sendCodeInCall
export { sendCodeInCall }
export type { SendCodeInCallResponse }
