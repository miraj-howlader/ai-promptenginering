const prompts = [
  {
    id: 1,
    title: "AI Blog Writer Prompt",
    status: "approved",
    copies: 320,
    rating: 4.9,
  },
  {
    id: 2,
    title: "YouTube Script Generator",
    status: "pending",
    copies: 120,
    rating: 4.6,
  },
  {
    id: 3,
    title: "SEO Article Prompt",
    status: "approved",
    copies: 540,
    rating: 4.8,
  },
]

export default function CreatorPrompts() {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">
        My Prompts
      </h2>

      <div className="space-y-3">
        {prompts.map((p) => (
          <div
            key={p.id}
            className="flex justify-between items-center border p-4 rounded-lg"
          >
            <div>
              <h3 className="font-semibold">
                {p.title}
              </h3>

              <p className="text-sm text-gray-500">
                Copies: {p.copies} | Rating: {p.rating}
              </p>
            </div>

            <span
              className={`text-sm px-3 py-1 rounded-full ${
                p.status === 'approved'
                  ? 'bg-green-100 text-green-600'
                  : 'bg-yellow-100 text-yellow-600'
              }`}
            >
              {p.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}