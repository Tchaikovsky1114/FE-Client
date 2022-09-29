import React from 'react'
import RevieItems from './RevieItems'

const ReviewContainer = () => {
  return (
    <div className="pt-10 pb-4 xs-max:pt-4">
      <div className="flex justify-between xs-max:flex-col">
        <select
          name="상품명"
          id=""
          className="border-slid border-2 w-[245px] h-[40px] mb-6 rounded-[5px] px-[10px]"
        >
          <option value="샌드플러스 그레이">샌드플러스그레이</option>
        </select>
        <p className="">60개의 리뷰</p>
        <div className="xs:hidden divider h-[1px] bg-[#dadada] my-2"></div>
      </div>
      <section className="text-gray-600 body-font bg-[]">
        <div className="container px-4 mx-auto flex-wrap">
          <div className="-m-4">
            <RevieItems />
            <RevieItems />
            <RevieItems />
            <RevieItems />
            <RevieItems />
            <RevieItems />
            <RevieItems />
            <RevieItems />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ReviewContainer
