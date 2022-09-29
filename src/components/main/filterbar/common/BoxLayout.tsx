import React from 'react'

export type BoxLayoutProps = {
  title: string
  children: React.ReactNode
}

const BoxLayout = ({ title, children }: BoxLayoutProps) => {
  return (
    <div>
      <div className="flex justify-between pt-[20px] pb-[10px] px-[15px] border-solid border-b-2 border-[#ABC8DF]">
        <div className="font-bold text-[20px]">{title}</div>
        <div className="my-auto"></div>
      </div>
      {children}
    </div>
  )
}

export default BoxLayout
