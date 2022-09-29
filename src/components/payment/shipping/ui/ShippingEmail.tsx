import React, { ChangeEvent } from 'react';
import { GoTriangleDown } from 'react-icons/go';

interface ShippingEmailProps {
  onChange:(e:ChangeEvent<HTMLInputElement>) => void;
  value1: string;
  value2: string;
  onClick: () => void // domainSelectHandler
  domainArray: string[]
  emailDomainSelectHandler: (item:string) => void
  isOpen: boolean;
}

const ShippingEmail = ({domainArray,emailDomainSelectHandler,onChange,onClick,value1,value2,isOpen}:ShippingEmailProps) => {
  return (
    <div className="flex items-center w-[550px] ">
          <div className="w-full flex items-center justify-start relative">
            <div className='flex items-center'>
              <input
                name="emailIdentity"
                value={value1}
                type="text"
                className="flex-1 border border-solid border-gray-200 h-10 rounded-md max-w-[100px] xs:max-w-[160px] text-xs xs:text-sm pl-1"
                onChange={onChange}
              />
              <span className="text-gray-400">&nbsp;@&nbsp;</span>
            </div>
            <input
              name="emailDomain"
              value={value2}
              type="text"
              className="flex-1 border border-solid border-gray-200 h-10 rounded-md max-w-[80px] xs:max-w-[100px] text-xs xs:text-sm pl-1"
              onChange={onChange}
            />
            <div
              className="flex items-center justify-center w-[80px] xs:w-[100px] border border-solid border-gray-200 h-10 rounded-md ml-2 xs:ml-6 cursor-pointer"
              onClick={onClick}
            >
              <span className="text-xs xs:text-sm">
                {domainArray.includes(value2) ? value2 : '직접입력'}
              </span>{' '}
              <GoTriangleDown size={16} />
            </div>
  
            {isOpen && (
              <ul className="absolute right-2 top-10 xs:-right-4 xs:top-10 bg-white border border-solid border-gray-400 rounded-md min-w-[80px] xs:min-w-[140px]">
                {domainArray.map((item) => (
                  <li
                    key={item}
                    className="p-1 border-b border-solid border-gray-400 w-full cursor-pointer hover:bg-slate-200 bg-opacity-30 text-center"
                    onClick={() => emailDomainSelectHandler(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
  );
};

export default ShippingEmail;