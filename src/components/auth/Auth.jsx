import styles from './Auth.module.css'

export default function Auth() {
  return (
    <div className={styles.main}>
      <fieldset>
        <legend>Log In</legend>
        <label>
          Username
          <input spellcheck='false' />
        </label>
        <label>
          Password
          <input spellcheck='false' />
        </label>
        <button>Submit</button>
      </fieldset>
    </div>
  )
}
