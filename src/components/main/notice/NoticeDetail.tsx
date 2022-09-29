import React from 'react'
import { useNavigate } from 'react-router'
import CardTemplate from '../../common/ui/CardTemplate'
import PageLayout from './../../common/ui/PageLayout'

function NoticeDetail() {
  const content = "<p><div style={{fontSize: '30px'}}>많으 ㄴ내용</div></p>"
  const navigate = useNavigate()
  return (
    <>
      <PageLayout layoutWidth="w-[90%]" innerTop="top-[300px]">
        <CardTemplate title="공지사항" isTitleVisible={true}>
          <div className="w-[100%]">
            <div className="flex items-center py-8 border-t-[1px] border-solid">
              <div className="ml-10 mr-28">제목</div>
              <div className="text-[#5A5A5A]">{/* {title} */} 가장 많이 묻는 질문 3위</div>
            </div>
            <div className="flex items-center py-8 border-t-[1px] border-b-[1px] border-solid">
              <div className="ml-10 mr-24">작성자</div>
              <div className="text-[#5A5A5A]">{/* {author} */}렌시스 관리자</div>
            </div>
            <div className="flex justify-end items-center py-4">
              <span className="font-bold mr-2">작성일</span>
              <span className="text-[#5a5a5a] mr-6">2022.09.17{/* date */}</span>
              <span className="font-bold mr-2">조회수</span>
              <span className="text-[#5a5a5a]">245{/* clickCount */}</span>
            </div>
            <div className="border-b-[1px] border-solid pb-12">
              <div
                className="ml-4 border-2 border-solid w-[70%]"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
            <button
              className="w-[150px] h-[40px] my-4 font-[600] rounded-md border-none bg-[#1B304A] text-white"
              onClick={() => navigate(-1)}
            >
              목록
            </button>
          </div>
        </CardTemplate>
      </PageLayout>
    </>
  )
}

export default NoticeDetail
