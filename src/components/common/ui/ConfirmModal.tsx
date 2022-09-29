import React from 'react';
import Button from '../Button';
import Dialog from './Dialog';

interface ConfirmModalProps {
  title:string;
  
  isModalOpen:boolean;
  children:React.ReactNode
  onClose:Function
  onConfirm:Function
}

const ConfirmModal = ({isModalOpen,title,onClose,onConfirm,children}:ConfirmModalProps) => {

  if( !isModalOpen) return <></>

  return (
    <Dialog isModalOpen={isModalOpen} onClose={onClose}>
      <h2 className="text-lg">{title}</h2>
      <div className="py-5">{children}</div>
      <div className="flex justify-end">
        <div className="p-1">
          <Button
            onClick={() => {onClose(),onConfirm()}}
          >
            네, 바꿀게요
          </Button>
        </div>
        <div className="p-1">
          <Button
            onClick={() => onClose()}
          >
          아니요
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default ConfirmModal;