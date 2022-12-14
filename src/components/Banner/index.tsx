import { Clock, Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { defaultTheme } from '../../styles/theme/default'
import {
  BannerContainer,
  BannerImage,
  BannerInfo,
  BannerResume,
  BannerResumeIcons,
} from './styles'

export function Banner() {
  return (
    <BannerContainer>
      <BannerInfo>
        <h2>
          Encontre o café perfeito <br /> para qualquer hora do dia
        </h2>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver a <br />
          qualquer hora
        </p>

        <BannerResume>
          <div>
            <BannerResumeIcons backgroundColor={defaultTheme['yellow-500']}>
              <span>
                <ShoppingCart weight="fill" size={23} />
              </span>
              <p>Compra simples e segura</p>
            </BannerResumeIcons>

            <BannerResumeIcons backgroundColor={defaultTheme['yellow-400']}>
              <span>
                <Timer weight="fill" size={23} />
              </span>
              <p>Compra c e segura</p>
            </BannerResumeIcons>
          </div>

          <div>
            <BannerResumeIcons backgroundColor="#574F4D">
              <span>
                <Package weight="fill" size={23} />
              </span>
              <p>Compra simples e segura</p>
            </BannerResumeIcons>
            <BannerResumeIcons backgroundColor={defaultTheme['purple-400']}>
              <span>
                <Coffee weight="fill" size={23} />
              </span>
              <p>Compra simples e segura</p>
            </BannerResumeIcons>
          </div>
        </BannerResume>
      </BannerInfo>
      <BannerImage />
    </BannerContainer>
  )
}
