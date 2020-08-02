import React from 'react'
import './App.css'
import './utils/i18n'
import { ThemeProvider } from 'styled-components'
import { theme } from './config/theme'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthRouterProvider } from './views/auth'
import Routes from './views/Routes'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AuthRouterProvider>
          <Routes />
        </AuthRouterProvider>
      </Router>
    </ThemeProvider>
  )
}

export default App
