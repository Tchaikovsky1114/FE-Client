import React from 'react';


interface CardTemplateProps {
  children:React.ReactNode
  title:string;
  isTitleVisible?:boolean
  marginTop?:string
}

const CardTemplate = ({children,isTitleVisible,title,marginTop}:CardTemplateProps) => {
  return (
    <div className={`shadow-[0_0_6px] bg-white rounded-lg p-4 xs:p-10 shadow-gray-400/80 ${marginTop ? marginTop : 'mt-40'}`}>
      {isTitleVisible && <h3 className="text-[#1B304A] font-bold text-[22px] text-center w-[180px] h-[50px] mx-auto my-6">{title}</h3>}
      {children}
    </div>
  );
};

export default CardTemplate; 