import { useState, useEffect } from 'react'
import { getAllUserJobs } from '../../services/users'
import KanbanItem from './KanbanItem'
import styles from './kanban.module.css'

export default function Kanban() {
  const [jobs, setJobs] = useState([])

  const fetchJobs = async () => {
    const userJobs = await getAllUserJobs()
    setJobs(userJobs)
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  console.log(jobs)

  return (
    <div className={styles.kanbanBoard}>
      <div className={styles.wishlistColumn}>
        <h2>Wishlist</h2>
        {jobs.map((job) => {
          return <KanbanItem job={job} key={job.id} />
        })}
      </div>

      <div className={styles.wishlistColumn}>
        <h2>Applied</h2>
        {jobs.map((job) => {
          return <KanbanItem job={job} key={job.id} />
        })}
      </div>

      <div className={styles.wishlistColumn}>
        <h2>Phone Screen</h2>
        {jobs.map((job) => {
          return <KanbanItem job={job} key={job.id} />
        })}
      </div>
    </div>
  )
}
