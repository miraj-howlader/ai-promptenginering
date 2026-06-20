'use client'

import {
  useRouter,
  useSearchParams,
} from 'next/navigation'

export default function PromptFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const updateQuery = (key, value) => {
    const params = new URLSearchParams(searchParams)

    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }

    router.push(`/prompts?${params.toString()}`)
  }

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      {/* SEARCH */}
      <input
        placeholder="Search prompts..."
        className="border p-2 rounded"
        onChange={(e) =>
          updateQuery('search', e.target.value)
        }
      />

      {/* CATEGORY */}
      <select
        onChange={(e) =>
          updateQuery('category', e.target.value)
        }
      >
        <option value="">Category</option>
        <option value="Programming">
          Programming
        </option>
        <option value="Marketing">
          Marketing
        </option>
      </select>

      {/* AI TOOL */}
      <select
        onChange={(e) =>
          updateQuery('aiTool', e.target.value)
        }
      >
        <option value="">AI Tool</option>
        <option value="ChatGPT">
          ChatGPT
        </option>
        <option value="Claude">Claude</option>
      </select>

      {/* DIFFICULTY */}
      <select
        onChange={(e) =>
          updateQuery(
            'difficulty',
            e.target.value
          )
        }
      >
        <option value="">Difficulty</option>
        <option value="Beginner">
          Beginner
        </option>
        <option value="Intermediate">
          Intermediate
        </option>
        <option value="Advanced">
          Advanced
        </option>
      </select>

      {/* SORT */}
      <select
        onChange={(e) =>
          updateQuery('sort', e.target.value)
        }
      >
        <option value="">Sort</option>
        <option value="latest">Latest</option>
        <option value="copied">
          Most Copied
        </option>
        <option value="popular">
          Most Popular
        </option>
      </select>
    </div>
  )
}