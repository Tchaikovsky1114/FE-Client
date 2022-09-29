import { useNavigate } from 'react-router'
import PageLayout from '../components/common/ui/PageLayout'
import CardTemplate from './../components/common/ui/CardTemplate'
import { EventResponseType, useGetDetailEvent, useGetEvent } from '../components/main/hooks/useEventLists'
import { useEffect, useState } from 'react'
import Pagination from './../components/main/common/Pagination'
import Search from '../components/main/common/Search'

// 지울 것
const events = [
  {
    id: '1',
    mainImg: 'https://lenssis.jp/data/editor/2203/e3817c7f5762e0e9529ed6b00c90f2b2_1648004784_1526.jpg',
    description: '이벤트 내용'
  },
  {
    id: '2',
    mainImg: 'https://lenssis.jp/data/editor/2203/e3817c7f5762e0e9529ed6b00c90f2b2_1648004793_108.jpg',
    description: '이벤트 내용'
  },
  {
    id: '3',
    mainImg: 'https://lenssis.jp/data/editor/2203/e3817c7f5762e0e9529ed6b00c90f2b2_1648004808_0861.jpg',
    description: '이벤트 내용'
  },
  {
    id: '4',
    mainImg: 'https://lenssis.jp/data/editor/2203/44422109c17730933970139952b48d7a_1647854561_93.jpg',
    description: '이벤트 내용'
  },
  {
    id: '5',
    mainImg: 'https://lenssis.jp/data/editor/2203/44422109c17730933970139952b48d7a_1647854567_1883.jpg',
    description: '이벤트 내용'
  }
]

interface EventItem {
  id: string
  title?: string
  description?: string
  startTime?: string
  endTime?: string
  mainImg?: string
  descImg?: string[]
}

function EventPage() {
  const navigate = useNavigate()
  const [eventId, setEventId] = useState<string>('')
  const [currentPage, setCurrentPage] = useState(1)

  const onClickEvent = (id: string) => {
    setEventId(id)
    navigate(`/event/${id}`)
  }
  console.log(eventId)
  if (eventId) {
    const event = useGetDetailEvent(eventId)
  }
  const eventList = useGetEvent(currentPage)
  console.log(eventList)

  useEffect(() => {
    setEventId('')
  }, [])
  return (
    <>
      <PageLayout layoutWidth="[90%]" innerTop="top-[40%]">
        <CardTemplate title="이벤트" isTitleVisible={true}>
          <div className=" grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 justify-items-stretch gap-8 px-12">
            {/* eventList.map */}
            {events.map((event: EventItem) => (
              <div
                key={event.id}
                className="w-full rounded-xl flex flex-col items-center my-2 shadow-basic hover:cursor-pointer"
                onClick={() => onClickEvent(event.id)}
              >
                <img className="w-full h-[226px] rounded-t-xl object-cover" src={event.mainImg} alt="" />
                <div className=" h-[95px]  rounded-b-xl">
                  {/* 이벤트 내용 */}
                  {event.description}
                </div>
              </div>
            ))}
          </div>
          <div className="relative flex justify-center items-center">
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} allCount={50} />
            <Search />
          </div>
        </CardTemplate>
      </PageLayout>
    </>
  )
}

export default EventPage
