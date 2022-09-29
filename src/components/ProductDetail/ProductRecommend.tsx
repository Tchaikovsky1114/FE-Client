import React from 'react'
import MobileProductRecommend from './mobile/MobileProductRecommend'

const ProductRecommend = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mb-10 mx-auto ring-2 ring-[#DADADA] rounded-2xl shadow-lg xs-max:w-[95%]">
        <div className="flex justify-between px-10 xs-max:p-0">
          <p className="font-bold text-lg text-black xs-max:text-[20px]">이런 상품도 있어요!</p>
          <p className="xs-max:hidden">랜덤으로 상품 8개 보여주기</p>
          <p className="xs:hidden">더보기</p>
        </div>
        <div className="divider h-[1px] mt-4 mb-8 bg-[#BCBCBC] xs-max:mb-0"></div>
        <div className="xs-max:hidden flex flex-wrap -m-4 p-4">
          <div className="lg:w-1/4 md:w-1/2 p-2 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/420x260"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">샌드</h3>
              <h2 className="text-gray-900 title-font text-[16px] font-medium">샌드 플러스 그레이</h2>
              <div className="flex">
                <p className="mt-1 text-[14px] text-black">1,800￥</p>
                <p className="text-[12px] mt-[5px] ml-2">2,200￥</p>
              </div>
            </div>
            <div className="badge flex gap-4 my-4">
              <span className="ring-2 rounded px-[3px] text-[12px]">원데이</span>
              <span className="ring-2 rounded px-[3px] text-[12px]"> 13.5mm</span>
              <span className="ring-2 rounded px-[3px] text-[12px]"> 수분70%</span>
              <span className="ring-2 rounded px-[3px] text-[12px]"> 실리콘</span>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-2 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/420x260"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">샌드</h3>
              <h2 className="text-gray-900 title-font text-[16px] font-medium">샌드 플러스 그레이</h2>
              <div className="flex">
                <p className="mt-1 text-[14px] text-black">1,800￥</p>
                <p className="text-[12px] mt-[5px] ml-2">2,200￥</p>
              </div>
            </div>
            <div className="badge flex gap-4 my-4">
              <span className="ring-2 rounded px-[3px] text-[12px]">원데이</span>
              <span className="ring-2 rounded px-[3px] text-[12px]"> 13.5mm</span>
              <span className="ring-2 rounded px-[3px] text-[12px]"> 수분70%</span>
              <span className="ring-2 rounded px-[3px] text-[12px]"> 실리콘</span>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-2 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/420x260"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">샌드</h3>
              <h2 className="text-gray-900 title-font text-[16px] font-medium">샌드 플러스 그레이</h2>
              <div className="flex">
                <p className="mt-1 text-[14px] text-black">1,800￥</p>
                <p className="text-[12px] mt-[5px] ml-2">2,200￥</p>
              </div>
            </div>
            <div className="badge flex gap-4 my-4">
              <span className="ring-2 rounded px-[3px] text-[12px]">원데이</span>
              <span className="ring-2 rounded px-[3px] text-[12px]"> 13.5mm</span>
              <span className="ring-2 rounded px-[3px] text-[12px]"> 수분70%</span>
              <span className="ring-2 rounded px-[3px] text-[12px]"> 실리콘</span>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-2 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/420x260"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">샌드</h3>
              <h2 className="text-gray-900 title-font text-[16px] font-medium">샌드 플러스 그레이</h2>
              <div className="flex">
                <p className="mt-1 text-[14px] text-black">1,800￥</p>
                <p className="text-[12px] mt-[5px] ml-2">2,200￥</p>
              </div>
            </div>
            <div className="badge flex gap-4 my-4">
              <span className="ring-2 rounded px-[3px] text-[12px]">원데이</span>
              <span className="ring-2 rounded px-[3px] text-[12px]"> 13.5mm</span>
              <span className="ring-2 rounded px-[3px] text-[12px]"> 수분70%</span>
              <span className="ring-2 rounded px-[3px] text-[12px]"> 실리콘</span>
            </div>
          </div>
        </div>
        <div className="xs:hidden ">
          <MobileProductRecommend />
        </div>
      </div>
    </section>
  )
}

export default ProductRecommend
