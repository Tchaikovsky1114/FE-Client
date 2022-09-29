import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../header/Logo'

const Footer = () => {
  return <div className='bg-[#F4F6F8] w-full z-20 relative flex flex-col items-center gap-4 text-[#1b304a] pt-8 border-t-2 border-solid border-gray-200 mt-20'>
    <ul className='w-full mx-auto flex flex-col items-start xs:items-center xs:justify-center gap-y-1 pl-8 xs:pl-0'>
      <li className='font-[900] pb-2 text-2xl tracking-tight'>LENSSIS</li>
      <li>주식회사 <span className='font-bold'>LENSSIS</span></li>
      <li>전화번호 <span className='font-bold'>050-3558-4887</span></li>
      <li>문의시간 <span className='font-bold'>평일 10:00 17:30</span></li>
    </ul>
    <ul className='flex flex-col items-star xs:flex-row xs:justify-center xs:items-center pb-20 xs:gap-x-10 w-full pl-8 xs:pl-0'>
      <li className='text-sm border-b xs:border-b-0 border-solid w-fit'><Link to="/">이용 규약과 정책</Link></li>
      <li className='text-sm border-b xs:border-b-0 border-solid w-fit'><Link to="/">특정 상거래에 관한 볍률에 근거한 표기</Link></li>
      <li className='text-sm border-b xs:border-b-0 border-solid w-fit'><Link to="/">개인 정보 보호 방침</Link></li>
    </ul>
    <ul className='absolute flex flex-col gap-y-4 right-8 top-8'>
      <li><a href="https://www.youtube.com"> <svg className='mx-auto' width={40} height={40} xmlns="http://www.w3.org/2000/svg"><image href="/assets/youtube.svg" /></svg></a></li>
      <li><a href="https://www.line.me/ko"> <svg className='mx-auto' width={40} height={40} xmlns="http://www.w3.org/2000/svg"><image href="/assets/line.svg" /></svg></a></li>
      <li><a href="https://www.instagram.com"> <svg className='mx-auto' width={40} height={40} xmlns="http://www.w3.org/2000/svg"><image href="/assets/instagram.svg" /></svg></a></li>
      
    </ul>
    </div>
}

export default Footer
