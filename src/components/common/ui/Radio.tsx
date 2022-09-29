import React, { ChangeEvent } from 'react';

interface RadioProps {
title?:string
value:string
onChange:(e:ChangeEvent<HTMLInputElement>) => void
children?:React.ReactNode
}

const Radio = ({title,value,onChange,children}:RadioProps) => {
  return (
    <div  className='flex items-center gap-1 text-xs xs:text-sm  xs:w-full w-[40%] justify-start xs:justify-center '><input
          type="radio"
          name="payment-method"
          value={value}
          className="appearance-none min-w-[16px] w-4 h-4 border border-gray-400 checked:border-gray-100 checked:bg-lenssisDark checked:border-[4px] rounded-full ring-0 checked:ring-1 checked:ring-lenssisDark"
          onChange={onChange}
          
        /><label className="font-bold text-lenssisGray min-w-fit">{title || children}</label></div>
  );
};

export default Radio;