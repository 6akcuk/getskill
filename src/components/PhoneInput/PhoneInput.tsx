import React from 'react'
import ReactPhoneInput, { PhoneInputProps as ReactPhoneInputProps } from 'react-phone-input-2'
import * as S from './PhoneInput.style'

interface PhoneInputProps extends ReactPhoneInputProps {
  hasError?: boolean
  id?: string
  onChange: (value: string) => void
}

function transformPhone(formattedPhone: string) {
  const [countryCode, ...phoneNumber] = formattedPhone.split(' ')

  return `${countryCode} ${phoneNumber.join('')}`
}

const PhoneInput = ({ onChange, hasError, id, ...props }: PhoneInputProps) => (
  <S.StyledPhoneInput hasError={hasError}>
    <ReactPhoneInput
      inputProps={{
        id,
      }}
      disableDropdown={true}
      country="ru"
      preferredCountries={['ru']}
      onChange={(value, data, event, formattedValue) => onChange(transformPhone(formattedValue))}
      {...props}
    />
  </S.StyledPhoneInput>
)

export default PhoneInput
export { PhoneInput }
