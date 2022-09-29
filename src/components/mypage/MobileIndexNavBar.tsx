import React from 'react';
import { NavLink } from 'react-router-dom';

const MobileIndexNavBar = () => {
  return (
    <div className=' block xs:hidden'>
          <ul className='flex flex-col items-start text-[#7a7a7a] font-semibold text-sm mr-0 xs:mr-4 min-w-[116px] gap-y-4'>
            <li className='w-full pb-2 border-b border-solid border-gray-400'><NavLink className={({isActive}) => (isActive ? 'text-[#1B304A]' : 'text-inherit')} to="myorder">주문 내역</NavLink></li>
            <li className='w-full pb-2 border-b border-solid border-gray-400'><NavLink className={({isActive}) => (isActive ? 'text-[#1B304A]' : 'text-inherit')} to="mytracking">배송 조회</NavLink></li>
            <li className='w-full pb-2 border-b border-solid border-gray-400'><NavLink className={({isActive}) => (isActive ? 'text-[#1B304A]' : 'text-inherit')} to="myafter">취소/교환/반품 내역</NavLink></li>
            <li className='w-full pb-2 border-b border-solid border-gray-400'><NavLink className={({isActive}) => (isActive ? 'text-[#1B304A]' : 'text-inherit')} to="myreview">리뷰관리</NavLink></li>
            <li className='w-full pb-2 border-b border-solid border-gray-400'><NavLink className={({isActive}) => (isActive ? 'text-[#1B304A]' : 'text-inherit')} to="myprofile">회원 정보 수정</NavLink></li>

            
            <li className='w-full text-sm font-normal pl-2 pb-2 border-b border-solid border-gray-400'><NavLink className='text-inherit' to="myprofile/editprofile">프로필 수정</NavLink></li>
            <li className='w-full text-sm font-normal pl-2 pb-2 border-b border-solid border-gray-400'><NavLink className='text-inherit' to="myprofile/editsecret">비밀번호 수정</NavLink></li>
            
            
            <li className='w-full pb-2 border-b border-solid border-gray-400'><NavLink className={({isActive}) => (isActive ? 'text-[#1B304A]' : 'text-inherit')} to="mygrade">회원등급</NavLink></li>
            <li className='w-full pb-2 border-b border-solid border-gray-400'><NavLink className={({isActive}) => (isActive ? 'text-[#1B304A]' : 'text-inherit')} to="mycoupon">쿠폰함</NavLink></li>
      
        </ul>
          </div>
  );
};

export default React.memo(MobileIndexNavBar);