import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LogIn from '../../components/logIn/LogIn'
import SignUp from '../../components/signUp/SignUp'
import { useUser } from '../../context/UserContext'
import { getUser } from '../../services/users'
import { logIn, signUp } from '../../services/auth'
import styles from './Main.module.css'

export default function Main({ login }) {
  const [inputData, setInputData] = useState({ username: '', password: '' })
  const { setUser } = useUser()
  const navigate = useNavigate()

  const handleInputData = (e) => {
    const { value, name } = e.target
    setInputData({ ...inputData, [name]: value })
  }

  const handleSignUp = async () => {
    try {
      const { username, password } = inputData
      await signUp(username, password)
      await logIn(username, password)
      const newUser = await getUser()
      await setUser(newUser)
      navigate('/home')
    } catch (error) {
      console.error('signup error')
    }
  }

  return (
    <div>
      <h1>seeker</h1>
      {login ? (
        <div>
          <LogIn />
          <section className={styles.signUpLink}>
            Don't have an account? <Link to='/signup'>Sign up</Link>
          </section>
        </div>
      ) : (
        <div>
          <SignUp
            handleSubmit={handleSignUp}
            handleInputData={handleInputData}
            inputData={inputData}
          />
          <section className={styles.signUpLink}>
            Already have an account? <Link to='/'>Log In</Link>
          </section>
        </div>
      )}
    </div>
  )
}
