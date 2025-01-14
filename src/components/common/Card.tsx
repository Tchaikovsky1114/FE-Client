import React, { ReactNode, useCallback, useEffect, useState } from 'react'
import CartAndHeart from './CartAndHeart'
import { SubtractIcon } from './util/Icon'
import { useNavigate } from 'react-router-dom'

interface PropsType {
  productId?: string // 상품 id
  idx: number
  name?: string // 상품 타이틀
  diameter?: number
  series?: string[] // 상품 시리즈
  id: string
  graphicDiameter: number[]
  price: number // 상품 가격
  discount: number // 할인률
  productImg: string[] // 상품 이미지
  colorCode?: string[] // 색상 코드
  isNew?: boolean // 새로운 상품 여부
}

const Card = ({ name, idx, id, price, discount, colorCode, productImg, graphicDiameter }: PropsType) => {
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

  const changeImageHandler = (_: React.MouseEvent<HTMLDivElement, MouseEvent>, idx: number) => {
    setViewImg(productImg[idx])
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
      <div className={`relative w-[160px] md:w-[260px] my-[10px] mx-auto px-1`}>
        {/* 순위 라벨/ 순위 라벨 값이 1일 때 ? 3일 때 ? : 아닐 때 */}
        {idx < 3 ? (
          <>
            <span className="absolute top-[1px] left-[4px] md:left-2 xl:w-4 xl:h-4">
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
          className="cursor-pointer rounded-md w-[160px] md:w-full h-[115px] mx-auto md:h-[185px]"
        />
        <div className="flex flex-col ">
          <div className="mt-[5px] mb-[4px] flex ">
            {colorCode?.map((eachColor: string, idx: number) => (
              <div
                key={idx}
                className={`w-[15px] h-[15px] mr-[10px] md:w-[25px] md:h-[25px] md:mr-[15px] rounded-full`}
                style={{ backgroundColor: `${eachColor}` }}
                onMouseEnter={(e) => {
                  changeImageHandler(e, idx)
                }}
              ></div>
            ))}
          </div>

          <span className="hidden xs:block absolute top-[190px] right-1 ">
            <CartAndHeart />
          </span>
          <span className="xs:hidden block absolute top-[120px] right-1">
            <CartAndHeart />
          </span>
          <div className=" text-[12px] md:text-[14px]">{name}</div>
          <div className="flex justify-start items-center my-[5px]">
            <div className="mr-2 md:mr-4 font-[700] text-[14px] text-lenssisDeepGray md:text-[16px]">
              {commaPrice.price}円
            </div>
            <div className="text-lenssisGray line-through font-[700] text-[12px] md:text-[14px]">
              {commaPrice.discount}円
            </div>
          </div>
          <div className="flex justify-start w-full overflow-hidden flex-wrap">
            {graphicDiameter.map((item: number, idx: number) => (
              <div
                key={`${item}-${idx}`}
                className="text-[10px] md:text-[14px] border-[1px] border-solid border-lenssisBadge text-lenssisBadge rounded-md  py-[2px] px-[6px] md:px-[12px] my-1 mr-[5px]"
              >
                {item.toFixed(1)}
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
