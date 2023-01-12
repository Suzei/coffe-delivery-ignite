import { MapPinLine } from 'phosphor-react'
import {
  AdressForm,
  AdressGrid,
  AdressInput,
  AdressTitle,
  Container,
} from './styles'

export function Cart() {
  return (
    <Container>
      <div>
        <h2>Complete seu pedido</h2>
        <AdressForm>
          <AdressTitle>
            <MapPinLine size={23} weight="light" />
            <div>
              <h4>Endereço de Entrega</h4>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </AdressTitle>
          <AdressGrid>
            <div>
              <AdressInput placeholder="CEP"></AdressInput>
            </div>
            <AdressInput placeholder="20"></AdressInput>

            <div>
              <AdressInput placeholder="hola"></AdressInput>
              <AdressInput placeholder="hola"></AdressInput>
            </div>

            <div>
              <AdressInput placeholder="hola"></AdressInput>
              <AdressInput placeholder="hola"></AdressInput>
              <AdressInput placeholder="hola"></AdressInput>
            </div>
          </AdressGrid>
        </AdressForm>
      </div>

      <div>
        <h2>Cafés selecionados</h2>
        <AdressForm></AdressForm>
      </div>
    </Container>
  )
}
