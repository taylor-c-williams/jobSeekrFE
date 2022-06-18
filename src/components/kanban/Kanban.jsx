import { useJobs } from '../../context/JobsContext'
import Column from './Column'
import styles from './kanban.module.css'

export default function Kanban() {
  const { wishlistJobs, setWishlistJobs, appliedJobs, setAppliedJobs } =
    useJobs()

  console.log(wishlistJobs)

  return (
    <div className={styles.kanbanBoard}>
      <div className={styles.columnTitle}>
        Wishlist
        <Column
          jobs={wishlistJobs}
          setJobs={setWishlistJobs}
          columnName={'wishlist'}
        />
      </div>

      <div className={styles.columnTitle}>
        Applied
        <Column
          jobs={appliedJobs}
          setJobs={setAppliedJobs}
          columnName={'applied'}
        />
      </div>
    </div>
  )
}
