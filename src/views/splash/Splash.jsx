import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LogIn from '../../components/logIn/LogIn'
import SignUp from '../../components/signUp/SignUp'
import { useUser } from '../../context/UserContext'
import { getUser } from '../../services/users'
import { logIn, signUp } from '../../services/auth'
import styles from './Splash.module.css'

export default function Splash({ login }) {
  const [loginError, setLoginError] = useState('')
  const [inputData, setInputData] = useState({ username: '', password: '' })
  const { user, setUser } = useUser()
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
      navigate('/')
    } catch (error) {
      console.error('signup error')
    }
  }

  const handleLogin = async () => {
    const { username, password } = inputData
    try {
      await logIn(username, password)
      const newUser = await getUser()
      await setUser(newUser)
      navigate('/')
    } catch (error) {
      setLoginError('No such user, please Sign Up!')
      console.error('login error!')
    }
  }

  console.log('user:', user)
  return (
    <div>
      <h1>seeker</h1>
      {login ? (
        <div>
          <LogIn
            handleSubmit={handleLogin}
            handleInputData={handleInputData}
            inputData={inputData}
            loginError={loginError}
          />
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
