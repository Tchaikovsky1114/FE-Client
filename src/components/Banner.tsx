import React, { useEffect, useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react' // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'

// import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import axios, { AxiosResponse } from 'axios'

interface Banner {
  title: string
  bannerImg: string
  id: string
}

// 달라질 부분
// absoluteTop, absoluteBtm, absoluteLeft, absoluteRight, slidesView, data
const Banner = () => {
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)
  const [swiperSetting, setSwiperSetting] = useState<Swiper | null>(null)
  const [imgs, setImgs] = useState([])
  const getBanner = async () => {
    const res = await axios.get('https://633010e5591935f3c8893690.mockapi.io/lenssis/api/v1/banner')
    setImgs(res.data)
  }
  useEffect(() => {
    getBanner()
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
        pagination: { clickable: true },
        slidesPerView: 1,
        loop: true,
        autoplay: { delay: 200000, disableOnInteraction: true },
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

  return (
    <div className="w-full mx-auto my-10 relative">
      <button ref={prevRef} className="absolute top-[45%] left-[30px] z-[2] hover:color-white">
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="17.5"
            cy="17.5"
            r="17.5"
            transform="rotate(-180 17.5 17.5)"
            fill="white"
            fillOpacity="0.5"
          />
          <path
            d="M22 25L13 17.5L22 10"
            stroke="#92C8ED"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 25L13 17.5L22 10"
            stroke="#ABC8DF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {swiperSetting && (
        <Swiper {...swiperSetting} style={{ borderRadius: '25px', overflow: 'hidden' }}>
          {imgs &&
            imgs.map((img: Banner, index: number) => (
              <div key={index}>
                <SwiperSlide key={index}>
                  {/* key값 id 값 넣어주기 */}
                  <img src={img.bannerImg} alt="" className="w-full h-[400px] object-cover " />
                </SwiperSlide>
              </div>
            ))}
        </Swiper>
      )}
      <button ref={nextRef} className="absolute top-[45%] right-[30px] z-[1] hover:color-white">
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="17.5" cy="17.5" r="17.5" fill="white" fillOpacity="0.5" />
          <path
            d="M13 10L22 17.5L13 25"
            stroke="#92C8ED"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 10L22 17.5L13 25"
            stroke="#ABC8DF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  )
}

export default Banner

{
  /* {imgs.map((img: string, index: number) => (
      <SwiperSlide key={`${img}-${index}`}>{img}</SwiperSlide>
    ))} */
}
