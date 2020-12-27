import { useCallback } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { forgotPasswordCode, forgotPasswordStep, forgotPasswordPhone } from '../recoil'

function useForgotPasswordStepChanger() {
  const phone = useRecoilValue(forgotPasswordPhone)
  const code = useRecoilValue(forgotPasswordCode)
  const setStep = useSetRecoilState(forgotPasswordStep)

  return useCallback(
    (step: number) => {
      if (step > 1 && !phone) {
        return null
      }

      if (step > 2 && !code) {
        return null
      }

      return setStep(step)
    },
    [phone, code, setStep],
  )
}

export default useForgotPasswordStepChanger
export { useForgotPasswordStepChanger }
