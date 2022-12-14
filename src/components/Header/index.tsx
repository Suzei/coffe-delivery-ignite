import { HeaderContainer, LocationButton } from './styles'
import Logo from '../../assets/logo.png'
import { MapPin } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Logo escrito Coffe Delivery" />

      <LocationButton>
        <MapPin size={23} />
        <span>Porto Alegre, RS</span>
      </LocationButton>
    </HeaderContainer>
  )
}
