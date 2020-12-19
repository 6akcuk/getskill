import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '../../../../../../../../components'

interface SendCodeButtonProps {
  className?: string
}

function SendCodeButton(props: SendCodeButtonProps) {
  const [hasSent, setHasSent] = useState(false)
  const { t } = useTranslation('profile')

  return (
    <Button className={props.className} look="white" type="button">
      {t(`form.verification.phone.send_code${hasSent ? '_again' : ''}`)}
    </Button>
  )
}

export default SendCodeButton
export { SendCodeButton }
