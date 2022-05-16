import { Navigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'

export default function PrivateRoute({ children }) {
  const user = useUser()
  return <>{user.username ? children : <Navigate to='/auth' />}</>
}
