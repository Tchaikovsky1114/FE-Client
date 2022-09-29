import { Token } from "../auth/types/userTypes";


const LOCALSTORAGE_USER_KEY = 'lenssis_user';

export const getStoredToken = ():Token => {
  const storedUser = localStorage.getItem(LOCALSTORAGE_USER_KEY);
  
  return storedUser ? JSON.parse(storedUser) : null;
}

export const setStoredToken = (token:Token) => {
  const obj = {
    ...token,
    expiresIn:Date.now()
  }
  localStorage.setItem(LOCALSTORAGE_USER_KEY, JSON.stringify(obj))
}



export const clearStoredToken = () => {
  localStorage.removeItem(LOCALSTORAGE_USER_KEY)
}

