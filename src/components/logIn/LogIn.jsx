import styles from './AuthForm.module.css'
import { UserCircleIcon, FingerPrintIcon } from '@heroicons/react/outline'

export default function LogIn({
  handleSubmit,
  handleInputData,
  inputData,
  loginError,
}) {
  return (
    <div className={styles.main}>
      <fieldset>
        <legend>Log In</legend>
        <label>
          <section className={styles.labelTitle}>
            <UserCircleIcon
              height={15}
              width={15}
              className={styles.labelIcon}
            />
            Username
          </section>
          <input
            onChange={handleInputData}
            value={inputData.username}
            name='username'
            label='username'
            spellCheck='false'
          />
        </label>
        <label>
          <section className={styles.labelTitle}>
            <FingerPrintIcon
              height={15}
              width={15}
              className={styles.labelIcon}
            />
            Password
          </section>
          <input
            onChange={handleInputData}
            value={inputData.password}
            name='password'
            label='password'
            spellCheck='false'
            type='password'
          />
        </label>
        <label>{loginError}</label>
        <button onClick={handleSubmit}>Log In</button>
      </fieldset>
    </div>
  )
}
