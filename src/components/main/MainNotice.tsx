import React from 'react'
import { useNavigate } from 'react-router'
import NoticeTitle from './notice/NoticeTitle'
const MainNotice = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="flex justify-center items-center text-[24px]  ">
        <span
          onClick={() => navigate('/notice')}
          className="border-b-[6px] border-solid border-[#1B304A] text-[18px] md:text-[24px] font-[600] mt-[25px] mb-[30px] md:mb-[50px] hover:cursor-pointer"
        >
          Notice
        </span>
      </div>
      <NoticeTitle />
    </>
  )
}

export default MainNotice
