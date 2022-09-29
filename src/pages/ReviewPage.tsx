import React from 'react'
import PageLayout from '../components/common/ui/PageLayout'
import ReviewMobileBanner from '../components/review/mobile/ReviewMobileBanner'
import ReviewBanner from '../components/review/ReviewBanner'
import ReviewContainer from '../components/review/ReviewContainer'

const ReviewPage = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container pt-44 pb-10 mx-auto ">
          <div className="lg:w-full mx-auto flex-col flex-wrap shadow-basic drop-shadow-basic rounded-2xl p-8 xs-max:w-[95%]">
            <div className="text-center mt-2 mb-6 font-bold text-[20px]">리뷰</div>
            <div className="xs-max:hidden">
              <ReviewBanner />
            </div>
            <div className="xs:hidden">
              <ReviewMobileBanner />
            </div>
            <ReviewContainer />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ReviewPage
