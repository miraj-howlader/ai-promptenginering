import React from 'react'
import Profile from './Profile'
import { getUserSession } from '@/lib/cors/session'

const UserProfile =async () => {
  const user = await getUserSession()
  return (
    <div>
      <Profile user={user}/>
    </div>
  )
}

export default UserProfile