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
    <div className="fixed top-[25%] left-1/3 xs:top-[30%] xs:left-1/2 -translate-x-1/2 translate-y-1/2 z-50 overflow-auto bg-gray-400 flex xs:w-[400px] border border-solid border-gray-400">
    <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg">
    <div>{children}</div>
    <span className="absolute top-0 right-0 p-4">     
    <IconButton onClick={() => onClose()}>
    <svg
      className="h-6 w-6 fill-current text-grey hover:text-grey-darkest"
      role="button"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
    </svg>
    </IconButton>
   </span>
   </div>
 </div>
  );
};

export default Dialog;