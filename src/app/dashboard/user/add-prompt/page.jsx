import React from 'react'
import UserAddPromptPage from './AddPrompt'
import { getUserSession } from '@/lib/cors/session'

const UserAddPrompt =async () => {
  const user = await getUserSession()
  return (
    <div>
      <UserAddPromptPage user={user}/>
    </div>
  )
}

export default UserAddPrompt