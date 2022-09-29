import { AxiosResponse } from 'axios'
import { useQuery } from 'react-query'
import { axiosInstance } from '../../axiosinstance'
import { queryKeys } from './../../react-query/queryKeys'

interface ResponseType {
  productId: 'number'
  name: 'string'
  series: 'string'
  feature: 'string[]'
  diamter: 'string'
  details: {
    color_code: 'string[]'
    price: 'number'
    discount: 'number'
    product_details_image_url: 'string[]'
    graphicDiameter: 'string[]'
    duration: 'string'
  }
}

const getProductsList = async () => {
  const { data }: AxiosResponse<ResponseType[]> = await axiosInstance({
    url: `/product/allProduct`,
    headers: {
      ContentType: 'application/json'
    }
  })
  return data
}
export const useGetProductsList = (): ResponseType[] => {
  const fallback: [] = []
  const { data = fallback } = useQuery(queryKeys.product /* 키 바꿔야함 */, getProductsList)
  return data
}
