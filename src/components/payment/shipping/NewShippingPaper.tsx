import React, { ChangeEvent, useState } from 'react'
import { DaumPostcodePopupParams } from 'react-daum-postcode'
import { GoTriangleDown } from 'react-icons/go'
import ConfirmModal from '../../common/ui/ConfirmModal'
import DeliveryRequest from './DeliveryRequest'
import { PaymentFormValueType } from '../Payment'
import ShippingCard from './ui/ShippingCard'
import ShippingAddress from './ui/ShippingAddress'
import ShippingPhone from './ui/ShippingPhone'
import ShippingEmail from './ui/ShippingEmail'
import ShippingOrderer from './ui/ShippingOrderer'

interface NewShippingPaperProps {
  domainArray: string[]
  isOpen: boolean
  domainSelectHandler: () => void

  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  open: (options?: DaumPostcodePopupParams | undefined) => Promise<void>
}

const NewShippingPaper = ({
  domainArray,
  isOpen,
  domainSelectHandler,
  setIsOpen,
  open
}: NewShippingPaperProps) => {
  const [newFormValue, setNewFormValue] = useState<PaymentFormValueType>({
    orderer: '',
    postCode: '',
    address: '',
    phone: '',
    email: '',
    detailAddress: '',
    userRequestMessage: ''
  })
  const [newPhoneFormValue, setNewPhoneFormValue] = useState<Record<string, string | number>>({
    firstNumber: '',
    middleNumber: '',
    lastNumber: ''
  })
  const [newEmailFormValue, setNewEmailFormValue] = useState<Record<string, string>>({
    emailIdentity: '',
    emailDomain: ''
  })
  const newEmailChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value }
    } = e
    setNewEmailFormValue((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const newPhoneFormValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value }
    } = e
    setNewPhoneFormValue((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const newEmailDomainSelectHandler = (domain: string) => {
    setNewEmailFormValue((prev) => ({
      ...prev,
      emailDomain: domain
    }))
    setIsOpen((prev) => !prev)
  }
  const newFormChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      target: { name, value }
    } = e
    setNewFormValue((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const handleComplete = (data: any) => {
    let fullAddress = data.address
    let extraAddress = ''

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress = data.bname
      }
      if (data.buildingName) {
        extraAddress += extraAddress !== '' ? `,${data.buildingName} ` : `${data.buildingName}`
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : ''
    }
    setNewFormValue((prev) => ({
      ...prev,
      postCode: data.zonecode,
      address: fullAddress
    }))
  }

  const addressPopupHandler = () => {
    open({ onComplete: handleComplete })
  }
  return (
    <>
      <ShippingCard title="주문자" isRequired>
        <ShippingOrderer onChange={newFormChangeHandler} value={newFormValue.orderer} />
      </ShippingCard>

      <ShippingCard title="주소" isRequired>
        <ShippingAddress
          onChange={newFormChangeHandler}
          value1={newFormValue.postCode}
          value2={newFormValue.address}
          value3={newFormValue.detailAddress}
          onClick={addressPopupHandler}
        />
      </ShippingCard>

      <ShippingCard title="휴대폰" isRequired>
        <ShippingPhone
          onChange={newPhoneFormValueChangeHandler}
          value1={newPhoneFormValue.firstNumber}
          value2={newPhoneFormValue.middleNumber}
          value3={newPhoneFormValue.lastNumber}
        />
      </ShippingCard>

      <ShippingCard title="이메일">
        <ShippingEmail
          domainArray={domainArray}
          emailDomainSelectHandler={newEmailDomainSelectHandler}
          isOpen={isOpen}
          onChange={newEmailChangeHandler}
          onClick={domainSelectHandler}
          value1={newEmailFormValue.emailIdentity}
          value2={newEmailFormValue.emailDomain}
        />
      </ShippingCard>
      <DeliveryRequest onChange={newFormChangeHandler} value={newFormValue.userRequestMessage} />
    </>
  )
}

export default NewShippingPaper
