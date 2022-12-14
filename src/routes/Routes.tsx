import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { Cart } from '../pages/Cart'
import { Home } from '../pages/Home'
import { OrderedFinished } from '../pages/OrderFinished'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route element={<Home />} path="/"></Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/thankyou" element={<OrderedFinished />} />
      </Route>
    </Routes>
  )
}
