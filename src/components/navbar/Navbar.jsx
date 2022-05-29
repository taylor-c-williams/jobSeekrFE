import { useNavigate } from 'react-router-dom'
import { logOut } from '../../services/auth'
import { useUser } from '../../context/UserContext'
import styles from './navbar.module.css'

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
    <div className={styles.navbar}>
      <h4>Seeker</h4>
      <button className={styles.add}>+job</button>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  )
}
