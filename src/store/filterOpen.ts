import { atom } from 'recoil'

export interface Filter {
  isOpen: boolean
}

export const filterState = atom({
  key: 'filterState',
  default: false
})
