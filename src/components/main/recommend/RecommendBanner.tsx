import React, { useEffect, useRef, useState } from 'react'
import SwiperCore, { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper'
import { SwiperSlide, Swiper } from 'swiper/react'

import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'

interface Item {
  id: string // 상품 id
  title: string // 상품 타이틀
  rank?: string // 상품 순위
  series: string // 상품 시리즈
  price: string // 상품 가격
  tag?: string[] // 상품 밑 태그
  discount?: string // 할인률
  img?: string // 상품 이미지
  imgHeight?: number
  isNew?: boolean // 새로운 상품 여부
  color?: string[] // 색상 코드
  width?: number // 카드의 너비값
  height?: number // 카드의 높이값
}

const items = [
  {
    id: '1',
    title: '샌드 플러스 그레이',
    rank: '1',
    series: '샌드',
    price: '1000円',
    tag: ['uv차단', '13.5', '인기상품', '추천상품'],
    discount: '800円',
    img: 'https://lenssis.jp/data/item/6970799150/66Oo7Iuc7JWE6re466CI7J20_66qo64247Lu3.jpg',
    isNew: true
  },
  {
    id: '2',
    title: '샌드 플러스 그레이',
    rank: '2',
    series: '샌드',
    price: '1000円',
    tag: ['uv차단', '13.5', '인기상품', '추천상품'],
    discount: '800円',
    img: 'https://lenssis.jp/data/item/6970799150/66Oo7Iuc7JWE6re466CI7J20_66qo64247Lu3.jpg',
    isNew: true
  },
  {
    id: '3',
    title: '샌드 플러스 그레이',
    rank: '3',
    series: '샌드',
    price: '1000円',
    tag: ['uv차단', '13.5', '인기상품', '추천상품'],
    discount: '800円',
    img: 'https://lenssis.jp/data/item/6970799150/66Oo7Iuc7JWE6re466CI7J20_66qo64247Lu3.jpg',
    isNew: true
  },
  {
    id: '4',
    title: '샌드 플러스 그레이',
    rank: '0',
    series: '샌드',
    price: '1000円',
    tag: ['uv차단', '13.5', '인기상품', '추천상품'],
    discount: '800円',
    img: 'https://lenssis.jp/data/item/6970799150/66Oo7Iuc7JWE6re466CI7J20_66qo64247Lu3.jpg',
    isNew: true
  }
]

function RecommendBanner() {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)
  const [swiperSetting, setSwiperSetting] = useState<Swiper | null>(null)
  const changeWindowWidth = () => {
    setWindowWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', changeWindowWidth)
  }, [])

  SwiperCore.use([Navigation, Pagination, Autoplay])
  useEffect(() => {
    if (!swiperSetting) {
      setSwiperSetting({
        spaceBetween: 10,
        navigation: {
          prevEl: prevRef.current,
          nextEl: nextRef.current
        },
        scrollbar: { draggable: true },
        pagination: { clickable: true },
        slidesPerView: 1,
        loop: true,
        autoplay: { delay: 2000, disableOnInteraction: true },
        watchOverflow: true,
        onBeforeInit: (swiper) => {
          if (typeof swiper.params.navigation !== 'boolean') {
            if (swiper.params.navigation) {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
            }
          }
          swiper.navigation.update()
        }
      })
    }
  }, [swiperSetting])
  if (windowWidth >= 1536) {
    return (
      <div className="w-[90%] mx-auto px-14 relative">
        <button ref={prevRef} className="absolute top-[45%] left-[-30px] z-[2] hover:color-white">
          <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="18"
              cy="17.5"
              r="17.1874"
              transform="rotate(-180 18 17.5)"
              fill="white"
              fillOpacity="0.5"
              stroke="#1B304A"
              strokeWidth="0.625141"
            />
            <path
              d="M22.5 25L13.5 17.5L22.5 10"
              stroke="#1B304A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {swiperSetting && (
          <Swiper
            {...swiperSetting}
            slidesPerView={'auto'}
            style={{ borderRadius: '15px', padding: '20px 0' }}
          >
            {items.map((item: Item, index: number) => (
              <div key={index}>
                <SwiperSlide
                  key={index}
                  style={{
                    width: '260px',
                    borderRadius: '15px',
                    padding: '6px',
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                    margin: '0 auto'
                  }}
                >
                  <>
                    <img
                      src={item.img}
                      alt=""
                      style={{
                        width: '230px',
                        margin: '0 auto',
                        height: '300px',
                        borderRadius: '15px'
                      }}
                    />
                    <span className="absolute bottom-[112px] right-[14px]">
                      <svg
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M25 0L29.8658 6.8406L37.5 3.34937L38.2936 11.7064L46.6506 12.5L43.1594 20.1342L50 25L43.1594 29.8658L46.6506 37.5L38.2936 38.2936L37.5 46.6506L29.8658 43.1594L25 50L20.1342 43.1594L12.5 46.6506L11.7064 38.2936L3.34937 37.5L6.8406 29.8658L0 25L6.8406 20.1342L3.34937 12.5L11.7064 11.7064L12.5 3.34937L20.1342 6.8406L25 0Z"
                          fill="#FFDF5D"
                        />
                        <path
                          d="M18.6213 20.2727V29H16.8315L13.3585 23.9631H13.3031V29H11.1937V20.2727H13.0091L16.4437 25.3011H16.5162V20.2727H18.6213ZM19.9476 29V20.2727H26.0328V21.9858H22.057V23.7756H25.7218V25.4929H22.057V27.2869H26.0328V29H19.9476ZM29.4462 29L26.9064 20.2727H29.2374L30.5542 25.9915H30.6266L32.1309 20.2727H34.0314L35.5357 26.0043H35.6081L36.9292 20.2727H39.2559L36.7203 29H34.6877L33.1152 23.7074H33.0471L31.4746 29H29.4462Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <div className=" flex flex-col ml-2 relative">
                      <div className="text-[11px] xl:text-[12px] text-[#7A7A7A] mt-[10px] mb-[4px] flex">
                        <div className="">{item.series}</div>
                      </div>
                      <div className=" text-[12px] xl:text-[14px]">{item.title}</div>
                      <div className="flex justify-start items-center mt-[10px] mb-[18px] font-semibold">
                        <div className="xl:mr-4 font-bold">{item.price}</div>
                        <div className="text-[#7A7A7A] line-through text-[12px]">{item.discount}</div>
                      </div>
                    </div>
                  </>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        )}
        <button ref={nextRef} className="absolute top-[45%] right-[-30px] z-[1] hover:color-white">
          <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle
              r="17.1874"
              transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 18 17.5)"
              fill="white"
              fillOpacity="0.5"
              stroke="#1B304A"
              strokeWidth="0.625141"
            />
            <path
              d="M13.5 25L22.5 17.5L13.5 10"
              stroke="#1B304A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    )
  } else if (windowWidth >= 1280) {
    const swiperSetting = {
      spaceBetween: 10,
      navigation: {
        prevEl: prevRef.current,
        nextEl: nextRef.current
      },
      slidesPerView: 4,
      loop: true,
      autoplay: { delay: 2000, disableOnInteraction: true }
    }
    return (
      <div className="w-[90%] mx-auto px-14 relative">
        <button ref={prevRef} className="absolute top-[45%] left-[-30px] z-[2] hover:color-white">
          <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="18"
              cy="17.5"
              r="17.1874"
              transform="rotate(-180 18 17.5)"
              fill="white"
              fillOpacity="0.5"
              stroke="#1B304A"
              strokeWidth="0.625141"
            />
            <path
              d="M22.5 25L13.5 17.5L22.5 10"
              stroke="#1B304A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {swiperSetting && (
          <Swiper {...swiperSetting} style={{ borderRadius: '15px', padding: '20px 0' }}>
            {items.map((item: Item, index: number) => (
              <div key={index}>
                <SwiperSlide
                  key={index}
                  style={{
                    width: '240px',
                    borderRadius: '15px',
                    padding: '6px',
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                    margin: '0 auto'
                  }}
                >
                  <>
                    <img
                      src={item.img}
                      alt=""
                      style={{
                        width: '230px',
                        margin: '0 auto',
                        height: '300px',
                        borderRadius: '15px'
                      }}
                    />
                    <span className="absolute bottom-[112px] right-[12px]">
                      <svg
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M25 0L29.8658 6.8406L37.5 3.34937L38.2936 11.7064L46.6506 12.5L43.1594 20.1342L50 25L43.1594 29.8658L46.6506 37.5L38.2936 38.2936L37.5 46.6506L29.8658 43.1594L25 50L20.1342 43.1594L12.5 46.6506L11.7064 38.2936L3.34937 37.5L6.8406 29.8658L0 25L6.8406 20.1342L3.34937 12.5L11.7064 11.7064L12.5 3.34937L20.1342 6.8406L25 0Z"
                          fill="#FFDF5D"
                        />
                        <path
                          d="M18.6213 20.2727V29H16.8315L13.3585 23.9631H13.3031V29H11.1937V20.2727H13.0091L16.4437 25.3011H16.5162V20.2727H18.6213ZM19.9476 29V20.2727H26.0328V21.9858H22.057V23.7756H25.7218V25.4929H22.057V27.2869H26.0328V29H19.9476ZM29.4462 29L26.9064 20.2727H29.2374L30.5542 25.9915H30.6266L32.1309 20.2727H34.0314L35.5357 26.0043H35.6081L36.9292 20.2727H39.2559L36.7203 29H34.6877L33.1152 23.7074H33.0471L31.4746 29H29.4462Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <div className=" flex flex-col ml-2 relative">
                      <div className="text-[11px] xl:text-[12px] text-[#7A7A7A] mt-[10px] mb-[4px] flex">
                        <div className="">{item.series}</div>
                      </div>
                      <div className=" text-[12px] xl:text-[14px]">{item.title}</div>
                      <div className="flex justify-start items-center mt-[10px] mb-[18px] font-semibold">
                        <div className="xl:mr-4 font-bold">{item.price}</div>
                        <div className="text-[#7A7A7A] line-through text-[12px]">{item.discount}</div>
                      </div>
                    </div>
                  </>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        )}
        <button ref={nextRef} className="absolute top-[45%] right-[-30px] z-[1] hover:color-white">
          <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle
              r="17.1874"
              transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 18 17.5)"
              fill="white"
              fillOpacity="0.5"
              stroke="#1B304A"
              strokeWidth="0.625141"
            />
            <path
              d="M13.5 25L22.5 17.5L13.5 10"
              stroke="#1B304A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    )
  } else if (windowWidth >= 1024) {
    const swiperSetting = {
      spaceBetween: 10,
      navigation: {
        prevEl: prevRef.current,
        nextEl: nextRef.current
      },
      slidesPerView: 3,
      loop: true
    }
    return (
      <div className="w-[92%] mx-auto px-8 relative">
        <button ref={prevRef} className="absolute top-[45%] left-[-30px] z-[2] hover:color-white">
          <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="18"
              cy="17.5"
              r="17.1874"
              transform="rotate(-180 18 17.5)"
              fill="white"
              fillOpacity="0.5"
              stroke="#1B304A"
              strokeWidth="0.625141"
            />
            <path
              d="M22.5 25L13.5 17.5L22.5 10"
              stroke="#1B304A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {swiperSetting && (
          <Swiper {...swiperSetting} style={{ borderRadius: '15px', padding: '20px 0' }}>
            {items.map((item: Item, index: number) => (
              <div key={index}>
                <SwiperSlide
                  key={index}
                  style={{
                    width: '240px',
                    borderRadius: '15px',
                    padding: '4px',
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                    margin: '0 auto'
                  }}
                >
                  <>
                    <img
                      src={item.img}
                      alt=""
                      style={{
                        width: '240px',
                        margin: '0 auto',
                        height: '300px',
                        borderRadius: '15px'
                      }}
                    />
                    <span className="absolute bottom-[110px] right-[22px]">
                      <svg
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M25 0L29.8658 6.8406L37.5 3.34937L38.2936 11.7064L46.6506 12.5L43.1594 20.1342L50 25L43.1594 29.8658L46.6506 37.5L38.2936 38.2936L37.5 46.6506L29.8658 43.1594L25 50L20.1342 43.1594L12.5 46.6506L11.7064 38.2936L3.34937 37.5L6.8406 29.8658L0 25L6.8406 20.1342L3.34937 12.5L11.7064 11.7064L12.5 3.34937L20.1342 6.8406L25 0Z"
                          fill="#FFDF5D"
                        />
                        <path
                          d="M18.6213 20.2727V29H16.8315L13.3585 23.9631H13.3031V29H11.1937V20.2727H13.0091L16.4437 25.3011H16.5162V20.2727H18.6213ZM19.9476 29V20.2727H26.0328V21.9858H22.057V23.7756H25.7218V25.4929H22.057V27.2869H26.0328V29H19.9476ZM29.4462 29L26.9064 20.2727H29.2374L30.5542 25.9915H30.6266L32.1309 20.2727H34.0314L35.5357 26.0043H35.6081L36.9292 20.2727H39.2559L36.7203 29H34.6877L33.1152 23.7074H33.0471L31.4746 29H29.4462Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <div className=" flex flex-col ml-6 relative">
                      <div className="text-[11px] xl:text-[12px] text-[#7A7A7A] mt-[10px] mb-[4px] flex">
                        <div className="">{item.series}</div>
                      </div>
                      <div className=" text-[12px] xl:text-[14px]">{item.title}</div>
                      <div className="flex justify-start items-center mt-[10px] mb-[18px] font-semibold">
                        <div className="xl:mr-4 font-bold">{item.price}</div>
                        <div className="text-[#7A7A7A] line-through text-[12px]">{item.discount}</div>
                      </div>
                    </div>
                  </>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        )}
        <button ref={nextRef} className="absolute top-[45%] right-[-30px] z-[1] hover:color-white">
          <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle
              r="17.1874"
              transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 18 17.5)"
              fill="white"
              fillOpacity="0.5"
              stroke="#1B304A"
              strokeWidth="0.625141"
            />
            <path
              d="M13.5 25L22.5 17.5L13.5 10"
              stroke="#1B304A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    )
  } else if (windowWidth >= 768) {
    const swiperSetting = {
      spaceBetween: 50,
      navigation: {
        prevEl: prevRef.current,
        nextEl: nextRef.current
      },
      slidesPerView: 2,
      loop: true,
      autoplay: { delay: 2000, disableOnInteraction: true }
    }
    return (
      <div className="w-[92%] mx-auto px-4 relative">
        <button ref={prevRef} className="absolute top-[45%] left-[-30px] z-[2] hover:color-white">
          <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="18"
              cy="17.5"
              r="17.1874"
              transform="rotate(-180 18 17.5)"
              fill="white"
              fillOpacity="0.5"
              stroke="#1B304A"
              strokeWidth="0.625141"
            />
            <path
              d="M22.5 25L13.5 17.5L22.5 10"
              stroke="#1B304A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {swiperSetting && (
          <Swiper {...swiperSetting} style={{ borderRadius: '15px', padding: '20px 0' }}>
            {items.map((item: Item, index: number) => (
              <div key={index}>
                <SwiperSlide
                  key={index}
                  style={{
                    width: '240px',
                    borderRadius: '15px',
                    padding: '4px',
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                    margin: '0 auto'
                  }}
                >
                  <>
                    <img
                      src={item.img}
                      alt=""
                      style={{
                        width: '260px',
                        margin: '0 auto',
                        height: '300px',
                        borderRadius: '15px'
                      }}
                    />
                    <span className="absolute bottom-[106px] right-[26px]">
                      <svg
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M25 0L29.8658 6.8406L37.5 3.34937L38.2936 11.7064L46.6506 12.5L43.1594 20.1342L50 25L43.1594 29.8658L46.6506 37.5L38.2936 38.2936L37.5 46.6506L29.8658 43.1594L25 50L20.1342 43.1594L12.5 46.6506L11.7064 38.2936L3.34937 37.5L6.8406 29.8658L0 25L6.8406 20.1342L3.34937 12.5L11.7064 11.7064L12.5 3.34937L20.1342 6.8406L25 0Z"
                          fill="#FFDF5D"
                        />
                        <path
                          d="M18.6213 20.2727V29H16.8315L13.3585 23.9631H13.3031V29H11.1937V20.2727H13.0091L16.4437 25.3011H16.5162V20.2727H18.6213ZM19.9476 29V20.2727H26.0328V21.9858H22.057V23.7756H25.7218V25.4929H22.057V27.2869H26.0328V29H19.9476ZM29.4462 29L26.9064 20.2727H29.2374L30.5542 25.9915H30.6266L32.1309 20.2727H34.0314L35.5357 26.0043H35.6081L36.9292 20.2727H39.2559L36.7203 29H34.6877L33.1152 23.7074H33.0471L31.4746 29H29.4462Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <div className=" flex flex-col ml-8 relative">
                      <div className="text-[11px] xl:text-[12px] text-[#7A7A7A] mt-[10px] mb-[4px] flex">
                        <div className="">{item.series}</div>
                      </div>
                      <div className=" text-[12px] xl:text-[14px]">{item.title}</div>
                      <div className="flex justify-start items-center mt-[10px] mb-[18px] font-semibold">
                        <div className="xl:mr-4 font-bold">{item.price}</div>
                        <div className="text-[#7A7A7A] line-through text-[12px]">{item.discount}</div>
                      </div>
                    </div>
                  </>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        )}
        <button ref={nextRef} className="absolute top-[45%] right-[-30px] z-[1] hover:color-white">
          <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle
              r="17.1874"
              transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 18 17.5)"
              fill="white"
              fillOpacity="0.5"
              stroke="#1B304A"
              strokeWidth="0.625141"
            />
            <path
              d="M13.5 25L22.5 17.5L13.5 10"
              stroke="#1B304A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    )
  } else {
    SwiperCore.use([Scrollbar])
    const swiperSetting = {
      spaceBetween: 10,
      scrollbar: { draggable: true },
      loop: true,
      autoplay: { delay: 2000, disableOnInteraction: true }
    }
    return (
      <div className="w-[92%] mx-auto px-4 relative">
        {swiperSetting && (
          <Swiper
            {...swiperSetting}
            slidesPerView={'auto'}
            style={{ borderRadius: '15px', padding: '20px 0' }}
          >
            {items.map((item: Item, index: number) => (
              <div key={index}>
                <SwiperSlide
                  key={index}
                  style={{
                    width: '180px',
                    borderRadius: '15px',
                    padding: '4px',
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                    margin: '0 auto'
                  }}
                >
                  <>
                    <img
                      src={item.img}
                      alt=""
                      style={{
                        width: '160px',
                        margin: '0 auto',
                        height: '200px',
                        borderRadius: '15px'
                      }}
                    />
                    <span className="absolute bottom-[106px] right-[10px]">
                      <svg
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M25 0L29.8658 6.8406L37.5 3.34937L38.2936 11.7064L46.6506 12.5L43.1594 20.1342L50 25L43.1594 29.8658L46.6506 37.5L38.2936 38.2936L37.5 46.6506L29.8658 43.1594L25 50L20.1342 43.1594L12.5 46.6506L11.7064 38.2936L3.34937 37.5L6.8406 29.8658L0 25L6.8406 20.1342L3.34937 12.5L11.7064 11.7064L12.5 3.34937L20.1342 6.8406L25 0Z"
                          fill="#FFDF5D"
                        />
                        <path
                          d="M18.6213 20.2727V29H16.8315L13.3585 23.9631H13.3031V29H11.1937V20.2727H13.0091L16.4437 25.3011H16.5162V20.2727H18.6213ZM19.9476 29V20.2727H26.0328V21.9858H22.057V23.7756H25.7218V25.4929H22.057V27.2869H26.0328V29H19.9476ZM29.4462 29L26.9064 20.2727H29.2374L30.5542 25.9915H30.6266L32.1309 20.2727H34.0314L35.5357 26.0043H35.6081L36.9292 20.2727H39.2559L36.7203 29H34.6877L33.1152 23.7074H33.0471L31.4746 29H29.4462Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <div className=" flex flex-col ml-2 relative">
                      <div className="text-[11px] xl:text-[12px] text-[#7A7A7A] mt-[10px] mb-[4px] flex">
                        <div className="">{item.series}</div>
                      </div>
                      <div className=" text-[12px] xl:text-[14px]">{item.title}</div>
                      <div className="flex justify-start items-center mt-[10px] mb-[18px] font-semibold">
                        <div className="xl:mr-4 font-bold">{item.price}</div>
                        <div className="text-[#7A7A7A] line-through text-[12px] ">{item.discount}</div>
                      </div>
                    </div>
                  </>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        )}
      </div>
    )
  }
}
export default RecommendBanner
