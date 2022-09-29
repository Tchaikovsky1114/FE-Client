import React from 'react'
import { useNavigate } from 'react-router-dom'

interface PropsType {
  moveTo: string
}

function ViewMoreBtn({ moveTo }: PropsType) {
  const navigate = useNavigate()
  return (
    <div className="flex justify-center items-center py-8 ">
      <button
        className="border-[1px] border-solid border-lenssisDark py-1 xs:py-2 px-[12px] rounded-full"
        onClick={() => navigate(`${moveTo}`)}
      >
        View More
      </button>
    </div>
  )
}

export default ViewMoreBtn
