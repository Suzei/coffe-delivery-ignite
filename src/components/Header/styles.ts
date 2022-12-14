import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  margin: 0 160px;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  font-family: 'Roboto', sans-serif;
  img {
    width: 85px;
    height: 40px;
  }
`

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Location = styled.div`
  background: ${(props) => props.theme['purple-300']};
  color: ${(props) => props.theme['purple-400']};
  display: flex;
  height: 40px;
  gap: 0.2rem;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`
