import { ChangeEvent,useReducer,useEffect,useState } from 'react';
import { validate, ValidatorType } from '../auth/hooks/validator';
import FormErrorMessage from './shared/FormErrorMessage';

interface InputProps {
  label:string
  placeholder:string
  type:string
  double:boolean
  flexDirection:'vertical' | 'horizontal'
  type2?:string;
  placeholder2?:string;
  isRequired:boolean;
  readonly?:boolean;
  readonly2?:boolean;
  inputWidth:string;
  inputHeight:string;
  labelColor?:string;
  labelBold?:'bold'
  name:string;
  name2?:string
  value:string;
  value2?:string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  validators:ValidatorType[]
  errorText:string;
}

const Input = ({label,placeholder,type,double, flexDirection,type2,placeholder2,isRequired,readonly,inputWidth,inputHeight,labelColor,labelBold,name,name2,readonly2,value,value2,onChange,validators,errorText}:InputProps) => {

  const [isBlur,setIsBlur] = useState(false)
  const [isValidValue,setIsValidValue] = useState(false)
  const [isValidValue2,setIsValidValue2] = useState(false)
  const onBlur = () => {
    setIsBlur(true)
  }

  useEffect(() => {
    const test = validate(value,validators)
    const test2 = validate(value2,validators)
    setIsValidValue(test)
    setIsValidValue2(test2)
  } , [value,validators])

  
  if(double){
    return (
      <div className='flex flex-col justify-center my-4 w-full h-fit gap-2'>
       <label><span className={`${labelColor ? labelColor : 'text-black'} font-${labelBold} font-semibold`} >{label}</span>{' '}<span className='text-rose-400'>{isRequired && '*'}</span></label>
       <div className={`
       ${flexDirection === 'horizontal' ? 'flex items-center justify-start gap-x-4' : 'flex flex-col justify-center gap-y-2'}
       `}>
        
       <input name={name} onChange={onChange} value={value} onBlur={onBlur} className={`grow w-full h-${inputHeight} border border-solid border-gray-200 rounded-md max-w-${inputWidth} pl-2 focus:outline-1 focus:outline-[#ABC8DF] placeholder-gray-400/60 `} type={type} placeholder={placeholder} readOnly={readonly} />
       <input name={name2} onChange={onChange}value={value2} onBlur={onBlur} className={`grow w-full h-${inputHeight} border border-solid border-gray-200 rounded-md max-w-${inputWidth} pl-2 focus:outline-1 focus:outline-[#ABC8DF] placeholder-gray-400/60 `} type={type2} placeholder={placeholder2} readOnly={readonly2} />
       </div>
       {isBlur && !isValidValue && <FormErrorMessage errorText={errorText} errorTitle={placeholder} textSize='xs' titleSize='sm'  />}
       {isBlur && !isValidValue2 && <FormErrorMessage errorText={errorText} errorTitle={placeholder2 || ''} textSize='xs' titleSize='sm' /> }
      </div>
    );  
  }
  if(!double){
    return (
      <div className='flex flex-col justify-center my-4 gap-2'>
       <label><span className={`${labelColor ? labelColor : 'text-black'} font-${labelBold} font-semibold`}>{label}</span>{' '}<span className='text-rose-400'>{isRequired && '*'}</span></label>
       <div className={`${flexDirection === 'horizontal' ? 'flex items-center justify-start' : 'flex flex-col justify-center gap-y-2'}`}>
       <input name={name} onChange={onChange} value={value} onBlur={onBlur} className={`w-full h-${inputHeight} border border-solid border-gray-200 rounded-md max-w-${inputWidth} pl-2 focus:outline-1 focus:outline-[#ABC8DF] placeholder-gray-400/60`} type={type}  placeholder={placeholder} readOnly={readonly} />
       </div>
       {isBlur && !isValidValue && <FormErrorMessage errorText={errorText} errorTitle={placeholder}  textSize='xs' titleSize='sm'  /> }
      </div>
      )  
  }

  return <></>
};

export default Input;