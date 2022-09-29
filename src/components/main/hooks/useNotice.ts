import { AxiosResponse } from 'axios'
import { axiosInstance } from './../../axiosinstance/index'
import { useQuery } from 'react-query'
import { queryKeys } from '../../react-query/queryKeys'

export interface NoticeResponseType {
  id: string
  title: string
  type: string
  text?: string
  author?: string
  clickedCount?: number
}

const getAllNotice = async (): Promise<NoticeResponseType[]> => {
  const { data }: AxiosResponse<NoticeResponseType[]> = await axiosInstance({ url: '/notice' })
  return data
}

export const useGetAllNotice = () => {
  const fallback: [] = []
  const { data = fallback } = useQuery(queryKeys.allNotice, getAllNotice, {
    refetchOnWindowFocus: false
  })
  return data
}
