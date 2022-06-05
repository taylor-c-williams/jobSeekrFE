import { Navigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'

export default function PrivateRoute({ children }) {
  const user = useUser()
  return <>{user.user.id ? children : <Navigate to='/auth' />}</>
}
