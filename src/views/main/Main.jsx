import { Link } from 'react-router-dom'
import LogIn from '../../components/logIn/LogIn'
import SignUp from '../../components/signUp/SignUp'
import styles from './Main.module.css'

export default function Main({ login }) {
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
          <SignUp />
          <section className={styles.signUpLink}>
            Already have an account? <Link to='/'>Log In</Link>
          </section>
        </div>
      )}
    </div>
  )
}
