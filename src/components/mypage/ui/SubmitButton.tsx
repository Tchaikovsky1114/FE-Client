import React from 'react';


interface SubmitButtonProps {
  onClick: () => void
}

const SubmitButton = ({onClick}:SubmitButtonProps) => {
  return (
    <div className='pl-2 mt-8 xs:w-[460px] flex items-center justify-end'>    
  <button className='bg-lenssisDark w-[120px] h-10 rounded-md text-white' onClick={onClick}>수정하기</button>
  </div>)
};

export default React.memo(SubmitButton);