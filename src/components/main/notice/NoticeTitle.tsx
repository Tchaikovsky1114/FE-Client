import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { NoticeTitles, NoticePageTitle } from '../../../constants/NoticeTitles'
import ViewMoreBtn from '../common/ViewMoreBtn'
import MainNoticeTab from './tabs/MainNoticeTab'
import NoticePageTab from './tabs/NoticePageTab'

function NoticeTitle() {
  const location = useLocation()
  const navigate = useNavigate()

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const changeWindowWidth = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', changeWindowWidth)
  }, [])

  return (
    <>
      {location.pathname.includes('notice') ? (
        <>
          <NoticePageTab />
        </>
      ) : (
        <>
          <MainNoticeTab />
        </>
      )}
    </>
  )
}
export default NoticeTitle
