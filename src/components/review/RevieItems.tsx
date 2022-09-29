import React, { useState } from 'react'

const RevieItems = () => {
  const [isToggle, setIsToggle] = useState<boolean>(false)

  return (
    <section className="text-gray-600 body-font ">
      <div className="container py-4 mt-2 mx-auto ">
        <p
          className={`${
            isToggle ? 'bg-lenssisLightGray ' : ''
          } "lg:w-full flex-col flex-wrap p-8 cursor-pointer shadow-basic drop-shadow-basic" xs-max:p-4 rounded-[5px]`}
          onClick={() => setIsToggle(!isToggle)}
        >
          <div className="w-full">
            <div className="flex-col">
              <div className="flex w-full justify-between xs-max:hidden ">
                <div className="flex gap-2 xs-max:flex-col">
                  <div>★★★★★</div>
                  <div>아이디</div>
                </div>
                <div>2022.09.16</div>
              </div>
              <div className="xs:hidden mobile flex justify-between leading-5">
                <div className="flex flex-col gap-[5px]">
                  <div className="text-[16px]">★★★★★</div>
                  <div className="text-[12px]">아이디</div>
                  <h2 className="text-gray-900 text-lg title-font font-medium text-[16px]">
                    샌드 플러스 그레이
                  </h2>
                  <div className="text-[14px]">2022.09.16</div>
                </div>
                <div>
                  <img
                    src="https://lenssis.jp/data/item/0134576790/67CA7YKk67iU656Z_1month_7IOB7IS4.jpg"
                    width="100px"
                    height="100px"
                  />
                </div>
              </div>
              <div className={`${isToggle ? 'block' : 'flex justify-between gap-2'} w-full mt-4`}>
                <div className="w-[90%] xs-max:w-full">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-1 xs-max:hidden">
                    샌드 플러스 그레이
                  </h2>
                  <p className="leading-relaxed text-base flex-wrap xs-max:text-[13px] ">
                    컬러 렌즈를 처음 기로한 지 8년 정도 지났는데, 그 8년간 가장 마음에 들어서 재구매 하고
                    있습니다. 칙칙한 브라운 같은 회색 같은 절묘한 색상에 가장자리가 자연스러운 투명감을
                    줍니다. 자연스려운 색에도 익숙하고 피부톤이 밝은 사람에게도 어두운 헤어컬러의 사람에게도
                    추천합니다 ^-^
                  </p>
                </div>
                <div className={`${isToggle ? 'mt-4' : 'flex-shrink-0 my-auto'} xs-max:hidden`}>
                  <img
                    src="https://lenssis.jp/data/item/0134576790/67CA7YKk67iU656Z_1month_7IOB7IS4.jpg"
                    width={`${isToggle ? '275px' : '100px'}`}
                    height={`${isToggle ? '275px' : '100px'}`}
                  />
                </div>
                {isToggle && (
                  <div className="bg-lenssisDeepSky rounded-[5px] mt-4 px-4 py-6 text-white">
                    <div className="flex justify-between border-solid border-b-[1px] pb-1 ">
                      <div>랜시스 댓글</div>
                      <div>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M8 0V16" stroke="white" stroke-width="2" />
                          <path d="M16 8L2.5332e-07 8" stroke="white" stroke-width="2" />
                        </svg>
                      </div>
                    </div>
                    <div className="py-2">
                      구매해주셔서 감사합니다 고객님 :) <br />
                      랜시스 렌즈에 앞으로도 많은 관심 부탁드려요!
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div></div>
        </p>
      </div>
    </section>
  )
}

export default RevieItems
