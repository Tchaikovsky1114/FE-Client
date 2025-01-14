import { useEffect, useState } from 'react'
import Event from '../components/main/MainEvent'
import Recommend from '../components/main/Recommend'
import Banner from './../components/Banner'
import CardContainer from '../components/main/CardContainer'
import NoticePage from './NoticePage'
import MainReview from '../components/review/MainReview'
import FilterBar from '../components/main/filterbar/FilterBar'

import { useRefreshToken } from '../components/auth/hooks/useRefreshToken'
import { getStoredToken } from '../components/local-storage/userStorage'

import MobileBoxLayout from '../components/main/filterbar/common/MobileBoxLayout'
import MobileFilter from '../components/main/filterbar/mobile/MobileFilter'
import { useRecoilState } from 'recoil'
import { filterState } from '../store/filterOpen'
import { axiosInstance } from './../components/axiosinstance/index'
import { useNavigate } from 'react-router-dom'

const Main = () => {
  const refreshToken = useRefreshToken()
  const navigate = useNavigate()
  const [filterOpen, setFilterOpen] = useRecoilState(filterState)

  useEffect(() => {
    const token = getStoredToken()
    refreshToken(token)
    console.log('main interceptor')
  }, [])

  return (
    <div className="max-w-[1180px] mx-auto pb-10 ">
      <div className="pt-[100px] relative ">
        <Banner />
        <section className="flex justify-between">
          {/* 메인의 왼쪽 검색 필터 */}
          <div className="xs-max:hidden hidden lg:block xl:block w-[280px] mr-[20px]">
            <FilterBar />
          </div>
          {filterOpen && (
            <div className="xs:hidden mobile-filter fixed left-0 top-[106px] z-10 w-full animate-drop">
              <MobileFilter />
            </div>
          )}
          {/*메인에서 상품 리스트 */}
          <div className="w-[880px] border-none rounded-md shadow-basic bg-white">
            <CardContainer data="Best" />
          </div>
        </section>
        <div
          onClick={() => navigate('/')} /* 퍼스널 컬러 테스트로 이동 */
          className="w-full h-auto mx-auto border-none rounded-md shadow-basic my-[20px] md:my-12 object-fit md:object-cover overflow-hidden"
        >
          <img
            src="https://user-images.githubusercontent.com/90392240/193073587-58b90f5a-e06c-4f2c-baec-87351fbf4b96.png"
            alt=""
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="w-full border-none rounded-md pb-1 shadow-basic bg-white">
          <CardContainer data="New" />
        </div>
        <div className="w-full my-12 border-none rounded-md  shadow-basic bg-white">
          <Event />
        </div>
        <div className="w-full my-12 border-none rounded-md  shadow-basic bg-white">
          <Recommend />
        </div>
        <div className="w-full my-12 border-none drop-shadow-basic">
          <MainReview />
        </div>
        <div className="w-full my-12 border-none rounded-md shadow-basic bg-white">
          <NoticePage />
        </div>
      </div>
    </div>
  )
}

export default Main
