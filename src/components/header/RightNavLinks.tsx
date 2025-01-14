import { Link } from 'react-router-dom'
import { useUser } from '../auth/hooks/useUser'
import { getStoredToken } from '../local-storage/userStorage'

const RightNavLinks = () => {

 const {user} = useUser()
  const token = getStoredToken()
  return (
    <div className="flex items-center justify-between min-w-[200px] gap-4 ">
      <div className="flex-1">
        <Link to="/favorite"  className='flex items-center justify-end'>
          <svg width={30} height={26} xmlns="http://www.w3.org/2000/svg">
            <image href="/assets/favorite.svg" />
          </svg>
        </Link>
      </div>
      <div className="flex-1">
        <Link to="/cart" className='flex items-center justify-end'>
          <svg width={30} height={28} xmlns="http://www.w3.org/2000/svg">
            <image href="/assets/cart.svg" />
          </svg>
        </Link>
      </div>
      <div className="flex-1">
        <Link to={token || user ? '/mypage' : '/signin'} className='flex items-center justify-end'>
          <svg width={30} height={28} xmlns="http://www.w3.org/2000/svg">
            <image href="/assets/person.svg" />
          </svg>
        </Link>
      </div>
      <div className="flex-1">
        <Link to="/notice" className='flex items-center justify-end'>
          <svg width={30} height={28} xmlns="http://www.w3.org/2000/svg">
            <image href="/assets/info.svg" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default RightNavLinks
