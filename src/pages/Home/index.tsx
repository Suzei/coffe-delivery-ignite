import { Banner } from "../../components/Banner";
import { CoffeCard } from "../../components/CoffeCard";
import { Coffes, HomeCoffeContainer, HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <header>
        <Banner />
      </header>

      <main>
        <HomeCoffeContainer>
          <h2>Nossos cafés</h2>
          <Coffes>
            <CoffeCard
              coffePreparation={["Tradicional", "Gelato"]}
              name="Café Coado"
              description="Este café é muito coadoasdasdaadasadasdsadsa"
              price={29.9}
            />
          </Coffes>
        </HomeCoffeContainer>
      </main>
    </HomeContainer>
  );
}
