import React from 'react';
import IconButton from './IconButton';

interface DialogProps {
  children:React.ReactNode;
  isModalOpen:boolean;
  onClose:Function;
}

const Dialog = ({onClose,children,isModalOpen}:DialogProps) => {

  if(!isModalOpen) return <></>;

  return (
    <div className='absolute left-1/2 xs:top-1/2 xs:left-1/2 -translate-x-1/2 translate-y-1/2 overflow-auto w-[2560px] h-screen bg-gray-300 bg-opacity-40 z-20'>
    <div className="fixed top-[60%] xs:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex w-[350px] rounded-md xs:w-[400px] bg-lenssisSky">
    <div className="relative w-full max-w-md m-auto flex-col flex rounded-lg ">
    <div className='flex flex-col items-start justify-center'>{children}</div>
    <span className="absolute top-0 right-0 p-4">     
    
   </span>
   </div>
 </div>
 </div>
  );
};

export default Dialog;