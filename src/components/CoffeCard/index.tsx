import { Minus, Plus } from 'phosphor-react'
import { BRLCurrency } from '../../utils/convertToBRL'
import { CartButton } from '../CartButton'
import {
  CoffeCardContainer,
  CoffeCardImage,
  CoffeCardOrganizer,
  CoffeCardPrice,
  CoffeCardQuantitySelector,
  CoffeCardTags,
  CoffeDescription,
} from './styles'

interface ICoffeCard {
  tags: string[]
  name: string
  description: string
  price: number
  image: string
  quantity: number
}

export function CoffeCard({
  tags,
  name,
  description,
  price,
  image,
  quantity,
}: ICoffeCard) {
  const convertedPrice = BRLCurrency(price)

  return (
    <CoffeCardContainer>
      <CoffeCardImage src={image}></CoffeCardImage>
      <CoffeCardOrganizer>
        <CoffeCardTags>
          {tags?.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </CoffeCardTags>
        <h3>{name}</h3>
        <CoffeDescription>{description}</CoffeDescription>
        <CoffeCardPrice>
          <div>
            <span>R$</span>
            <h2>{convertedPrice}</h2>
          </div>

          <div>
            <div>
              <CoffeCardQuantitySelector>
                <button>
                  <Plus weight="bold" />
                </button>
                <span>{quantity}</span>
                <button>
                  <Minus weight="bold" />
                </button>
              </CoffeCardQuantitySelector>

              <CartButton isGoingToCart />
            </div>
          </div>
        </CoffeCardPrice>
      </CoffeCardOrganizer>
    </CoffeCardContainer>
  )
}
