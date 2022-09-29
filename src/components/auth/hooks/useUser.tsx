import { AxiosResponse } from 'axios'
import { useIsFetching, useQuery, useQueryClient } from 'react-query'
import { axiosInstance, getJWTToken } from '../../axiosinstance'
import { clearStoredToken, getStoredToken, setStoredToken } from '../../local-storage/userStorage'
import { queryKeys } from '../../react-query/queryKeys'
import { Token } from '../types/userTypes'

import { User, userState } from '../../../store/user'
import { useRecoilState } from 'recoil'
import { useState } from 'react'

// 토큰을 통해 유저 정보를 받아오는 getUser가 signIn보다 빠르게 진행되면서 생기는 문제같음..
const getUser = async (token: Token | null): Promise<User | null> => {
  if (!token) return null
  
  const { data }: AxiosResponse<User> = await axiosInstance.get('/member/info', {
    headers: getJWTToken(token),
  })
  console.log('user있음')
  console.log('getUser - data',data)
  return data
}

interface UseUser {
  user: User | null | undefined
  updateUser: (user: Token) => void
  clearUser: () => void
  isLoading:boolean
}

export const useUser = (): UseUser => {
  const [currentUser, setCurrentUser] = useRecoilState(userState)
  const queryClient = useQueryClient()
  const token = getStoredToken()
  
 
  const { data: user,isLoading,isError } = useQuery([queryKeys.user], () => getUser(token), {
    onSuccess: (received: User | null) => {
      if (received) {
        setCurrentUser(received)
        return received
      }else{
        // clearStoredToken();
        // clearUser()
      }
    },
    onError: () => console.log('queryError'),
    refetchOnWindowFocus:false
  })

  const updateUser = (newToken: Token): void => {
    // queryClient.invalidateQueries([queryKeys.user,queryKeys.token])
    queryClient.fetchQuery([queryKeys.user], () => getUser(newToken))
  }

  const clearUser = () => {
    // queryClient.setQueryData(queryKeys.user, null)
    queryClient.removeQueries([queryKeys.user, queryKeys.token])
  }
  
  return {
    user,
    updateUser,
    clearUser,
    isLoading
  }
}
