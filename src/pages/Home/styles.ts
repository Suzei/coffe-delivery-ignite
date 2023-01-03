import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

export const HomeCoffeContainer = styled.div`
  display: grid;
  margin-top: 8rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 5rem;
  h2 {
    font-size: 2rem;
  }
`

export const Coffes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`
