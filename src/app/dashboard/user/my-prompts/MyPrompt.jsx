'use client'

import React, { useEffect, useState } from 'react'

const MyPrompt = ({ data }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (data) {
      setLoading(false)
    }
  }, [data])

  const handleEdit = (item) => {
    console.log("Edit item:", item)
    alert(`Edit: ${item.title}`)
  }

  const handleDelete = async (id) => {
    const confirmDelete = confirm("Are you sure?")

    if (!confirmDelete) return

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/delete/${id}`,
        {
          method: "DELETE",
        }
      )

      await res.json()

      alert("Deleted successfully")
      window.location.reload()

    } catch (error) {
      console.log(error)
    }
  }

  // 🔥 LOADING UI
  if (loading) {
    return (
      <div className="text-center text-2xl py-10 text-gray-500">
        ⏳ Loading your prompts...
      </div>
    )
  }

  return (
    <div className="overflow-x-auto">

      {/* 🔥 EMPTY STATE */}
      {(!data || data.length === 0) ? (
        <div className="text-center text-2xl py-10 text-gray-500">
          🚫 No prompts found for this user go to add promt page
        </div>
      ) : (

        <table className="w-full border border-gray-200 rounded-lg overflow-hidden">

          {/* HEADER */}
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">Title</th>
              <th className="p-3">Category</th>
              <th className="p-3">AI Tool</th>
              <th className="p-3">Difficulty</th>
              <th className="p-3">Visibility</th>
              <th className="p-3">Status</th>
              <th className="p-3">Copy</th>
              <th className="p-3">Created</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {data?.map((item) => (
              <tr key={item._id} className="border-t hover:bg-gray-50">

                <td className="p-3 font-medium">{item.title}</td>
                <td className="p-3">{item.category}</td>
                <td className="p-3">{item.aiTool}</td>
                <td className="p-3">{item.difficulty}</td>
                <td className="p-3">{item.visibility}</td>

                <td className="p-3">
                  <span className={`px-2 py-1 rounded text-white text-sm ${
                    item.status === 'pending'
                      ? 'bg-yellow-500'
                      : 'bg-green-500'
                  }`}>
                    {item.status}
                  </span>
                </td>

                <td className="p-3">{item.copyCount}</td>

                <td className="p-3">
                  {new Date(item.createdAt).toLocaleDateString()}
                </td>

                {/* ACTIONS */}
                <td className="p-3 flex gap-2">

                  <button
                    onClick={() => handleEdit(item)}
                    className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(item._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded text-sm"
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))}
          </tbody>

        </table>
      )}
    </div>
  )
}

export default MyPrompt