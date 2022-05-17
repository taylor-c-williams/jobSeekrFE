import styles from '../logIn/AuthForm.module.css'

export default function SignUpForm({ handleClick }) {
  return (
    <div className={styles.main}>
      <fieldset>
        <legend>Sign Up</legend>
        <label>
          Username
          <input label='username' spellcheck='false' />
        </label>
        <label>
          Password
          <input spellcheck='false' type='password' />
        </label>
        <button onClick={handleClick}>Sign Up</button>
      </fieldset>
    </div>
  )
}
