import { useContext } from 'react'
import { Banner } from '../../components/Banner'
import { CoffeCard } from '../../components/CoffeCard'
import { CoffeList } from '../../contexts/CoffeListContext'
import { Coffes, HomeCoffeContainer, HomeContainer } from './styles'

export function Home() {
  const { coffes } = useContext(CoffeList)

  return (
    <HomeContainer>
      <header>
        <Banner />
      </header>

      <main>
        <HomeCoffeContainer>
          <h2>Nossos cafés</h2>
          <Coffes>
            {coffes.map((item) => (
              <CoffeCard
                key={item.id}
                coffePreparation={item.tags}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            ))}
            <CoffeCard
              coffePreparation={['Tradicional', 'Gelato']}
              name="Café Coado"
              description="Este café é muito coadoasdasdaadasadasdsadsa"
              price={29.9}
            />
          </Coffes>
        </HomeCoffeContainer>
      </main>
    </HomeContainer>
  )
}
