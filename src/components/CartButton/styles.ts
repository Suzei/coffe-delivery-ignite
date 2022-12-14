import styled from 'styled-components'

export interface CartContainerProps {
  isGoingToCart?: boolean
}

export const CartContainer = styled.button<CartContainerProps>`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  height: 38px;
  width: 38px;
  background-color: ${(props) =>
    props.isGoingToCart
      ? props.theme['yellow-300']
      : props.theme['purple-500']};

  color: ${(props) =>
    props.isGoingToCart ? props.theme['yellow-400'] : 'white'};
`
