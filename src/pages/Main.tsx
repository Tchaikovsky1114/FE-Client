import { useEffect, useState } from 'react'
import Event from '../components/main/MainEvent'
import Recommend from '../components/main/Recommend'
import Banner from './../components/Banner'
import CardContainer from '../components/main/CardContainer'
import NoticePage from './NoticePage'
import MainReview from '../components/main/MainReview'
import FilterBar from '../components/main/filterbar/FilterBar'

import { useRefreshToken } from '../components/auth/hooks/useRefreshToken'
import { getStoredToken } from '../components/local-storage/userStorage'

import axios from 'axios'
import { queryKeys } from '../components/react-query/queryKeys'
import { useQuery } from 'react-query'
import MobileBoxLayout from '../components/main/filterbar/common/MobileBoxLayout'
import MobileFilter from '../components/main/filterbar/mobile/MobileFilter'
import { useRecoilState } from 'recoil'
import { filterState } from '../store/filterOpen'
import { axiosInstance } from './../components/axiosinstance/index'

const Main = () => {
  const refreshToken = useRefreshToken()

  const [filterOpen, setFilterOpen] = useRecoilState(filterState)

  
  useEffect(() => {
    const token = getStoredToken()
    refreshToken(token)
    console.log('main interceptor')
  }, [])

  const getProduct = async () => {
    const res = await axiosInstance({
      url: 'https://633010e5591935f3c8893690.mockapi.io/lenssis/api/v1/products'
    })
    return res.data
  }

  const { data: productLists } = useQuery([queryKeys.product], getProduct, {
    refetchOnWindowFocus: false
  })
  console.log(productLists)
  return (
    <div className="w-[90%] mx-auto ">
      <div className="pt-44 relative">
        <Banner />
        <section className="flex justify-between">
          {/* 메인의 왼쪽 검색 필터 */}
          <div className="xs-max:hidden hidden lg:block xl:block w-[280px] mr-12">
            <FilterBar />
          </div>
          {filterOpen && (
            <div className="xs:hidden mobile-filter fixed left-0 top-[106px] z-10 w-full animate-drop">
              <MobileFilter />
            </div>
          )}
          {/*메인에서 상품 리스트 */}
          <div className="w-full mx-auto border-none rounded-md shadow-basic">
            {/* <div className="container px-4  flex justify-center items-end"></div> */}
            <CardContainer data="Best" productLists={productLists} />
          </div>
        </section>
        <div className="w-full h-[200px] mx-auto border-none rounded-md shadow-basic my-12 object-cover overflow-hidden">
          <img
            src="https://lenssis.jp/data/editor/2203/44422109c17730933970139952b48d7a_1647854567_1883.jpg"
            alt=""
            className="w-full mx-auto mb-12"
          />
        </div>
        <div className="w-full border-none rounded-md  shadow-basic">
          <CardContainer data="New" />
        </div>
        <div className="w-full my-12 border-none rounded-md  shadow-basic">
          <Event />
        </div>
        <div className="w-full my-12 border-none rounded-md  shadow-basic">
          <Recommend />
        </div>
        <div className="w-full my-12 border-none rounded-md  shadow-basic">
          <MainReview />
        </div>
        <div className="w-full my-12 border-none rounded-md  shadow-basic">
          <NoticePage />
        </div>
      </div>
    </div>
  )
}

export default Main
