import React from 'react'
import CreatorAddPromptPage from './CreatorAddPrompt'
import { getUserSession } from '@/lib/cors/session'

const Page =async () => {
    const user = await getUserSession()
  return (
    <div>
        <CreatorAddPromptPage user={user}/>
    </div>
  )
}

export default Page