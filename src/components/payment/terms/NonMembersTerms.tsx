import React from 'react';
import TermsDropdownButton from './TermsDropdownButton';

const NonMembersTerms = () => {
  return (
    <div className='relative'>
      <TermsDropdownButton />
      <div className='flex items-center gap-2 pt-2'>
        <input className='w-4 h-4 xs:w-5 xs:h-5' type="checkbox" /> <label className='font-bold text-lenssisGray text-xs'>쇼핑몰 이용약관, 비회원 구매시 개인정보수집 및 이용에 모두 동의합니다</label>
      </div>
    </div>
  );
};

export default NonMembersTerms;