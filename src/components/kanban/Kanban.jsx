import { useState, useEffect } from 'react'
import { getAllUserJobs, getAllUserWishlistJobs } from '../../services/users'
import KanbanItem from './KanbanItem'
import styles from './kanban.module.css'

export default function Kanban() {
  const [jobs, setJobs] = useState([])
  const [wishlistJobs, setWishlistJobs] = useState([])

  // Fetch all user jobs
  const fetchJobs = async () => {
    const userJobs = await getAllUserJobs()
    setJobs(userJobs)
  }

  // Fetch Wishlist Jobs
  const fetchWishlistJobs = async () => {
    const fetchedWishlistJobs = await getAllUserWishlistJobs()
    setWishlistJobs(fetchedWishlistJobs)
  }

  useEffect(() => {
    fetchJobs()
    fetchWishlistJobs()
  }, [])

  console.log(jobs)

  return (
    <div className={styles.kanbanBoard}>
      {/* Wishlist Column */}
      <div className={styles.wishlistColumn}>
        <h2>Wishlist</h2>
        {wishlistJobs.map((job) => {
          return <KanbanItem job={job} key={job.id} />
        })}
      </div>

      {/* Applied Column */}
      <div className={styles.wishlistColumn}>
        <h2>Applied</h2>
        {jobs.map((job) => {
          return <KanbanItem job={job} key={job.id} />
        })}
      </div>

      {/* Phone Screen Column */}
      <div className={styles.wishlistColumn}>
        <h2>Phone Screen</h2>
        {jobs.map((job) => {
          return <KanbanItem job={job} key={job.id} />
        })}
      </div>
    </div>
  )
}
