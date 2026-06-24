import React from 'react'
import MyPrompts from './Myprompts'
import { getUserSession } from '@/lib/cors/session'

const Page = async () => {
    const user = await getUserSession()
  return (
    <div>
        <MyPrompts user={user}/>
    </div>
  )
}

export default Page