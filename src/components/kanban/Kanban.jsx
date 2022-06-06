import { useJobs } from '../../context/JobsContext'
import Column from './Column'
import styles from './kanban.module.css'

export default function Kanban() {
  const { jobs } = useJobs()

  console.log(jobs)

  return (
    <div className={styles.kanbanBoard}>
      <Column jobs={jobs} columnName={'wishlist'} />
    </div>
  )
}
