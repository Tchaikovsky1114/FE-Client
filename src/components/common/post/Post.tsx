import { useState, ChangeEvent } from 'react'
import Input from '../Input'
import { SignupFormType,SignupRecordType } from '../../auth/signup/Signup'
import {
  ValidatorType,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from '../../auth/hooks/validator'
import FormErrorMessage from '../shared/FormErrorMessage'



interface PostProps {
  // 여러가지 다른 형식의 formValue가 들어올 수 있기 때문에 any처리
  formValue: any
  setFormValue: any
  changeFormHandler: (e: ChangeEvent<HTMLInputElement>, validator: ValidatorType[]) => void
  addressPopupHandler: () => void
  titleText:string;
  isRequired:boolean;
}

const Post = ({ formValue,titleText, setFormValue, changeFormHandler,addressPopupHandler,isRequired }: PostProps) => {
  const [isBlur, setIsBlur] = useState(false)



  const onBlur = () => {
    setIsBlur(true)
  }
  return (
    <>
      <div className="flex flex-col gap-1 w-full">
        <label className="font-semibold text-lenssisDark">{titleText} {isRequired && <span className='text-rose-400'>&nbsp;*</span>}</label>
        <div className="flex justify-start items-center gap-2">
          <input
            name="postCode"
            onChange={(e) => changeFormHandler(e, [VALIDATOR_REQUIRE()])}
            value={formValue.postCode}
            type="text"
            className="grow h-10 border border-solid border-gray-200 rounded-md max-w-[400px]  focus:outline-1 focus:outline-[#ABC8DF] pl-1"
            readOnly
            onBlur={onBlur}
            
          />
          <div className="grow">
            <button
              className="w-28 xs:w-40 h-11 bg-lenssisDark rounded-md text-white font-bold border-none cursor-pointer"
              onClick={addressPopupHandler}
            >
              우편 번호 검색
            </button>
          </div>
        </div>
        <div>{isBlur && !formValue.postCode && <FormErrorMessage errorTitle='우편번호누락' errorText='우편 번호 검색을 통해 주소를 입력해주세요.' />}</div>
      </div>

      <Input
        name="address"
        name2="detailAddress"
        onChange={(e) => changeFormHandler(e, [VALIDATOR_REQUIRE()])}
        value={formValue.address}
        value2={formValue.detailAddress}
        type="text"
        type2="text"
        double={true}
        label="주소"
        labelColor='text-lenssisDark'
        isRequired={true}
        flexDirection="vertical"
        placeholder="기본 주소"
        placeholder2="상세 주소"
        inputWidth="[400px]"
        inputHeight="10"
        
        readonly={true}
        validators={[VALIDATOR_MINLENGTH(3), VALIDATOR_MAXLENGTH(30)]}
        errorText="상세 주소를 입력해주세요"
      />
    </>
  )
}

export default Post
