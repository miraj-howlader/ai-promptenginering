const mockPrompts = [
  {
    id: 1,
    title: "AI Marketing Prompt",
    category: "Marketing",
    copies: 120,
  },
  {
    id: 2,
    title: "React Component Generator",
    category: "Programming",
    copies: 98,
  },
]

export default function MyPrompts() {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">
        My Prompts
      </h2>

      <div className="space-y-3">
        {mockPrompts.map((p) => (
          <div
            key={p.id}
            className="flex justify-between items-center border p-3 rounded-lg"
          >
            <div>
              <h3 className="font-semibold">
                {p.title}
              </h3>
              <p className="text-sm text-gray-500">
                {p.category}
              </p>
            </div>

            <span className="text-sm font-bold">
              🔁 {p.copies}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}