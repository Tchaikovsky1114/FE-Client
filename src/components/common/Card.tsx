import React, { ReactNode, useEffect, useState } from 'react'
import CartAndHeart from './CartAndHeart'
import { SubtractIcon } from './util/Icon'
import { CardPropsType } from '../auth/types/productTypes'
import { useNavigate } from 'react-router-dom'

interface BeforeProps {
  productId?: string // 상품 id
  idx: number

  name?: string // 상품 타이틀
  diameter?: number
  series?: string[] // 상품 시리즈
  feature?: string[]
  id: string
  graphicDiameter: string[]
  price: number // 상품 가격
  discount: number // 할인률
  productImg: string[] // 상품 이미지
  duration: string
  colorCode?: string[] // 색상 코드

  isNew?: boolean // 새로운 상품 여부
}

const Card = ({
  name,
  idx,
  id,
  price,
  discount,
  colorCode,
  productImg,
  graphicDiameter,
  feature,
  duration
}: BeforeProps) => {
  const navigate = useNavigate()

  const [viewImg, setViewImg] = useState<string | undefined>(productImg[0])

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)

  const [commaPrice, setCommaPrice] = useState({
    price: '',
    discount: ''
  })

  const toComma = () => {
    const addCommaPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    let addCommaDiscount: string | number = (price * (1 - discount / 100)).toFixed(0)
    addCommaDiscount = addCommaDiscount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    setCommaPrice({ ...commaPrice, price: addCommaDiscount, discount: addCommaPrice })
  }

  const changeWindowWidth = () => {
    setWindowWidth(window.innerWidth)
  }

  const changeImageHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, idx: number) => {
    setViewImg(productImg?.find((_, imgIdx: number) => idx === imgIdx))
  }
  useEffect(() => {
    toComma()
  }, [])

  useEffect(() => {
    window.addEventListener('resize', changeWindowWidth)
  }, [])
  // 첫 번째 인덱스
  return (
    <>
      <div className={`relative w-[160px] md:w-[260px] my-[10px] mx-auto`}>
        {/* 순위 라벨/ 순위 라벨 값이 1일 때 ? 3일 때 ? : 아닐 때 */}
        {idx < 3 ? (
          <>
            <span className="absolute top-[4px] left-[4px] md:left-2 xl:w-4 xl:h-4">
              {windowWidth < 1020 ? (
                <>
                  <span className="absolute top-[4px] left-[6px] md:top-[3px] text-white text-[10px] font-bold  xl:font-bold ">
                    {idx + 1}
                  </span>
                  <SubtractIcon width={20} height={30} color="#1B304A" />
                </>
              ) : (
                <>
                  <span className="absolute top-[4px] left-[10px] text-white text-[14px] lg:font-bold  xl:font-bold ">
                    {idx + 1}
                  </span>
                  <SubtractIcon width={32} height={42} color="#1B304A" />
                </>
              )}
            </span>
          </>
        ) : (
          <></>
        )}

        <img
          onClick={() => navigate('/product/1')}
          src={viewImg}
          className="cursor-pointer rounded-md w-full h-[115px] mx-auto md:h-[185px]"
        />
        <div className="flex flex-col ">
          <div className="mt-[5px] mb-[4px] flex ">
            {colorCode?.map((eachColor: string, idx: number) => (
              <div
                className={`w-[15px] h-[15px] mr-[10px] md:w-[25px] md:h-[25px] md:mr-[15px] border-2 border-solid rounded-full`}
                style={{ backgroundColor: `${eachColor}` }}
                onMouseEnter={(e) => {
                  changeImageHandler(e, idx)
                }}
              ></div>
            ))}
          </div>

          <span className="hidden xs:block absolute top-[190px] right-0 ">
            <CartAndHeart />
          </span>
          <span className="xs:hidden block absolute top-[120px] right-0">
            <CartAndHeart />
          </span>
          <div className=" text-[12px] md:text-[14px]">{name}</div>
          <div className="flex justify-start items-center my-[5px]">
            <div className="mr-2 md:mr-4 font-[700] md:text-[14px]">{commaPrice.price}</div>
            <div className="text-[#7A7A7A] line-through text-[10px] md:text-[12px]">
              {commaPrice.discount}
            </div>
          </div>
          <div className="flex justify-start w-full overflow-hidden flex-wrap">
            {graphicDiameter.map((item: string) => (
              <div className="text-[10px] md:text-[14px] border-[1px] border-solid border-lenssisGray rounded-md  py-[2px] px-[6px] md:px-[12px] my-1 mr-[5px]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
// }

export default Card
