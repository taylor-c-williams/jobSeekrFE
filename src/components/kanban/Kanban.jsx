import { useJobs } from '../../context/JobsContext'
import Column from './Column'
import styles from './kanban.module.css'

export default function Kanban() {
  const { jobs } = useJobs()

  let wishlistJobs = []
  let appliedJobs = []

  for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i]
    job.wishlist && wishlistJobs.push(job)
    job.applied && appliedJobs.push(job)
  }

  console.log(jobs)

  return (
    <div className={styles.kanbanBoard}>
      <div className={styles.columnTitle}>
        Wishlist
        <Column jobs={wishlistJobs} columnName={'wishlist'} />
      </div>

      <div className={styles.columnTitle}>
        Applied
        <Column jobs={appliedJobs} columnName={'applied'} />
      </div>

      <div className={styles.columnTitle}>
        All Jobs
        <Column jobs={jobs} columnName={'all'} />
      </div>
    </div>
  )
}
