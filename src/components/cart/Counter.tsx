import React, { useState } from 'react';

const Counter = () => {
  const [count,setCount] = useState(0)
  return (
    <div className='flex mt-4'>
      <div className='border border-solid border-lenssisStroke px-1'>&nbsp;-&nbsp;</div>
      <div className='w-8 text-center border-y border-solid border-lenssisStroke text-sm flex items-center justify-center'>{count}</div>
      <div className='border border-solid border-lenssisStroke px-1'>&nbsp;+&nbsp;</div>
    </div>
  );
};

export default Counter;