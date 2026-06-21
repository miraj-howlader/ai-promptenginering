import React from 'react'

const PromptDetailPage = async ({ params }) => {
  const { id } =await params

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/prompt/${id}`,
    { cache: 'no-store' }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch prompt')
  }

  const prompt = await res.json()

  return (
    <div className="max-w-6xl mx-auto mt-24 px-4">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT SIDE - IMAGE */}
        <div className="w-full">
          <div className="h-[350px] md:h-[500px] rounded-xl overflow-hidden border shadow-sm">
            <img
              src={prompt.thumbnail}
              alt={prompt.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT SIDE - CONTENT */}
        <div>

          {/* Title */}
          <h1 className="text-4xl font-bold">
            {prompt.title}
          </h1>

          {/* Description */}
          <p className="mt-4 text-gray-600">
            {prompt.description}
          </p>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {prompt.tags?.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Meta Info */}
          <div className="mt-6 space-y-2 text-sm">
            <p><strong>Category:</strong> {prompt.category}</p>
            <p><strong>AI Tool:</strong> {prompt.aiTool}</p>
            <p><strong>Difficulty:</strong> {prompt.difficulty}</p>
            <p><strong>Copy Count:</strong> {prompt.copyCount}</p>
          </div>

          {/* Buttons Placeholder */}
          <div className="mt-6 flex gap-3">
            <button className="px-4 py-2 bg-black text-white rounded-lg">
              Copy Prompt
            </button>

            <button className="px-4 py-2 border rounded-lg">
              Bookmark
            </button>
          </div>

        </div>

      </div>

      {/* CONTENT SECTION FULL WIDTH */}
      <div className="mt-12">

        <h2 className="text-2xl font-semibold mb-3">
          Prompt Content
        </h2>

        <div className="p-5 rounded-lg border bg-gray-50 whitespace-pre-wrap">
          {prompt.content}
        </div>

      </div>

    </div>
  )
}

export default PromptDetailPage