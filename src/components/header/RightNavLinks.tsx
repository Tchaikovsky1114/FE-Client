import React from 'react'
import { Link } from 'react-router-dom'

import { userState } from '../../store/user'
import { useUser } from '../auth/hooks/useUser'
import { getStoredToken } from '../local-storage/userStorage'

const RightNavLinks = () => {

 const {user} = useUser()
  const token = getStoredToken()
  return (
    <div className="flex items-center min-w-[200px] gap-4 justify-between">
      <div className="flex-1">
        <Link to="/favorite">
          <svg className="mx-auto" width={40} height={26} xmlns="http://www.w3.org/2000/svg">
            <image href="/assets/favorite.svg" />
          </svg>
        </Link>
      </div>
      <div className="flex-1">
        <Link to="/cart">
          <svg className="mx-auto" width={40} height={28} xmlns="http://www.w3.org/2000/svg">
            <image href="/assets/cart.svg" />
          </svg>
        </Link>
      </div>
      <div className="flex-1">
        <Link to={token || user ? '/mypage' : '/signin'}>
          <svg className="mx-auto" width={40} height={28} xmlns="http://www.w3.org/2000/svg">
            <image href="/assets/person.svg" />
          </svg>
        </Link>
      </div>
      <div className="flex-1">
        <Link to="/info">
          <svg className="mx-auto" width={40} height={28} xmlns="http://www.w3.org/2000/svg">
            <image href="/assets/info.svg" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default RightNavLinks
