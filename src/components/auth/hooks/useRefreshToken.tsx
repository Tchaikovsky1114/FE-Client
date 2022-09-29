
import { AxiosResponse } from 'axios'
import {  UseMutateFunction, useMutation, useQuery, useQueryClient } from 'react-query'
import { axiosAuthInstance, axiosInstance,  getJWTToken, getNewJWTToken } from '../../axiosinstance'
import {  clearStoredToken, setStoredToken } from '../../local-storage/userStorage'
import { queryKeys } from '../../react-query/queryKeys'
import { Token } from '../types/userTypes'

import useToast from '../../common/toast/hooks/useToast'

const getNewToken = async (token: Token | null): Promise<Token | null> => {
  console.log('getNewToken');
  if(!token) return null
  
    const { expiresIn, accessTokenExpiredDate, refreshTokenExpiredDate } = token
    if (expiresIn + refreshTokenExpiredDate < Date.now()) {
      clearStoredToken()
      return null;
    }
    if (expiresIn + accessTokenExpiredDate - 600000 < Date.now()) {
      
      const { data }: AxiosResponse<Token> = await axiosInstance.put('/member/newAccess',{},{
        headers: getNewJWTToken(token),
        withCredentials: false
      })
      setStoredToken(data)
      console.log('AT의 잔여 기간이 10분 이하로 남았기에 새 AT로 교체합니다!')
      console.log('바뀌기 전 토큰',token.accessToken)
      console.log('바뀐 토큰',data.accessToken)
      return data
    }else{
      return token
    }
  }
 




export const useRefreshToken = ():UseMutateFunction<Token|null,unknown,Token,unknown> => {
  const queryClient = useQueryClient()
  const { fireToast } = useToast()
  const { mutate } = useMutation((token: Token) => getNewToken(token), {
    onSuccess: (data) => {
      if(!data) return;
      setStoredToken(data)
      queryClient.invalidateQueries([queryKeys.token])
    }
  })

  return mutate
}
