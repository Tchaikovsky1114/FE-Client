import { ChangeEvent, useEffect } from 'react'
import { GoTriangleDown } from 'react-icons/go'
import { PaymentFormValueType } from '../Payment'
import DeliveryRequest from './DeliveryRequest'
import ShippingAddress from './ui/ShippingAddress'
import ShippingCard from './ui/ShippingCard'
import ShippingEmail from './ui/ShippingEmail'
import ShippingOrderer from './ui/ShippingOrderer'
import ShippingPhone from './ui/ShippingPhone'

interface OrderPaperProps {
  formValue: PaymentFormValueType
  setFormValue: React.Dispatch<React.SetStateAction<PaymentFormValueType>>
  changeFormHandler: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  addressPopupHandler: () => void
  emailFormValue: {
    emailIdentity: string
    emailDomain: string
  }
  emailChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
  domainSelectHandler: () => void
  isOpen: boolean
  emailDomainSelectHandler: (domain: string) => void
  domainArray: string[]
  phoneFormValueChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
  phoneFormValue: Record<string, string | number>
}

const OrderPaper = ({
  formValue,
  changeFormHandler,
  addressPopupHandler,
  emailFormValue,
  emailChangeHandler,
  domainSelectHandler,
  isOpen,
  emailDomainSelectHandler,
  domainArray,
  phoneFormValueChangeHandler,
  phoneFormValue
}: OrderPaperProps) => {
  return (
    <>
      <ShippingCard title="주문자" isRequired>
        <ShippingOrderer onChange={changeFormHandler} value={formValue.orderer} />
      </ShippingCard>

      <ShippingCard title="주소" isRequired>
        <ShippingAddress
          onChange={changeFormHandler}
          value1={formValue.postCode}
          value2={formValue.address}
          value3={formValue.detailAddress}
          onClick={addressPopupHandler}
        />
      </ShippingCard>

      <ShippingCard title="휴대폰" isRequired>
        <ShippingPhone
          onChange={phoneFormValueChangeHandler}
          value1={phoneFormValue.firstNumber}
          value2={phoneFormValue.middleNumber}
          value3={phoneFormValue.lastNumber}
        />
      </ShippingCard>

      <ShippingCard title="이메일 주소">
        <ShippingEmail
          domainArray={domainArray}
          emailDomainSelectHandler={emailDomainSelectHandler}
          isOpen={isOpen}
          onChange={emailChangeHandler}
          onClick={domainSelectHandler}
          value1={emailFormValue.emailIdentity}
          value2={emailFormValue.emailDomain}
        />
      </ShippingCard>

      <DeliveryRequest onChange={changeFormHandler} value={formValue.userRequestMessage} />
    </>
  )
}

export default OrderPaper
