import React, { ChangeEvent } from 'react';


interface ShippingAddressProps {
  onChange:(e:ChangeEvent<HTMLInputElement>) => void;
  onClick:() => void;
  value1:string | number;
  value2:string | number;
  value3:string | number;
}

const ShippingAddress = ({onChange,onClick,value1,value2,value3}:ShippingAddressProps) => {
  return (
    <div className='flex flex-col justify-center my-4'>
          <div className='flex items-center justify-start gap-x-4 w-[450px] mb-1'>
            <input
              type="text" name="postCode" onChange={onChange} value={value1}
              className="h-10 border border-solid border-gray-200 rounded-md max-w-[400px]  focus:outline-1 focus:outline-[#ABC8DF] pl-1"
              readOnly
            />
            <button className=" w-28 h-10 bg-lenssisDark rounded-md text-white font-semibold border-none cursor-pointer" onClick={onClick}>우편 번호 검색</button>
          </div>
          <div className='flex flex-col w-full gap-y-1'>
            <input name="address" onChange={onChange} value={value2} className={`grow w-[320px] xs:w-[410px] text-xs xs:text-sm h-10 border border-solid border-gray-200 rounded-md pl-1 focus:outline-1 focus:outline-[#ABC8DF] placeholder-gray-400/60 `} type="text" readOnly  />
            <input name="detailAddress" onChange={onChange}value={value3} className={`grow w-[320px] xs:w-[410px] text-xs xs:text-sm h-10 border border-solid border-gray-200 rounded-md pl-1 focus:outline-1 focus:outline-[#ABC8DF] placeholder-gray-400/60 `} type="text" />
         </div>
         </div>
  );
};

export default ShippingAddress;