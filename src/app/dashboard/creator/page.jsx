import CreatorPrompts from '@/components/creators/CreatorPrompts'
import CreatorStats from '@/components/creators/CreatorStats '
import QuickActions from '@/components/creators/QuickActions '
import React from 'react'

const CreatorDashboardPage = () => {
  return (
     <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold">
            Creator Dashboard 🚀
          </h1>
          <p className="text-gray-500">
            Manage your prompts, analytics & performance
          </p>
        </div>

        {/* Top Stats */}
        <CreatorStats />

        {/* Quick Actions */}
        <div className="mt-6">
          <QuickActions />
        </div>

        {/* Prompts List */}
        <div className="mt-8">
          <CreatorPrompts />
        </div>

      </div>
    </div>
  )
}

export default CreatorDashboardPage