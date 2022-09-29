import React, { ChangeEvent } from 'react';

interface ShippingPhoneProps {
  value1:string | number
  value2:string | number
  value3:string | number
  onChange: (e:ChangeEvent<HTMLInputElement>) => void
}

const ShippingPhone = ({value1,value2,value3,onChange}:ShippingPhoneProps) => {
  return (
    <div className="flex items-center mb-1 w-[450px]">
          <input
            name='firstNumber'
            value={value1}
            type="number"
            className="border border-solid border-gray-200 h-10 rounded-md max-w-[80px] xs:max-w-[120px]"
            onChange={onChange}
          />
          <span>&nbsp; - &nbsp;</span>
          <input
            name="middleNumber"
            value={value2}
            type="number"
            className="border border-solid border-gray-200 h-10 rounded-md max-w-[80px] xs:max-w-[120px]"
            onChange={onChange}
          />
          <span>&nbsp; - &nbsp;</span>
          <input
            name="lastNumber"
            value={value3}
            type="number"
            className="border border-solid border-gray-200 h-10 rounded-md max-w-[80px] xs:max-w-[120px]"
            onChange={onChange}
          />
        </div>
  );
};

export default ShippingPhone;