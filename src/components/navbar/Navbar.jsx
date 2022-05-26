import { useNavigate } from 'react-router-dom'
import { logOut } from '../../services/auth'
import { useUser } from '../../context/UserContext'

export default function Navbar() {
  const navigate = useNavigate()
  const { setUser } = useUser()

  const handleLogOut = async () => {
    try {
      await logOut()
      setUser({})
      navigate('/')
    } catch (error) {
      console.error('logout error!')
    }
  }

  return (
    <div>
      Navbar Yay you did it
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  )
}
