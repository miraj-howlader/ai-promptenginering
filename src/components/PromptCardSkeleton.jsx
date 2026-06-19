import React from 'react'

const PromptCardSkeleton = () => {
  return (
    <div className="border rounded-xl overflow-hidden animate-pulse bg-white">

      {/* Image skeleton */}
      <div className="h-40 bg-gray-200" />

      {/* Content */}
      <div className="p-4 space-y-3">

        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-3 bg-gray-200 rounded w-full" />
        <div className="h-3 bg-gray-200 rounded w-5/6" />

        <div className="flex justify-between pt-2">
          <div className="h-5 w-16 bg-gray-200 rounded" />
          <div className="h-5 w-16 bg-gray-200 rounded" />
        </div>

        <div className="flex gap-2 pt-2">
          <div className="h-5 w-12 bg-gray-200 rounded" />
          <div className="h-5 w-12 bg-gray-200 rounded" />
          <div className="h-5 w-12 bg-gray-200 rounded" />
        </div>

      </div>
    </div>
  )
}

export default PromptCardSkeleton