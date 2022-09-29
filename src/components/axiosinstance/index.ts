import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { RegisterType } from '../auth/types/userTypes'
import { Token } from '../auth/types/userTypes'

import { clearStoredToken, getStoredToken, setStoredToken } from '../local-storage/userStorage'
import { baseUrl } from './constants'



let isTokenRefreshing = false;
let refreshSubscribers:any[] = []; 

const onTokenRefreshed = (accessToken:any) => {
  refreshSubscribers.map((callback) => callback(accessToken))
}

const addRefreshSubscriber = (callback:any) => {
  refreshSubscribers.push(callback)
}

// user type 기재.
export const getJWTToken = (token: Token): Record<string, any> => {
  return {
    'X-ACCESS-TOKEN': token.accessToken
  }
}

export const getNewJWTToken = (token:Token): Record<string,any> => {
  return {
    'X-ACCESS-TOKEN': token.accessToken,
    'X-REFRESH-TOKEN': token.refreshToken
  }
}


const config: AxiosRequestConfig = { baseURL: baseUrl,withCredentials:false }

export const axiosInstance = axios.create(config)
export const axiosAuthInstance = axios.create(config)

// axiosInstance.interceptors.request.use( async (req) => {
//   const token = getStoredToken()
//   console.log('token validation...')
//   if(!token) return req;
//   if('accessToken' in req.data){
    
//     const { expiresIn, accessTokenExpiredDate, refreshTokenExpiredDate } = token
//     if (expiresIn + refreshTokenExpiredDate < Date.now()) {
      
//       return req;
//     }
//     if (expiresIn + accessTokenExpiredDate - 600000 < Date.now()) {
//       console.log('인터셉터 실행')
//       const { data }: AxiosResponse<Token> = await axiosInstance.put('/member/newAccess',{},{
//         headers: getNewJWTToken(token),
//         withCredentials: false
//       })
//       setStoredToken(data)
//       console.log('interceptors',data)
//     }
//   }
//   return req;
//   },(err) => {return err})



axiosInstance.interceptors.response.use((res) => {
  return res;
},
  async(err) => {
    
    const { config, response:{status}} = err;
    
    if(status === 403 ||  status === 500) {      
        const originalRequest = config;
        if(!isTokenRefreshing){

          isTokenRefreshing = true;
          const token = getStoredToken()
          const {data} = await axiosInstance.put('/member/newAccess',{},
          {
            headers:getNewJWTToken(token)
          });
          console.log(data);
          
        isTokenRefreshing = false;
        setStoredToken(data);
        axiosInstance.defaults.headers.common["X-ACCESS-TOKEN"] = data.accessToken;
        
        
        
        const retryOriginalRequest = new Promise((resolve) => {
          
          addRefreshSubscriber((accessToken:string,refreshToken:string) => {
            originalRequest.headers["X-ACCESS-TOKEN"] = accessToken
            originalRequest.headers["X-REFRESH--TOKEN"] = refreshToken
            resolve(axios(originalRequest))
          })
        })
        onTokenRefreshed(data.accessToken)
        return retryOriginalRequest;
        }
        return Promise.reject(err);
    }
  })