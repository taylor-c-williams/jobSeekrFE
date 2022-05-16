import { Routes, Route } from 'react-router-dom'
import { UserProvider } from './context/UserContext'
import Main from './views/main/Main'
import Home from './views/home/Home'
import Auth from './views/auth/Auth'
import './App.css'
import PrivateRoute from './components/PrivateRoute.jsx'

// https://lit-reef-39800.herokuapp.com/ | https://git.heroku.com/lit-reef-39800.git

function App() {
  return (
    <>
      <UserProvider>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='auth' element={<Auth />} />
          <Route path='home' element={<PrivateRoute children={<Home />} />} />
        </Routes>
      </UserProvider>
    </>
  )
}

export default App
