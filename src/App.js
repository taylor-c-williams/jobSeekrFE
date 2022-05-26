import { Routes, Route } from 'react-router-dom'
import { UserProvider } from './context/UserContext'
import Splash from './views/splash/Splash'
import Home from './views/home/Home'
import PrivateRoute from './components/PrivateRoute'
import './App.css'

// https://lit-reef-39800.herokuapp.com/ | https://git.heroku.com/lit-reef-39800.git

function App() {
  return (
    <>
      <UserProvider>
        <Routes>
          <Route path='/' element={<Splash login={true} />} />
          <Route path='/signup' element={<Splash login={false} />} />
          <Route path='home' element={<PrivateRoute children={<Home />} />} />
        </Routes>
      </UserProvider>
    </>
  )
}

export default App
