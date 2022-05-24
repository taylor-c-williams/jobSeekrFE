import { createContext, useContext, useMemo, useState, useEffect } from 'react'
import { getUser } from '../services/users'

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const currentUser = await getUser()
        if (currentUser.username) {
          setUser({
            ...currentUser,
          })
        } else {
          setUser({})
        }
      } catch (e) {
        console.log(e.message)
      }
    }
    fetchCurrentUser()
  }, [])

  const value = useMemo(() => ({ user, setUser }), [user])
  return <UserContext.Provider value={value}> {children} </UserContext.Provider>
}

const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider!')
  }
  return context
}

export { UserContext, UserProvider, useUser }
