import React, { ChangeEvent } from 'react';


interface ShippingAreaSelectorProps {
  selectChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
  isNew:boolean
}

const ShippingAreaSelector = ({isNew,selectChangeHandler}:ShippingAreaSelectorProps) => {
  return (
    <div className="flex items-center justify-start mt-4 pl-2">
    <label className="font-bold min-w-[90px] xs:min-w-[140px] text-lenssisDark my-2">
      배송지 선택
    </label>
    <div className="flex items-center justify-start gap-2 xs:gap-8">
      <div className="flex items-center gap-1">
        <input
          type="radio"
          name="selectAddress"
          value="same"
          className="appearance-none w-4 h-4 border border-gray-400 checked:border-gray-100 checked:bg-lenssisDark checked:border-[4px] rounded-full ring-0 checked:ring-1 checked:ring-lenssisDark"
          onChange={selectChangeHandler}
          checked={!isNew}
          
        />
        <label className="text-lenssisGray font-semibold text-xs xs:text-sm">주문자 정보와 동일</label>
      </div>
      <div className="flex items-center gap-1">
        <input
          type="radio"
          name="selectAddress"
          value="new"
          className="appearance-none w-4 h-4 border border-gray-400 checked:border-gray-100 checked:bg-lenssisDark checked:border-[4px] rounded-full ring-0 checked:ring-1 checked:ring-lenssisDark"
          onChange={selectChangeHandler}
          checked={isNew}
          
        />
        <label className="text-lenssisGray font-semibold text-xs xs:text-sm">새로운 배송지</label>
      </div>
    </div>
  </div>
  );
};

export default ShippingAreaSelector;