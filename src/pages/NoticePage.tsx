import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router'
import PageLayout from '../components/common/ui/PageLayout'
import Pagination from '../components/main/common/Pagination'
import Search from '../components/main/common/Search'
import ViewMoreBtn from '../components/main/common/ViewMoreBtn'
import MainNotice from '../components/main/MainNotice'
import NoticeTitle from '../components/main/notice/NoticeTitle'
import CardTemplate from './../components/common/ui/CardTemplate'

function NoticePage() {
  const navigate = useNavigate()
  const location = useLocation()
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    if (location.pathname.includes('notice')) {
      navigate('/notice/mustread')
    }
  }, [])

  return (
    <>
      {location.pathname.includes('notice') === false ? (
        <div className="w-[90%] mx-auto">
          <MainNotice />
          <Outlet />
          <ViewMoreBtn moveTo="/notice" />
        </div>
      ) : (
        <PageLayout layoutWidth="[90%]" innerTop="top-[30%]">
          <CardTemplate title="공지사항" isTitleVisible={true}>
            <NoticeTitle />
            <Outlet />
            <div className="flex justify-center items-center relative">
              <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} allCount={10} />
              <Search />
            </div>
          </CardTemplate>
        </PageLayout>
      )}
    </>
  )
}

export default NoticePage
