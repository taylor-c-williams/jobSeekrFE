import { createContext, useContext, useMemo, useState, useEffect } from 'react'
import {
  getAllUserAppliedJobs,
  getAllUserJobs,
  getAllUserWishlistJobs,
} from '../services/users'

// Performance TODO: get all jobs and sort into state client side rather than making multiple requests for each column/job type

const JobsContext = createContext()

const JobsProvider = ({ children }) => {
  const [jobs, setJobs] = useState([])
  const [wishlistJobs, setWishlistJobs] = useState([])
  const [appliedJobs, setAppliedJobs] = useState([])
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const allJobs = await getAllUserJobs()
        const userWishlistJobs = await getAllUserWishlistJobs()
        const userAppliedJobs = await getAllUserAppliedJobs()
        setJobs(allJobs)
        setWishlistJobs(userWishlistJobs)
        setAppliedJobs(userAppliedJobs)
      } catch (e) {
        console.log(e.message)
      }
    }
    fetchJobs()
  }, [])

  const value = useMemo(
    () => ({
      jobs,
      setJobs,
      wishlistJobs,
      setWishlistJobs,
      appliedJobs,
      setAppliedJobs,
    }),
    [jobs]
  )
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
