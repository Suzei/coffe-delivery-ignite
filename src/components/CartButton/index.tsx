import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { CartContainer, CartContainerProps } from './styles'

export function CartButton({ isGoingToCart = false }: CartContainerProps) {
  const [cartQuantity, setCartQuantity] = useState(0)
  return (
    <CartContainer isGoingToCart={isGoingToCart}>
      <ShoppingCart weight="fill" size={22} />
    </CartContainer>
  )
}
