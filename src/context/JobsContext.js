import { createContext, useContext, useMemo, useState, useEffect } from 'react'
import { getAllUserJobs } from '../services/users'

const JobsContext = createContext()

const JobsProvider = ({ children }) => {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const currentJobs = await getAllUserJobs()
        setJobs(currentJobs)
      } catch (e) {
        console.log(e.message)
      }
    }
    fetchJobs()
  }, [])

  const value = useMemo(() => ({ jobs, setJobs }), [jobs])
  return <JobsContext.Provider value={value}> {children} </JobsContext.Provider>
}

const useJobs = () => {
  const context = useContext(JobsContext)
  if (context === undefined) {
    throw new Error('useJobs must be used within a JobsProvider!')
  }
  return context
}

export { JobsContext, JobsProvider, useJobs }
