import React from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';



const navMenuArray = [
  {
  title:'주문 내역',
  path:'myorder'
  },
  {
    title:'배송 조회',
    path:'mytracking'
  },
  {
    title:'취소/교환/반품 내역',
    path:'myafter'
  },
  {
    title:'리뷰 관리',
    path:'myreview'
  },
  {
    title:'회원 정보 수정',
    path:'myprofile'
  },
  {
    title:'회원 등급',
    path:'mygrade'
  },
  {
    title:'쿠폰함',
    path:'mycoupon'
  },
  ]

const SideNavBar = () => {
  const {pathname} = useLocation();

  return (
    <ul className={`${pathname === '/mypage' && 'text-center gap-y-4'} flex flex-col items-start gap-y-1 text-[#7a7a7a] font-bold text-sm mr-0 xs:mr-4 min-w-[116px]`}>
        <li className='w-full'><NavLink className={({isActive}) => (isActive ? 'text-[#1B304A]' : 'text-inherit')} to="myorder">주문 내역</NavLink></li>
        <li className='w-full'><NavLink className={({isActive}) => (isActive ? 'text-[#1B304A]' : 'text-inherit')} to="mytracking">배송 조회</NavLink></li>
        <li className='w-full'><NavLink className={({isActive}) => (isActive ? 'text-[#1B304A]' : 'text-inherit')} to="myafter">취소/교환/반품 내역</NavLink></li>
        <li className='w-full'><NavLink className={({isActive}) => (isActive ? 'text-[#1B304A]' : 'text-inherit')} to="myreview">리뷰관리</NavLink></li>
        <li className='w-full'><NavLink className={({isActive}) => (isActive ? 'text-[#1B304A]' : 'text-inherit')} to="myprofile">회원 정보 수정</NavLink></li>

        {pathname.includes('/mypage/myprofile') &&
        <>
        <li className='text-xs font-normal pl-1'><NavLink className={`${pathname === '/mypage/myprofile/editprofile' ? 'text-[#1B304A] font-bold' : 'text-inherit'}`} to="myprofile/editprofile">프로필 수정</NavLink></li>
        <li className='text-xs font-normal pl-1'><NavLink className={`${pathname === '/mypage/myprofile/editsecret' ? 'text-[#1B304A] font-bold' : 'text-inherit'}`} to="myprofile/editsecret">비밀번호 수정</NavLink></li>
        </>
        }
        
        <li className='w-full'><NavLink className={({isActive}) => (isActive ? 'text-[#1B304A]' : 'text-inherit')} to="mygrade">회원등급</NavLink></li>
        <li className='w-full'><NavLink className={({isActive}) => (isActive ? 'text-[#1B304A]' : 'text-inherit')} to="mycoupon">쿠폰함</NavLink></li>
      
        </ul>
  );
};

export default React.memo(SideNavBar);