import { getAllPrompts } from '@/lib/api'
import React from 'react'
import PromptCard from './PromptCard'
import { getUserSession } from '@/lib/cors/session'

const FeaturedPrompt = async () => {
  let data = []
  const session = await getUserSession()
 
  try {
    data = await getAllPrompts()
  } catch (error) {
    console.error('Failed to fetch prompts:', error)
  }

  const promptData = data?.slice(0, 6) || []

  if (!promptData.length) {
    return (
      <div className="flex items-center justify-center py-10 text-gray-500">
        No featured prompts available.
      </div>
    )
  }

  return (
    <section className="w-full py-10">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Featured Prompts</h2>
          <p className="text-gray-500 text-sm">
            Handpicked AI prompts for creativity & productivity
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {promptData.map((prompt) => (
            <PromptCard prompt={prompt} key={prompt._id} session={session}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedPrompt