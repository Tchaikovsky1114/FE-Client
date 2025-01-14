import { useCallback } from 'react'
import { useLocation } from 'react-router-dom'
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
  const { user } = useUser()
  const handleFilter = useCallback(() => {
    setFilterOpen((prev) => !prev)
    console.log(filterOpen)
  }, [])
  const { pathname } = useLocation()

  return (
    <nav className="fixed flex flex-col justify-center bg-[#ABC8DF] text-white z-50 w-full top-0">
      <TopInfomation />
      <div className="flex items-center h-[50px] justify-between pb-[15px] w-full xs:w-[1180px] mx-auto">
        <LeftSection />
        <div className="hidden xs:block">
          <RightSection />
        </div>

        {/* 모바일 navigation */}
        <div className="flex items-center xs:hidden gap-4 pr-2">
          <button className="flex items-center">
            <TbSearch size={24} />
          </button>
          {pathname === '/' && (
            <button className="flex items-center" onClick={handleFilter}>
              <FiFilter size={24} />
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Header
