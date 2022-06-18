import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/UserContext'
import { JobsProvider } from './context/JobsContext'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <JobsProvider>
          <App />
        </JobsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
)
