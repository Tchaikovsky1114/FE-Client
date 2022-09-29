import React from 'react'
import CardTemplate from './common/ui/CardTemplate'
import PageLayout from './common/ui/PageLayout'
import { useGetDetailEvent } from './main/hooks/useEventLists'

function EventDetail() {
  // const detailEvent = useGetDetailEvent()
  return (
    <PageLayout layoutWidth="[90%]" innerTop="top-[40%]">
      <CardTemplate title="이벤트" isTitleVisible={true}>
        <div></div>
      </CardTemplate>
    </PageLayout>
  )
}

export default EventDetail
