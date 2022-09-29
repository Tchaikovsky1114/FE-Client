import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import TopInfomation from './TopInfomation'
import { TbSearch } from 'react-icons/tb'
import { FiFilter } from 'react-icons/fi'
import { useRecoilState } from 'recoil'
import { filterState } from '../../store/filterOpen'
import { useUser } from '../auth/hooks/useUser'

const Header = () => {
  const [filterOpen, setFilterOpen] = useRecoilState(filterState)
  const {user} = useUser()
  const handleFilter = () => {
    setFilterOpen(!filterOpen)
  }

  return (
    <nav className="fixed flex flex-col bg-[#ABC8DF] text-white z-50 w-full top-0">
      <TopInfomation />
      <div className="flex items-center h-[50px] justify-between pb-[15px]">
        <LeftSection />
        <div className="hidden xs:block">
          <RightSection />
        </div>
        <div className="flex items-center xs:hidden gap-4 pr-2">
          <button className="flex items-center">
            <TbSearch size={24} />
          </button>
          <button className="flex items-center" onClick={handleFilter}>
            <FiFilter size={24} />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header
