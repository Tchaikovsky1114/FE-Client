import React, { ChangeEvent, HTMLInputTypeAttribute, useCallback, useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import ShippingAddress from '../../payment/shipping/ui/ShippingAddress';
import ShippingCard from '../../payment/shipping/ui/ShippingCard';
import ShippingOrderer from '../../payment/shipping/ui/ShippingOrderer';
import EditProfileInput from '../ui/EditProfileInput';
import SubmitButton from '../ui/SubmitButton';


interface EditFormValueType {
    name:string
    readname:string
    address:string
    detailAddress:string
    phone:string
    birth:string
    passwordConfirm:string
    postCode: string | number;
  }

const EditProfile = () => {
  const open = useDaumPostcodePopup('//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js')
  const [editFormValue,setEditFormValue] = useState<EditFormValueType>({
    name:'',
    readname:'',
    address:'',
    postCode:'',
    detailAddress:'',
    phone:'',
    birth:'',
    passwordConfirm:''
  })
  const editFormValueChangeHandler = useCallback((e:ChangeEvent<HTMLInputElement>) => {
    const {target:{value,name}} = e;
    setEditFormValue(prev => ({
      ...prev,
      [name]:value
    }))
  },[])

  const handleComplete = useCallback((data: any) => {
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
    setEditFormValue((prev) => ({
      ...prev,
      postCode: data.zonecode,
      address: fullAddress
    }))
  },[])

  const addressPopupHandler = useCallback(() => {
    open({ onComplete: handleComplete })
  },[])
  
  return (
    <div>
      <ShippingCard title="이름" >
        <EditProfileInput name="name" onChange={editFormValueChangeHandler} value={editFormValue.name} />
      </ShippingCard>
      <ShippingCard title="이름 읽는 법" >
        <EditProfileInput name="readname" onChange={editFormValueChangeHandler} value={editFormValue.readname} />
      </ShippingCard>
      <ShippingCard title="주소">

      <ShippingAddress
        onChange={editFormValueChangeHandler}
        value1={editFormValue.postCode}
        value2={editFormValue.address}
        value3={editFormValue.detailAddress}
        onClick={addressPopupHandler}
      />
      </ShippingCard>
      <ShippingCard title="전화번호" >
        <EditProfileInput name="phone" onChange={editFormValueChangeHandler} value={editFormValue.phone} />
      </ShippingCard>
      <ShippingCard title="생년월일" >
        <EditProfileInput name="birth" onChange={editFormValueChangeHandler} value={editFormValue.birth} />
      </ShippingCard>
      <ShippingCard title="최종비밀번호 확인" isRequired >
        <EditProfileInput type="password" name="passwordConfirm" onChange={editFormValueChangeHandler} value={editFormValue.passwordConfirm} />
      </ShippingCard>
      
      <SubmitButton onClick={() => {}} />
      
    </div>
  );
};

export default EditProfile;