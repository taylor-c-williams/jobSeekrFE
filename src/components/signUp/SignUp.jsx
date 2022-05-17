import { UserCircleIcon, FingerPrintIcon } from '@heroicons/react/outline'
import styles from '../logIn/AuthForm.module.css'

export default function SignUpForm({ handleClick }) {
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
          <input label='username' spellCheck='false' />
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
          <input spellCheck='false' type='password' />
        </label>
        <button onClick={handleClick}>Sign Up</button>
      </fieldset>
    </div>
  )
}
