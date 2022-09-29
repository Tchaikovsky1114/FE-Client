import React from 'react'
import MobileBoxLayout from '../common/MobileBoxLayout'
import { graphicDiameter, series, features, duration, colors } from '../../../../constants/filterData'
import Refresh from '../../../../../public/assets/Refresh.svg'
import {
  durationState,
  graphicDiameterState,
  colorState,
  seriesState,
  featuresState
} from '../../../../store/filterVallue'
import { useResetRecoilState } from 'recoil'

const MobileFilter = () => {
  const resetDuration = useResetRecoilState(durationState)
  const resetGraphicDiameter = useResetRecoilState(graphicDiameterState)
  const resetColor = useResetRecoilState(colorState)
  const resetSeries = useResetRecoilState(seriesState)
  const resetfeatures = useResetRecoilState(featuresState)

  const refreshHandler = () => {
    resetDuration()
    resetGraphicDiameter()
    resetColor()
    resetSeries()
    resetfeatures()
  }
  return (
    <div className="bg-[#fff]">
      <MobileBoxLayout title="사용기간" contents={duration} py={'3px'} w={'80px'} />
      <MobileBoxLayout title="그래픽 직경" contents={graphicDiameter} px={'17px'} py={'3px'} w={'60px'} />
      <MobileBoxLayout title="시리즈" contents={series} px={'17px'} py={'3px'} w={'80px'} />
      <MobileBoxLayout title="색상" contents={colors} w={'25px'} h={'25px'} gapX={'40px'} gapY={'12px'} />
      <MobileBoxLayout title="특징" contents={features} w={'80px'} py={'3px'} px={'8px'} />
      <div className="flex justify-around p-4">
        <button className="w-[290px] h-[40px] text-center bg-lenssisDark text-white rounded-[5px] font-semibold">
          적용하기
        </button>
        <div className="flex justify-center items-center">
          <img className="cursor-pointer" src={Refresh} onClick={refreshHandler} />
        </div>
      </div>
    </div>
  )
}

export default MobileFilter
