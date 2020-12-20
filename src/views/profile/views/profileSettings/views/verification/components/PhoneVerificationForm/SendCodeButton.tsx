import React, { useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '../../../../../../../../components'
import { useSendCode } from '../../../../../../../../api'
import { useInterval } from 'ahooks'

interface SendCodeButtonProps {
  className?: string
}

function SendCodeButton(props: SendCodeButtonProps) {
  const [hasSent, setHasSent] = useState(false)
  const [times, setTimes] = useState(0)
  const [status, sendCode] = useSendCode()
  const [seconds, setSeconds] = useState(60)
  const { t } = useTranslation('profile')

  useInterval(
    () => {
      setSeconds(seconds => seconds - 1)

      if (seconds === 0) {
        setHasSent(false)
      }
    },
    hasSent ? 1000 : null,
  )

  const handleClick = useCallback(async () => {
    await sendCode(
      {},
      {
        verify: 'phone',
      },
    )

    setHasSent(true)
    setTimes(times => times + 1)
  }, [sendCode])

  if (times >= 2) {
    return null
  }

  return (
    <Button
      className={props.className}
      look="white"
      type="button"
      showSpinner={status.pending}
      disabled={status.pending || hasSent}
      onClick={handleClick}>
      {t(`form.verification.phone.send_code${hasSent ? '_again' : ''}`, { seconds })}
    </Button>
  )
}

export default SendCodeButton
export { SendCodeButton }
