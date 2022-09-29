export interface CardPropsType {
  key: string
  id?: string // 상품 id
  idx: number
  name: string // 상품 타이틀
  diameter: number
  series: string // 상품 시리즈
  price: number // 상품 가격
  feature: string
  discount: number // 할인률
  img?: string // 상품 이미지
  isNew?: boolean // 새로운 상품 여부
  color?: string[] // 색상 코드
  colorImg?: string[]
}

export interface Item {
  id?: string // 상품 id
  idx: number
  name: string // 상품 타이틀
  diameter: number
  series: string // 상품 시리즈
  price: number // 상품 가격
  feature: string
  discount: number // 할인률
  img?: string // 상품 이미지
  isNew?: boolean // 새로운 상품 여부
  color?: string[] // 색상 코드
  colorImg?: string[]
}

export interface CardContainerPropsType {
  data: Data
  productLists?: []
  newProductLists?: []
  allProductCurrentPage?: number
  newProductCurrentPage?: number
  allProductCount?: number
  newProductCount?: number
}
type Data = 'Best' | 'New'
