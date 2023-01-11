import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

export const HomeCoffeContainer = styled.div`
  display: grid;
  padding: 1rem;
  margin-top: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  h2 {
    font-size: 2rem;
  }
`

export const Coffes = styled.div`
  flex: 1;
  width: 80%;
  padding: 2rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 3rem;
  flex-wrap: wrap;
`
