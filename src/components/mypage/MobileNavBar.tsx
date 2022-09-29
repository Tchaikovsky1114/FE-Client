import React, { useState,useEffect, useRef, useCallback } from 'react';
import { NavLink, useLocation, useNavigate, useSearchParams } from 'react-router-dom';





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


  interface MobileNavBarProps {
    selectedOption: string | null;
    setSelectedOption: React.Dispatch<React.SetStateAction<string | null>>
  }

const MobileNavBar = ({selectedOption,setSelectedOption}:MobileNavBarProps) => {
  const [isOpen,setIsOpen] = useState(false);
  const {pathname} = useLocation();
  const modalRef = useRef<HTMLUListElement>(null)
  const menuRef = useRef<HTMLDivElement>(null);
  const selectMenuHandler = () => {
    
    setIsOpen((prev) => !prev)
    
  }
  const selectOptionHandler = useCallback((item:string) => {
    // setIsOpen((prev) => !prev)
    setSelectedOption(item)
  },[])
  useEffect(() => {
    const currentPath = pathname.split('/').pop();
    if(currentPath === 'mypage'){setSelectedOption('메뉴선택')}
    if(currentPath === 'myorder'){setSelectedOption('주문 내역')}
    if(currentPath === 'myafter'){setSelectedOption('취소/교환/반품 내역')}
    if(currentPath === 'myreview'){setSelectedOption('리뷰 관리')}
    if(currentPath === 'myprofile'){setSelectedOption('회원 정보 수정')}
    if(currentPath === 'editprofile'){setSelectedOption('프로필 수정')}
    if(currentPath === 'editsecret'){setSelectedOption('비밀번호 수정')}
    if(currentPath === 'mygrade'){setSelectedOption('회원 등급')}
    if(currentPath === 'mycoupon'){setSelectedOption('쿠폰함')}
  }, [pathname])

 
  const handleCloseModal = ({target}:MouseEvent) => {
      if(isOpen && (!modalRef.current?.contains(target as Node)) && !menuRef.current?.contains(target as Node)){
        setIsOpen(false)
        
      }
  }

  useEffect(() => {
    document.addEventListener('click', handleCloseModal)
    return () => document.removeEventListener('click', handleCloseModal)
  }, [isOpen])

  return (
    <>
    <div ref={menuRef} className="w-full pb-1 border-b border-solid border-lenssisDark" onClick={selectMenuHandler}>
      <button className='text-lenssisDark font-bold w-fit flex items-center gap-2'>
        <span>{selectedOption || '메뉴선택'}</span>
        <img width={8} src="/assets/arrowtobottom.png" alt="" />
        </button>
    </div>
    <div className='relative mt-6'>
    {isOpen && (
      <ul ref={modalRef} className='absolute flex flex-col items-start justify-start text-base text-lenssisGray bg-white z-50 px-2 pb-2 w-[65%] shadow-[0_0_6px] shadow-gray-400 font-semibold'>
          
          <li className='p-1 py-[8px] border-b border-solid border-lenssisGray w-[90%]'><NavLink className={({isActive}) => (isActive ? 'text-[#1B304A] font-bold' : 'text-inherit')} onClick={() => selectOptionHandler('주문 내역')} to="myorder">주문 내역</NavLink></li>
        <li className='p-1 py-[8px] border-b border-solid border-lenssisGray w-[90%]'><NavLink className={({isActive}) => (isActive ? 'text-[#1B304A] font-bold' : 'text-inherit')} onClick={() => selectOptionHandler('배송 조회')} to="mytracking">배송 조회</NavLink></li>
        <li className='p-1 py-[8px] border-b border-solid border-lenssisGray w-[90%]'><NavLink className={({isActive}) => (isActive ? 'text-[#1B304A] font-bold' : 'text-inherit')} onClick={() => selectOptionHandler('취소/교환/반품 내역')} to="myafter">취소/교환/반품 내역</NavLink></li>
        <li className='p-1 py-[8px] border-b border-solid border-lenssisGray w-[90%]'><NavLink className={({isActive}) => (isActive ? 'text-[#1B304A] font-bold' : 'text-inherit')} onClick={() => selectOptionHandler('리뷰관리')} to="myreview">리뷰관리</NavLink></li>
        <li className='p-1 py-[8px] border-b border-solid border-lenssisGray w-[90%]'><NavLink className={({isActive}) => (isActive ? 'text-[#1B304A] font-bold' : 'text-inherit')} onClick={() => selectOptionHandler('회원 정보 수정')} to="myprofile">회원 정보 수정</NavLink></li>

        {pathname.includes('/mypage/myprofile') &&
        <>
        <li className='p-1 text-sm font-normal py-[8px] w-[90%] border-b border-solid border-lenssisGray'><NavLink className={`${pathname === '/mypage/myprofile/editprofile' ? 'text-[#1B304A] font-bold' : 'text-inherit'}`} onClick={() => selectOptionHandler('프로필 수정')} to="myprofile/editprofile">프로필 수정</NavLink></li>
        <li className='p-1 text-sm font-normal py-[8px] w-[90%] border-b border-solid border-lenssisGray'><NavLink className={`${pathname === '/mypage/myprofile/editsecret' ? 'text-[#1B304A] font-bold' : 'text-inherit'}`} onClick={() => selectOptionHandler('비밀번호 수정')} to="myprofile/editsecret">비밀번호 수정</NavLink></li>
        </>
        }
        
        <li className='p-1 py-[8px] border-b border-solid border-lenssisGray w-[90%]'><NavLink className={({isActive}) => (isActive ? 'text-[#1B304A] font-bold' : 'text-inherit')} onClick={() => selectOptionHandler('회원등급')} to="mygrade">회원등급</NavLink></li>
        <li className='p-1 py-[8px] border-b border-solid border-lenssisGray w-[90%]'><NavLink className={({isActive}) => (isActive ? 'text-[#1B304A] font-bold' : 'text-inherit')} onClick={() => selectOptionHandler('쿠폰함')} to="mycoupon">쿠폰함</NavLink></li>
      </ul>
    )}
    </div>
    </>
  );
};

export default React.memo(MobileNavBar);