import React from 'react'
import { useNavigate } from 'react-router'
import Pagination from '../../common/Pagination'
import Search from '../../common/Search'
import ViewMoreBtn from '../../common/ViewMoreBtn'
import MobileNotice from '../utils/MobileNotice'
import WebNotice from '../utils/WebNotice'
// 필독에 대한 내용 데이터
function MustRead() {
  const navigate = useNavigate()
  const id = 1
  // 쿼리 키를 페이지네이션 부분에 내려줘서 버튼 누를 때 가능하게 만들기
  return (
    <>
      <WebNotice />
      <MobileNotice />
     
    </>
  )
}

export default MustRead
