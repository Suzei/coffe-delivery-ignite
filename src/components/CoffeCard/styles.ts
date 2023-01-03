import styled from 'styled-components'

export const CoffeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f3f2f2;
  min-width: 256px;
  height: 300px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;

  h3 {
    color: #403937;
    font-size: 1.25rem;
  }
`

export const CoffeCardOrganizer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-direction: column;

  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    max-width: 216px;
    font-size: 0.75rem;
  }
`

export const CoffeDescription = styled.div`
  max-width: 216px;
  align-items: center;
  text-align: center;
`

export const CoffeCardImage = styled.img`
  width: 7.5rem;
  margin-top: calc(8px - 1.8rem - 120px);
  height: 7.5rem;
  border-radius: 8px;
  border: 4px solid var(--gray-600);
  outline: 2px solid var(--green-500);
  align-self: center;
  box-sizing: initial;
`

export const CoffeCardTags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 0.25rem;
  gap: 0.2rem;

  span {
    background-color: ${(props) => props.theme['yellow-300']};
    color: ${(props) => props.theme['yellow-500']};
    border-radius: 100px;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 0.625rem;
    padding: 0.3rem 0.8rem;
    text-transform: uppercase;
  }
`

export const CoffeCardTagsContainer = styled.div``
