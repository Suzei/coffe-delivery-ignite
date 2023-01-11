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
                image={item.image}
                tags={item.tags}
                name={item.name}
                description={item.description}
                price={item.price}
                quantity={item.quantity}
              />
            ))}
          </Coffes>
        </HomeCoffeContainer>
      </main>
    </HomeContainer>
  )
}
