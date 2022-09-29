import React, { ChangeEvent } from 'react';

interface ShippingOrdererProps {
  onChange: (e:ChangeEvent<HTMLInputElement>) => void
  value:string
}

const ShippingOrderer = ({onChange,value}:ShippingOrdererProps) => {
  return (
    <div className={`flex items-start justify-start w-full`}>
    <input
      name="orderer"
      onChange={onChange}
      value={value}
      className={`w-full h-10 border border-solid border-gray-200 rounded-md max-w-[410px] pl-1 focus:outline-1 focus:outline-[#ABC8DF]`}
      type="text"
    />
  </div>
  );
};

export default ShippingOrderer;