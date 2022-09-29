import React from 'react';


interface PaymentMethodInfoMessageProps {
  message:string
}

const PaymentMethodInfoMessage = ({message}:PaymentMethodInfoMessageProps) => {
  return (
    <div className='flex items-center gap-2 '>
    <div className='w-1 h-1 min-w-[4px] bg-lenssisDeepGray rounded-full' /><span>{message}</span>
    </div>
  );
};

export default PaymentMethodInfoMessage;