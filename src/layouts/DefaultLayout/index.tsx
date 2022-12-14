import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { CenterWrapper, LayoutDefault } from './styles'

export function DefaultLayout() {
  return (
    <LayoutDefault>
      <Header />
      <CenterWrapper>
        <Outlet />
      </CenterWrapper>
    </LayoutDefault>
  )
}
