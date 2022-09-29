import React from 'react'
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil'
import { graphicDiameter, colors, series, features } from '../../../constants/filterData'
import {
  durationState,
  graphicDiameterState,
  colorState,
  seriesState,
  featuresState
} from '../../../store/filterVallue'
import BoxLayout from './common/BoxLayout'
import FilterButtons from './FilterButtons'
import Refresh from '../../../../public/assets/Refresh.svg'

const FilterBar = () => {
  const resetDuration = useResetRecoilState(durationState)
  const resetGraphicDiameter = useResetRecoilState(graphicDiameterState)
  const resetColor = useResetRecoilState(colorState)
  const resetSeries = useResetRecoilState(seriesState)
  const resetfeatures = useResetRecoilState(featuresState)
  const [duration, setDuration] = useRecoilState(durationState)

  const handleFilterValue = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setDuration(e.currentTarget.value)
    console.log(duration)
  }

  const refreshHandler = () => {
    resetDuration()
    resetGraphicDiameter()
    resetColor()
    resetSeries()
    resetfeatures()
  }

  return (
    <div className="bg-[#fff] rounded-[10px] h-[1180px] w-[280px] px-[18px] py-[20px] shadow-basic">
      <div className="filter-title">
        <div className="flex justify-between px-[15px] py-[20px]">
          <div className="font-extrabold text-[20px]">Filter</div>
          <img className="cursor-pointer" onClick={refreshHandler} src={Refresh} />
        </div>
      </div>
      <div>
        <BoxLayout title="사용기간">
          <div className="flex flex-col py-3 gap-2 text-lenssisDeepGray">
            <button
              onClick={handleFilterValue}
              value="all"
              className={`${
                duration === 'all' ? 'bg-lenssisDark text-white' : ''
              } border-solid border-[#D3D3D3] border-[1px] rounded-[28px] text-center py-1 `}
            >
              상품 전체
            </button>
            <div className="flex justify-between gap-2">
              <button
                onClick={handleFilterValue}
                value="monthly"
                className={`${
                  duration === 'monthly' ? 'bg-lenssisDark text-white' : ''
                } cursor-pointer flex-1 border-solid border-[#D3D3D3] border-[1px] rounded-[28px] text-center py-1`}
              >
                먼슬리
              </button>
              <button
                onClick={handleFilterValue}
                value="oneDay"
                className={`${
                  duration === 'oneDay' ? 'bg-lenssisDark text-white' : ''
                } cursor-pointer flex-1 border-solid border-[#D3D3D3] border-[1px] rounded-[28px] text-center py-1`}
              >
                원데이
              </button>
            </div>
          </div>
        </BoxLayout>
      </div>
      <div>
        <BoxLayout title="그래픽 직경">
          <FilterButtons
            contents={graphicDiameter}
            w={'w-[55px]'}
            h={'h-[30px]'}
            py={'py-[1px]'}
            px={'px-[14px]'}
          />
        </BoxLayout>
      </div>
      <div>
        <BoxLayout title="색상">
          <FilterButtons contents={colors} w={'w-[55px]'} h={'h-[30px]'} py={'py-[3px]'} px={'px-[14px]'} />
        </BoxLayout>
      </div>
      <div>
        <BoxLayout title="시리즈">
          <FilterButtons contents={series} w={'w-[110px]'} h={'h-[35px]'} py={'py-[3px]'} px={'px-[17px]'} />
        </BoxLayout>
      </div>
      <div>
        <BoxLayout title="특징">
          <FilterButtons
            contents={features}
            w={'w-[110px]'}
            h={'h-[35px]'}
            py={'py-[3px]'}
            px={'px-[17px]'}
          />
        </BoxLayout>
      </div>
    </div>
  )
}

export default FilterBar
