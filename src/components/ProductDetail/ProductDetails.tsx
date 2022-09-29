import React, { useEffect } from 'react'
import ProductBanner from './ProductBanner'
import ProductRecommend from './ProductRecommend'
import ProductTabs from './ProductTabs'
import { useQuery } from 'react-query'
import axios from 'axios'

import { axiosInstance } from '../axiosinstance'

const ProductDetails = () => {
  const getProducts = async () => {
    const { data } = await axios.get(`http://43.200.50.49:8080/product/allProduct`)
    console.log(data)
    return data
  }

  const { data } = useQuery('products', getProducts)
  console.log(data)

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container pt-44 pb-10 mx-auto ">
          <div className="lg:w-full mx-auto flex flex-wrap ring-2 ring-[#DADADA] rounded-2xl p-8 shadow-lg xs-max:w-[95%] xs-max:px-[18px] ">
            <div className="md:flex-row lg:flex-col lg:w-1/2 w-full lg:h-auto flex flex-col gap-4">
              <h2 className="xs:hidden text-center text-[20px] text-lenssisDark font-bold">상품상세</h2>
              <img
                alt="ecommerce"
                className="object-cover object-center rounded mx-auto xs-max:w-[320px] xs-max:h-[315px]"
                src="https://dummyimage.com/465x460"
                width="465"
                height="460"
              />
              <div className="flex xs:justify-between sm:justify-center md:justify-between lg:justify-between gap-3 md:mx-auto md:flex-col lg:gap-[14px] lg:flex-row xl:w-[460px] xl:mx-auto xl:gap-[14.2px] xs-max:w-[320px] xs-max:mx-auto xs-max:gap-2">
                <img
                  className="rounded xs-max:w-[74px] xs:w-[74px] sm:w-[105px]"
                  src="https://dummyimage.com/105x105"
                />
                <img
                  className="rounded xs-max:w-[74px] xs:w-[74px] sm:w-[105px]"
                  src="https://dummyimage.com/105x105"
                />
                <img
                  className="rounded xs-max:w-[74px] xs:w-[74px] sm:w-[105px]"
                  src="https://dummyimage.com/105x105"
                />
                <img
                  className="rounded xs-max:w-[74px] xs:w-[74px] sm:w-[105px]"
                  src="https://dummyimage.com/105x105"
                />
              </div>
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-2 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-lenssisGray mb-2 text-[12px]">60개의 리뷰 &gt;</h2>
              <div className="text-gray-900 text-3xl title-font font-medium mb-2 flex justify-between">
                <span className="">스텔라</span>
                <button>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.612 5.41452C19.1722 4.96607 18.65 4.61034 18.0752 4.36763C17.5005 4.12492 16.8844 4 16.2623 4C15.6401 4 15.0241 4.12492 14.4493 4.36763C13.8746 4.61034 13.3524 4.96607 12.9126 5.41452L11.9998 6.34476L11.087 5.41452C10.1986 4.50912 8.99364 4.00047 7.73725 4.00047C6.48085 4.00047 5.27591 4.50912 4.38751 5.41452C3.4991 6.31992 3 7.5479 3 8.82833C3 10.1088 3.4991 11.3367 4.38751 12.2421L5.30029 13.1724L11.9998 20L18.6992 13.1724L19.612 12.2421C20.0521 11.7939 20.4011 11.2617 20.6393 10.676C20.8774 10.0902 21 9.46237 21 8.82833C21 8.19428 20.8774 7.56645 20.6393 6.9807C20.4011 6.39494 20.0521 5.86275 19.612 5.41452V5.41452Z"
                      stroke="#14181F"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="divider h-[1px] bg-[#BCBCBC] my-2 xs-max:hidden"></div>
              <p className="leading-relaxed text-[14px]">
                <div className="price flex">
                  <p className="text-xl font-bold">1,800円</p>
                  <p className="ml-4 leading-7">2,000円</p>
                </div>
                <div className="badge flex gap-4 my-4">
                  <span className="ring-2 rounded px-2 text-sm">원데이</span>
                  <span className="ring-2 rounded px-2 text-sm"> 13.5mm</span>
                  <span className="ring-2 rounded px-2 text-sm"> 수분70%</span>
                  <span className="ring-2 rounded px-2 text-sm"> 실리콘</span>
                </div>
                <div className="point flex flex-initial my-2 ">
                  <p className="text-black w-[130px] xs-max:w-[70px] lg:w-[160px]">포인트</p>
                  <p className="flex-1">구매 금액의 1%</p>
                </div>
                <div className="card flex my-2">
                  <p className="text-black w-[130px] xs-max:w-[70px] lg:w-[160px]">카드 혜택</p>
                  <p className="flex-1">무이자 할부 카드 안내</p>
                </div>
                <div className="delivery flex my-2">
                  <p className="text-black w-[130px] xs-max:w-[70px] lg:w-[160px]">배송 안내</p>
                  <div>
                    <p className="flex-1 text-[14px] text-lenssisDeepGray">
                      2,500원(50,000원 이상 구매 시 무료)
                    </p>
                    <p className="text-[12px]">영업일 기준 5~7일 이내 배송</p>
                  </div>
                </div>
                <div className="divider h-[1px] bg-[#BCBCBC] mt-2 mb-4 sm:hidden"></div>
                <div className="divider"></div>
                <div className="delivery flex my-2">
                  <p className="text-black w-[130px] xs-max:w-[70px] lg:w-[160px]">사용 기간</p>
                  <div className="flex flex-1 gap-2">
                    <div className=" border-solid border-[#D3D3D3] border-[1px] rounded-[28px] text-center py-[1px] px-[12px] text-[#5A5A5A] w-[100px] h-[30px] ">
                      원데이
                    </div>
                    <div className=" border-solid border-[#D3D3D3] border-[1px] rounded-[28px] text-center py-[1px] px-[12px] text-[#5A5A5A] w-[100px] h-[30px] ">
                      먼슬리
                    </div>
                  </div>
                </div>
                <div className="delivery flex my-2">
                  <p className="text-black w-[130px] xs-max:w-[70px] lg:w-[160px]">직경</p>
                  <div className="flex gap-2">
                    <div className=" border-solid border-[#D3D3D3] border-[1px] rounded-[28px] text-center py-[1px] px-[12px] text-[#5A5A5A] w-[55px] h-[30px] ">
                      13.2
                    </div>
                    <div className=" border-solid border-[#D3D3D3] border-[1px] rounded-[28px] text-center py-[1px] px-[12px] text-[#5A5A5A] w-[55px] h-[30px] ">
                      13.2
                    </div>
                  </div>
                </div>
                <div className="delivery flex my-2">
                  <p className="text-black w-[130px] xs-max:w-[70px] lg:w-[160px]">세부 색상</p>
                  <div className="flex gap-2">
                    <div
                      className="w-[30px] h-[30px] rounded-full"
                      style={{ backgroundColor: '#A76C27' }}
                    ></div>
                    <div
                      className="w-[30px] h-[30px] rounded-full"
                      style={{ backgroundColor: '#F2EAD1' }}
                    ></div>
                    <div
                      className="w-[30px] h-[30px] rounded-full"
                      style={{ backgroundColor: '#B9B9B9' }}
                    ></div>
                  </div>
                </div>
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5 justify-between">
                <div className="flex">
                  <span className="mr-3 text-black w-[130px] xs-max:w-[70px] lg:w-[160px] text-[14px]">
                    도수
                  </span>
                </div>
                <div className="flex ml-6 items-center">
                  <div className="relative">
                    <select className="h-[30px] rounded border appearance-none border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-base pl-3 pr-10">
                      <option value="">選択してください</option>
                      <option value="0.00,0,376">0.00</option>
                      <option value="-0.5,0,301">-0.5</option>
                      <option value="-1,0,152">-1</option>
                      <option value="-1.25,0,93">-1.25</option>
                      <option value="-1.50,0,37">-1.50</option>
                      <option value="-1.75,0,18">-1.75</option>
                      <option value="-2.00,0,51">-2.00</option>
                      <option value="-2.25,0,39">-2.25</option>
                      <option value="-2.50,0,2">-2.50</option>
                      <option value="-2.75,0,-10">-2.75&nbsp;&nbsp;[品切れ]</option>
                      <option value="-3.00,0,-10">-3.00&nbsp;&nbsp;[品切れ]</option>
                      <option value="-3.25,0,26">-3.25</option>
                      <option value="-3.50,0,36">-3.50</option>
                      <option value="-3.75,0,-10">-3.75&nbsp;&nbsp;[品切れ]</option>
                      <option value="-4.00,0,20">-4.00</option>
                      <option value="-4.25,0,11">-4.25</option>
                      <option value="-4.50,0,95">-4.50</option>
                      <option value="-4.75,0,5">-4.75</option>
                      <option value="-5.00,0,71">-5.00</option>
                      <option value="-5.50,0,16">-5.50</option>
                      <option value="-6.00,0,59">-6.00</option>
                      <option value="-6.50,0,94">-6.50</option>
                      <option value="-7.00,0,44">-7.00</option>
                      <option value="-7.50,0,161">-7.50</option>
                      <option value="-8.00,0,32">-8.00</option>
                      <option value="-8.50,0,2">-8.50</option>
                      <option value="-9.00,0,10">-9.00</option>
                      <option value="-9.50,0,2">-9.50</option>
                      <option value="-10.00,0,1">-10.00</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <span>총 상품 금액</span>
                <span className="title-font font-medium text-2xl text-gray-900">1,800円</span>
              </div>
              <div className="divder h-[2px] bg-slate-700 mb-4 mt-1"></div>
              <div className="flex gap-4 xs-max:flex-col">
                <button className="w-1/2 cursor-pointer bg-white text-blue-900 border-0 ring-1 ring-gray-300 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded xs-max:w-full">
                  장바구니
                </button>
                <button className="w-1/2 cursor-pointer text-white bg-[#1B304A] border-0 ring-1 ring-gray-300 py-2 px-6 focus:outline-none rounded xs-max:w-full">
                  바로구매
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProductRecommend />
      <ProductBanner />
      <ProductTabs />
    </div>
  )
}

export default ProductDetails
