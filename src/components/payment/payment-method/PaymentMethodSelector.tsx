import React, { ChangeEvent, useState } from 'react';
import Radio from '../../common/ui/Radio';
import PaymentMethodInfoMessage from './PaymentMethodInfoMessage';


const paymentMethodArray = ['クレジットカード','コンビニ','銀行振込','PayEasy','あと払いペイディー','PayPay']

const PaymentMethodSelector = () => {

  const [currentPaymentMethod,setCurrentPaymentMethod] = useState('')
  const currentPaymentMethodHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const {target:{value}} = e;
    setCurrentPaymentMethod(value)

  }
  return (
    <div className='w-full'>
    
    <div className='flex items-center justify-between xs:justify-center gap-4 mt-4 pb-4 border-b border-solid border-black flex-wrap xs:flex-nowrap'>
     <Radio onChange={currentPaymentMethodHandler} title='クレジットカード' value='クレジットカード' />
     <Radio onChange={currentPaymentMethodHandler} title="コンビニ" value="コンビニ" />
     <Radio onChange={currentPaymentMethodHandler} title="銀行振込" value="銀行振込" />
     <Radio onChange={currentPaymentMethodHandler} title="PayEasy" value="PayEasy" />
     <Radio onChange={currentPaymentMethodHandler} title="あと払いペイディー" value='あと払いペイディー' />
     <Radio onChange={currentPaymentMethodHandler} value="PayPay"><img className='w-24' src="assets/paypay.png" alt="" /></Radio> 
    </div>

    <div className='text-lenssisGray text-xs xs:text-base xs:text-lenssisDark font-semibold mt-4 flex flex-col gap-2'>
      <PaymentMethodInfoMessage message='최소 결제 가능 금액은 결제금액에서 배송비를 제외한 금액입니다.' />
      <PaymentMethodInfoMessage message='무통장 입금의 경우, 입금 금액과 입금자명이 정확히 일치해야 주문이 정상 진행됩니다. 입금 전 필수 확인 부탁드립니다.' />
      <PaymentMethodInfoMessage message='소액 결제의 경우 PG사에 정책에 따라 결제 금액 제한이 있을 수 있습니다.' />
    </div>

    <div className=' mt-10 xs:mt-24 flex flex-col items-center justify-center w-[300px] xs:w-[780px] mx-auto border border-solid border-lenssisGray p-8 font-semibold'>
      <h3 className='font-bold text-xl w-full text-center pb-2'>총 주문금액</h3>
      <div className='flex flex-col h-fit pb-4 border-b border-solid border-lenssisStroke'>
      <div className='flex w-[200px] xs:w-[380px] items-center justify-between my-2'>
        <p>총 상품금액</p> <p>얼마</p>
      </div>
      <div className='flex w-[200px] xs:w-[380px] items-center justify-between my-2'>
        <p>총 배송비</p> <p>얼마</p>
      </div>
      <div className='flex w-[200px] xs:w-[380px] items-center justify-between my-2'>
        <p>총 할인혜택</p> <p className='text-lenssis'>얼마</p>
      </div>
      </div>
      <div className='flex w-[200px] xs:w-[380px] items-center justify-between my-2 mt-6'>
        <p>{currentPaymentMethod}</p> <p>얼마</p>
      </div>
      
    </div>
    <div className='flex w-[300px] xs:w-[780px] items-center justify-between my-2 mt-6 mx-auto'>
      <button className='w-full bg-lenssisDark text-white font-semibold rounded-md h-10'>결제하기</button>
      </div>
    </div>
  );
};

export default React.memo(PaymentMethodSelector);