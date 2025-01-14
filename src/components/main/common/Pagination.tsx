import React, { useEffect, useState } from 'react'
import { useQueryClient } from 'react-query'
import { queryKeys } from '../../react-query/queryKeys'
import { useGetProductsList, usePrefetchProductLists } from '../hooks/useProductLists'

interface PropsType {
  currentPage: number
  allCount: number
  setCurrentPage: (currentPage: number) => void
}

function Pagination({ currentPage, allCount, setCurrentPage }: PropsType) {
  const client = useQueryClient()
  const [pagesCount, setPagesCount] = useState<number[] | []>([])
  const maxPage = Math.floor(allCount / 10)
  useEffect(() => {
    const arr = []
    for (let i = 1; i <= maxPage; i++) {
      arr.push(i)
    }
    setPagesCount(arr)
  }, [])
  // usePrefetchProductLists(currentPage, allCount)

  return (
    <div className={`my-[51px] flex grow justify-center items-center `}>
      <span
        className="hover:cursor-pointer mx-4"
        onClick={() => (currentPage <= 1 ? null : setCurrentPage(currentPage - 1))}
      >
        <svg width="7" height="17" viewBox="0 0 7 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.99805 1L1.49919 8.5L5.99805 16" stroke="#6D6D6D" strokeWidth="0.975844" />
        </svg>
      </span>
      {pagesCount.map((page: number) => (
        <span
          key={page}
          className={`${
            currentPage === page ? 'font-bold' : 'font-normal'
          } cursor-pointer hover:font-bold mx-2`}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </span>
      ))}
      <span
        className="hover:cursor-pointer mx-4"
        onClick={() => (currentPage >= maxPage ? null : setCurrentPage(currentPage + 1))}
      >
        <svg width="7" height="17" viewBox="0 0 7 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.998047 16L5.4969 8.5L0.998047 1" stroke="#6D6D6D" strokeWidth="0.975844" />
        </svg>
      </span>
    </div>
  )
}

export default Pagination
