import React, { useState } from 'react'
import Card from '../common/Card'
import { Item, CardContainerPropsType } from '../auth/types/productTypes'
import Pagination from './common/Pagination'

interface BeforeItem {
  productId: string // 상품 id
  idx: number
  name: string // 상품 타이틀
  diameter: number
  series: string[] // 상품 시리즈
  feature: string[]
  details: {
    graphicDiameter: string[]
    price: number // 상품 가격
    discount: number // 할인률
    product_details_image_url: string[] // 상품 이미지
    duration: string
    color_code?: string[] // 색상 코드
  }
  isNew?: boolean // 새로운 상품 여부
}

// Pagination 부분 수정해야 함

const CardContainer = ({ data, productLists }: CardContainerPropsType) => {
  const [allData, setAllData] = useState(productLists?.length)
  const [allProductCurrentPage, setAllProductCurrentPage] = useState(1)
  const [newProductCurrentPage, setNewProductCurrentPage] = useState(1)
  console.log(allData)
  return (
    <>
      {data === 'New' ? (
        <>
          <div className="flex justify-center">
            <span className="text-center font-[600] text-[18px] md:text-[24px] mt-[25px] mb-[30px] md:mb-[50px] border-b-[6px] border-solid border-[#1B304A]">
              {data}
            </span>
          </div>
          <div className="grid grid-cols-2 justify-items-center xl:grid-cols-4 w-[95%] mx-auto"></div>
          <Pagination
            currentPage={newProductCurrentPage}
            setCurrentPage={setNewProductCurrentPage}
            allCount={12}
          />
        </>
      ) : (
        data === 'Best' && (
          <>
            <div className="flex justify-center">
              <span className="py-2 text-center font-[600] text-[18px] md:text-[24px] mt-[25px] mb-[30px] md:mb-[50px] border-b-[6px] border-solid border-[#1B304A]">
                {data}
              </span>
            </div>
            <div className="grid grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 w-[95%] mx-auto gap-x-[20px]">
              {productLists &&
                productLists.map((item: BeforeItem, idx: number) => (
                  <Card
                    key={item.productId}
                    idx={idx}
                    id={item.productId}
                    name={item.name}
                    series={item.series}
                    price={item.details.price}
                    feature={item.feature}
                    discount={item.details.discount}
                    diameter={item.diameter}
                    colorCode={item.details.color_code}
                    productImg={item.details.product_details_image_url}
                    graphicDiameter={item.details.graphicDiameter}
                    duration={item.details.duration}
                  />
                ))}
            </div>
            <Pagination
              currentPage={allProductCurrentPage}
              setCurrentPage={setAllProductCurrentPage}
              allCount={10}
            />
          </>
        )
      )}
    </>
  )
}

export default CardContainer
