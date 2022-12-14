import { HeaderContainer, Location, LocationContainer } from './styles'
import Logo from '../../assets/logo.png'
import { MapPin } from 'phosphor-react'
import { CartButton } from '../CartButton'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Logo escrito Coffe Delivery" />
      <LocationContainer>
        <Location>
          <MapPin weight="fill" size={23} />
          <span>Porto Alegre, RS</span>
        </Location>
        <NavLink to="/cart">
          <CartButton isGoingToCart />
        </NavLink>
      </LocationContainer>
    </HeaderContainer>
  )
}
