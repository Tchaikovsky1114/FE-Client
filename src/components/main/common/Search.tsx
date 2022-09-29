import { useState } from 'react'

function Search() {
  const [isOpenSearch, setIsOpenSearch] = useState(false)
  const openSearchHandler = () => {
    setIsOpenSearch((prev) => (prev = true))
  }
  const closeSearchHandler = () => {
    setIsOpenSearch((prev) => (prev = false))
  }
  return (
    <>
      <span className="hidden xs:inline absolute right-0">
        <input
          type="text"
          placeholder="Search"
          className="text-lenssisGray text-[15px] border-[1px] border-solid py-1 pl-1 rounded-md"
        />
      </span>
      <span className="inline-block xs:hidden absolute top-12 right-0 ">
        {isOpenSearch ? (
          <span className="relative animate-left">
            <input
              className="p-[4px] border-[1px] border-solid border-[#A6A6A6] rounded-md opacity relative"
              placeholder="Search"
            />
            <span className="absolute top-[2px] right-2" onClick={closeSearchHandler}>
              X
            </span>
          </span>
        ) : (
          <span className="" onClick={openSearchHandler}>
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.3998 16.1696C22.3998 19.6099 19.6109 22.3988 16.1706 22.3988C12.7303 22.3988 9.94141 19.6099 9.94141 16.1696C9.94141 12.7293 12.7303 9.94043 16.1706 9.94043C19.6109 9.94043 22.3998 12.7293 22.3998 16.1696Z"
                stroke="#D3D3D3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M25.8841 24.0598L22.3984 20.5742"
                stroke="#D3D3D3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        )}
      </span>
    </>
  )
}

export default Search
