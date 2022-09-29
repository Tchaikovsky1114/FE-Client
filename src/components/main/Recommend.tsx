import React from 'react'

import RecommendBanner from './recommend/RecommendBanner'

const Recommend = () => {
  return (
    <div className="py-2">
      <div className="flex justify-center items-center text-[24px] mt-[25px] mb-[30px] md:mb-[50px] ">
        <span className="border-b-[6px] border-solid border-[#1B304A] text-[18px] md:text-[24px] font-[600] hover:cursor-pointer">
          Recommend
        </span>
      </div>
      <RecommendBanner />
    </div>
  )
}

export default Recommend
