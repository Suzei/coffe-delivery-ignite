import styled from 'styled-components'
import Banner from '../../assets/hero-image.png'

interface ResumeIconsProps {
    backgroundColor: string
}

export const BannerContainer = styled.div`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 auto;
  font-family: 'Baloo 2';
  margin-top: 5.875rem;

  @media (max-width: 1030px) {
    order: 1;
  }

  h2 {
    font-size: 42px;
  }

  p {
    font-family: 'Roboto';
    line-height: 1.2;
    font-size: 1.25rem;
  }
`

export const BannerResume = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-direction: column;
  margin-top: 4.125rem;
  gap: 20px;
`

export const BannerResumeIcons = styled.div<ResumeIconsProps>`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 8px;
  margin-top: 31px;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.backgroundColor};
    border-radius: 100%;
    padding: 8px;
  }

  p {
    font-size: 1rem;
  }

  svg {
    color: white;
  }
`

export const BannerImage = styled.div`
  background-image: url(${Banner});
  background-repeat: no-repeat;
  height: 360px;
  width: 476px;
  z-index: 2;

  @media (max-width: 1030px) {
    order: -1;
  }
`

export const BannerInfo = styled.div``
