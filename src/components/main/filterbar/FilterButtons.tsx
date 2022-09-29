import React from 'react'
import { useRecoilState } from 'recoil'
import {
  durationState,
  graphicDiameterState,
  colorState,
  seriesState,
  featuresState
} from '../../../store/filterVallue'

type MobileBoxLayoutProps = {
  title: string
  contents: string[] | number[] | any[]
  px?: string
  py?: string
  w?: string
  h?: string
  gapX?: number | string
  gapY?: number | string
}

export type contentTypes = {
  type: string
  value: string
  color: string
}

type filterButtonTypes = {
  contents: string[] | number[] | any[]
  px?: string
  py?: string
  w?: string
  h?: string
  gapX?: number | string
  gapY?: number | string
}

const FilterButtons = ({ contents, px, py, w, h, gapX, gapY }: filterButtonTypes) => {
  const [duration, setDuration] = useRecoilState(durationState)
  const [graphicDiameter, setGraphicDiameter] = useRecoilState(graphicDiameterState)
  const [color, setColor] = useRecoilState(colorState)
  const [series, setSeries] = useRecoilState(seriesState)
  const [features, setFeatures] = useRecoilState(featuresState)

  const handleFilterValue = (content: contentTypes) => {
    switch (content.type) {
      case 'duration':
        setDuration(content?.value)
        console.log(duration)
        break
      case 'graphicDiameter':
        setGraphicDiameter((prev) => {
          if (prev.includes(content?.value)) {
            return prev.filter((item) => item !== content?.value)
          } else {
            return [...prev, content?.value]
          }
        })
        console.log(graphicDiameter)
        break
      case 'color':
        setColor((prev) => {
          if (prev.includes(content?.color)) {
            return prev.filter((item) => item !== content?.color)
          } else {
            return [...prev, content?.color]
          }
        })
        console.log(color)
        break
      case 'series':
        setSeries((prev) => {
          if (prev.includes(content?.value)) {
            return prev.filter((item) => item !== content?.value)
          } else {
            return [...prev, content?.value]
          }
        })
        console.log(series)
        break
      case 'feature':
        setFeatures((prev) => {
          if (prev.includes(content?.value)) {
            return prev.filter((item) => item !== content?.value)
          } else {
            return [...prev, content?.value]
          }
        })
        console.log(features)
        break
      default:
        break
    }
  }
  return (
    <div
      className={`${contents[0].color && 'gap-x-8 gap-y-4'} border-box flex flex-wrap py-3 gap-2 text-[14px]`}
    >
      {contents.map((content: string | number | any, i: number) => (
        <button
          key={i}
          className={`
          ${w} ${h} ${px} ${py} ${gapX} ${gapY}
          justify-center
          flex font-medium border-solid box-border leading-7 border-[1px] rounded-[20px] text-center text-[14px]  
              ${duration === content.value ? 'bg-lenssisDark text-white' : 'text-lenssisDeepGray'} ${
            graphicDiameter.includes(content.value) ? 'bg-lenssisDark text-white' : 'text-lenssisDeepGray'
          } ${series.includes(content.value) ? 'bg-lenssisDark text-white' : 'text-lenssisDeepGray'} ${
            color.includes(content.color)
              ? 'border-solid box-border border-[2px] border-lenssisDark'
              : 'border-lenssisStroke border-[2px]'
          } ${features.includes(content.value) ? 'bg-lenssisDark text-white' : 'text-lenssisDeepGray'}`}
          style={
            content.color && {
              backgroundColor: `${content.color}`,
              width: '30px',
              height: '32px',
              boxSizing: 'border-box'
            }
          }
          onClick={() => handleFilterValue(content)}
        >
          {content.color ? '' : content.name}
        </button>
      ))}
    </div>
  )
}

export default FilterButtons
