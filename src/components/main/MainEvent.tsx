import React from 'react'
import { useNavigate } from 'react-router'
import ViewMoreBtn from './common/ViewMoreBtn'

// 지울 것
const events = [
  {
    id: 1,
    img: 'https://lenssis.jp/data/editor/2203/e3817c7f5762e0e9529ed6b00c90f2b2_1648004784_1526.jpg',
    content: '이벤트 내용'
  },
  {
    id: 2,
    img: 'https://lenssis.jp/data/editor/2203/e3817c7f5762e0e9529ed6b00c90f2b2_1648004793_108.jpg',
    content: '이벤트 내용'
  },
  {
    id: 3,
    img: 'https://lenssis.jp/data/editor/2203/e3817c7f5762e0e9529ed6b00c90f2b2_1648004808_0861.jpg',
    content: '이벤트 내용'
  },
  {
    id: 4,
    img: 'https://lenssis.jp/data/editor/2203/44422109c17730933970139952b48d7a_1647854561_93.jpg',
    content: '이벤트 내용'
  }
]

const MainEvent = () => {
  const navigate = useNavigate()

  return (
    <div className="py-2">
      <div className="flex justify-center items-center text-[24px] mt-[25px] mb-[30px] md:mb-[50px] ">
        <span className="border-b-[6px] border-solid border-[#1B304A] text-[18px] md:text-[24px] font-[600] hover:cursor-pointer">
          Event
        </span>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 justify-items-stretch gap-8 px-12">
        {events.map((event: any) => (
          <div
            key={event.id}
            className="w-full rounded-xl flex flex-col items-center my-2 shadow-basic hover:cursor-pointer"
            onClick={() => navigate('/event')}
          >
            <img className="w-full h-[226px] rounded-t-xl object-cover" src={event.img} alt="" />
            <div className=" h-[95px]  rounded-b-xl">
              {/* 이벤트 내용 */}
              {event.content}
            </div>
          </div>
        ))}
      </div>
      <ViewMoreBtn moveTo="/event" />
    </div>
  )
}

export default MainEvent
