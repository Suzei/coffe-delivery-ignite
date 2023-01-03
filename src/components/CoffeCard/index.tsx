import {
  CoffeCardContainer,
  CoffeCardImage,
  CoffeCardOrganizer,
  CoffeCardTags,
  CoffeDescription,
} from "./styles";
import CoffeImage from "../../assets/Image.png";

interface ICoffeCard {
  coffePreparation: string[];
  name: string;
  description: string;
  price: number;
}

export function CoffeCard({
  coffePreparation,
  name,
  description,
  price,
}: ICoffeCard) {
  return (
    <CoffeCardContainer>
      <CoffeCardImage src={CoffeImage}></CoffeCardImage>
      <CoffeCardOrganizer>
        <CoffeCardTags>
          {coffePreparation?.map((item) => (
            <span>{item}</span>
          ))}
        </CoffeCardTags>
        <h3>{name}</h3>
        <CoffeDescription>{description}</CoffeDescription>
      </CoffeCardOrganizer>
    </CoffeCardContainer>
  );
}
