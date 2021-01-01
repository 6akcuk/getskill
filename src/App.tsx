import React from 'react'
import './App.css'
import './utils/i18n'
import { ThemeProvider } from 'styled-components'
import { theme } from './config/theme'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthRouterProvider } from './views/auth'
import Routes from './views/Routes'
import { SWRProvider, AppLayout } from './views/app/components'
import { RecoilRoot } from 'recoil'
import recoilPersist from 'recoil-persist'
import { NotificationsProvider } from './views/app/views/notifications'
import { CloudinaryContext } from 'cloudinary-react'
import { Suspense } from './components'

const { RecoilPersist, updateState } = recoilPersist()

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <RecoilRoot initializeState={updateState}>
          <SWRProvider>
            <RecoilPersist />
            <NotificationsProvider />
            <CloudinaryContext cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}>
              <Suspense>
                <AuthRouterProvider>
                  <AppLayout>
                    <Routes />
                  </AppLayout>
                </AuthRouterProvider>
              </Suspense>
            </CloudinaryContext>
          </SWRProvider>
        </RecoilRoot>
      </Router>
    </ThemeProvider>
  )
}

export default App
