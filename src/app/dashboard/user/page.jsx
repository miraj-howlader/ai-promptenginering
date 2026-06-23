
import MyPrompts from '@/components/MyPrompts'
import ProfileCard from '@/components/ProfileCard'
import StatsCard from '@/components/StatsCard'
import { getUserSession } from '@/lib/cors/session'
import React from 'react'

const UserDashboardPage =async ({stats}) => {
    const user =await getUserSession()
    
  return (
     <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <h1 className="text-3xl font-bold mb-6">
          User Dashboard
        </h1>

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-6">
          <ProfileCard user={user}/>
          <StatsCard stats={stats}/>
        </div>

        {/* My Prompts */}
        <div className="mt-8">
          <MyPrompts />
        </div>

      </div>
    </div>
  )
}

export default UserDashboardPage