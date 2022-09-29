import { AxiosResponse } from 'axios'
import { useQuery } from 'react-query'
import { axiosInstance } from '../../axiosinstance'
import { queryKeys } from '../../react-query/queryKeys'

export interface EventResponseType {
  id: string
  title: string
  description: string
  startTime: string
  endTime: string
  mainImg: string
  descImg?: string[]
}

const getEvents = async (pageNum: number): Promise<EventResponseType[]> => {
  const { data }: AxiosResponse<EventResponseType[]> = await axiosInstance({
    url: '/event',
    params: {
      pageNumber: pageNum
    },
    headers: {
      ContentType: 'application/json'
    }
  })
  return data
}
export const useGetEvent = (pageNum: number) => {
  const fallback: [] = []
  const { data = fallback } = useQuery(queryKeys.allEvent, () => getEvents(pageNum), {
    refetchOnWindowFocus: false
  })
  return data
}

const detailEvent = async (id: string): Promise<EventResponseType[]> => {
  const { data }: AxiosResponse<EventResponseType[]> = await axiosInstance({ url: `/event/${id}` })
  return data
}
export const useGetDetailEvent = (id: string): EventResponseType[] => {
  const fallback: [] = []
  const { data = fallback } = useQuery([queryKeys.event, id], () => detailEvent(id), {
    refetchOnWindowFocus: false
  })
  return data
}
