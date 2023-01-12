import styled from 'styled-components'

const CardStyle = styled.div`
  background-color: #f3f2f2;
  padding: 2rem;
`

export const Container = styled.form`
  display: grid;
  grid-template-columns: 1fr 448px;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  padding: 8rem;
  padding-top: 5rem;
`

export const AdressForm = styled(CardStyle)`
  display: grid;
  font-family: 'Roboto', sans-serif;
  flex-direction: column;
`

export const AdressInput = styled.input`
  padding: 12px;
  width: 100%;
  background: #ededed;
  color: #8d8686;

  &:focus {
    color: black;
  }
`

export const AdressGrid = styled.div`
  display: grid;
  margin-top: 1rem;
  width: 100%;
  gap: 16px;
  grid-template-rows: 1fr;

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 1rem;

    &:nth-child(1) input {
      width: 200px;
    }
  }
`
export const AdressTitle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  gap: 1.2rem;

  svg {
    color: ${(props) => props.theme['yellow-500']};
  }

  span {
    font-weight: 400;
    font-size: 0.875rem;
  }

  h4 {
    font-weight: 500;
  }

  align-items: center;
  div {
    margin-top: 1rem;
    gap: 0.2rem;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
`
