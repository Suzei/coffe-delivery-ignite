import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './routes/Routes'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/theme/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
