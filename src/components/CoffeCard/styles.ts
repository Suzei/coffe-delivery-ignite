import styled from 'styled-components'

export const CoffeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f3f2f2;
  min-width: 256px;
  height: 350px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;

  color: #574f4d;

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
`

export const CoffeDescription = styled.div`
  max-width: 216px;
  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;

  align-items: center;
  text-align: center;
`

export const CoffeCardImage = styled.img`
  width: 7.5rem;
  margin-top: calc(8px - 1.8rem - 2px);
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
  margin-top: 0.8rem;
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

export const CoffeCardPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  > div {
    gap: 0.2rem;

    span {
      font-size: 0.9rem;
      font-weight: lighter;
      font-family: 'Roboto', sans-serif;
    }
  }
`

export const CoffeCardQuantitySelector = styled.div`
  display: flex;
  align-items: center;
  background: #e6e5e5;
  padding: 0.6rem 0.8rem;
  border-radius: 10px;

  button {
    background: transparent;
  }

  span {
    font-family: 'Roboto', sans-serif;
  }

  svg {
    height: 14px;
    color: #9747ff;
    margin-top: 3px;

    &:hover {
      color: ${(props) => props.theme['purple-500']};
    }
  }
`
