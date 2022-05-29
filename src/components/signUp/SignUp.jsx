import { UserCircleIcon, FingerPrintIcon } from '@heroicons/react/outline'
import styles from '../logIn/AuthForm.module.css'

export default function SignUpForm({
  handleSubmit,
  handleInputData,
  inputData,
}) {
  return (
    <div className={styles.main}>
      <fieldset>
        <legend>Sign Up</legend>
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
        <button onClick={handleSubmit}>Sign Up</button>
      </fieldset>
    </div>
  )
}
