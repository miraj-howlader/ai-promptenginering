import React from 'react'
import MyReviews from './ReviewPage'
import { getUserSession } from '@/lib/cors/session'

const Review =async () => {
  const user = await getUserSession()
  return (
    <div>
      <MyReviews user={user}/>
    </div>
  )
}

export default Review