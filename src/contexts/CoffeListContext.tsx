import { createContext, ReactNode, useState } from 'react'
import CoffeData from './data.json'

interface ICoffe {
  id: string[]
  tags: string[]
  name: string
  description: string
  price: number
  image: string
  quantity: number
}

interface ICoffeProps {
  coffes: ICoffe[]
  cart: ICoffe[]
  AddingItemToCart(): void
}

interface CoffeContextChildrenProps {
  children: ReactNode
}

export const CoffeList = createContext({} as ICoffeProps)

export function CoffeContext({ children }: CoffeContextChildrenProps) {
  const [cart, setCart] = useState([])
  const coffes = CoffeData

  return (
    <CoffeList.Provider value={{ cart, coffes }}>{children}</CoffeList.Provider>
  )
}
