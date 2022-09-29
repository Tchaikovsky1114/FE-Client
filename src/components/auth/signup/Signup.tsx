import React, { ChangeEvent, useState, useEffect } from 'react'
import { RegisterType } from '../types/userTypes'
import { useAuth } from '../hooks/useAuth'
import PageLayout from '../../common/ui/PageLayout'

import UserForm from '../../common/ui/UserForm'
import CardTemplate from '../../common/ui/CardTemplate'

export type SignupFormType = {
  lastname: string
  firstname: string
  lastReadname: string
  firstReadname: string
  postCode: string
  address: string
  detailAddress: string
  phone: string
  email: string
  password: string
  passwordConfirm: string
  birthYear: string
  birthMonth: string
  birthDay: string
}
export type SignupRecordType = Record<keyof SignupFormType, string>

const Signup = () => {
  const { signin, signup } = useAuth()
  const [formValue, setFormValue] = useState<SignupRecordType>({
    lastname: '',
    firstname: '',
    lastReadname: '',
    firstReadname: '',
    postCode: '',
    address: '',
    detailAddress: '',
    phone: '',
    email: '',
    password: '',
    passwordConfirm: '',
    birthYear: '',
    birthMonth: '',
    birthDay: ''
  })

  const submitFormHandler = () => {
    const formData: RegisterType = {
      name: `${formValue.lastname}${formValue.firstname}`,
      readname: `${formValue.lastReadname}${formValue.firstReadname}`,
      postCode: +formValue.postCode,
      address: `${formValue.address} ${formValue.detailAddress}`,
      phone: formValue.phone,
      email: formValue.email,
      birthday: `${formValue.birthYear}${formValue.birthMonth}${formValue.birthDay}`,
      password: formValue.password,
      passwordConfirm: formValue.passwordConfirm
    }
    signup(formData)
  }

  return (
    <PageLayout layoutWidth="w-[90%]">
      <CardTemplate title="회원가입" isTitleVisible={true}>
        <UserForm formValue={formValue} setFormValue={setFormValue} submitFormHandler={submitFormHandler} />
      </CardTemplate>
    </PageLayout>
  )
}

export default Signup
