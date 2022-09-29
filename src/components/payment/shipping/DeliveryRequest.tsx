import React, { ChangeEvent } from 'react';
import ShippingCard from './ui/ShippingCard';

interface DeliveryRequestProps {
  value:string;
  onChange:(e:ChangeEvent<HTMLTextAreaElement>) => void
}

const DeliveryRequest = ({value,onChange}:DeliveryRequestProps) => {
  return (
   
    <ShippingCard title="배송요청사항">
      <div className={`flex items-start justify-start w-full`}>
      <textarea className={`w-full h-40 align-middle border py-10 border-solid border-gray-200 rounded-md max-w-[410px] pl-1 focus:outline-1 focus:outline-[#ABC8DF] placeholder:text-xs text-sm`} name="userRequestMessage" onChange={onChange} value={value}  placeholder="배송메세지는 배송 시, 택배사 참고용으로 출력되는 메세지입니다.&#13;&#10;기타 문의 사항은 1:1 문의를 이용해 주시기 바랍니다."/>
      </div>
    </ShippingCard>
   
  );
};

export default DeliveryRequest;