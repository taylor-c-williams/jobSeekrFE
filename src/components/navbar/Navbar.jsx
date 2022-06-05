import { useNavigate, Link } from 'react-router-dom'
import { logOut } from '../../services/auth'
import { useUser } from '../../context/UserContext'
import styles from './navbar.module.css'

export default function Navbar() {
  const navigate = useNavigate()
  const { user, setUser } = useUser()

  const handleLogOut = async () => {
    try {
      await logOut()
      setUser({})
      navigate('/auth')
    } catch (error) {
      console.error('logout error!')
    }
  }
  console.log('user', user)
  const handleNav = () => {
    navigate('/newjob')
  }

  return (
    <div className={styles.navbar}>
      <Link to='/home'>
        <h4>Seeker</h4>
      </Link>
      <button className={styles.add} onClick={handleNav}>
        +job
      </button>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  )
}
