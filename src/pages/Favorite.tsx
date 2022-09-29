import React, { useState } from 'react'
import { useLocation, Link, Outlet } from 'react-router-dom'
import PageLayout from '../components/common/ui/PageLayout'

const Favorite = () => {
  const location = useLocation()
  const [tabState, setTabState] = useState<boolean>(false)

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container pt-44 pb-10 mx-auto ">
          <div className="lg:w-full mx-auto flex flex-wrap ring-2 ring-[#DADADA] rounded-2xl p-8 shadow-lg xs-max:w-[90%] ">
            <div className="bg-white w-full">
              <div className="text-center mt-2 mb-6 font-bold">즐겨찾기</div>
              <nav className="flex justify-between">
                <button
                  onClick={() => setTabState(true)}
                  className={`${
                    location.pathname === '/favorite/all' && 'border-[#030303] border-b-4 text-[#030303]'
                  } flex-1 text-gray-600 py-4 px-6 block hover:text-[#030303] focus:outline-none border-[#1B304A] border-b-2 font-medium`}
                >
                  <Link to="all">
                    <span>전체</span>
                  </Link>
                </button>

                <button
                  onClick={() => setTabState(false)}
                  className={`${
                    location.pathname === '/favorite/monthly' && 'border-[#030303] border-b-4 text-[#030303]'
                  } flex-1 text-gray-600 py-4 px-6 block hover:text-[#030303] focus:outline-none border-[#1B304A] border-b-2 font-medium`}
                >
                  <Link to="oneday">
                    <span>원데이</span>
                  </Link>
                </button>

                <button
                  onClick={() => setTabState(false)}
                  className={`${
                    location.pathname === '/favorite/monthly' && 'border-[#030303] border-b-4 text-[#030303]'
                  } flex-1 text-gray-600 py-4 px-6 block hover:text-[#030303] focus:outline-none border-[#1B304A] border-b-2 font-medium`}
                >
                  <Link to="monthly">
                    <span>먼슬리</span>
                  </Link>
                </button>
              </nav>
              <div className="flex justify-between mt-6">
                <div>
                  <input type="checkbox" value="품절제외" id="isSale" />
                  <label className="ml-1" htmlFor="isSale">
                    품절제외
                  </label>
                </div>
                <div>
                  <button>최근 찜한 순</button>
                </div>
              </div>
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Favorite
