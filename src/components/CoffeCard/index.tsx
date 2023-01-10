import {
  CoffeCardContainer,
  CoffeCardImage,
  CoffeCardOrganizer,
  CoffeCardTags,
  CoffeDescription,
} from './styles'
import CoffeImage from '../../assets/Image.png'

interface ICoffeCard {
  coffePreparation: string[]
  name: string
  description: string
  price: number
  image: string
}

export function CoffeCard({
  coffePreparation,
  name,
  description,
  price,
  image,
}: ICoffeCard) {
  const formatedToBRL = price.toLocaleString('pt-br', {
    minimumFractionDigits: 2,
  })
  return (
    <CoffeCardContainer>
      <CoffeCardImage src={image}></CoffeCardImage>
      <CoffeCardOrganizer>
        <CoffeCardTags>
          {coffePreparation?.map((item) => (
            <span>{item}</span>
          ))}
        </CoffeCardTags>
        <h3>{name}</h3>
        <CoffeDescription>{description}</CoffeDescription>
        <div>
          <div>
            <span>R$</span>
            <h2>{formatedToBRL}</h2>
          </div>
        </div>
      </CoffeCardOrganizer>
    </CoffeCardContainer>
  )
}
