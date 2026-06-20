import PromptCard from '@/components/PromptCard'
import PromptFilters from '@/components/PromptFilters'
import { getAllPrompts } from '@/lib/api'
import { getUserSession } from '@/lib/cors/session'

export default async function AllPrompts({
  searchParams,
}) {
  const params = await searchParams
  const session = await getUserSession()

  const prompts = await getAllPrompts({
    search: params.search,
    category: params.category,
    aiTool: params.aiTool,
    difficulty: params.difficulty,
    sort: params.sort,
  })

  return (
    <div className="mt-24 container mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        All Prompts
      </h1>

      {/* FILTER UI */}
      <PromptFilters />

      {/* CARDS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {prompts.map((prompt) => (
          <PromptCard
            key={prompt._id}
            prompt={prompt}
            session={session}
          />
        ))}
      </div>
    </div>
  )
}