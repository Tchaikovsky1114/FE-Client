import React from 'react'
import { useRecoilState } from 'recoil'
import {
  durationState,
  graphicDiameterState,
  colorState,
  seriesState,
  featuresState
} from '../../../../store/filterVallue'

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

type contentTypes = {
  type: string
  value: string
  color: string
}

const MobileBoxLayout = ({ title, contents, px, py, w, h, gapX, gapY }: MobileBoxLayoutProps) => {
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
    <div>
      <div className="flex justify-between py-[12px] px-[15px]">
        <div className="font-bold text-[16px] text-lenssisDark">{title}</div>
        <div
          className={`flex ${gapX ? `gap-x-${gapX}` : 'gap-x-2'} ${
            gapY ? `gap-y-${gapY}` : 'gap-y-4'
          } w-[264px] flex-wrap`}
          style={{ columnGap: `${gapX ? `${gapX}` : '8px'}`, rowGap: `${gapY ? `${gapY}` : '8px'}` }}
        >
          {contents.map((content: string | number | any, index: number) => (
            <button
              key={index}
              className={`font-medium border-solid border-[1px] rounded-[20px] text-center text-[14px]  
              ${py ? `py-[${py}]` : 'py-[3px]'} ${px ? `px-[${px}]` : ''} ${w ? `w-[${w}]` : 'w-[60px]'} ${
                h ? `h-[${h}]` : 'h-[30px]'
              } ${duration === content.value ? 'bg-lenssisDark text-white' : 'text-lenssisDeepGray'} ${
                graphicDiameter.includes(content.value) ? 'bg-lenssisDark text-white' : 'text-lenssisDeepGray'
              } ${series.includes(content.value) ? 'bg-lenssisDark text-white' : 'text-lenssisDeepGray'} ${
                color.includes(content.color)
                  ? 'border-solid border-2 border-lenssisDark'
                  : 'border-lenssisStroke'
              } ${features.includes(content.value) ? 'bg-lenssisDark text-white' : 'text-lenssisDeepGray'}`}
              style={content.color && { backgroundColor: `${content.color}`, width: '25px' }}
              onClick={() => handleFilterValue(content)}
            >
              {content.color ? '' : content.name}
            </button>
          ))}
        </div>
      </div>
      <div className="divider h-[1px] bg-lenssisStroke xs-max:mb-0 w-[92%] mx-auto"></div>
    </div>
  )
}

export default MobileBoxLayout
