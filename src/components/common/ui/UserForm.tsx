import React, { ChangeEvent, useEffect, useState } from 'react'
import { useDaumPostcodePopup } from 'react-daum-postcode'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../auth/hooks/useAuth'
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from '../../auth/hooks/validator'
import Birth from '../../auth/signup/birth/Birth'
import Recaptcha from '../../auth/signup/Recaptcha'
import { SignupRecordType } from '../../auth/signup/Signup'
import { RegisterType } from '../../auth/types/userTypes'
import Input from '../Input'
import Post from '../post/Post'
import useToast from '../toast/hooks/useToast'
import PageLayout from './PageLayout'

interface UserFormProps {
  formValue: SignupRecordType
  setFormValue: React.Dispatch<React.SetStateAction<SignupRecordType>>
  submitFormHandler: () => void
  isEdit?: boolean
}

const UserForm = ({ formValue, setFormValue, submitFormHandler, isEdit }: UserFormProps) => {
  const open = useDaumPostcodePopup('//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js')

  const { pathname } = useLocation()
  const { fireToast } = useToast()

  const [totalValid, setTotalValid] = useState(false)

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
    setFormValue((prev) => ({
      ...prev,
      postCode: data.zonecode,
      address: fullAddress
    }))
  }

  const addressPopupHandler = () => {
    open({ onComplete: handleComplete })
  }

  const changeFormHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value }
    } = e
    setFormValue((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const totalvalidate = () => {
    let totalValidation = true
    const formValueArray = Object.values(formValue)
    formValueArray.map((item) => {
      const { password, passwordConfirm } = formValue
      if (!item) {
        totalValidation = false
        return
      }
      if (password !== passwordConfirm) {
        totalValidation = false
        return
      }
    })
    setTotalValid(totalValidation)
  }

  useEffect(() => {
    totalvalidate()
  }, [formValue])
  return (
    <>
      <div className="">
        {!isEdit && <h4 className="font-bold">고객정보</h4>}
        <Input
          name="lastname"
          name2="firstname"
          onChange={changeFormHandler}
          value={formValue.lastname}
          value2={formValue.firstname}
          type="text"
          type2="text"
          double={true}
          label="이름"
          isRequired={true}
          flexDirection="horizontal"
          placeholder="성"
          placeholder2="이름"
          inputWidth="[400px]"
          inputHeight="10"
          validators={[VALIDATOR_MINLENGTH(0), VALIDATOR_MAXLENGTH(5)]}
          errorText="한 글자 이상, 네 글자 미만으로 작성해주세요."
        />
        <Input
          name="lastReadname"
          name2="firstReadname"
          onChange={changeFormHandler}
          value={formValue.lastReadname}
          value2={formValue.firstReadname}
          type="text"
          type2="text"
          double={true}
          label="이름 읽는 법"
          isRequired={true}
          flexDirection="horizontal"
          placeholder="세이"
          placeholder2="메이"
          inputWidth="[400px]"
          inputHeight="10"
          validators={[VALIDATOR_MINLENGTH(0), VALIDATOR_MAXLENGTH(8)]}
          errorText="한 글자 이상, 여덟 글자 미만으로 작성해주세요!"
        />

        {/* 컴포넌트로 빼기 */}
        <Post
          addressPopupHandler={addressPopupHandler}
          changeFormHandler={changeFormHandler}
          formValue={formValue}
          setFormValue={setFormValue}
          titleText="우편번호"
          isRequired={true}
        />
        <Input
          name="phone"
          type="number"
          double={false}
          label="전화번호"
          onChange={changeFormHandler}
          value={formValue.phone}
          isRequired={false}
          flexDirection="horizontal"
          placeholder="예시:01022743334"
          inputWidth="[400px]"
          inputHeight="10"
          validators={[VALIDATOR_MINLENGTH(7), VALIDATOR_MAXLENGTH(13)]}
          errorText="8글자 이상 12글자 이하의 숫자들로 입력해주세요"
        />

        {!isEdit && (
          <div className="relative pb-6">
            <Input
              name="email"
              type="email"
              double={false}
              onChange={changeFormHandler}
              value={formValue.email}
              label="e-mail"
              isRequired={true}
              flexDirection="horizontal"
              placeholder="info@lenssis.jp"
              inputWidth="[400px]"
              inputHeight="10"
              validators={[VALIDATOR_MINLENGTH(8), VALIDATOR_EMAIL()]}
              errorText="이메일 형식을 확인해주세요"
            />
            {/* 컴포넌트로 빼기 */}
            <div className="absolute flex items-center left-0 bottom-4 gap-1">
              <svg className="mx-auto" width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                <image href="/assets/smallInfo.svg" />
              </svg>
              <span className="text-gray-400 text-xs">메일 주소가 로그인 아이디입니다.</span>
            </div>
          </div>
        )}

        <Birth changeFormHandler={changeFormHandler} formValue={formValue} setFormValue={setFormValue} />

        <Input
          name="password"
          name2="passwordConfirm"
          onChange={changeFormHandler}
          value={formValue.password}
          value2={formValue.passwordConfirm}
          type="password"
          type2="password"
          double={true}
          label="비밀번호"
          isRequired={true}
          flexDirection="vertical"
          placeholder="반각 영숫자 기호 8, 32문자"
          placeholder2="확인을 위해 다시 한번 입력하세요"
          inputWidth="[400px]"
          inputHeight="10"
          validators={[VALIDATOR_MINLENGTH(9), VALIDATOR_MAXLENGTH(20)]}
          errorText="비밀번호는 10글자 이상 20글자 미만으로 작성해주세요."
        />
      </div>

      <div className="flex w-full items-center mt-8 h-[45px] gap-4">
        <Link
          to="/"
          className="rounded-md flex-1 h-full text-[#3e6d87] bg-white border-[#3e6d87] border-solid border box-border font-bold cursor-pointer flex justify-center items-center"
        >
          <span className="text-[14px] font-bold">취소</span>
        </Link>
        <button
          className="rounded-md flex-1 h-full bg-[#3e6d87] text-white border-transparent box-border font-bold cursor-pointer disabled:bg-gray-400 disabled:cursor-default"
          onClick={submitFormHandler}
          disabled={!totalValid}
        >
          <span>{isEdit ? '수정하기' : '회원 가입'}</span>
        </button>
      </div>
    </>
  )
}

export default UserForm
