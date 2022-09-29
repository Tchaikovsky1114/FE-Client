import React from 'react';

interface IconButtonProps {
  children:React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  
}

const IconButton = ({onClick,children}:IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`focus:outline-none focus:border-none hover:bg-gray-400 hover:bg-opacity-25 p-2 rounded-full inline-flex items-center`}
    >
      {children}
    </button>
  );
};

export default IconButton;