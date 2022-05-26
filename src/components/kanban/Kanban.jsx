import { useState, useEffect } from 'react'
import { jobsData } from '../../data/jobs'

export default function Kanban() {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    setJobs(jobsData)
  }, [jobs])

  return (
    <div>
      {jobs.map((job) => {
        return (
          <ul key={job.id}>
            <li>{job.id}</li>
            <li>{job.fav}</li>
            <li>{job.zipcode}</li>
          </ul>
        )
      })}
    </div>
  )
}
