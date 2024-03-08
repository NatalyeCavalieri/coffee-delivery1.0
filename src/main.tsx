import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/Default.ts'
import { GlobalStyle } from './styles/Global.ts'
import { Router } from './Routes.tsx'
import { BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from './contexts/CartContext.tsx'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
