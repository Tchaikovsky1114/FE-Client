import React, { ChangeEvent, HTMLInputTypeAttribute } from 'react';


interface EditProfileInputProps {
  onChange: (e:ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name:string;
  placeholder?:string
  type?:string;
}

const EditProfileInput = ({onChange,value,name,placeholder,type}:EditProfileInputProps) => {
  return (
    <div className={`flex items-start justify-start w-full`}>
    <input
      name={name}
      onChange={onChange}
      value={value}
      className={`w-full h-10 border border-solid border-gray-200 rounded-md max-w-[310px] pl-1 focus:outline-1 focus:outline-[#ABC8DF]`}
      type={type || 'text'}
      placeholder={placeholder}
    />
  </div>
  );
};

export default React.memo(EditProfileInput);