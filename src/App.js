import { Routes, Route } from 'react-router-dom'
import { JobsProvider } from './context/JobsContext'
import { UserProvider } from './context/UserContext'
import { DragDropContext } from 'react-beautiful-dnd'
import Splash from './views/splash/Splash'
import Home from './views/home/Home'
import NewJob from './components/newJob/NewJob'
import PrivateRoute from './components/PrivateRoute'
import './App.css'

// https://polar-reaches-12563.herokuapp.com/ | https://git.heroku.com/polar-reaches-12563.git

function App() {
  return (
    <>
      <DragDropContext>
        <UserProvider>
          <JobsProvider>
            <Routes>
              <Route path='auth' element={<Splash login={true} />} />
              <Route path='signup' element={<Splash login={false} />} />
              <Route path='/' element={<PrivateRoute children={<Home />} />} />
              <Route
                path='newJob'
                element={<PrivateRoute children={<NewJob />} />}
              />
            </Routes>
          </JobsProvider>
        </UserProvider>
      </DragDropContext>
    </>
  )
}

export default App
