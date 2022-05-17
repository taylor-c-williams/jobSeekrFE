import styles from './AuthForm.module.css'
import { UserCircleIcon, FingerPrintIcon } from '@heroicons/react/outline'

export default function Auth({ handleClick }) {
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
          <input label='username' spellcheck='false' />
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
          <input spellcheck='false' type='password' />
        </label>
        <button onClick={handleClick}>Log In</button>
      </fieldset>
    </div>
  )
}
