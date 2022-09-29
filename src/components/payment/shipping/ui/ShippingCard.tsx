import React from 'react';

interface ShippingCardProps {
  
  title:string;
  children:React.ReactNode
  isRequired?:boolean
}

const ShippingCard = ({title,children,isRequired}:ShippingCardProps) => {
  return (
    <div className='flex flex-col xs:flex-row justify-start items-start xs:items-center gap-y-2 xs:gap-y-0 pl-2 my-4 max-w-[600px]'>
       <label className='min-w-[80px] xs:min-w-[140px] text-lenssisDark font-bold'><span>{title}</span>{' '}{isRequired && <span className='text-rose-400'>&nbsp;*</span>}</label>
       {children}
      </div>
  );
};

export default ShippingCard;