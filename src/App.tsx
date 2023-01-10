import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CoffeContext } from './contexts/CoffeListContext'
import { Router } from './routes/Routes'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/theme/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeContext>
          <Router />
        </CoffeContext>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
