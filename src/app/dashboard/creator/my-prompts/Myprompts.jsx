'use client'

import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export default function MyPrompts({ user }) {
  const [prompts, setPrompts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user?.email) return

    const loadData = async () => {
      setLoading(true)

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/my-prompts?email=${user.email}`
      )

      const data = await res.json()

      setPrompts(data)
      setLoading(false)
    }

    loadData()
  }, [user?.email])

  const handleDelete = async (id) => {
    const ok = toast.success("Delete this prompt?")
    if (!ok) return

    await fetch(`/api/prompts/${id}`, {
      method: "DELETE"
    })

    setPrompts(prompts.filter(p => p._id !== id))
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-60">
        <p className="text-gray-500">Loading...</p>
      </div>
    )
  }

  if (!prompts.length) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold text-gray-700">
          No Prompts Found
        </h2>
        <p className="text-gray-500 mt-2">
          Create your first prompt and it will appear here.
        </p>
      </div>
    )
  }

  return (
    <div className="p-6">
      
      {/* HEADER */}
      <h1 className="text-3xl font-bold mb-6">
        My Prompts
      </h1>

      {/* TABLE CARD */}
      <div className="overflow-x-auto rounded-xl shadow-lg border bg-white">
        <table className="w-full text-sm">
          
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Tool</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {prompts.map((p) => (
              <tr key={p._id} className="border-t hover:bg-gray-50">
                
                <td className="p-3 font-medium">
                  {p.title}
                </td>

                <td className="p-3">
                  {p.category}
                </td>

                <td className="p-3">
                  {p.aiTool}
                </td>

                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      p.status === "approved"
                        ? "bg-green-100 text-green-700"
                        : p.status === "pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {p.status}
                  </span>
                </td>

                <td className="p-3">
                  <button
                    onClick={() => handleDelete(p._id)}
                    className="px-3 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  )
}